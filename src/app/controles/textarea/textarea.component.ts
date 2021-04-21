import { Component, Input, OnInit } from '@angular/core';
import { BaseControl } from '../base-control';

@Component({
  selector: 'control-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent extends BaseControl implements OnInit {

  @Input() public disabled: boolean = false;
  @Input() public readonly: boolean = false;
  @Input() public helptext: string = '';
  @Input() public required: boolean = false;
  @Input() public maxLength: number = undefined;
  @Input() public minLength: number = undefined;

  constructor() {
    super();
   }

  ngOnInit(): void {
  }

}
