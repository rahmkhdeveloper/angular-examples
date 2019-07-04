import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExponentialPipe } from './exponential.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExponentialPipe],
  exports: [ExponentialPipe]
})
export class PipesModule { }
