import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { UserbarComponent } from './userbar.component';

describe('UserbarComponent', () => {
  let component: UserbarComponent;
  let fixture: ComponentFixture<UserbarComponent>;
  let router: Router;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ UserbarComponent ],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();
    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
