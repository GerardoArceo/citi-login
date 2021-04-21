import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private mdDialogRef: MatDialogRef<PopupComponent>,
  ) { }

  ngOnInit(): void {
  }
  public close(value) {
    this.mdDialogRef.close(value);
  }
}
