import { Injectable } from '@angular/core';

@Injectable()
export class SecondService {

  constructor() { }

  getData() {
    return 'second service data';
  }
}
