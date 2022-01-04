import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroAddComponent } from './hero-add/hero-add.component';
import { SharedModule } from '../../shared/shared.module';
import { HeroAddRoutingModule } from './hero-add-routing.module';


@NgModule({
  declarations: [
    HeroAddComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HeroAddRoutingModule
  ]
})
export class HeroAddModule { }
