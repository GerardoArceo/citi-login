import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BaseControl } from '../base-control';

@Component({
  selector: 'control-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent extends BaseControl implements OnInit, OnDestroy {

  @Input() public disabled: boolean = false;
  @Input() public readonly: boolean = false;
  @Input() public helptext: string = '';
  @Input() public required: boolean = false;
  @Input() public maxLength: number = undefined;
  @Input() public minLength: number = undefined;
  @Input() public disableSpecialChar: boolean = false;
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

  functionValueChange(event){
    if(event==''){
      this.eventValueChange.emit(null);
      return;
    }
    this.eventValueChange.emit(event);
  }

  omitSpecialChar(event) {   
    if (this.disableSpecialChar) {
      var k;  
      k = event.charCode;  //         k = event.keyCode;  (Both can be used)
      return((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57)); 
    } else {
      return true;
    }
  }
}
