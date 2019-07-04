import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  count = 1;
  
  employees = [
    {name: 'mike', jobRole: 'Angular Developer'},
    {name: 'jim', jobRole: 'Java Developer'}
  ];

  totalVotes = 0;

  calculate(value) {
    this.totalVotes+=value;
  }

  myFunction() {
    this.title+=this.count++;
  }

  myFunction1(name: string) {
    this.title = name;
    this.title+=this.count++;
  }

  show() {
    return this.title;
  }
}