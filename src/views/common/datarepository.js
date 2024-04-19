

class MapFile{
  
  static fileregistrer (data){
    let location = [];
    if(typeof data.length === "undefined" ){
      location[0] =
      {
        ID: 1,
        FirstName: 'Sin Datos',
        Prefix: 'Sin Datos',
        BirthDate: 'Sin Datos',
      }
    }else{
      for (let i = 0; i < data.length; i++) {
        let id = i
        location[i] =
           {
              ID: id+1,
              FirstName: 'xlsx',
              Prefix: data[i].archivo,
              BirthDate: data[i].fecha,
           }          
       }
    }
    return location;
  }  

  static fileregistrerrowph (data){
    let location=[]; 
   // console.log("arreglo", data)
    //let arraynew = [].concat(dataph, datanph, datarural);
    if(typeof data.length === "undefined" ){
      location[0] =
      {
        ID: 1,
        FirstName: 'Sin Datos',
        Prefix: 'Sin Datos',
        BirthDate: 'Sin Datos',
        Estado: 'true',
      }
    }else{
      for (let i = 0; i < data.length; i++) {
        location[i] =
           {
              ID: data[i].matricula_inmobiliaria,
              FirstName: data[i].numero_predial_antiguo,
              Departamento:data[i].departamento,
              Municipio:data[i].municipio,
              Matricula_inmobiliaria:data[i].matricula_inmobiliaria,
              Tipo_oferta:data[i].tipo_oferta,
              Prefix: data[i].numero_predial_nuevo,
              BirthDate: data[i].fecha,
              Estado: 'false',
           }          
       }
    }
    return location;
  }

  static fileregistrerrownph (data){
    let location=[]; 
   // console.log("arreglo", data)
    //let arraynew = [].concat(dataph, datanph, datarural);
    if(typeof data.length === "undefined" ){
      location[0] =
      {
        ID: 1,
        FirstName: 'Sin Datos',
        Prefix: 'Sin Datos',
        BirthDate: 'Sin Datos',
        Estado: 'true',
      }
    }else{
      for (let i = 0; i < data.length; i++) {
        location[i] =
           {
              ID: data[i].matricula_inmobiliaria,
              FirstName: data[i].numero_predial_antiguo,
              Departamento:data[i].departamento,
              Municipio:data[i].municipio,
              Matricula_inmobiliaria:data[i].matricula_inmobiliaria,
              Tipo_oferta:data[i].tipo_oferta,
              Prefix: data[i].numero_predial_nuevo,
              BirthDate: data[i].fecha,
              Estado: 'false',
           }          
       }
    }
    return location;
  }

  static fileregistrerrowrural (data){
    let location=[]; 
   // console.log("arreglo", data)
    //let arraynew = [].concat(dataph, datanph, datarural);
    if(typeof data.length === "undefined" ){
      location[0] =
      {
        ID: 1,
        FirstName: 'Sin Datos',
        Prefix: 'Sin Datos',
        BirthDate: 'Sin Datos',
        Estado: 'true',
      }
    }else{
      for (let i = 0; i < data.length; i++) {
        location[i] =
           {
              ID: data[i].matricula_inmobiliaria,
              FirstName: data[i].numero_predial_antiguo,
              Departamento:data[i].departamento,
              Municipio:data[i].municipio,
              Matricula_inmobiliaria:data[i].matricula_inmobiliaria,
              Tipo_oferta:data[i].tipo_oferta,
              Prefix: data[i].numero_predial_nuevo,
              BirthDate: data[i].fecha,
              Estado: 'false',
           }          
       }
    }
    return location;
  }
}

module.exports = MapFile
