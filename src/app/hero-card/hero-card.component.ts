import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../models/hero.model';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})

export class HeroCardComponent implements OnInit {

  @Input() hero!: Hero;
  @Input() allHeroes: Hero[] = [];
  cleanImage!: string;
  cleanName!: string;
  haveImage!: boolean;
  @Input() type!: string;

  constructor() { }

  ngOnInit(): void {
    this.cleanImage = this.cleanImageUrl(this.hero.image);
    this.cleanName = this.getLastName(this.hero.name);

    if(this.cleanImage === this.cleanName) {
      this.haveImage = true;
    }
    else {
      this.haveImage = false;
    }
  }

  getLastName(fullName: string) {
    const LAST_NAME_ARR = fullName.split(" ");
    let lastName = LAST_NAME_ARR[LAST_NAME_ARR.length - 1];
    lastName = lastName.toLowerCase();
    return lastName;
  }

  cleanImageUrl(imageUrl: string): string {
    const urlArray = imageUrl.split("/");
    const name = urlArray[urlArray.length - 1].split(".")[0];
    return name;
  }
}
