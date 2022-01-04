import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages/messages.component';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { ParseColorPipe } from 'src/app/modules/shared/pipes/parse_color/parse-color.pipe';
import { JrSwitchCasesDirective } from 'src/app/modules/shared/directives/jr-switch-cases.directive';
import { DivideNamePipe } from 'src/app/modules/shared/pipes/divide-name/divide-name.pipe';
import { ParseGenderPipe } from './pipes/parse-gender/parse-gender.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MessagesComponent,
    HeroCardComponent,
    ParseGenderPipe,
    ParseColorPipe,
    JrSwitchCasesDirective,
    DivideNamePipe,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MessagesComponent,
    HeroCardComponent,
    ParseGenderPipe,
    ParseColorPipe,
    JrSwitchCasesDirective,
    DivideNamePipe,
    FormsModule,
  ]
})
export class SharedModule { }
