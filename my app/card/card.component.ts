import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  @Input() cardEmployee;
  @Output() customClickEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  vote(jobRole) {
    
    this.customClickEvent.emit(jobRole);
  }
}
