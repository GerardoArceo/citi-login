import { TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from 'src/app/components/modal/dialog/dialog.component';
import { PopupComponent } from 'src/app/components/modal/popup/popup.component';
import { SeleccionComponent } from 'src/app/components/modal/seleccion/seleccion.component';

import { DialogService } from './dialog.service';

describe('DialogService', () => {
  let service: DialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogComponent, PopupComponent, SeleccionComponent ],
      imports: [
        BrowserAnimationsModule,
        MatDialogModule
      ]
    });
    service = TestBed.inject(DialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
