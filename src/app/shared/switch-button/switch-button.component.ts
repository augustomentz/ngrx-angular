import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: SwitchButtonComponent
    }
  ]
})
export class SwitchButtonComponent implements OnInit, ControlValueAccessor {
  @Input() label = '';
  @Input() control: FormControl;

  constructor() {}

  ngOnInit(): void {}

  writeValue() {}

  registerOnChange() {}

  registerOnTouched() {}
}
