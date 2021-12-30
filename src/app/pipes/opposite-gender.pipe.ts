import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oppositeGender'
})
export class OppositeGenderPipe implements PipeTransform {

  transform(gender: string): string {

    let opGender: string

    switch (gender) {
      case "F":
        opGender = "M";
        return opGender;

      case "M":
        opGender = "F"
        return opGender;

      default:
        return gender;
    }  }

}
