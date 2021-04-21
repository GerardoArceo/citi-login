import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/utilities/material-module';
import { HomeComponent } from '../home/home.component';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;
  let activatedRoute: ActivatedRoute;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([
          {
            path: 'arrendadora',
            children: [
              { path: '', component: HomeComponent },
              { path: 'login', component: LoginComponent }
            ]
          }
        ]),
        MaterialModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [
        { provide: FormBuilder, useValue: formBuilder }
      ]
    })
      .compileComponents();
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('test validauser maker', () => {
    component.FormLogin.controls.user.setValue('maker');
    expect(component.validaUser()).toBeUndefined();
  });
  it('test validauser checker', () => {
    component.FormLogin.controls.user.setValue('checker');
    expect(component.validaUser()).toBeUndefined();
  });
  it('test validauser other', () => {
    component.FormLogin.controls.user.setValue('other');
    expect(component.validaUser()).toBeUndefined();
  });
});
