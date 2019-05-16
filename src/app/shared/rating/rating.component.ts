import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

    rates: number[] = [1, 2, 3, 4, 5];

    rate: number = 0;

    previousRate: number;

    constructor() { }

     ngOnInit() {

    }
    setRate(r: number) {
      this.rate = r;
      this.previousRate = undefined;
    }

  setTemporaryRate(r: number) {
      if(this.previousRate === undefined) {
        this.previousRate = this.rate;
      }
      this.rate = r;
  }
    clearTemporary() {
      if (this.previousRate !== undefined) {
      this.rate = this.previousRate
      this.previousRate = undefined;
      }
    }
}
