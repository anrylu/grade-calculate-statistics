import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { StatisticsService } from '../statistics/statistics.service';

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css'],
})
export class PlotComponent implements OnInit {
  statistics: object
  chart: Chart

  constructor(statisticsService: StatisticsService) {
    statisticsService.getStatistics().subscribe(statistics => this.statistics = statistics)
  }

  ngOnInit() {
    this.draw();
  }

  draw() {
    let grades = Object.keys(this.statistics).map(Number).sort(function(a, b){return a - b});
    let occurence = [];
    for( var key in grades ) {
      occurence.push(this.statistics[grades[key]].count);
    }
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: grades,
        datasets: [
          {
            label: 'Grade Distribution',
            data: occurence
          }
        ]
      },
    });
  }
}
