import { Injectable } from '@angular/core';

@Injectable()
export class FirstService {

  constructor() { }

  getData() {
    return 'first service data';
  }

}
