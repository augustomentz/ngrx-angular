import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '@shared/input/input.component';
import { SwitchButtonComponent } from './switch-button/switch-button.component';
import { ButtonComponent } from './button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputComponent, SwitchButtonComponent, ButtonComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputComponent, SwitchButtonComponent, ButtonComponent],
})
export class SharedModule {}
