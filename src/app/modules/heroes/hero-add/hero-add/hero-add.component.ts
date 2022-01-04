import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Hero } from "src/app/models/hero.model";
import { HeroService } from "src/app/services/hero.service";


@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrls: ['./hero-add.component.scss']
})
export class HeroAddComponent implements OnInit {

  hero: Hero = {
    name: '',
    heroName: '',
    quirk: '',
    gender: '',
    hairColor: '',
    image: ''
  }

  constructor(
    private heroService: HeroService,
    private location: Location
    ) { }

  ngOnInit(): void {
  }

  addHero(): void {

    if (this.hero.name == '') {
      return;
    }
    else {
    this.heroService.createHero(this.hero)
      .subscribe(() => {
        this.goBack();
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
}
