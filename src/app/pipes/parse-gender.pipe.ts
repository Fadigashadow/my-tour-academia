import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseGender'
})
export class ParseGenderPipe implements PipeTransform {

  transform(value: string, ): unknown {

    switch (value) {
      case "F":
        value = "Female";
        return value;

      case "M":
        value = "Male";
        return value;

      default:
        value = "Other"
        return value;
    }
  }

}
