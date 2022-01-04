import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../../core/models/hero.model';

@Component({
  selector: 'app-top-heroes',
  templateUrl: './top-heroes.component.html',
  styleUrls: ['./top-heroes.component.scss']
})
export class TopHeroesComponent implements OnInit {

  @Input() topHeroes: Hero[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
