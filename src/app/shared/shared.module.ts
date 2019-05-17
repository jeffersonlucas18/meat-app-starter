import {NgModule} from '@angular/core';
import {InputComponent} from './input/input.component';
import {RadioComponent} from './radio/radio.component';
import {RatingComponent} from './rating/rating.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule],
  exports: [InputComponent, RadioComponent, RatingComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule ]
})

export class SharedModule {}
