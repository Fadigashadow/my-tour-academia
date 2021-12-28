import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero.model';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  topHero?: Hero;
  cleanImage?: string;
  cleanName?: string
  haveImage?: boolean

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes.slice(1, 5);
        this.topHero = heroes[0];
        this.cleanImage = this.transform(heroes[0].image);
        this.cleanName = this.getLastName(heroes[0].name);
        if(this.cleanImage === this.cleanName) {
          this.haveImage = true
        } else {
          this.haveImage = false;
        }
      })
  }

  teste(imageParam: string, nameParam: string): void {

    const CLEAN_IMAGE = this.transform(imageParam);
    const CLEAN_NAME = this.getLastName(nameParam);
    if (CLEAN_IMAGE === CLEAN_NAME) {
      console.log(true);
    }
  }

  getLastName(fullName: string) {
    const LAST_NAME_ARR = fullName.split(" ");
    let lastName = LAST_NAME_ARR[LAST_NAME_ARR.length - 1]
    lastName = lastName.toLowerCase();
    return lastName;
  }

  transform(imageUrl: string): string {
    const urlArray = imageUrl.split("/");
    const name = urlArray[urlArray.length - 1].split(".")[0];
    return name;
  }

}
