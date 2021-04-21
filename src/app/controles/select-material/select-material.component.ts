import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { BehaviorSubject } from 'rxjs';
import { BaseControl } from '../base-control';

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'control-select-material',
  templateUrl: './select-material.component.html',
  styleUrls: ['./select-material.component.css'],
  providers:[
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}
  ]
})
export class SelectMaterialComponent extends BaseControl implements OnInit {

  @Input() public disabled: boolean = false;
  @Input() public readonly: boolean = false;
  @Input() public helptext: string = '';
  @Input() public required: boolean = false;
  @Input() public textField: string = '';
  @Input() public valueField: string = '';
  @Input() public valuePrimitive: boolean = false;
  @Output() public eventValueChange = new EventEmitter();
  private options: string[] = [];
  private privControl: FormControl = new FormControl({});
  private selectedValue: any;
  private _data = new BehaviorSubject<string[]>([]);

  @Input()
  set dataSource(value) {
    // set the latest value for _data BehaviorSubject
    this._data.next(value);
  }
  get dataSource() {
    // get the latest value from _data BehaviorSubject
    return this._data.getValue();
  }

  constructor() {
    super();
  }

  ngOnInit(): void {
    this._data
      .subscribe(x => {
        this.options = this.dataSource;
      });
  }

  ngOnDestroy(): void {
    if(this._data!=null){
      this._data.unsubscribe();
    }
    if(this.eventValueChange!=null){
      this.eventValueChange.unsubscribe();
    }
  }

  functionValueChange(event) {
    if (this.valuePrimitive) {
      this.eventValueChange.emit(event);
      return;
    }
    if(event==null){
      this.eventValueChange.emit(null);
      return;
    }
    this.eventValueChange.emit(this.options.find(x => x[this.valueField] === event[this.valueField]));
  }

}
