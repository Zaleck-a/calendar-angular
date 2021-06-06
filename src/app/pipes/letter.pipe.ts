import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letter'
})
export class LetterPipe implements PipeTransform {

  transform(value: any) {
    return value.substring(0,1);
  }

}
