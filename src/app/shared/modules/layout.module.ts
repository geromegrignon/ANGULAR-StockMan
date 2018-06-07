import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConnectformDirective } from '../directives/connectform.directive';
import { NgxErrorsModule } from '@ultimate/ngxerrors';


const MODULE = [
  FlexLayoutModule,
  MaterialModule,
  CommonModule,
  ReactiveFormsModule,
  NgxErrorsModule
];

@NgModule({
  imports: [...MODULE],
  exports: [MODULE, ConnectformDirective],
  declarations: [ConnectformDirective]
})
export class LayoutModule { }
