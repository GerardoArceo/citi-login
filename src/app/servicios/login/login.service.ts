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

  private postRequest(data, route): Observable<any> {
    const url = environment.urlApi4 + route;
    console.log('POST REQUEST', url, data);
    return this.httpClient.post<HttpResponse<any>>(url, data);
  }

  private getRequest(route): Observable<any> {
    const url = environment.urlApi4 + route;
    console.log('GET REQUEST', url);
    return this.httpClient.get<HttpResponse<any>>(url);
  }

  getCatalogoAreas() {
    return this.getRequest('catalogo/consulta/area');
  }
  getCatalogoDepartamentos() {
    return this.getRequest('catalogo/consulta/departamentos');
  }
  getCatalogoSubdepartamentos() {
    return this.getRequest('catalogo/consulta/subdepto');
  }

  consultaByNominaOrSoeid(data) {
    return this.postRequest(data, 'empleados/valusr');
  }

  registrarEmpleado(form) {
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
    return this.postRequest(data, 'empleados/alta');
  }

}
