import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';


const routes: Routes = [

  {
    path: '',
    component: HeroesComponent
  },
  {
    path: 'addHero',
    loadChildren: () => import('./hero-add/hero-add.module').then(m => m.HeroAddModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./details/details.module').then(m => m.HeroDetailModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class HeroesRoutingModule { }
