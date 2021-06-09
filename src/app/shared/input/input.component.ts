import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi:true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() control: FormControl = new FormControl();

  constructor() {}

  ngOnInit(): void {}

  writeValue() {}

  registerOnChange() {}

  registerOnTouched() {}
}
