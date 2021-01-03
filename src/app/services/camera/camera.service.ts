import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CameraService {
  stream: any;
  video: any;
  constraints = {
    qvga: { width: { exact: 320 }, height: { exact: 240 } },
    vga: { width: { exact: 640 }, height: { exact: 480 } },
  };
  private onInactive: () => any;

  constructor() {
    this.onInactive = () => {
      console.error('media loss');
    };
  }

  async start(resolution: 'qvga' | 'vga', videoId) {
    const videoConstraint = this.constraints[resolution];
    let video = document.getElementById(videoId) as HTMLVideoElement;
    if (!video) {
      video = document.createElement('video');
      video.width = videoConstraint.width.exact;
      video.height = videoConstraint.height.exact;
    }
    this.video = video;
    try {
      const stream = await navigator.mediaDevices
        .getUserMedia({ video: videoConstraint, audio: false });
      video.srcObject = stream;
      video.play();
      this.video = video;
      this.stream = stream;
      // this.stream.addEventListener(this.onInactive, false);
      await new Promise(resolve => {
        const onVideoCanPlay = () => {
          video.removeEventListener('canplay', onVideoCanPlay);
          resolve();
        };
        video.addEventListener('canplay', onVideoCanPlay, false);
      });
      console.log('camera ready');
    } catch (err) {
      console.error('Camera Error: ' + err.name + ' ' + err.message);
    }
  }

  stop() {
    // this.stream.removeEventListener(this.onInactive);
    if (this.video) {
      this.video.pause();
      this.video.srcObject = null;
    }
    if (this.stream) {
      this.stream.getVideoTracks()[0].stop();
    }
  }
}
