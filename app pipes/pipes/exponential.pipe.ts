import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential',
  pure: false
})
export class ExponentialPipe implements PipeTransform {

  transform(value: any, args1?: any, args2?: any): any {
    return Math.pow(value, Math.pow(args1, args2));
  }

}
