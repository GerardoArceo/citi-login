import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from 'src/app/components/login/login.component';

import { ValidaSesionService } from './valida-sesion.service';

describe('ValidaSesionService', () => {
  let service: ValidaSesionService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule.withRoutes([
          { path: 'arrendadora/login', component: LoginComponent }
        ]),
      ]
    });
    service = TestBed.inject(ValidaSesionService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
