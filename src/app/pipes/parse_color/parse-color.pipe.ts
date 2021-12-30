import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';

@Pipe({
  name: 'parseColor'
})
export class ParseColorPipe implements PipeTransform {

  transform(hero: Hero, index?: number, type?: string): Array<string> | string {

    let haveMultipleColors = hero.hairColor.search(/[,]/gi)
    let colorArr = [];

    if (haveMultipleColors !== -1) {
      colorArr = hero.hairColor.split(", ");

    }
    else if (hero.hairColor === "") {
      colorArr.push('#2c2c2c');
    }
    else {
      colorArr.push(hero.hairColor);
      index = 0;
    }

    if ( type == null || type == undefined) {
      type = 'array'
    }

    if ( index == null || index == undefined) {
      index = 0;
    }

    colorArr = this.parseColors(colorArr, index)

    switch(type) {
      case 'string':
        return colorArr[0];

      default:
        return colorArr;
    }
  }

  parseColors(colors: Array<string>, index: number): Array<string> {

    let parsedColors = [""]
    parsedColors.shift();

    colors.forEach((color) => {
      let parsedColor = color.replace(/[ ,]/gi, "").toLowerCase();

      parsedColors.push(parsedColor);
    })

    parsedColors = parsedColors.filter((color) => parsedColors[index] == color);

    if (parsedColors.length === 1) {
      parsedColors.push(parsedColors[0]);
    }

    return parsedColors;
  }
}
