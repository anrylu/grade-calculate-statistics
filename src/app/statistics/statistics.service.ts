import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  noAnswerGrade: number
  correctGrade: number
  wrongGrade: number
  totalQuestionNumber: number
  resultMap: object
  calculate() {
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
  constructor() {
    this.noAnswerGrade = 0;
    this.correctGrade = 5;
    this.wrongGrade = -3;
    this.totalQuestionNumber = 20;
    this.resultMap = {};
  }
  getStatistics() { 
    this.calculate();
    return this.resultMap;
  }
}
