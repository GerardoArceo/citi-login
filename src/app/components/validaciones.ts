import { AbstractControl } from '@angular/forms';

export class Validaciones {

  static maxLengthNumber(longitud: number) {
    return (c: AbstractControl) => {
      if (c.value == null) return null;
      if (String(c.value).trim().length > longitud) {
        return { maxLengthNumber: true };
      }
      return null;
    };
  }

  static existeId() {
    return (c: AbstractControl) => {
      if (c.value == null) return null;
      if (String(c.value).trim().length == 0) {
        return { existeId: true };
      }
      return null;
    };
  }

  static rfc(c: AbstractControl) {
    if (c.value == "") return null;
    let rfc = /^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))([A-Z\d]{3})?$/;
    if (!rfc.test(c.value)) {
      return { "rfc": true };
    }
    return null;
  }

  static soloLetras(c: AbstractControl) {
    if (c.value == "") return null;
    let rfc = /^[a-zA-ZñÑ áéíóúÁÉÍÓÚ]+$/;
    if (!rfc.test(c.value)) {
      return { "soloLetras": true };
    }
    return null;
  }

  static alfanumerico(c: AbstractControl) {
    if (c.value == "") return null;
    let rfc = /^[a-zA-ZñÑ áéíóúÁÉÍÓÚ 1234567890]+$/;
    if (!rfc.test(c.value)) {
      return { "soloLetras": true };
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

  static requerido(id) {
    let bnd = true;
    let inputs = document.querySelectorAll("#" + id + " input[req]");
    for (var i = 0, input; input = inputs[i++];) {
      if (input.value.trim().length > 0) {  
        bnd = (bnd ? true : bnd);
        input.classList.remove('input-validation');
      } else {
        bnd = false;
        input.classList.add('input-validation');
        input.classList.add(input.getAttribute('req') === "desc" ? "ng-invalid" : "h");
      }
    }
    let textAreas = document.querySelectorAll("#" + id + " textarea[req]");
    for (var j = 0, textArea; textArea = textAreas[j++];) {
      if (textArea.value.trim().length > 0) {
        bnd = (bnd ? true : bnd);
        textArea.classList.remove('input-validation');
      } else {
        bnd = false;
        textArea.classList.add('input-validation');
      }
    }
    let selects = document.querySelectorAll("#" + id + " select[req]");
    for (var s = 0, select; select = selects[s++];) {
      console.log(select.value);
      
      if (select.value != "-1") {
        bnd = (bnd ? true : bnd);
        select.classList.remove('lmn-input-validation');
      } else {
        bnd = false;
        select.classList.add('lmn-input-validation');
      }
    }
    return bnd;
  }

  static sinRepetidos(data1, data2) {
    let result = data1;
    let selection = [];
    if (data2.length > 0) {
      data2.find(item => {
        let index = 0;
        result.find(item2 => {
          if (item2) {
            if (String(item) === String(item2.ID)) {
              selection.push(item2);
              result.splice(index, 1);
            }
          }
          index++
        });
      });
    }
    result = {
      seleccionados: selection,
      noseleccionados: result
    };
    return result;
  }

  static seleccionados(data1, data2) {
    let selection = [];
    if (data2.length > 0) {
      data2.find(item => {
        data1.find(item2 => {
          if (String(item).trim() === String(item2.ID)) {
            selection.push(item2);
          }
        });
      });
    }
    return selection;
  }

  static soloId(data, id) {
    document.getElementById(id).classList.add('dual-list-validation');
    if (data.length === 0) return "";
    let temp = [];
    data.find(item => {
      temp.push(item.ID);
    });
    document.getElementById(id).classList.remove('dual-list-validation');
    return temp;
  }

}