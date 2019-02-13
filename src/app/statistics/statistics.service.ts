import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  totalQuestionNumber: number
  noAnswerGrade: number
  correctGrade: number
  wrongGrade: number
  resultMap: object
  calculate() {
    // reset
    this.resultMap = {};
  
    var i = 0, j = 0, k = 0, grade = 0;
    // loop no answer
    for( i=0; i<=this.totalQuestionNumber; i++ ) {
      // loop correct
      for( j=0; j<=(this.totalQuestionNumber - i); j++) {
        k = this.totalQuestionNumber-i-j;
        grade = i*this.noAnswerGrade +
          j*this.correctGrade +
          k*this.wrongGrade;
        if( this.resultMap[grade] === undefined ) {
          this.resultMap[grade] = {
            count: 1,
            noAnswer: [i],
            correct: [j],
            wrong: [k]
          };
        } else {
          this.resultMap[grade].count += 1;
          this.resultMap[grade].noAnswer.push(i);
          this.resultMap[grade].correct.push(j);
          this.resultMap[grade].wrong.push(k);
        }
      }
    }
  }
  constructor(private route: ActivatedRoute) {
    this.resultMap = {};
    this.route.queryParams.subscribe(params => {
      this.noAnswerGrade = params['noAnswerGrade'];
      if( this.noAnswerGrade == undefined ) this.noAnswerGrade = 0;
      this.correctGrade = params['correctGrade'];
      if( this.correctGrade  == undefined ) this.correctGrade = 5;
      this.wrongGrade = params['wrongGrade'];
      if( this.wrongGrade == undefined ) this.wrongGrade = -3;
      this.totalQuestionNumber = params['totalQuestionNumber'];
      if( this.totalQuestionNumber == undefined ) this.totalQuestionNumber = 20;
      this.calculate();
    });
  }
  getStatistics() {
    return this.resultMap;
  }
}
