import { Component, Input, OnDestroy, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DialogService } from 'src/app/servicios/dialog/dialog.service';
import { BaseControl } from '../base-control';

@Component({
  selector: 'control-customselect',
  templateUrl: './customselect.component.html',
  styleUrls: ['./customselect.component.css']
})
export class CustomselectComponent extends BaseControl implements OnInit, OnChanges, OnDestroy {

  @Input() public secondControl: string = '';
  @Input() public secondLabel: string = '';
  @Input() public secondControlName: string = '';
  @Input() public secondPlaceHolder: string = '';
  @Input() public secondValue: any = '';
  @Input() public disabled: boolean = false;
  @Input() public readonly: boolean = false;
  @Input() public helptext: string = '';
  @Input() public required: boolean = false;
  @Input() public iconInFirstInput: boolean = false;
  @Input() public max: number = undefined;
  @Input() public min: number = undefined;
  // @Input() public spinners: boolean = true;
  @Input() public service: any = null;
  @Input() public methodName: any = null;
  @Input() public title: string = null;
  @Input() public tblField1: string = null;
  @Input() public firstFieldTitle: string = null;
  @Input() public tblField2: string = null;
  @Input() public secondFieldTitle: string = null;
  @Input() public extraColumns: Array<any> = [];
  @Input() public keySearch: string = null;
  @Input() set data(value) {
    this._data.next(value);
  }
  get data() {
    return this._data.getValue();
  }
  @Output() public onControlFocusOut = new EventEmitter();
  @Output() public onSelection = new EventEmitter();
  subscriptionTmp;

  private _data = new BehaviorSubject<any>('');
  constructor(
    private dialogService: DialogService
  ) {
    super();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes) {
    this.dialogService.updateSeleccion(changes.data.currentValue);
  }

  ngOnDestroy(): void {
    this._data.unsubscribe();
    this.onControlFocusOut.unsubscribe();
    if (this.subscriptionTmp != null) {
      this.subscriptionTmp.unsubscribe();
      this.onSelection.unsubscribe();
    }
  }

  controlFocusOut() {
    let found = this.data.find(element => {
      return element[this.keySearch] == this.control.value;
    });
      this.onControlFocusOut.emit(found);
  }

  openModal() {
    this.dialogService.openSeleccion({
      title: `${this.title}`,
      text: '',
      btnCloseText: 'Cerrar',
      dataSource: this.data,
      firstField: this.tblField1,
      secondField: this.tblField2,
      firstFieldTitle: this.firstFieldTitle,
      secondFieldTitle: this.secondFieldTitle,
      additionalColumns: this.extraColumns
    });
    this.subscriptionTmp = this.dialogService.confirmSeleccion().subscribe(result => {
      if (result != null && result !== false) {
        this.onSelection.emit(result);
      }
    });
  }

}
