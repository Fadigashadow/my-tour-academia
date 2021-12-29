import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero.model';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  colors = [{ color: "" }];
  allHeroes: Hero[] = [];
  heroes: Hero[] = [];
  topHero!: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  // ngDoCheck(): void {
  //   console.log(this.heroes)

  // }

  getHeroes(): void {

    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.allHeroes = heroes;
        this.heroes = heroes.slice(1, 5);
        this.topHero = heroes[0];
        this.checkColor(this.heroes);
      })
  }

  checkColor(heroes: Hero[]): void {

    heroes.forEach((hero, i) => {
      let haveMultipleColors = hero.hairColor.search(/[,]/gi)
      if (haveMultipleColors !== -1) {
        const AUX_ARR = hero.hairColor.split(", ");
        this.colors[i] = { 'color': this.parseColor(AUX_ARR[0]) }
        // AUX_ARR.forEach((color, j) => {
        //   console.log(color);
        //   this.colors[i] = { [j]: color };
        // })
      }
      else{
        this.colors[i] = { 'color': this.parseColor(hero.hairColor) };
      }

      // this.colors[i] = {this.parseColor(hero.hairColor)};
      console.log(this.colors[i].color);
    })

    console.log(this.colors);
  }

  parseColor(color: string) {
    let parsedColor = color.replace(/[ ,]/gi, "").toLowerCase();

    return parsedColor
  }

}


colors: [
  {
    '0': "colorName"
  },
  {
    '0': "colorName",
    '1': "colorName"
  }
]
