import { Component, Input, OnInit } from '@angular/core';
import { BaseControl } from '../base-control';

@Component({
  selector: 'control-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.css']
})
export class TimepickerComponent extends BaseControl implements OnInit {

  @Input() public required: boolean = false;
  @Input() public disabled: boolean = false;
  @Input() public readonly: boolean = false;
  @Input() public focusedDate: string = '';
  @Input() public helptext: string = '';
  @Input() public showSeconds: boolean = false;

  constructor() {
    super();
  }

  ngOnInit(): void {
    if (this.showSeconds == false) {
      if(this.control.value!=null){

        const tmpValue = this.control.value.substr(0, 5);
        this.control.setValue(tmpValue);
      }
    }
  }

}
