import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footbar',
  templateUrl: './footbar.component.html',
  styleUrls: ['./footbar.component.css']
})
export class FootbarComponent implements OnInit {

  fecha = new Date();
  public myversion:string='';

  constructor() { }

  ngOnInit(): void {
    this.myversion=environment.version;
  }

}
