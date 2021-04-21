import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'src/app/servicios/dialog/dialog.service';
import { LoginService } from 'src/app/servicios/login/login.service';
import { SnackbarService } from 'src/app/servicios/snackbar/snackbar.service';
import { ValidaSesionService } from 'src/app/servicios/validaSesion/valida-sesion.service';
import { Loading } from 'src/app/utilities/Loading';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  userValidate = false;
  SOEID = '';

  constructor(private router: Router, 
    private sesion: ValidaSesionService,
    private dialogService: DialogService,
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    private snackBarService: SnackbarService,
    ) {
    this.activatedRoute.queryParams.subscribe(params => {
        this.SOEID = params['soeid'] || '123';
        const data = {
          SOEID: this.SOEID,
          IS_NOMINA: false
        };
        Loading.show();
        this.loginService.consultaByNominaOrSoeid(data).subscribe(arg => {
          Loading.hide();
          if (arg.status == 'success') {
            this.userValidate = true;
          } else {
            this.snackBarService.alertaError('El usuario no existe, se solicitará nómina');
          }
        });
    });
    // this.sesion.validaSesion();
  }

  open(option) {
    if (this.userValidate) {
      window.location.href = 'http://localhost:4200/' + option;
      return;
    }
    this.dialogService.openLoginNomina({option, soeid: this.SOEID});
    this.dialogService.confirmLoginNomina().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
    
  }

}
