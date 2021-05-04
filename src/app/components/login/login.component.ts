import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidaSesionService } from 'src/app/servicios/validaSesion/valida-sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  FormLogin: FormGroup=new FormGroup({
    user: new FormControl(''),
    pass: new FormControl()
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private sesion: ValidaSesionService
  ) {
    let barras = document.getElementById('barraepicas');
    if (barras != null) {
      barras.style.visibility = "hidden";
    }
  }

  ngOnInit(): void {
    this.FormLogin = this.formBuilder.group({
      user: ['', Validators.required],
      pass: ['', Validators.required],
    });
  }

  validaUser() {
    if (this.FormLogin.get('user').value == "maker" || this.FormLogin.get('user').value == "checker") {
      let formValue = this.FormLogin.value;
      localStorage.setItem('sesion', JSON.stringify(formValue));
      let barras = document.getElementById('barraepicas');
      if (barras != null) {
        barras.style.visibility = "visible";
      }
      if(document.getElementById('lblUserRol')){
        document.getElementById('lblUserRol').textContent = "Bienvenido";
      }
    } else {
      alert('Las credenciales no son validas.');
    }
  }

}
