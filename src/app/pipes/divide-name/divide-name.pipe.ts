import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'divideName'
})
export class DivideNamePipe implements PipeTransform {

  transform(name: string, index?: number): string {

    if (index == undefined || '') {
      index = 0
    }

    let nameArray = name.split(" ");
    name = nameArray[index];

    return name;
  }

}
