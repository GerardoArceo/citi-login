export class TransformDate {

  static fechaAsString(myDate): string {
    if(myDate!=null){
      if (myDate.indexOf('-') != -1) {
        let fechaFormateada = myDate.split('-');
        if(fechaFormateada[2].length==4){
          return `${fechaFormateada[2]}-${fechaFormateada[1]}-${fechaFormateada[0]}`;
        } else {
          return `${fechaFormateada[0]}-${fechaFormateada[1]}-${fechaFormateada[2]}`;
        }
      }
    }
    return null;
  }

  static dateAsString(myDate: Date) {
    if (myDate != null) {
      // let fechaFormateada = myDate.toJSON().split('T')[0].split('-');
      // return `${fechaFormateada[0]}-${fechaFormateada[1]}-${fechaFormateada[2]}`;
      let fechaFormateada=myDate.toLocaleDateString().split('/');
      let mes= fechaFormateada[1].length==1?'0'+fechaFormateada[1]:fechaFormateada[1];
      if(fechaFormateada[2].length==4){
        let dia=fechaFormateada[0].length==1?'0'+fechaFormateada[0]:fechaFormateada[0];
        return `${fechaFormateada[2]}-${mes}-${dia}`;
      } else {
        return `${fechaFormateada[0]}-${mes}-${fechaFormateada[2]}`;
      }
    }
    return null;
  }

  static stringAsDate(dateString:string){ // yyyy-MM-dd
    if(dateString!=null){
      if (dateString.indexOf('-') != -1) {
        // let comodin=new Date(Date.now());
        // let offset=comodin.getTimezoneOffset()/60;
        // let horaTwoDigits=(offset.toString()).length==1?'0'+offset:offset;
        let fechaFormateada = dateString.split('-');
        // return new Date(`${fechaFormateada[2]}-${fechaFormateada[1]}-${fechaFormateada[0]} ${horaTwoDigits}:00:00`);
        if(fechaFormateada[2].length==4){
          return new Date(`${fechaFormateada[2]}-${fechaFormateada[1]}-${fechaFormateada[0]} 00:00:00`);
        } else {
          return new Date(`${fechaFormateada[0]}-${fechaFormateada[1]}-${fechaFormateada[2]} 00:00:00`);
        }

      }
    }
    return null;
  }

}
