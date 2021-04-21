import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { LoginNominaComponent } from './login-nomina.component';

describe('LoginNominaComponent', () => {
  let component: LoginNominaComponent;
  let fixture: ComponentFixture<LoginNominaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginNominaComponent ],
      imports: [MatDialogModule],
      providers: [
        {
          provide: MAT_DIALOG_DATA, useValue: {
            btnCancelText: '',
            btnAcceptText: ''
          }
        },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginNominaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
