import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchItemsComponent } from './search-items/search-items.component';
import { ItemListComponent } from './item-list/item-list.component';
import { HomeComponent } from './home.component';
import { ItemComponent } from './item/item.component';
import { HeadingComponent } from '../common/heading/heading.component';

export const routes: Routes = [
{path: '', component: HomeComponent, 
  children: [
    {path: '', redirectTo: 'search-items', pathMatch: 'prefix'},
    {path: 'search-items', component: SearchItemsComponent},
    {path: 'item-list', component: ItemListComponent},
    {path: 'item/:id', component: ItemComponent},
    {path: 'item', component: ItemComponent},
    {path: 'heading', component: HeadingComponent, outlet: 'secondary'}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
