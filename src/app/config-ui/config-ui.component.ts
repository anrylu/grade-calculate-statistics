import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../statistics/statistics.service';

@Component({
  selector: 'app-config-ui',
  styleUrls: ['./config-ui.component.css'],
  template: `
  <table width="100%">
    <tr>
      <td><label>Total Question Number: <input type="number" min="1" max="100" [(ngModel)]="statisticsService.totalQuestionNumber" #ctrl="ngModel" required></label></td>
      <td><label>No Answer Grade: <input type="number" min="-100" max="0" [(ngModel)]="statisticsService.noAnswerGrade" #ctrl="ngModel" required></label></td>
      <td><label>Correct Grade: <input type="number" min="1" max="100" [(ngModel)]="statisticsService.correctGrade" #ctrl="ngModel" required></label></td>
      <td><label>Wrong Grade: <input type="number" min="-100" max="0" [(ngModel)]="statisticsService.wrongGrade" #ctrl="ngModel" required></label></td>
      <td><button (click)="apply()">Apply</button></td>
    </tr>
  </table>
`
})
export class ConfigUiComponent implements OnInit {
  statisticsService: StatisticsService
  constructor(statisticsService: StatisticsService) {
    this.statisticsService = statisticsService;
  }

  ngOnInit() {
  }

  apply() {
    console.log(this.statisticsService.totalQuestionNumber);
    this.statisticsService.calculate();
  }
}

