import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchPipe implements PipeTransform {

  transform(array: [], seeker: string): any {
    if (!array) { return []; }
    if (!seeker) {
      return [];
    };

    seeker = seeker.toLowerCase();

    return array.filter(function (data) {
      return JSON.stringify(data).toLowerCase().includes(seeker);
    });
  }

}
