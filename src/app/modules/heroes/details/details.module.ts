import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DetailsRoutingModule } from './details-routing.module';


@NgModule({
  declarations: [
    HeroDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DetailsRoutingModule
  ]
})
export class HeroDetailModule { }
