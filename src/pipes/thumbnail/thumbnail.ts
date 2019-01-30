import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ThumbnailPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'thumbnail',
})
export class ThumbnailPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    let small = value.slice(0, -4) + '-tn160.png';
    let medium = value.slice(0, -4) + '-tn320.png';
    let big = value.slice(0, -4) + '-tn640.png';
    let result = '';
    args.forEach(arg => {
     if(arg === 'medium') {
      result = medium;
     } else if (arg === 'big') {
      result = big;
     } else {
       result = small;
     }
    });
    return result;
  }
}
