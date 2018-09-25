import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Year2015Component } from './year2015/year2015.component';
import { Year2011Component } from './year2011/year2011.component';
import { YearComponent } from './year/year.component';
import { MapboxComponent } from './mapbox/mapbox.component';

const routes: Routes = [

  { path: 'year2015', component: Year2015Component },
  { path: 'mapbox', component: MapboxComponent },
  { path: 'year', component: YearComponent },
  { path: '',   redirectTo: '/year', pathMatch: 'full' },
  { path: 'year2011',   component: Year2011Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [Year2015Component,
                                  Year2011Component,
                                  YearComponent,
                                MapboxComponent]
