import { HttpParams } from '@angular/common/http';
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
  imgSrc = [
    {
      set: '../../../assets/images/azul/five.png',
      azul: '../../../assets/images/azul/five.png',
      blanco: '../../../assets/images/blanco/five.png',
      link: 'five'
    },
    {
      set: '../../../assets/images/azul/arrenda.png',
      azul: '../../../assets/images/azul/arrenda.png',
      blanco: '../../../assets/images/blanco/arrenda.png',
      link: 'arrenda'
    },
    {
      set: '../../../assets/images/azul/opera.png',
      azul: '../../../assets/images/azul/opera.png',
      blanco: '../../../assets/images/blanco/opera.png',
      link: 'opera'
    },
  ]

  constructor(private router: Router, 
    private sesion: ValidaSesionService,
    private dialogService: DialogService,
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    private snackBarService: SnackbarService,
    ) {
    this.activatedRoute.queryParams.subscribe(params => {
        this.SOEID = params['soeid'] || '123';
    });
  }

  open(origin) {
    const data = {
      SOEID: this.SOEID,
      IS_NOMINA: false
    };
    Loading.show();
    this.loginService.consultaByNominaOrSoeid(data, origin).subscribe(arg => {
      Loading.hide();
      if (arg.status == 'success') {
        this.snackBarService.alertaSuccess('El usuario existe');
        this.userValidate = true;
        window.location.href = 'http://localhost:4200/' + origin;
      } else {
        this.snackBarService.alertaError('El usuario no existe, se solicitar?? n??mina');
        this.openRequestNomina(origin);
      }
    }, err => {
      this.snackBarService.alertaError('Hubo un error con el servicio');
      Loading.hide();
    });
  }

  openRequestNomina(origin) {
    if (this.userValidate) {
      window.location.href = 'http://localhost:4200/' + origin;
      return;
    }
    this.dialogService.openLoginNomina({origin, soeid: this.SOEID});
    this.dialogService.confirmLoginNomina().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }

}
