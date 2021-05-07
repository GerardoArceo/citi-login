import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DialogService } from 'src/app/servicios/dialog/dialog.service';
import { LoginService } from 'src/app/servicios/login/login.service';
import { SnackbarService } from 'src/app/servicios/snackbar/snackbar.service';
import { ValidaSesionService } from 'src/app/servicios/validaSesion/valida-sesion.service';
import { Loading } from 'src/app/utilities/Loading';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit{

  form: FormGroup = new FormGroup({});
  dataParams: any;

  catalogoAreas: any=[];
  catalogoDepartamentos: any=[];
  catalogoSubdepartamentos: any=[];
  
  constructor(private router: Router, 
    private sesion: ValidaSesionService,
    private dialogService: DialogService,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private snackBarService: SnackbarService,
    private activatedRoute: ActivatedRoute
    ) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.dataParams = params;
      if (!this.dataParams || !this.dataParams.soeid) {
        this.router.navigate(['']);
        return;
      }
    });
  }

  ngOnInit(): void {
    this.initForm();
    this.initCatalogos();
  }

  initForm() {
    this.form = this.formBuilder.group({
      nomina: ['', [Validators.required, Validators.maxLength(10)]],
      sirh: ['', [Validators.required, Validators.maxLength(10)]],
      nombre: ['', [Validators.required, Validators.maxLength(35)]],
      telefono: ['', [Validators.required, Validators.maxLength(10)]],
      nivel: ['', [Validators.required, Validators.maxLength(2)]],
      soeid: [this.dataParams.soeid, [Validators.required, Validators.maxLength(10)]],

      clave_area: ['', [Validators.required, Validators.maxLength(5)]],
      area: ['', []],
      clave_departamento: ['', [Validators.required, Validators.maxLength(5)]],
      departamento: ['', []],
      clave_subdepartamento: ['', [Validators.required, Validators.maxLength(5)]],
      subdepartamento: ['', []],

      sucursal: ['', [Validators.maxLength(4)]],
      estacion: ['', [Validators.maxLength(10)]],
      ip: ['', [Validators.maxLength(15)]],
    });
  }

  initCatalogos() {
    this.loginService.getCatalogoAreas().subscribe(result => {
      this.catalogoAreas = result.data;
    });
    this.loginService.getCatalogoDepartamentos().subscribe(result => {
      this.catalogoDepartamentos = result.data;
    });
    this.loginService.getCatalogoSubdepartamentos().subscribe(result => {
      this.catalogoSubdepartamentos = result.data;
    });
  }

  registrar() {
    (<any>Object).values(this.form.controls).forEach(control => {
      control.markAsDirty();
      control.markAsTouched();
    });

    if (!this.form.valid) {
      this.dialogService.open({
        title: 'Error',
        text: 'El formulario no se ha llenado correctamente',
        btnAcceptText: 'Aceptar',
        btnCancelText: ''
      });
      return;
    }

    const opts = {
      title: 'Confirmación',
      text: '¿Desea registrar este empleado?',
    }
    this.dialogService.openPopUp(opts);
    this.dialogService.confirmPopUp().subscribe(result => {
      if (result) {
        Loading.show();
        this.loginService.registrarEmpleado(this.form.value).subscribe(arg => {
          if (arg.status == 'success') {
            this.router.navigate(['']);
            this.snackBarService.alertaSuccess('Operación realizada con éxito');
          } else {
            this.snackBarService.alertaError(arg.message);
          }
          Loading.hide();
        }, (error) => {
          Loading.hide();
          this.snackBarService.alertaError('Ocurrió un error ' + error.statusText);
        });
      }
    });

  };

  areaOnSelect(response){
    if(response!=null){
      this.form.controls.clave_area.setValue(response.NCLAVE_AREA);
      this.form.controls.area.setValue(response.CNOMBRE);
    } else {
      this.form.controls.clave_area.setValue(null);
      this.form.controls.area.setValue(null);
    }
  }
  departamentoOnSelect(response){
    if(response!=null){
      this.form.controls.clave_departamento.setValue(response.NCLAVE_DEPARTAMENTO);
      this.form.controls.departamento.setValue(response.CNOMBRE);
    } else {
      this.form.controls.clave_departamento.setValue(null);
      this.form.controls.departamento.setValue(null);
    }
  }
  subdepartamentoOnSelect(response){
    if(response!=null){
      this.form.controls.clave_subdepartamento.setValue(response.NCLAVE_SUBDEPARTAMENTO);
      this.form.controls.subdepartamento.setValue(response.CNOMBRE);
    } else {
      this.form.controls.clave_subdepartamento.setValue(null);
      this.form.controls.subdepartamento.setValue(null);
    }
  }

}
