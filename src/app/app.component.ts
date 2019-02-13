import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
import { StatisticsService } from './statistics/statistics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  title = 'Grade Calculate Statistics';
  statisticsService: StatisticsService
  constructor(statisticsService: StatisticsService) {
    this.statisticsService = statisticsService;
  }
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  getQueryParameters() {
    return {
      totalQuestionNumber: this.statisticsService.totalQuestionNumber,
      noAnswerGrade: this.statisticsService.noAnswerGrade,
      correctGrade: this.statisticsService.correctGrade,
      wrongGrade: this.statisticsService.wrongGrade
    };
  }
}
