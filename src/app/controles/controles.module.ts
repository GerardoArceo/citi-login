import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { MaterialModule } from '../utilities/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppDateAdapter, APP_DATE_FORMATS, DatepickerComponent } from './datepicker/datepicker.component';
import { InputComponent } from './input/input.component';
import { ErrorsComponent } from './errors/errors.component';
import { NumericComponent } from './numeric/numeric.component';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { SelectComponent } from './select/select.component';
import { TextareaComponent } from './textarea/textarea.component';
import { InputMaterialComponent } from './input-material/input-material.component';
import { NumericMaterialComponent } from './numeric-material/numeric-material.component';
import { DatepickerMaterialComponent } from './datepicker-material/datepicker-material.component';
import { SelectMaterialComponent } from './select-material/select-material.component';
import { InputIPComponent } from './input-IP/input-ip.component';
import { CustomselectComponent } from './customselect/customselect.component';
import { BaseControl } from './base-control';

const COMPONENTS = [
  GridComponent, DatepickerComponent, ErrorsComponent,
  InputComponent, NumericComponent, SelectComponent,
  TimepickerComponent, TextareaComponent,
  InputMaterialComponent, NumericMaterialComponent, DatepickerMaterialComponent,
  SelectMaterialComponent, InputIPComponent, CustomselectComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: COMPONENTS,
  providers: [
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ]
})
export class ControlesModule { }
