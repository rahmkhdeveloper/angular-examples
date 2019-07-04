import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() employee;

  @Output() vote = new EventEmitter();

  voteNow(value) {
    this.vote.emit(value);
  }

}
