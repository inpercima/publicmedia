import { Pipe, PipeTransform } from '@angular/core';
import { Routes } from '@angular/router';

@Pipe({
  name: 'realRouteMatching'
})
export class RealRouteMatchingPipe implements PipeTransform {

  transform(items: Routes): Routes {
    return items.filter(item => item.path !== '' && item.path !== '**');
  }

}
