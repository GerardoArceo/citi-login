import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'control-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit,OnDestroy {

  @Input() control: FormControl;

  hasError: boolean = false;
  private _subscribeChanges: Subscription;
  constructor() { }

  ngOnDestroy(): void {
    if(this._subscribeChanges!=null){
      this._subscribeChanges.unsubscribe();
    }
    }

  ngOnInit() {
    this._subscribeChanges = this.control.statusChanges.subscribe(() => {
      this.hasError = this.control.invalid && (this.control.dirty || this.control.touched)
    });
  }

}
