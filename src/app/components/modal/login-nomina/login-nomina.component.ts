import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login/login.service';
import { SnackbarService } from 'src/app/servicios/snackbar/snackbar.service';
import { Loading } from 'src/app/utilities/Loading';

@Component({
  selector: 'app-login-nomina',
  templateUrl: './login-nomina.component.html',
  styleUrls: ['./login-nomina.component.css']
})
export class LoginNominaComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  showButton = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private mdDialogRef: MatDialogRef<LoginNominaComponent>,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router, 
    private snackBarService: SnackbarService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nomina: ['', [Validators.required]],
    });
  }
  public close(value) {
    this.mdDialogRef.close(value);
  }

  checkNomina() {
    const nomina = this.form.value.nomina;

    if (!nomina) {
      return;
    }
    const data = {
      NOMINA_EMPLEADO: nomina,
      IS_NOMINA: true
    };

    Loading.show();
    this.loginService.consultaByNominaOrSoeid(data).subscribe(arg => {
      Loading.hide();
      if (arg.status == 'success') {
        window.location.href = 'http://localhost:4200/' + this.data.option;
        // this.router.navigate(['five']);
        this.snackBarService.alertaSuccess('Nómina correcta');
      } else {
        this.showButton = true;
        this.snackBarService.alertaError(arg.message);
      }
    }, error => {
      this.showButton = true;
      this.snackBarService.alertaError(error);
    });
  }
}
