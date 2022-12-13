class MapFileBig {
  static fileregistrerbig(data) {
    console.log("pauAlejo", data);
    let location = [];
    if (typeof data.length === "undefined") {
      location[0] = {
        ID: 1,
        fecha_publicacion: "Sin Datos",
          departamento: "Sin Datos",
          municipio: "Sin Datos",
          direccion_inmueble: "Sin Datos",
          descripcion: "Sin Datos",
          precio: "Sin Datos",
          latitud: "Sin Datos",
          longitud: "Sin Datos",
          area_total: "Sin Datos",
          estrato: "Sin Datos",
          titulo: "Sin Datos",
          habitaciones: "Sin Datos",
          baños: "Sin Datos",
          area_construida: "Sin Datos",
          barrio: "Sin Datos",
          antigüedad: "Sin Datos",
          garages: "Sin Datos",
          no_piso: "Sin Datos",
          sitio_web: "Sin Datos",
          fecha_scraping: "Sin Datos",
          zona: "Sin Datos",
          contacto: "Sin Datos",
          valor_admin: "Sin Datos",
          direccion_inmobiliaria: "Sin Datos",
          subtitulo: "Sin Datos",
          detalles_inmuebles: "Sin Datos",
          url: "Sin Datos"
      };
    } else {
      for (let i = 0; i < data.length; i++) {
        let id = i;
        let fecha_public, latitud, longitud;
        
        //const newStr = str.slice(0, -14)
        if(data[i].fecha_publicacion == null){          
          fecha_public = "Sin fecha"
        }else{          
          fecha_public = data[i].fecha_publicacion.slice(0,-14)
        }

        if(data[i].latitud == null){
          latitud=0.0000
        }else{
          latitud=data[i].latitud;
        }

        if(data[i].longitud == null){
          longitud=-0.0000
        }else{
          longitud=data[i].longitud;
        }

        location[i] = {
          ID: id + 1,
          fecha_publicacion: fecha_public,
          departamento: data[i].departamento,
          municipio: data[i].municipio,
          direccion_inmueble: data[i].direccion_inmueble,
          descripcion: data[i].descripcion,
          precio: `$ ${data[i].precio.toLocaleString("en")}`,
          // latitud: data[i].latitud.toFixed(4),
          latitud: latitud.toFixed(4),
          longitud: longitud.toFixed(4),
          area_total: data[i].area_total,
          estrato: data[i].estrato,
          titulo: data[i].titulo,
          habitaciones: data[i].habitaciones,
          baños: data[i].baños,
          area_construida: data[i].area_construida,
          barrio: data[i].barrio,
          antigüedad: data[i].antigüedad,
          garages: data[i].garages,
          no_piso: data[i].no_piso,
          sitio_web: data[i].sitio_web,
          fecha_scraping: data[i].fecha_scraping,
          zona: data[i].zona,
          contacto: data[i].contacto,
          valor_admin: data[i].valor_admin,
          direccion_inmobiliaria: data[i].direccion_inmobiliaria,
          subtitulo: data[i].subtitulo,
          detalles_inmuebles: data[i].detalles_inmuebles,
          url: data[i].url
        };
      }
    }
    return location;
  }
}

module.exports = MapFileBig;
