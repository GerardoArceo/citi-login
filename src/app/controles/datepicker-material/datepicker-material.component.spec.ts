import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/utilities/material-module';
import { ErrorsComponent } from '../errors/errors.component';

import { DatepickerMaterialComponent } from './datepicker-material.component';

describe('DatepickerMaterialComponent', () => {
  let component: DatepickerMaterialComponent;
  let fixture: ComponentFixture<DatepickerMaterialComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerMaterialComponent, ErrorsComponent ],
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
    fixture = TestBed.createComponent(DatepickerMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
