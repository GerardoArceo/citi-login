import { FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector:'base-control',
  template:''
})

export class BaseControl {
  @Input() public control: FormControl = new FormControl();
  @Input() public label: string;
  @Input() public placeHolder: string;
  @Input() public controlName: string;
}
