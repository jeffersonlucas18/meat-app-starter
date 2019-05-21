import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-not-found',
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent implements OnInit {

  foto = 'assets/img/404.png';

  constructor() { }

  ngOnInit() {
  }

}
