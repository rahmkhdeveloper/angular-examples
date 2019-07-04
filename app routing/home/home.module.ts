import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchItemsComponent } from './search-items/search-items.component';
import { ItemListComponent } from './item-list/item-list.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ItemComponent } from './item/item.component';
import { HeadingComponent } from '../common/heading/heading.component';

@NgModule({
  imports: [
    CommonModule, HomeRoutingModule
  ],
  declarations: [
    HomeComponent, 
    SearchItemsComponent, 
    ItemListComponent, 
    ItemComponent, 
    HeadingComponent
  ]
})
export class HomeModule { }
