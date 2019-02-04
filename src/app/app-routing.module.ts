import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent }    from './page-not-found/page-not-found.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PlotComponent } from './plot/plot.component';


const appRoutes: Routes = [
  {
    path: 'statistics',
    component: StatisticsComponent
  },
  {
    path: 'plot',
    component: PlotComponent
  },
  // default to statistics
  { path: '',   redirectTo: '/statistics', pathMatch: 'full' },
  // others to page not found
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/