import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ValidaSesionService {

    constructor(private router: Router) { }

    validaSesion() {
        let sesion = (localStorage.getItem('sesion') ? JSON.parse(localStorage.getItem('sesion')) : false);
        if (!sesion) {
            // this.router.navigate(['login']);
            return false;
        }
        return true;
    }

    getRol() {
        if (this.validaSesion()) {
            let sesion = (localStorage.getItem('sesion') ? JSON.parse(localStorage.getItem('sesion')) : false);
            // console.log("sesion existente -> " + sesion.user);
            return sesion.user;
        }
        // console.log("la sesion no existe");
        return false;
    }
}
