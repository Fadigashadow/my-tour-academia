import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroAddComponent } from './hero-add/hero-add.component';

const routes: Routes = [

  {
    path: '',
    component: HeroAddComponent
  },
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

export class HeroAddRoutingModule { }
