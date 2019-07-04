import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { Employee } from './card/employee';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit{

  title = "Angular";
  result = '';
  x = 3;
  y = 5;

  value = {a: 1};

  voteCount = 0;
  voteForAngular = 0;
  voteForJava = 0;

  show(value){
    this.result = value;
  }

  /*employees = [
    {name: "Mike", jobRole: "Angular Developer"}, 
    {name: "Jeremy", jobRole: "Java Developer"}
  ]*/
  
  employees;

  angularEmployee = {name: "Mike", jobRole: "Angular Developer"};
  javaEmployee = {name: "Jeremy", jobRole: "Java Developer"};

  constructor(private appService: AppService) {}

  observer = {
    next: (data)=>this.employees = data,
    error: (err)=>console.log(err),
    complete: ()=>console.log('Completed')
  };

  ngOnInit() {
    //this.appService.getData().subscribe(this.observer);
    this.appService.getData().subscribe(
      (data)=>this.employees = data,
      (err)=>console.log(err),
      ()=>console.log('Completed')
    );

    /*this.appService.getPromiseData()
    .then(data=>this.employees=data)
    .catch(err=>console.log(err));*/
  }

  count(jobRole) {

    if(jobRole === 'Angular Developer') {
      this.voteForAngular++;
      this.voteCount++;
    }
    else{ 
      this.voteForJava++;
      this.voteCount++;
    }
  }
}