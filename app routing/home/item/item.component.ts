import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //console.log(this.activatedRoute);
    //this.item = this.activatedRoute.snapshot.params.id;

    this.item = this.activatedRoute.snapshot.queryParams.id;
  }

}
