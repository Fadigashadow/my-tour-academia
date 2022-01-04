import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component'
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { TopHeroesComponent } from './top-heroes/top-heroes.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    HeroSearchComponent,
    TopHeroesComponent,
  ],

  imports: [
    SharedModule,
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
