import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/core/models/hero.model';
import { HeroService } from 'src/app/core/services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  allHeroes: Hero[] = [];
  heroes: Hero[] = [];
  topHero!: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {

    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.allHeroes = heroes;
        this.heroes = heroes.slice(1, 5);
        this.topHero = heroes[0];
      })
  }
}
