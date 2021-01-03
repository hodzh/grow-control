import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SmoothieChart, TimeSeries} from 'smoothie';

@Component({
  selector: 'app-time-chart',
  templateUrl: './time-chart.component.html',
  styleUrls: ['./time-chart.component.scss'],
})
export class TimeChartComponent implements OnInit, AfterViewInit {
  @ViewChild('chart', {static: true}) chartCanvas: ElementRef;
  private chart: SmoothieChart;
  private series: TimeSeries;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.chart = new SmoothieChart({
      millisPerPixel: 5000,
      responsive: true,
      grid: {
        verticalSections: 3,
        millisPerLine: 60000,
        sharpLines: true,
      },
    });
    this.series = new TimeSeries();
    this.chart.addTimeSeries(this.series, {
      strokeStyle: 'rgba(0, 255, 0, 1)',
      fillStyle: 'rgba(0, 255, 0, 0.2)',
      lineWidth: 1,
    });
    this.chart.streamTo(this.chartCanvas.nativeElement, 5000);
  }

  add(value) {
    this.series.append(new Date().getTime(), value);
  }
}
