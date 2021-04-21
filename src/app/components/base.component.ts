import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-base',
  template: ''
})
export class BaseComponent implements OnInit {

  Subscriptions: Array<Subscription> = new Array<Subscription>();
  temporalSubscription: Subscription;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.Subscriptions.length > 0) {
      this.Subscriptions.forEach(element => {
        element.unsubscribe();
      });
    }
  }

}
