import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-userbar',
  templateUrl: './userbar.component.html',
  styleUrls: ['./userbar.component.css']
})
export class UserbarComponent implements OnInit {
  public usuario = "Bienvenido";

  constructor(private router: Router) {

   }

  ngOnInit(): void {
    let sesion = (localStorage.getItem('sesion')?JSON.parse(localStorage.getItem('sesion')):false);
    if (sesion) {
      this.usuario = "Hola Shendira Reyes: "+sesion.user;
    }
  }

  cerrarSesion(){
    localStorage.removeItem('sesion');
    this.router.navigate(['arrendadora/login']);
    document.getElementById('lblUserRol').textContent =  "Bienvenido";
  }

}
