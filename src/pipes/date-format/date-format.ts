import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the DateFormatPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    // 2019-01-28t22:19:39.000z 
    let newValue = value.split('T');
    let dateAndMonth = newValue[0].split('-').reverse().join('/');
    let time = newValue[1].split('.')[0];
    let dateFormatted = dateAndMonth + ' - ' + time;

    return dateFormatted;
  }
}
