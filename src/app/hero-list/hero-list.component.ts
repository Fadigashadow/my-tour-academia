import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../models/hero.model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})

export class HeroListComponent implements OnInit {

  @Input() heroes!: Hero[];
  @Input() type!: string;

  constructor() { }

  ngOnInit(): void {
  }

  consoleLog(hero: Hero) {

    console.log(hero)
  }

}
