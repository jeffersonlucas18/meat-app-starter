import { Component, ContentChild, Input, OnInit, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  input: any;

  @Input() label: string;
  @Input() errorMessage: string;

  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) fCN: FormControlName;

  constructor(private ngModel: NgModel) {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.input = this.model || this.fCN
    if (this.input === undefined) {
      throw new Error('esse componente precisa ser usado com uma diretiva ngmodel ou FormContralName');
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }
}

