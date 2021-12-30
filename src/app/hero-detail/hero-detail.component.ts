import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../models/hero.model';
import { HeroService } from '../services/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit {

  hero!: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const ID = Number(this.route.snapshot.paramMap.get(`id`));
    this.heroService.getHeroById(ID)
      .subscribe(hero => {
        this.hero = hero;
      });
  }

  save(): void {
    console.log(this.hero)
    if(this.hero){
      this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
    }
  }

   goBack(): void {
    this.location.back();
  }
}
