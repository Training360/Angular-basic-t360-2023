import { Pipe, PipeTransform } from '@angular/core';
import { Video } from '../model/video';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Video[] | null, phrase: string): Video[] | null {
    if (!value || !phrase) {
      return value;
    }

    phrase = phrase.toLowerCase();

    return value.filter( item => {
      const jsonItem: string = JSON.stringify(item).toLowerCase()
        .replace(/"[^"]*"\:/g, '')
        .replace(/[",\{\}]/g, '');
      return jsonItem.includes(phrase);
    });
  }

}
