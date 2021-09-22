import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {InputTextModule} from 'primeng/inputtext';
import {AccordionModule} from 'primeng/accordion';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    AccordionModule
  ],
  exports: [
    InputTextModule,
    AccordionModule
  ]
})
export class PrimengLibModule { }
