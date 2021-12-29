import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero.model';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  color!: string;
  allHeroes: Hero[] = [];
  heroes: Hero[] = [];
  topHero!: Hero;
  cleanImage?: string;
  cleanName?: string
  haveImage?: boolean

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  ngDoCheck(): void {
    console.log(this.heroes)
    // this.checkColor(this.color)
    // console.log(this.color)
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.allHeroes = heroes;
        this.heroes = heroes.slice(1, 5);
        this.topHero = heroes[0];
        this.color = 'silver';
      })
  }

  checkColor(color: string): void {

  }

}
