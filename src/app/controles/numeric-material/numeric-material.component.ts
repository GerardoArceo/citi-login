import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BaseControl } from '../base-control';

@Component({
  selector: 'control-numeric-material',
  templateUrl: './numeric-material.component.html',
  styleUrls: ['./numeric-material.component.css']
})
export class NumericMaterialComponent extends BaseControl implements OnInit,OnDestroy {

  @Input() public disabled: boolean = false;
  @Input() public readonly: boolean = false;
  @Input() public helptext: string = '';
  @Input() public required: boolean = false;
  @Input() public max: number = undefined;
  @Input() public min: number = undefined;
  @Input() public spinners: boolean = true;
  @Input() public nodecimals: boolean = false;
  @Input() public currency: boolean = false;
  @Output() public eventValueChange = new EventEmitter();

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    if(this.eventValueChange!=null){
      this.eventValueChange.unsubscribe();
    }
  }

  keypressed(evt) {
    if(this.nodecimals==false){
      if (evt.which != 8 && evt.which != 0 && evt.which != 46 && evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
      }
    } else {
      if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
      }
    }

  }

  functionValueChange(event){
    if(event==''){
      this.eventValueChange.emit(null);
      return;
    }
    this.eventValueChange.emit(event);
  }

}
