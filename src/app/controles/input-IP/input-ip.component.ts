import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BaseControl } from '../base-control';

@Component({
  selector: 'control-inputip',
  templateUrl: './input-ip.component.html',
  styleUrls: ['./input-ip.component.css']
})
export class InputIPComponent extends BaseControl implements OnInit, OnDestroy {

  @Input() public disabled: boolean = false;
  @Input() public readonly: boolean = false;
  @Input() public helptext: string = '';
  @Input() public required: boolean = false;
  @Input() public maxLength: number = undefined;
  @Input() public minLength: number = undefined;
  @Output() public eventValueChange = new EventEmitter();

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    if(this.eventValueChange!=null){
      this.eventValueChange.unsubscribe();
    }
  }

  functionValueChange(event) {
    if (event == '') {
      this.eventValueChange.emit(null);
      return;
    }
    this.eventValueChange.emit(event);
  }

  keypressed(evt) {
    if (evt.which > 31 && evt.which != 46 && (evt.which < 48 || evt.which > 57)) {
      evt.preventDefault();
    }

  }

}
