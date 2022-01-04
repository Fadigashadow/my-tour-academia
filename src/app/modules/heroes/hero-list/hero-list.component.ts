import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../../core/models/hero.model';
import { HeroService } from '../../../core/services/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})

export class HeroListComponent implements OnInit {

  @Input() heroes!: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

  delHero(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero)
    this.heroService.deleteHero(hero.id!).subscribe()
  }
}
