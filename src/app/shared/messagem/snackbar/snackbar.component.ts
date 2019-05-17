import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  messagem: string = 'hellooo';

  constructor() { }

  ngOnInit() {
  }

}
