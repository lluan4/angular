import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(
    value: string | number,
    inputType: 'cel' | 'fah',
    outType?: 'cel' | 'fah'
  ): string {
    if (typeof value !== 'string' && typeof value !== 'number')
      return `${value}`;

    let val: number;

    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }

    switch (inputType) {
      case 'cel':
        if (!outType) return `${val}`;
        if (outType === inputType) return `${val.toFixed(2)} °C`;
        return `${((val * 9) / 5 + 32).toFixed(2)} °F`;

      case 'fah':
        if (!outType) return `${val}`;
        if (outType === inputType) return `${val.toFixed(2)} °F`;
        return `${((val - 32) / (5 / 9)).toFixed(2)} °C`;
      default:
        return `${val}`;
    }
  }
}
