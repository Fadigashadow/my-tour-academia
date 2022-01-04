import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SharedModule } from '../shared/shared.module';
import { HeroesRoutingModule } from './heroes-routing.module';

@NgModule({
  declarations: [
    HeroListComponent,
    HeroesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
