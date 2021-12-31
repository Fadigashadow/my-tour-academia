import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroAddComponent } from './hero-add/hero-add.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent,
  },
  {
    path: 'addHero',
    component: HeroAddComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
