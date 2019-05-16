import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {RadioModel} from './radio.model';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  constructor() { }
  @Input() opcoes: RadioModel[] = [];

  value: any;
  onChange: any

  ngOnInit() {
  }

  setValue(value: any) {
    this.value = value;
    this.onChange(this.value);
  }

  writeValue(obj: any): void{
  this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {

  }

  setDisabledState?(isDisabled: boolean): void {

  }
}


