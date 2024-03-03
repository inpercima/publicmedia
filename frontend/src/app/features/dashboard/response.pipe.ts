import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'response',
})
export class ResponsePipe implements PipeTransform {
  transform(value: string): boolean {
    return value !== undefined && value.includes('200');
  }
}
