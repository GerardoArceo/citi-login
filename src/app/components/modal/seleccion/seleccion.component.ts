import { Component, Inject, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})
export class SeleccionComponent implements OnInit {

  displayedColumns: Array<any>;
  dataSource: MatTableDataSource<any> = new MatTableDataSource([]);
  public showLoading = true;
  searchValue: string = '';
  localAdditionalColumns = [];

  constructor(
    public dialogRef: MatDialogRef<SeleccionComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }

  public updateData(data) {
    this.dataSource = new MatTableDataSource(data);
  }

  ngOnInit(): void {
    this.showLoading = false;
    this.dataSource = new MatTableDataSource(this.data.dataSource);
    let firstTitle = 'ID';
    let secondTitle = 'Nombre';
    if (this.data.firstFieldTitle != null) {
      firstTitle = this.data.firstFieldTitle;
    }
    if (this.data.secondFieldTitle != null) {
      secondTitle = this.data.secondFieldTitle;
    }

    this.displayedColumns = [
      { campo: this.data.firstField, titulo: firstTitle, cellTemplate: null },
      { campo: this.data.secondField, titulo: secondTitle, cellTemplate: null }//,
      // { campo: null, titulo: 'Acciones', cellTemplate: null }
    ];
    if (this.data.additionalColumns != null) {
      this.localAdditionalColumns = this.data.additionalColumns;
      this.loadAdditionalColumns();
    }
  }

  tableSelection(element) {
    this.dialogRef.close(element);
  }

  loadAdditionalColumns() {
    this.localAdditionalColumns.forEach(column => {
      if (column.field != null && column.title != null) {
        this.displayedColumns.push(
          { campo: column.field, titulo: column.title }
        );
      }
    });
  }

}
