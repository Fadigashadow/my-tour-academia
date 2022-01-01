import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { ParseGenderPipe } from './pipes/parse-gender.pipe';
import { ParseColorPipe } from './pipes/parse_color/parse-color.pipe';
import { HeroListComponent } from './hero-list/hero-list.component';
import { JrSwitchCasesDirective } from './directives/jr-switch-cases.directive';
import { HeroAddComponent } from './hero-add/hero-add.component';
import { DivideNamePipe } from './pipes/divide-name/divide-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroCardComponent,
    ParseGenderPipe,
    ParseColorPipe,
    HeroListComponent,
    JrSwitchCasesDirective,
    HeroAddComponent,
    DivideNamePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
