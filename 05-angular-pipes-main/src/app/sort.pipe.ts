import { Pipe, PipeTransform } from '@angular/core';

export type SortValue = string | number;
type Direction = 'asc' | 'desc';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: true,
})
export class SortPipe implements PipeTransform {
  transform(value: SortValue[], direction: Direction = 'asc') {
    const sorted = [...value];
    return sorted.sort((a, b) => sortArray(a, b, direction));
  }
}

function sortArray(a: SortValue, b: SortValue, direction: Direction) {
  switch (direction) {
    case 'asc':
      return a < b ? -1 : a > b ? 1 : 0;
    case 'desc':
      return a > b ? -1 : a < b ? 1 : 0;
  }
}
