class DashDestinacionExcel {

  static dashBoardExcelnNPH() {
    return [
      {
        id_oferta_nph:0,
        numero_predial_antiguo:"",
        numero_predial_nuevo:"",
        matricula_inmobiliaria:"",
        tipo_oferta:0,
        departamento:"",
        municipio:"",
        nombre_barrio: "",
        estrato:0,
        direccion: "",
        valor_arriendo: "",
        valor_de_la_oferta: null,
        porcentaje_de_negociacion: null,        
        valor_oferta_negociado: "",
        anio_construccion: "",
        area_terreno: "",
        area_construccion: "",
        vr_m2_construccion: "",
        vr_m2_terreno: "",
        observaciones:"",
        latitud: "",
        longitud: "",
        conservacion: 0,
        fecha_captura_oferta: "",
        tiempo_oferta_mercado: "",
        numero_contacto_oferente: "",
        nombre_oferente: "",
        avaluo_catastral: "",
        destinacion_economica: 0,
        derecho_tipo: 0,
        tipo_tipologia: 0
      },
    ];
  }

  static dashBoardExcelRural() {
    return [
      {
        id_oferta_rural: 0,
        numero_predial_antiguo: "",
        numero_predial_nuevo: "",
        matricula_inmobiliaria: "",
        tipo_oferta: 0,
        departamento: "",
        municipio: "",
        nombre_vereda: "",
        estrato: 0,
        tipo_inmuebles: "",
        direccion:"",
        valor_arriendo: "",
        valor_de_la_oferta: null,
        porcentaje_de_negociacion: null,
        valor_oferta_negociado: "",
        anio_construccion: "",
        area_terreno: "",
        area_construccion: "",
        vr_m2_construccion: "",
        vr_ha_terreno: "",
        observaciones:"",
        latitud: "",
        longitud: "",
        conservacion: 0,
        fecha_captura_oferta: "",
        tiempo_oferta_mercado: "",
        numero_contacto_oferente: "",   
        nombre_oferente: "", 
        avaluo_catastral: "",
        destinacion_economica: 0,
        derecho_tipo: "",
        tipo_tipologia: 0,  
        tipo_cultivos: "",
        construcciones_anexas: ""
      },
    ];
  }

  static dashBoardExcelPH() {
    return [
      {
        id_oferta_ph: null,
        numero_predial_antiguo: "",
        numero_predial_nuevo: "",
        matricula_inmobiliaria: "",
        tipo_oferta: null,
        departamento: "",
        municipio: "",
        nombre_barrio: "",
        estrato: null,
        direccion: "",
        valor_arriendo: "",
        valor_administracion: "",
        valor_oferta_venta: "",
        porcentaje_de_negociacion: null,
        valor_oferta_negociado: "",
        anio_construccion: "",
        altura_edificio: "",
        no_piso: null,
        area_construida: null,
        area_privada: "",
        no_garajes: "",
        no_depositos: "",
        vr_total_terraza: null,
        vr_garajes: "",
        vr_depositos: "",
        observaciones: "",
        latitud: "",
        longitud: "",
        conservacion: null,
        fecha_captura_oferta: "",
        tiempo_oferta_mercado: "",
        numero_contacto_oferente: "",
        nombre_oferente: "",
        coeficiente: "",
        avaluo_catastral: "",
        destinacion_economica: null,
        derecho_tipo: null,
        tipo_tipologia: null
      },
    ];
  }

}

module.exports = DashDestinacionExcel;
