import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CameraService } from '../camera/camera.service';
import { OpenCVService } from '../open-cv/open-cv.service';
import { filter, first } from 'rxjs/operators';
import { AccessControlConfig } from '../../model/access-control-config';

declare var cv: any;

export interface AccessControlStrategy {
  // initialize
  start();

  // dispose
  stop();

  // detect motion
  process(prevFrame, currentFrame): boolean;

  // prepare current frame
  preprocess(src, dst);
}

export class AccessControlStrategyThreshold implements AccessControlStrategy {
  frame$: Observable<any>;
  private frameSubject = new Subject<any>();
  private frameDelta;
  private M;
  private ksize;
  private anchor;
  private contours;
  private hierarchy;

  constructor() {
    this.frame$ = this.frameSubject.asObservable();
  }

  start() {
    this.frameDelta = new cv.Mat();
    this.M = cv.Mat.ones(5, 5, cv.CV_8U);
    this.ksize = new cv.Size(3, 3);
    this.anchor = new cv.Point(-1, -1);
    this.contours = new cv.MatVector();
    this.hierarchy = new cv.Mat();
  }

  process(prevFrame, currentFrame): boolean {
    // compute difference between first frame and current frame
    cv.absdiff(prevFrame, currentFrame, this.frameDelta);
    cv.threshold(this.frameDelta, this.frameDelta, 25, 255, cv.THRESH_BINARY);
    cv.erode(this.frameDelta, this.frameDelta, this.M, this.anchor, 1,
      cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue(),
    );
    cv.dilate(this.frameDelta, this.frameDelta, this.M, this.anchor, 1,
      cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue(),
    );
    cv.findContours(this.frameDelta, this.contours, this.hierarchy,
      cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE,
    );
    for (let i = 0; i < this.contours.size(); i++) {
      if (cv.contourArea(this.contours.get(i), false) < 500) {
        continue;
      }
      return true;
    }
    this.frameSubject.next(this.frameDelta);
    return false;
  }

  preprocess(src, dst) {
    cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY, 0);
    cv.GaussianBlur(dst, dst, this.ksize, 0, 0, cv.BORDER_DEFAULT);
  }

  stop() {
    this.frameDelta.delete();
    this.M.delete();
    // todo how to delete this?
    // this.ksize.delete();
    this.contours.delete();
    this.hierarchy.delete();
  }
}

@Injectable({
  providedIn: 'root',
})
export class AccessControlService {
  video;
  capture;
  source;
  prevFrame;
  currentFrame;
  strategy = new AccessControlStrategyThreshold();
  frame$: Observable<any>;
  state$: Observable<any>;
  private started = false;
  private frameSubject = new Subject<any>();
  private stateSubject = new BehaviorSubject<'idle' | 'start' | 'stop' | 'process'>('idle');
  private config: AccessControlConfig;

  constructor(
    private readonly camera: CameraService,
    private readonly openCv: OpenCVService,
  ) {
    this.frame$ = this.frameSubject.asObservable();
    this.state$ = this.stateSubject.asObservable();
  }

  async start(config: AccessControlConfig) {
    if (this.started) {
      return;
    }
    this.started = true;
    this.stateSubject.next('start');
    this.config = config;
    const resolution = 'vga';
    const size = this.camera.constraints[resolution];
    await this.camera.start(resolution, 'videoInput');
    if (!this.openCv.cvState.value.ready) {
      await this.openCv.cvState.pipe(filter(state => state.ready), first()).toPromise();
    }
    this.video = this.camera.video;
    this.capture = new cv.VideoCapture(this.video);
    this.source = new cv.Mat(size.height.exact, size.width.exact, cv.CV_8UC4);
    this.prevFrame = new cv.Mat();
    this.currentFrame = new cv.Mat();
    this.strategy.start();
    this.getFrame(this.currentFrame);
    this.stateSubject.next('idle');
  }

  async stop() {
    if (!this.started) {
      return;
    }
    this.started = false;
    this.stateSubject.next('stop');
    // clean and stop.
    this.source.delete();
    this.prevFrame.delete();
    this.currentFrame.delete();
    this.strategy.stop();
    this.camera.stop();
    this.stateSubject.next('idle');
  }

  async process(): Promise<boolean> {
    this.stateSubject.next('process');
    try {
      if (!this.camera.stream) {
        // todo what is the case?
        return false;
      }
      [this.prevFrame, this.currentFrame] = [this.currentFrame, this.prevFrame];
      // start processing.
      this.getFrame(this.currentFrame);
      if (this.strategy.process(this.prevFrame, this.currentFrame)) {
        return true;
      }
    } catch (err) {
      console.error(err);
    } finally {
      this.stateSubject.next('idle');
    }
    return false;
  }

  getImage() {
    const canvas = document.createElement('canvas');
    canvas.width = 640;
    canvas.height = 480;
    cv.imshow(canvas, this.source);
    // const mime = 'image/png';
    const mime = 'image/jpeg';
    const image = canvas.toDataURL(mime);
    return image;
  }

  private getFrame(dst) {
    this.capture.read(this.source);
    this.strategy.preprocess(this.source, dst);
    this.frameSubject.next(this.source);
  }
}
