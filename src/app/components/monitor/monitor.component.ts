import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ActionMonitorInit, selectorMonitorFlow, selectorMonitorTemp} from '../../store/monitor/monitor.reducer';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonitorComponent implements OnInit {
  flowOptions$: Observable<any>;
  tempOptions$: Observable<any>;

  constructor(
    private readonly store: Store<any>,
  ) {
    this.tempOptions$ = this.store.pipe(select(selectorMonitorTemp))
      .pipe(map(temp => this.getTempOptions(temp)));
    this.flowOptions$ = this.store.pipe(select(selectorMonitorFlow))
      .pipe(map(flow => this.getFlowOptions(flow)));
  }

  ngOnInit() {
    this.store.dispatch(new ActionMonitorInit());
  }

  private getTempOptions(temp) {
    return {
      color: ['#1edb13'],
      title: {
        show: true,
        text: 'Temperature ℃',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      dataZoom: {
        show: true,
        realtime: true,
        zoomLock: true,
        start: 80,
        end: 100,
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: temp.xData,
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: 'Counters',
          type: 'line',
          barWidth: '60%',
          data: temp.yData,
        },
      ],
    };
  }

  private getFlowOptions(flow) {
    return {
      color: ['#3398DB'],
      title: {
        show: true,
        text: 'Flow mL/min',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      dataZoom: {
        show: true,
        realtime: true,
        zoomLock: true,
        start: 80,
        end: 100,
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: flow.xData,
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: 'mL/min',
          type: 'line',
          barWidth: '60%',
          data: flow.yData,
        },
      ],
    };
  }
}
