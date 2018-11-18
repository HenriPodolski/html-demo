import { Pipe, PipeTransform } from '@angular/core';

/**
 * Map to Iterable Pipe
 *
 * It accepts Objects and
 * [Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
 *
 * Example:
 *
 *  <div *ngFor="#keyValuePair of someObject | iterable">
 *    key {{keyValuePair.key}} and value {{keyValuePair.value}}
 *  </div>
 *
 */
@Pipe({ name: 'iterable' })
export class IterablePipe implements PipeTransform {
  transform(map: {}): { key: any; value: any }[] {
    if (!map) {
      return null;
    }

    return Object.keys(map).map(key => ({ key: key, value: map[key] }));
  }
}
