import { Component, OnInit } from '@angular/core';
import { StatisticsService } from './statistics.service';

@Component({
  selector: 'app-statistics',
  styleUrls: ['./statistics.component.css'],
  template: `
  <p>
  No. of Different Grades: {{ getGradeNo() }}
  </p>
  <table class="blueTable">
    <thead>
      <tr>
        <th>Grade</th>
        <th>Occurence</th>
        <th>No Answer</th>
        <th>Correct</th>
        <th>Wrong</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let key of getGrades()">
        <td>{{ key }}</td>
        <td>{{ statistics[key].count }}</td>
        <td>{{ statistics[key].noAnswer }}</td>
        <td>{{ statistics[key].correct }}</td>
        <td>{{ statistics[key].wrong }}</td>
      </tr>
    </tbody>
  </table>
`
})
export class StatisticsComponent implements OnInit {
  statistics: object
  constructor(statisticsService: StatisticsService) { 
    this.statistics = statisticsService.getStatistics();
  }
  getGradeNo() {
    return Object.keys(this.statistics).length;
  }
  getGrades() {
    return Object.keys(this.statistics).map(Number).sort(
      function(a, b){return a - b});
  }
  getGradeStatistics() {
    return this.statistics;
  }

  ngOnInit() {
  }

}
