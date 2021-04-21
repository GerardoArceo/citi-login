import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/utilities/material-module';
import { ErrorsComponent } from '../errors/errors.component';

import { SelectMaterialComponent } from './select-material.component';

describe('SelectMaterialComponent', () => {
  let component: SelectMaterialComponent;
  let fixture: ComponentFixture<SelectMaterialComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ SelectMaterialComponent, ErrorsComponent ],
      imports:[
        BrowserAnimationsModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
