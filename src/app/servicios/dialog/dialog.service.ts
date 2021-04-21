import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { take, map } from 'rxjs/operators';
import { DialogComponent } from 'src/app/components/modal/dialog/dialog.component';
import { LoginNominaComponent } from 'src/app/components/modal/login-nomina/login-nomina.component';
import { PopupComponent } from 'src/app/components/modal/popup/popup.component';
import { SeleccionComponent } from 'src/app/components/modal/seleccion/seleccion.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  dialogRef: MatDialogRef<DialogComponent>;
  popUpRef: MatDialogRef<PopupComponent>;
  seleccionRef: MatDialogRef<SeleccionComponent>;
  loginNominaRef: MatDialogRef<LoginNominaComponent>;

  constructor(private dialog: MatDialog) { }

  open(opts: any) {
    this.dialogRef = this.dialog.open(DialogComponent, {
      width: '50%',
      data: {
        title: opts.title,
        text: opts.text,
        btnAcceptText: opts.btnAcceptText,
        btnCancelText: opts.btnCancelText,
        html: opts.html
      }
    });
  }

  confirm() {
    return this.dialogRef.afterClosed().pipe(
      take(1),
      map(res => {
        return res;
      }
      ));
  }

  openPopUp(data: any) {
    this.popUpRef = this.dialog.open(PopupComponent, {
      width: '30%',
      minWidth: '300px',
      disableClose: true,
      data
    });
  }


  confirmPopUp() {
    return this.popUpRef.afterClosed().pipe(
      take(1),
      map(res => {
        return res;
      }
      ));
  }

  openLoginNomina(data) {
    this.loginNominaRef = this.dialog.open(LoginNominaComponent, {
      width: '30%',
      minWidth: '300px',
      disableClose: true,
      data
    });
  }


  confirmLoginNomina() {
    return this.loginNominaRef.afterClosed().pipe(
      take(1),
      map(res => {
        return res;
      }
      ));
  }

  openSeleccion(opts: any) {
    this.seleccionRef = this.dialog.open(SeleccionComponent, {
      width: '75%',
      data: {
        title: opts.title,
        text: opts.text,
        btnCloseText: opts.btnCloseText,
        dataSource: opts.dataSource,
        firstField: opts.firstField,
        secondField: opts.secondField,
        firstFieldTitle: opts.firstFieldTitle,
        secondFieldTitle: opts.secondFieldTitle,
        additionalColumns:opts.additionalColumns
      }
    });
  }

  updateSeleccion(data) {
    if (!this.seleccionRef || !this.seleccionRef.componentInstance) {
      return;
    }
    this.seleccionRef.componentInstance.updateData(data);
  }

  confirmSeleccion() {
    return this.seleccionRef.afterClosed().pipe(
      take(1),
      map(res => {
        return res;
      }
      ));
  }

}
