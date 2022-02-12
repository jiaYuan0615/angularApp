import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return new Date().getFullYear() - parseInt(value)
  }
}
