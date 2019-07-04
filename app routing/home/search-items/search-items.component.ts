import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.css']
})
export class SearchItemsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit(value) {

    //params
    //this.router.navigate(['home/item', value]);

    //optional params
    //this.router.navigate(['home/item', {id: value}]);

    //query params
    this.router.navigate(['home/item'], {queryParams: {id: value}});
  }
}
