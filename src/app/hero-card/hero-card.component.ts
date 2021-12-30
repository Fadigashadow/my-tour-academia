import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../models/hero.model';
import { HeroService } from '../services/hero.service';
import { Location } from '@angular/common';



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
  colors = [{ color: "" }];

  constructor(
    private heroService: HeroService,
    private location: Location) { }

  ngOnInit(): void {
    this.cleanImage = this.cleanImageUrl(this.hero.image);
    this.cleanName = this.getLastName(this.hero.name);
    if(this.cleanImage === this.cleanName) {
      this.haveImage = true;
    } else {
      this.haveImage = false;
    }
    this.checkColor(this.hero);
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

  checkColor(hero: Hero): void {

    let haveMultipleColors = hero.hairColor.search(/[,]/gi)

    if (haveMultipleColors !== -1) {
      const AUX_ARR = hero.hairColor.split(", ");
      this.colors[0] = { 'color': this.parseColor(AUX_ARR[0]) }
      // AUX_ARR.forEach((color, j) => {
      //   console.log(color);
      //   this.colors[i] = { [j]: color };
      // })
    } else if (hero.hairColor === "") {
        this.colors[0] = { 'color': '#2c2c2c'}

    } else {
    this.colors[0] = {"color": this.parseColor(hero.hairColor) };
    }

    // heroes.forEach((hero, i) => {
    //   let haveMultipleColors = hero.hairColor.search(/[,]/gi)
    //   if (haveMultipleColors !== -1) {
    //     const AUX_ARR = hero.hairColor.split(", ");
    //     this.colors[i] = { 'color': this.parseColor(AUX_ARR[0]) }
    //     // AUX_ARR.forEach((color, j) => {
    //     //   console.log(color);
    //     //   this.colors[i] = { [j]: color };
    //     // })
    //   }
    //   else{
    //     this.colors[i] = { 'color': this.parseColor(hero.hairColor) };
    //   }
    //   // this.colors[i] = {this.parseColor(hero.hairColor)};
    //   console.log(this.colors[i].color)
    // })

  }

  parseColor(color: string) {
    let parsedColor = color.replace(/[ ,]/gi, "").toLowerCase();

    return parsedColor
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
