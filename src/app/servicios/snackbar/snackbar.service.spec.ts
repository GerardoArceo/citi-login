import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

import { SnackbarService } from './snackbar.service';

describe('SnackbarService', () => {
  let service: SnackbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule],
      providers: [
        { provide: MatSnackBar, useValue: MatSnackBar }
      ]
    });
    service = TestBed.inject(SnackbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('test show success', () => {
  //   expect(service.alertaSuccess('test success')).toBeUndefined();
  // });

  // it('test show error', () => {
  //   expect(service.alertaError('test error')).toBeUndefined();
  // });
});
