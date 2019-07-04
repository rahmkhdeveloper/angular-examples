import { Component, Inject } from '@angular/core';
import { FirstService } from './services/first.service';
import { SecondService } from './services/second.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {provide: 'FirstService', useClass: FirstService},
    {provide: SecondService, useExisting: 'FirstService'},
    {provide: 'value', useValue: 123},
    {provide: 'factory', useFactory: ()=>{return 'Hello World'}},
    SecondService
  ]
})
export class AppComponent {

  title = 'app';

  constructor(@Inject('value') private val, @Inject('factory') private factory,
              private secondService: SecondService) {}

  ngOnInit() {

    /*let provider = [
      {provide: 'FirstService', useClass: FirstService},
      {provide: SecondService, useExisting: 'FirstService'},
      {provide: 'value', useValue: 123},
      {provide: 'factory', useFactory: function(){return 'Hello World'}}      
    ];*/

    //let injector = ReflectiveInjector.resolveAndCreate(provider)

    /*let object1 = injector.get('FirstService');
    console.log(object1.getData());
    let object2 = injector.get(SecondService);
    console.log(object2.getData());
    console.log(object1 === object2)*/
    
    console.log(this.secondService.getData());
    console.log(this.val);
    console.log(this.factory);
  }
}

