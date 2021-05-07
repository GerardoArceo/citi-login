import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ValidaSesionService } from '../validaSesion/valida-sesion.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  dev = false;

  constructor(
    private httpClient: HttpClient,
    private sesion: ValidaSesionService
  ) { }

  private postRequest(data, route, origin = "five"): Observable<any> {
    let url;
    if (origin === 'five') {
      url = environment.urlApiFive + route;
    } else if (origin === 'arrenda') {
      url = environment.urlApiArrenda + route;
    } else if (origin === 'opera') {
      url = environment.urlApiOpera + route;
    }
    const postData = {
      user: 1,
      role: 'maker',
      data,
      approved: true
    };
    console.log('POST REQUEST', url, postData, JSON.stringify(postData));
    const request = this.httpClient.post<HttpResponse<any>>(url, postData);
    request.subscribe(d => {
      console.log(d);
    });
    return request;
  }

  private getRequest(route, origin = "five"): Observable<any> {
    let url;
    if (origin === 'five') {
      url = environment.urlApiFive + route;
    } else if (origin === 'arrenda') { 
      url = environment.urlApiArrenda + route;
    } else if (origin === 'opera') {
      url = environment.urlApiOpera + route;
    }
    console.log('GET REQUEST', url);
    return this.httpClient.get<HttpResponse<any>>(url);
  }

  getCatalogoAreas(origin = "five") {
    return this.getRequest('catalogo/consulta/area', origin);
  }
  getCatalogoDepartamentos(origin = "five") {
    return this.getRequest('catalogo/consulta/departamentos', origin);
  }
  getCatalogoSubdepartamentos(origin = "five") {
    return this.getRequest('catalogo/consulta/subdepto', origin);
  }

  consultaByNominaOrSoeid(data, origin = 'five') {
    return this.postRequest(data, 'empleados/valusr', origin);
  }

  registrarEmpleado(form, origin = "five") {
    const data = {
      "NEMPLEADO_ID": form.nomina,
      "NCLAVE_AREA": form.clave_area,
      "NCLAVE_DEPARTAMENTO": form.clave_departamento,
      "NCLAVE_SUBDEPARTAMENTO": form.clave_subdepartamento,
      "CNOMBRE": form.nombre,
      "NNIVEL": form.nivel,
      "NSIRH": form.sirh,
      "CSOEID": form.soeid,
      "NSUCURSALUOFICINA": form.sucursal,
      "CSTATION": form.estacion,
      "CIP": form.ip,
      "NNUMERO": form.telefono,
      "USR_SSO": "1",
    }
    return this.postRequest(data, 'empleados/alta', origin);
  }

}
