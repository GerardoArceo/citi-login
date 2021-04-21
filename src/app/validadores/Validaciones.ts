import { AbstractControl, FormControl } from '@angular/forms';

export class Validaciones {

  static maxLengthNumber(longitud: number) {
    return (c: AbstractControl) => {
      if (c.value == null) return null;
      if (String(c.value).trim().length > longitud) {
        return { maxLengthNumber: { maxValue: longitud } };
      }
      return null;
    };
  }

  static rfc(c: AbstractControl) {
    if (c.value == "" || c.value == null) { return null; }
    let rfc = /^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))([A-Z\d]{3})?$/;
    if (!rfc.test(c.value)) {
      return { "rfc": true };
    }
    return null;
  }

  static soloLetras(c: AbstractControl) {
    if (c.value == "" || c.value == null) { return null; }
    let exp = /^[a-zA-ZñÑ áéíóúÁÉÍÓÚÜü]+$/;
    if (!exp.test(c.value)) {
      return { "soloLetras": true };
    }
    return null;
  }

  static alfanumerico(c: AbstractControl) {
    if (c.value == "" || c.value == null) { return null; }
    let exp = /^[a-zA-ZñÑ áéíóúÁÉÍÓÚ 1234567890]+$/;
    if (!exp.test(c.value)) {
      return { alfanumerico: true };
    }
    return null;
  }

  static alfanumericoCaracteresEspeciales(c: AbstractControl) {
    if (c.value == "") return null;
    let exp = /^[a-zA-ZñÑ áéíóúÁÉÍÓÚ 1234567890,.@/]+$/;
    if (!exp.test(c.value)) {
      return { "alfanumericoCaracteresEspeciales": true };
    }
    return null;
  }

  static validaSelect(c: AbstractControl) {
    if (c.value == "") return null;
    if (String(c.value) === "-1") {
      return { "validaSelect": true };
    }
    return null;
  }

  static customMin(longitud: number, msg: string) {
    return (c: AbstractControl) => {
      if (c.value == null) { return null; }
      if (c.value < longitud) {
        return { customMin: msg };
      }
      return null;
    };
  }

  static selectorNotNullOrEmpty(description: FormControl, msg: string) {
    return (c: AbstractControl) => {
      if(c.value!="" && c.value!=null){
        if (description.value=="" || description.value==null) {
          return { selectorNotNullOrEmpty: msg };
        }
      }
      return null;
    };
  }

  static numerico(c: AbstractControl) {
    if (c.value == '' || c.value == null) { return null; }
    const exp = /^[1234567890]+$/;
    if (!exp.test(c.value)) {
      return { numerico: true };
    }
    return null;
  }

  static alfanumericoPunto(c: AbstractControl) {
    if (c.value == "") return null;
    let exp = /^[a-zA-ZñÑ áéíóúÁÉÍÓÚ 1234567890.]+$/;
    if (!exp.test(c.value)) {
      return { alfanumericoPunto: true };
    }
    return null;
  }

  static IP(c: AbstractControl) {
    if (c.value == "" || c.value == null) { return null; }
    let IP = /^\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/;
    if (!IP.test(c.value)) {
      return { IP: true };
    }
    return null;
  }

  static noBlanks(c: AbstractControl) {

      if (c.value == null) { return null; }
      let exp = /^\s+$/;
      if (exp.test(c.value)) {
        return { blankSpace: true };
      }
      return null;
  }

}
