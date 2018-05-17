import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';


const MODULE = [
  FlexLayoutModule,
  MaterialModule,
  CommonModule,
  ReactiveFormsModule
];

@NgModule({
  imports: [...MODULE],
  exports: [MODULE],
  declarations: []
})
export class LayoutModule { }
