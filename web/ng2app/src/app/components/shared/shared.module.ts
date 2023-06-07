import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from './button/button.module';
import { ModalModule } from './modal/modal.module';
import { InputModule } from './input/input.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputModule,
    ModalModule,
  ],
  exports: [
    ButtonModule,
    InputModule,
    ModalModule,
  ]
})
export class SharedModule { }
