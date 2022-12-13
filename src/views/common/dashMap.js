class MapDash {
  static markersDataPh(data){    
    
    let location = [];    
    if(typeof data.length === "undefined" ){
      location[0] =
      {
            location: [4.3556, -74.0451],
            tooltip: {
              text: '<h2>Información</h2><br><h4>Sin Información en la BD para mostrar</h4>',
            },
      }
    }else{
      for (let i = 0; i < data.length; i++) {
        location[i] =
           {
                 location: [data[i].latitud, data[i].longitud],
                 tooltip: {
                   text: '<h2>Información</h2><br><h4>'+data[i].nombre_destinacion_economica+'</h4>',
                 },
                 prueba:data[i].nombre_destinacion_economica
           }          
       }
    }    
    return location;
  }

  static markersDataNph(data){   
    let location = [];
    if(typeof data.length === "undefined" ){
      location[0] =
      {
            location: [4.3556, -74.0451],
            tooltip: {
              text: '<h2>Información</h2><br><h4>Sin Información en la BD para mostrar</h4>',
            },
      }
    }else{
      for (let i = 0; i < data.length; i++) {
        location[i] =
           {
                 location: [data[i].latitud, data[i].longitud],
                 tooltip: {
                   text: '<h2>Información</h2><br><h4>'+data[i].nombre_destinacion_economica+'</h4>',
                 },
                 prueba:data[i].nombre_destinacion_economica
           }          
       }
    }    
    return location;
  }

  static markersDataRural(data){   
    let location = [];
    if(typeof data.length === "undefined" ){
      location[0] =
      {
            location: [4.3556, -74.0451],
            tooltip: {
              text: '<h2>Información</h2><br><h4>Sin Información en la BD para mostrar</h4>',
            },
      }
    }else{
      for (let i = 0; i < data.length; i++) {
        location[i] =
           {
                 location: [data[i].latitud, data[i].longitud],
                 tooltip: {
                   text: '<h2>Información</h2><br><h4>'+data[i].nombre_destinacion_economica+'</h4>',
                 },
                 prueba:data[i].nombre_destinacion_economica
           }          
       }
    }    
    return location;
  }
}
module.exports = MapDash

