const pool = require("../connection/conection");

class UserService {
  
  static async updatePassword(model) {
    pool.inicia();

    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "update  private.user  set passworduser = $2  where email = $1 ",
          [model.usuario.email, model.infokey],
          (error, result) => {
            console.log(error);
            if (error) {
              rechazar(false);
            }
            resolver(true);
          }
        );
    });
  }

  static async searchUserEmail(model) {
    pool.inicia();

    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "select u.id ,u.name ,u.email  from private.user u where u.email = $1 ",
          [model.email],
          (error, result) => {
            console.log(error);
            if (error) {
              rechazar(null);
            }
            if (result.rows.length > 0) {
              resolver(result.rows[0]);
            } else {
              resolver(null);
            }
          }
        );
    });
  }

  static async searchOfferPh(file, id_obsevatorio) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "select o.id_oferta_ph, o.codigo_observatorio from private.offerph o where o.id_oferta_ph= $1 and o.codigo_observatorio= $2",
          [file.a, id_obsevatorio],
          (error, result) => {
            
            if (error) {
              rechazar(null);
            }
            if (result.rows.length > 0) {
              resolver(result.rows[0]);
            } else {
              resolver(null);
            }
          }
        );
    });
  }

  static async searchOfferNph(file, id_obsevatorio) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "select o.id_oferta_nph, o.codigo_observatorio from private.offernph o where o.id_oferta_nph= $1 and o.codigo_observatorio= $2",
          [file.a, id_obsevatorio],
          (error, result) => {
            
            if (error) {
              rechazar(null);
            }
            if (result.rows.length > 0) {
              resolver(result.rows[0]);
            } else {
              resolver(null);
            }
          }          
        );
    });
  }

  static async searchOfferRural(file, id_obsevatorio) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "select o.id_oferta_rural, o.codigo_observatorio from private.offerrural o where o.id_oferta_rural= $1 and o.codigo_observatorio= $2",
          [file.a, id_obsevatorio],
          (error, result) => {
            
            if (error) {
              rechazar(null);
            }
            if (result.rows.length > 0) {
              resolver(result.rows[0]);
            } else {
              resolver(null);
            }
          }
        );
    });
  }

  static async updateOfferPh(file, id_obsevatorio) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "UPDATE private.offerph SET numero_predial_antiguo=$3, numero_predial_nuevo=$4, matricula_inmobiliaria=$5, tipo_oferta=$6, departamento=$7, municipio=$8, nombre_barrio=$9, estrato=$10, direccion=$11, valor_arriendo=$12, valor_administracion=$13, valor_oferta_venta=$14,porcentaje_de_negociacion=$15, valor_oferta_negociado=$16, anio_construccion=$17, altura_edificio=$18, no_piso=$19, area_construida=$20, area_privada=$21, no_garajes=$22, no_depositos=$23, vr_total_terraza=$24, vr_garajes=$25, vr_depositos=$26, observaciones=$27, latitud=$28, longitud=$29, conservacion=$30, fecha_captura_oferta=$31, tiempo_oferta_mercado=$32, numero_contacto_oferente=$33, nombre_oferente=$34, coeficiente=$35, avaluo_catastral=$36, destinacion_economica=$37, derecho_tipo=$38, tipo_tipologia=$39 WHERE id_oferta_ph=$1 and codigo_observatorio=$2",
          [file.a, id_obsevatorio,file.b, file.c, file.d, file.e, file.f, file.g, file.h, file.i, file.j, file.k, file.l, file.m, file.n, file.o, file.p, file.q, file.r, file.s, file.t, file.u, file.w, file.x, file.y, file.z, file.a26, file.a27, file.a28, file.a29, file.a30, file.a31, file.a32, file.a33, file.a34,file.a35, file.a36, file.a37, file.a38],
          (error, result) => {
            console.log(error);
            if (error) {
              rechazar(false);
            }
            resolver(true);
          }
        );
    });
  }

  static async updateOfferNph(file, id_obsevatorio) {
    pool.inicia();

    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "UPDATE private.offernph SET numero_predial_antiguo=$3, numero_predial_nuevo=$4, matricula_inmobiliaria=$5, tipo_oferta=$6, departamento=$7, municipio=$8, nombre_barrio=$9, estrato=$10, direccion=$11, valor_arriendo=$12, valor_de_la_oferta=$13, porcentaje_de_negociacion=$14, valor_oferta_negociado=$15, anio_construccion=$16, area_terreno=$17, area_construccion=$18, vr_m2_construccion=$19, vr_m2_terreno=$20, observaciones=$21, latitud=$22, longitud=$23, conservacion=$24, fecha_captura_oferta=$25, tiempo_oferta_mercado=$26, numero_contacto_oferente=$27, nombre_oferente=$28, avaluo_catastral=$29, destinacion_economica=$30, derecho_tipo=$31, tipo_tipologia=$32 WHERE id_oferta_nph=$1 and codigo_observatorio=$2",
          [file.a, id_obsevatorio, file.b, file.c, file.d, file.e, file.f, file.g, file.h, file.i, file.j, file.k, file.l, file.m, file.n, file.o, file.p, file.q, file.r, file.s, file.t, file.u, file.w, file.x, file.y, file.z, file.a26, file.a27, file.a28, file.a29, file.a30, file.a31],
          (error, result) => {
            console.log(error);
            if (error) {
              rechazar(false);
            }
            resolver(true);
          }
        );
    });
  }

  static async updateOfferRural(file, id_obsevatorio) {
    pool.inicia();

    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "UPDATE private.offerrural SET numero_predial_antiguo=$3, numero_predial_nuevo=$4, matricula_inmobiliaria=$5, tipo_oferta=$6, departamento=$7, municipio=$8, nombre_vereda=$9, estrato=$10, tipo_inmuebles=$11, direccion=$12, valor_arriendo=$13, valor_de_la_oferta=$14, porcentaje_de_negociacion=$15, valor_oferta_negociado=$16, anio_construccion=$17, area_terreno=$18, area_construccion=$19, vr_m2_construccion=$20, vr_ha_terreno=$21, observaciones=$22, latitud=$23, longitud=$24, conservacion=$25, fecha_captura_oferta=$26, tiempo_oferta_mercado=$27, numero_contacto_oferente=$28, nombre_oferente=$29, avaluo_catastral=$30, destinacion_economica=$31, derecho_tipo=$32, tipo_tipologia=$33, tipo_cultivos=$34, construcciones_anexas=$35 WHERE id_oferta_rural=$1 and codigo_observatorio=$2",
          [file.a, id_obsevatorio, file.b, file.c, file.d, file.e, file.f, file.g, file.h, file.i, file.j, file.k, file.l, file.m, file.n, file.o, file.p, file.q, file.r, file.s, file.t, file.u, file.w, file.x, file.y, file.z, file.a26, file.a27, file.a28, file.a29, file.a30, file.a31, file.a32, file.a33, file.a34],
          (error, result) => {
            console.log(error);
            if (error) {
              rechazar(false);
            }
            resolver(true);
          }
        );
    });
  }

  static async createUser(modelUser) {
    pool.inicia();

    return new Promise((resolver, rechazar) => {
      const r = pool
        .getConnection()
        .query(
          "INSERT INTO private.user (id,name, email,phone,passwordUser) VALUES (default,$1, $2,$3,$4) RETURNING id",
          [modelUser.name, modelUser.email, modelUser.phone, modelUser.infokey],
          (error, result) => {
            console.log(error);
            if (error) {
              rechazar(false);
            }            
            if (result.rows.length > 0) {
              resolver(result.rows[0]);
            } else {
              resolver(null);
            }
          }
        );
    });
  }

  static async uploadfileph(file, id_obsevatorio) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      const r = pool
        .getConnection()
        .query(
          "INSERT INTO private.offerph(id_offerph,id_oferta_ph, codigo_observatorio, numero_predial_antiguo, numero_predial_nuevo, matricula_inmobiliaria, tipo_oferta, departamento, municipio, nombre_barrio, estrato, direccion, valor_arriendo, valor_administracion, valor_oferta_venta, porcentaje_de_negociacion, valor_oferta_negociado, anio_construccion, altura_edificio, no_piso, area_construida, area_privada, no_garajes, no_depositos, vr_total_terraza, vr_garajes, vr_depositos, observaciones, latitud, longitud, conservacion, fecha_captura_oferta, tiempo_oferta_mercado, numero_contacto_oferente, nombre_oferente, coeficiente, avaluo_catastral, destinacion_economica, derecho_tipo, tipo_tipologia) VALUES (default,$1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39)",
          [file.a, id_obsevatorio,file.b, file.c, file.d, file.e, file.f, file.g, file.h, file.i, file.j, file.k, file.l, file.m, file.n, file.o, file.p, file.q, file.r, file.s, file.t, file.u, file.w, file.x, file.y, file.z, file.a26, file.a27, file.a28, file.a29, file.a30, file.a31, file.a32, file.a33, file.a34, file.a35, file.a36, file.a37, file.a38],
          (error, result) => {
            // console.log(error);
            if (error) {
              // rechazar(false);
            }
            if (result) {
              resolver(result.rows[0]);
            } else {
              resolver(null);
            }
          }
        );
    });
  }

  static async uploadfilerural(file, id_obsevatorio) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      const r = pool
        .getConnection()
        .query(
          "INSERT INTO private.offerrural(id_offerrural,id_oferta_rural, codigo_observatorio, numero_predial_antiguo, numero_predial_nuevo, matricula_inmobiliaria, tipo_oferta, departamento, municipio, nombre_vereda, estrato, tipo_inmuebles,direccion,valor_arriendo, valor_de_la_oferta, porcentaje_de_negociacion, valor_oferta_negociado, anio_construccion, area_terreno, area_construccion,vr_m2_construccion,vr_ha_terreno,observaciones, latitud, longitud, conservacion, fecha_captura_oferta, tiempo_oferta_mercado, numero_contacto_oferente, nombre_oferente, avaluo_catastral, destinacion_economica, derecho_tipo, tipo_tipologia, tipo_cultivos, construcciones_anexas) VALUES (default,$1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35)",
          [file.a, id_obsevatorio, file.b, file.c, file.d, file.e, file.f, file.g, file.h, file.i, file.j, file.k, file.l, file.m, file.n, file.o, file.p, file.q, file.r, file.s, file.t, file.u, file.w, file.x, file.y, file.z, file.a26, file.a27, file.a28, file.a29, file.a30, file.a31, file.a32, file.a33, file.a34],
          (error, result) => {
            // console.log(error);
            if (error) {
              // rechazar(false);
            }
            if (result) {
              resolver(result.rows[0]);
            } else {
              resolver(null);
            }
          }
        );
    });
  }

  static async uploadfilenph(file, id_obsevatorio) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      const r = pool
        .getConnection()
        .query(
          "INSERT INTO private.offernph(id_offernph,id_oferta_nph, codigo_observatorio, numero_predial_antiguo, numero_predial_nuevo, matricula_inmobiliaria, tipo_oferta, departamento, municipio, nombre_barrio, estrato, direccion, valor_arriendo, valor_de_la_oferta, porcentaje_de_negociacion, valor_oferta_negociado, anio_construccion, area_terreno,area_construccion, vr_m2_construccion,vr_m2_terreno, observaciones, latitud, longitud, conservacion, fecha_captura_oferta, tiempo_oferta_mercado, numero_contacto_oferente, nombre_oferente,  avaluo_catastral, destinacion_economica, derecho_tipo, tipo_tipologia) VALUES (default,$1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32)",
          [file.a, id_obsevatorio, file.b, file.c, file.d, file.e, file.f, file.g, file.h, file.i, file.j, file.k, file.l, file.m, file.n, file.o, file.p, file.q, file.r, file.s, file.t, file.u, file.w, file.x, file.y, file.z, file.a26, file.a27, file.a28, file.a29, file.a30, file.a31],
          (error, result) => {
            console.log(error);
            if (error) {
            rechazar(false);
            }
            if (result) {
              resolver(result.rows[0]);
            } else {
              resolver(null);
            }
          }
        );
    });
  }

  static async login(modelUser) {
    pool.inicia();

    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "select u.id ,u.name ,u.email  from private.user u where u.email = $1 and u.passwordUser = $2",
          [modelUser.email, modelUser.infokey],
          (error, result) => {
            console.log(error);
            if (error) {
              rechazar(null);
            }
            if (result.rows.length > 0) {
              resolver(result.rows[0]);
            } else {
              resolver(null);
            }
          }
        );
    });
  }

  static async statisticsph_venta_arriendo(obj) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      
      pool
        .getConnection()
        .query(
          "select d.nombre_tipo_oferta,count(p.tipo_oferta) as venta_arriendo from private.offerph as p inner join private.dom_tipo_oferta as d on p.tipo_oferta=d.id_tipo_oferta where p.codigo_observatorio = $1 and p.tipo_oferta=1 and p.estado_registro='Activo' GROUP BY d.nombre_tipo_oferta union select d.nombre_tipo_oferta, count(p.tipo_oferta) from private.offerph as p inner join private.dom_tipo_oferta as d on p.tipo_oferta=d.id_tipo_oferta where p.codigo_observatorio = $1 and p.tipo_oferta=0 and p.estado_registro='Activo' GROUP BY d.nombre_tipo_oferta",
          [obj],
          (error, result) => {
            
            if (error) {
              rechazar(null);
            }
            if (result.rows.length > 0) {                           
                resolver(result);
            } else {
              resolver(null);
            }            
          }
        );
    });
  }

  static async statisticsnph_venta_arriendo(obj) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      
      pool
        .getConnection()
        .query(
          "select d.nombre_tipo_oferta,count(p.tipo_oferta) as venta_arriendo from private.offernph as p inner join private.dom_tipo_oferta as d on p.tipo_oferta=d.id_tipo_oferta where p.codigo_observatorio = $1 and p.tipo_oferta=1 and p.estado_registro='Activo' GROUP BY d.nombre_tipo_oferta union select d.nombre_tipo_oferta, count(p.tipo_oferta) from private.offernph as p inner join private.dom_tipo_oferta as d on p.tipo_oferta=d.id_tipo_oferta where p.codigo_observatorio = $1 and p.tipo_oferta=0 and p.estado_registro='Activo' GROUP BY d.nombre_tipo_oferta",
          [obj],
          (error, result) => {
            
            if (error) {
              rechazar(null);
            }
            if (result.rows.length > 0) {                           
                resolver(result);
            } else {
              resolver(null);
            }            
          }
        );
    });
  }

  static async statisticsrural_venta_arriendo(obj) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      
      pool
        .getConnection()
        .query(
          "select d.nombre_tipo_oferta,count(p.tipo_oferta) as venta_arriendo from private.offerrural as p inner join private.dom_tipo_oferta as d on p.tipo_oferta=d.id_tipo_oferta where p.codigo_observatorio = $1 and p.tipo_oferta=1 and p.estado_registro='Activo' GROUP BY d.nombre_tipo_oferta union select d.nombre_tipo_oferta, count(p.tipo_oferta) from private.offerrural as p inner join private.dom_tipo_oferta as d on p.tipo_oferta=d.id_tipo_oferta where p.codigo_observatorio = $1 and p.tipo_oferta=0 and p.estado_registro='Activo' GROUP BY d.nombre_tipo_oferta",
          [obj],
          (error, result) => {
            
            if (error) {
              rechazar(null);
            }
            if (result.rows.length > 0) {                           
                resolver(result);
            } else {
              resolver(null);
            }            
          }
        );
    });
  }

  static async statisticsph(obj) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "SELECT count(*) as cantidad FROM private.offerph r where r.codigo_observatorio=$1 and r.estado_registro='Activo'",
          [obj],
          (error, result) => {
            
            if (error) {
              rechazar(null);
            }
            if (result.rows.length > 0) {
              resolver(result.rows[0]);
            } else {
              resolver(null);
            }
          }
        );
    });
  }

  static async statisticsnph(obj) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "SELECT count(*) as cantidad FROM private.offernph r where r.codigo_observatorio=$1 and r.estado_registro='Activo'",
          [obj],
          (error, result) => {
            
            if (error) {
              rechazar(null);
            }
            if (result.rows.length > 0) {
              
              resolver(result.rows[0]);
            } else {
              resolver(null);
            }
          }
        );
    });
  }

  static async statisticsrural(obj) {
    pool.inicia();

    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "SELECT count(*) as cantidad FROM private.offerrural r where r.codigo_observatorio=$1 and r.estado_registro='Activo'",
          [obj],
          (error, result) => {
            
            if (error) {
              rechazar(null);
            }
            if (result.rows.length > 0) {
              resolver(result.rows[0]);
            } else {
              resolver(null);
            }
          }
        );
    });
  }

  static async statisticsph_destinacion_economica(obj) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {      
      pool
        .getConnection()
        .query(
          "SELECT destinacionph, destinacion, codigo_observatorio FROM private.destinacionph where codigo_observatorio=$1",
          [obj],
          (error, result) => {        
            if (error) {
              rechazar(null);
            }
            if (result.rows.length > 0) {                           
                resolver(result);
            } else {
              resolver(null);
            }            
          }
        );
    });
  }

  static async statisticsnph_destinacion_economica(obj) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      
      pool
        .getConnection()
        .query(
          "SELECT destinacionnph, destinacion, codigo_observatorio FROM private.destinacionnph where codigo_observatorio=$1",
          [obj],
          (error, result) => {
            
            if (error) {
              rechazar(null);
            }
            if (result.rows.length > 0) {                           
                resolver(result);
            } else {
              resolver(null);
            }            
          }
        );
    });
  }

  static async statisticsrural_destinacion_economica(obj) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      
      pool
        .getConnection()
        .query(
          "SELECT destinacionrural, destinacion, codigo_observatorio FROM private.destinacionrural where codigo_observatorio=$1",
          [obj],
          (error, result) => {
            
            if (error) {
              rechazar(null);
            }
            if (result.rows.length > 0) {                           
                resolver(result);
            } else {
              resolver(null);
            }            
          }
        );
    });
  }

  static async locationPh(obj) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      
      pool
        .getConnection()
        .query(
          "SELECT ph.direccion, ph.departamento, dom.nombre_destinacion_economica, ph.observaciones, ph.latitud, ph.longitud FROM private.offerph as ph inner join private.dom_destinacion_economica as dom on dom.id_destinacion_economica=ph.destinacion_economica where ph.codigo_observatorio=$1 and ph.estado_registro='Activo'",
          [obj],
          (error, result) => {
            
            if (error) {
              rechazar(null);
            }
            if (result.rows.length > 0) {                           
                resolver(result);
            } else {
              resolver(null);
            }            
          }
        );
    });
  }

  static async locationNph(obj) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      
      pool
        .getConnection()
        .query(
          "SELECT nph.direccion, nph.departamento, dom.nombre_destinacion_economica, nph.observaciones, nph.latitud, nph.longitud FROM private.offernph as nph inner join private.dom_destinacion_economica as dom on dom.id_destinacion_economica=nph.destinacion_economica where nph.codigo_observatorio=$1 and nph.estado_registro='Activo'",
          [obj],
          (error, result) => {
            
            if (error) {
              rechazar(null);
            }
            if (result.rows.length > 0) {                           
                resolver(result);
            } else {
              resolver(null);
            }            
          }
        );
    });
  }

  static async locationRural(obj) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      
      pool
        .getConnection()
        .query(
          "SELECT rural.direccion, rural.departamento, dom.nombre_destinacion_economica, rural.observaciones, rural.latitud, rural.longitud FROM private.offerrural as rural inner join private.dom_destinacion_economica as dom on dom.id_destinacion_economica=rural.destinacion_economica where rural.codigo_observatorio=$1 and rural.estado_registro='Activo'",
          [obj],
          (error, result) => {
            
            if (error) {
              rechazar(null);
            }
            if (result.rows.length > 0) {                           
                resolver(result);
            } else {
              resolver(null);
            }            
          }
        );
    });
  }



  static async searchOfferPh1(file, id_obsevatorio) {
    //console.log("Busqueda",file)
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "select o.id_oferta_ph, o.codigo_observatorio from private.offerph o where o.id_oferta_ph= $1 and o.codigo_observatorio= $2",
          [file.ID_OFERTA_PH, id_obsevatorio],
          (error, result) => {
            
            if (error) {
              rechazar(null);
            }
            if (result.rows.length > 0) {
              resolver(result.rows[0]);
            } else {
              resolver(null);
            }
          }
        );
    });
  }

  static async searchOfferNph1(file, id_obsevatorio) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "select o.id_oferta_nph, o.codigo_observatorio from private.offernph o where o.id_oferta_nph= $1 and o.codigo_observatorio= $2",
          [file.ID_OFERTA_NPH, id_obsevatorio],
          (error, result) => {
            
            if (error) {
              rechazar(null);
            }
            if (result.rows.length > 0) {
              resolver(result.rows[0]);
            } else {
              resolver(null);
            }
          }          
        );
    });
  }

  static async searchOfferRural1(file, id_obsevatorio) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "select o.id_oferta_rural, o.codigo_observatorio from private.offerrural o where o.id_oferta_rural= $1 and o.codigo_observatorio= $2",
          [file.ID_OFERTA_RURAL, id_obsevatorio],
          (error, result) => {
            
            if (error) {
              rechazar(null);
            }
            if (result.rows.length > 0) {
              resolver(result.rows[0]);
            } else {
              resolver(null);
            }
          }
        );
    });
  }

  static async updateOfferPh1(file, id_obsevatorio,nombre_archivo) {
    let fecha = new Date((file.FECHA_CAPTURA_OFERTA - (25567 + 1)) * 86400 * 1000)  
    let fecha_hoy = new Date()
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "UPDATE private.offerph SET numero_predial_antiguo=$3, numero_predial_nuevo=$4, matricula_inmobiliaria=$5, tipo_oferta=$6, departamento=$7, municipio=$8, nombre_barrio=$9, estrato=$10, direccion=$11, valor_arriendo=$12, valor_administracion=$13, valor_oferta_venta=$14,porcentaje_de_negociacion=$15, valor_oferta_negociado=$16, anio_construccion=$17, altura_edificio=$18, no_piso=$19, area_construida=$20, area_privada=$21, no_garajes=$22, no_depositos=$23, vr_total_terraza=$24, vr_garajes=$25, vr_depositos=$26, observaciones=$27, latitud=$28, longitud=$29, conservacion=$30, fecha_captura_oferta=$31, tiempo_oferta_mercado=$32, numero_contacto_oferente=$33, nombre_oferente=$34, coeficiente=$35, avaluo_catastral=$36, destinacion_economica=$37, derecho_tipo=$38, tipo_tipologia=$39, fecha=$40, archivo=$41 WHERE id_oferta_ph=$1 and codigo_observatorio=$2",
          [file.ID_OFERTA_PH, id_obsevatorio,file.NUMERO_PREDIAL_ANTIGUO, file.NUMERO_PREDIAL_NUEVO, file.MATRICULA_INMOBILIARIA, file.TIPO_OFERTA, file.DEPARTAMENTO, file.MUNICIPIO, file.NOMBRE_BARRIO, file.ESTRATO, file.DIRECCION, file.VALOR_ARRIENDO, file.VALOR_ADMINISTRACION, file.VALOR_OFERTA_VENTA, file.PORCENTAJE_DE_NEGOCIACION, file.VALOR_OFERTA_NEGOCIADO, file.ANIO_CONSTRUCCION, file.ALTURA_EDIFICIO, file.No_PISO, file.AREA_CONSTRUIDA_m2, file.AREA_PRIVADA_m2, file.No_GARAJES, file.No_DEPOSITOS, file.VR_TOTAL_TERRAZA_BALCON_O_PATIO, file.VALOR_GARAJES, file.VALOR_DEPOSITOS, file.OBSERVACIONES, file.LATITUD, file.LONGITUD, file.CONSERVACION, fecha, file.TIEMPO_OFERTA_MERCADO, file.NUMERO_CONTACTO_OFERENTE, file.NOMBRE_OFERENTE, file.COEFICIENTE,file.AVALUO_CATASTRAL, file.DESTINACION_ECONOMICA, file.DERECHO_TIPO, file.TIPO_TIPOLOGIA, fecha_hoy, nombre_archivo],
          (error, result) => {
            console.log(error);
            if (error) {
              rechazar(false);
            }
            resolver(true);
          }
        );
    });
  }

  static async updateOfferNph1(file, id_obsevatorio, nombre_archivo) {
    let fecha = new Date((file.FECHA_CAPTURA_OFERTA - (25567 + 1)) * 86400 * 1000)  
    let fecha_hoy = new Date()
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "UPDATE private.offernph SET numero_predial_antiguo=$3, numero_predial_nuevo=$4, matricula_inmobiliaria=$5, tipo_oferta=$6, departamento=$7, municipio=$8, nombre_barrio=$9, estrato=$10, direccion=$11, valor_arriendo=$12, valor_de_la_oferta=$13, porcentaje_de_negociacion=$14, valor_oferta_negociado=$15, anio_construccion=$16, area_terreno=$17, area_construccion=$18, vr_m2_construccion=$19, vr_m2_terreno=$20, observaciones=$21, latitud=$22, longitud=$23, conservacion=$24, fecha_captura_oferta=$25, tiempo_oferta_mercado=$26, numero_contacto_oferente=$27, nombre_oferente=$28, avaluo_catastral=$29, destinacion_economica=$30, derecho_tipo=$31, tipo_tipologia=$32, fecha=$33, archivo=$34 WHERE id_oferta_nph=$1 and codigo_observatorio=$2",
          [file.ID_OFERTA_NPH, id_obsevatorio, file.NUMERO_PREDIAL_ANTIGUO, file.NUMERO_PREDIAL_NUEVO, file.MATRICULA_INMOBILIARIA, file.TIPO_OFERTA, file.DEPARTAMENTO, file.MUNICIPIO, file.NOMBRE_BARRIO, file.Estrato, file.DIRECCION, file.VALOR_ARRIENDO, file.VALOR_DE_LA_OFERTA, file.PORCENTAJE_DE_NEGOCIACION, file.VALOR_OFERTA_NEGOCIADO, file.ANIO_CONSTRUCCION, file.AREA_TERRENO, file.AREA_CONSTRUCCION, file.VR_M2_CONST, file.VR_M2_TERRENO, file.OBSERVACIONES, file.LATITUD, file.LONGITUD, file.CONSERVACION, fecha, file.TIEMPO_OFERTA_MERCADO, file.NUMERO_CONTACTO_OFERENTE, file.NOMBRE_OFERENTE, file.AVALUO_CATASTRAL, file.DESTINACION_ECONOMICA, file.DERECHO_TIPO, file.TIPO_TIPOLOGIA, fecha_hoy, nombre_archivo],
          (error, result) => {
            console.log(error);
            if (error) {
              rechazar(false);
            }
            resolver(true);
          }
        );
    });
  }

  static async updateOfferRural1(file, id_obsevatorio, nombre_archivo) {
    let fecha = new Date((file.FECHA_CAPTURA_OFERTA - (25567 + 1)) * 86400 * 1000)  
    let fecha_hoy = new Date()
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "UPDATE private.offerrural SET numero_predial_antiguo=$3, numero_predial_nuevo=$4, matricula_inmobiliaria=$5, tipo_oferta=$6, departamento=$7, municipio=$8, nombre_vereda=$9, estrato=$10, tipo_inmuebles=$11, direccion=$12, valor_arriendo=$13, valor_de_la_oferta=$14, porcentaje_de_negociacion=$15, valor_oferta_negociado=$16, anio_construccion=$17, area_terreno=$18, area_construccion=$19, vr_m2_construccion=$20, vr_ha_terreno=$21, observaciones=$22, latitud=$23, longitud=$24, conservacion=$25, fecha_captura_oferta=$26, tiempo_oferta_mercado=$27, numero_contacto_oferente=$28, nombre_oferente=$29, avaluo_catastral=$30, destinacion_economica=$31, derecho_tipo=$32, tipo_tipologia=$33, tipo_cultivos=$34, construcciones_anexas=$35, fecha=$36, archivo=$37 WHERE id_oferta_rural=$1 and codigo_observatorio=$2",
          [file.ID_OFERTA_RURAL, id_obsevatorio, file.NUMERO_PREDIAL_ANTIGUO, file.NUMERO_PREDIAL_NUEVO, file.MATRICULA_INMOBILIARIA, file.TIPO_OFERTA, file.DEPARTAMENTO, file.MUNICIPIO, file.NOMBRE_VERERDA, file.ESTRATO, file.TIPO_INMUEBLES, file.DIRECCION, file.VALOR_ARRIENDO, file.VALOR_DE_LA_OFERTA, file.PORCENTAJE_DE_NEGOCIACION, file.VALOR_OFERTA_NEGOCIADO, file.ANIO_CONSTRUCCION, file.AREA_TERRENO, file.AREA_CONSTRUCCION, file.VR_M2_CONST, file.VR_Ha_TERRENO, file.OBSERVACIONES, file.LATITUD, file.LONGITUD, file.CONSERVACION, fecha, file.TIEMPO_OFERTA_MERCADO, file.NUMERO_CONTACTO_OFERENTE, file.NOMBRE_OFERENTE, file.AVALUO_CATASTRAL, file.DESTINACION_ECONOMICA, file.DERECHO_TIPO, file.TIPO_TIPOLOGIA, file.TIPO_CULTIVOS, file.CONSTRUCCIONES_ANEXAS, fecha_hoy, nombre_archivo],
          (error, result) => {
            console.log(error);
            if (error) {
              rechazar(false);
            }
            resolver(true);
          }
        );
    });
  }

  static async uploadfileph1(file, id_obsevatorio, nombre_archivo) {
    let fecha = new Date((file.FECHA_CAPTURA_OFERTA - (25567 + 1)) * 86400 * 1000)   
    let fecha_hoy = new Date()
    let activo = "Activo"
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      const r = pool
        .getConnection()
        .query(
          "INSERT INTO private.offerph(id_offerph,id_oferta_ph, codigo_observatorio, numero_predial_antiguo, numero_predial_nuevo, matricula_inmobiliaria, tipo_oferta, departamento, municipio, nombre_barrio, estrato, direccion, valor_arriendo, valor_administracion, valor_oferta_venta, porcentaje_de_negociacion, valor_oferta_negociado, anio_construccion, altura_edificio, no_piso, area_construida, area_privada, no_garajes, no_depositos, vr_total_terraza, vr_garajes, vr_depositos, observaciones, latitud, longitud, conservacion, fecha_captura_oferta, tiempo_oferta_mercado, numero_contacto_oferente, nombre_oferente, coeficiente, avaluo_catastral, destinacion_economica, derecho_tipo, tipo_tipologia, fecha, estado_registro) VALUES (default,$1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40,$41,$42)",
          [file.ID_OFERTA_PH, id_obsevatorio,file.NUMERO_PREDIAL_ANTIGUO, file.NUMERO_PREDIAL_NUEVO, file.MATRICULA_INMOBILIARIA, file.TIPO_OFERTA, file.DEPARTAMENTO, file.MUNICIPIO, file.NOMBRE_BARRIO, file.ESTRATO, file.DIRECCION, file.VALOR_ARRIENDO, file.VALOR_ADMINISTRACION, file.VALOR_OFERTA_VENTA, file.PORCENTAJE_DE_NEGOCIACION, file.VALOR_OFERTA_NEGOCIADO, file.ANIO_CONSTRUCCION, file.ALTURA_EDIFICIO, file.No_PISO, file.AREA_CONSTRUIDA_m2, file.AREA_PRIVADA_m2, file.No_GARAJES, file.No_DEPOSITOS, file.VR_TOTAL_TERRAZA_BALCON_O_PATIO, file.VALOR_GARAJES, file.VALOR_DEPOSITOS, file.OBSERVACIONES, file.LATITUD, file.LONGITUD, file.CONSERVACION, fecha, file.TIEMPO_OFERTA_MERCADO, file.NUMERO_CONTACTO_OFERENTE, file.NOMBRE_OFERENTE, file.COEFICIENTE,file.AVALUO_CATASTRAL, file.DESTINACION_ECONOMICA, file.DERECHO_TIPO, file.TIPO_TIPOLOGIA,fecha_hoy,activo,nombre_archivo],
          (error, result) => {
            // console.log(error);
            if (error) {
              // rechazar(false);
            }
            if (result) {
              resolver(result.rows[0]);
            } else {
              resolver(null);
            }
          }
        );
    });
  }

  static async uploadfilerural1(file, id_obsevatorio, nombre_archivo) {
    let fecha = new Date((file.FECHA_CAPTURA_OFERTA - (25567 + 1)) * 86400 * 1000)  
    let fecha_hoy = new Date()
    let activo = "Activo"
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      const r = pool
        .getConnection()
        .query(
          "INSERT INTO private.offerrural(id_offerrural,id_oferta_rural, codigo_observatorio, numero_predial_antiguo, numero_predial_nuevo, matricula_inmobiliaria, tipo_oferta, departamento, municipio, nombre_vereda, estrato, tipo_inmuebles,direccion,valor_arriendo, valor_de_la_oferta, porcentaje_de_negociacion, valor_oferta_negociado, anio_construccion, area_terreno, area_construccion,vr_m2_construccion,vr_ha_terreno,observaciones, latitud, longitud, conservacion, fecha_captura_oferta, tiempo_oferta_mercado, numero_contacto_oferente, nombre_oferente, avaluo_catastral, destinacion_economica, derecho_tipo, tipo_tipologia, tipo_cultivos, construcciones_anexas, fecha, estado_registro) VALUES (default,$1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38)",
          [file.ID_OFERTA_RURAL, id_obsevatorio, file.NUMERO_PREDIAL_ANTIGUO, file.NUMERO_PREDIAL_NUEVO, file.MATRICULA_INMOBILIARIA, file.TIPO_OFERTA, file.DEPARTAMENTO, file.MUNICIPIO, file.NOMBRE_VERERDA, file.ESTRATO, file.TIPO_INMUEBLES, file.DIRECCION, file.VALOR_ARRIENDO, file.VALOR_DE_LA_OFERTA, file.PORCENTAJE_DE_NEGOCIACION, file.VALOR_OFERTA_NEGOCIADO, file.ANIO_CONSTRUCCION, file.AREA_TERRENO, file.AREA_CONSTRUCCION, file.VR_M2_CONST, file.VR_Ha_TERRENO, file.OBSERVACIONES, file.LATITUD, file.LONGITUD, file.CONSERVACION, fecha, file.TIEMPO_OFERTA_MERCADO, file.NUMERO_CONTACTO_OFERENTE, file.NOMBRE_OFERENTE, file.AVALUO_CATASTRAL, file.DESTINACION_ECONOMICA, file.DERECHO_TIPO, file.TIPO_TIPOLOGIA, file.TIPO_CULTIVOS, file.CONSTRUCCIONES_ANEXAS,fecha_hoy,activo,nombre_archivo],
          (error, result) => {
            // console.log(error);
            if (error) {
              // rechazar(false);
            }
            if (result) {
              resolver(result.rows[0]);
            } else {
              resolver(null);
            }
          }
        );
    });
  }

  static async uploadfilenph1(file, id_obsevatorio, nombre_archivo) {
    let fecha = new Date((file.FECHA_CAPTURA_OFERTA - (25567 + 1)) * 86400 * 1000)  
    let fecha_hoy = new Date()
    let activo = "Activo"
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      const r = pool
        .getConnection()
        .query(
          "INSERT INTO private.offernph(id_offernph,id_oferta_nph, codigo_observatorio, numero_predial_antiguo, numero_predial_nuevo, matricula_inmobiliaria, tipo_oferta, departamento, municipio, nombre_barrio, estrato, direccion, valor_arriendo, valor_de_la_oferta, porcentaje_de_negociacion, valor_oferta_negociado, anio_construccion, area_terreno,area_construccion, vr_m2_construccion,vr_m2_terreno, observaciones, latitud, longitud, conservacion, fecha_captura_oferta, tiempo_oferta_mercado, numero_contacto_oferente, nombre_oferente,  avaluo_catastral, destinacion_economica, derecho_tipo, tipo_tipologia, fecha, estado_registro) VALUES (default,$1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35)",
          [file.ID_OFERTA_NPH, id_obsevatorio, file.NUMERO_PREDIAL_ANTIGUO, file.NUMERO_PREDIAL_NUEVO, file.MATRICULA_INMOBILIARIA, file.TIPO_OFERTA, file.DEPARTAMENTO, file.MUNICIPIO, file.NOMBRE_BARRIO, file.Estrato, file.DIRECCION, file.VALOR_ARRIENDO, file.VALOR_DE_LA_OFERTA, file.PORCENTAJE_DE_NEGOCIACION, file.VALOR_OFERTA_NEGOCIADO, file.ANIO_CONSTRUCCION, file.AREA_TERRENO, file.AREA_CONSTRUCCION, file.VR_M2_CONST, file.VR_M2_TERRENO, file.OBSERVACIONES, file.LATITUD, file.LONGITUD, file.CONSERVACION, fecha, file.TIEMPO_OFERTA_MERCADO, file.NUMERO_CONTACTO_OFERENTE, file.NOMBRE_OFERENTE, file.AVALUO_CATASTRAL, file.DESTINACION_ECONOMICA, file.DERECHO_TIPO, file.TIPO_TIPOLOGIA,fecha_hoy,activo,nombre_archivo],
          (error, result) => {
            console.log(error);
            if (error) {
            rechazar(false);
            }
            if (result) {
              resolver(result.rows[0]);
            } else {
              resolver(null);
            }
          }
        );
    });
  }



  static async fileregistrerph(obj) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "SELECT fecha, archivo FROM private.offerph ph where ph.codigo_observatorio=$1 group by ph.fecha, ph.archivo order by fecha",
          [obj],
          (error, result) => {
            
            if (error) {
              rechazar(null);
            }
            if (result.rows.length > 0) {
              resolver(result);
            } else {
              resolver(null);
            }
          }
        );
    });
  }

  static async fileregistrernph(obj) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "SELECT fecha, archivo FROM private.offernph nph where nph.codigo_observatorio=$1 group by nph.fecha, nph.archivo order by fecha",
          [obj],
          (error, result) => {
            
            if (error) {
              rechazar(null);
            }
            if (result.rows.length > 0) {
              
              resolver(result);
            } else {
              resolver(null);
            }
          }
        );
    });
  }

  static async fileregistrerrural(obj) {
    pool.inicia();

    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "SELECT fecha, archivo FROM private.offerrural rural where rural.codigo_observatorio=$1 group by rural.fecha, rural.archivo order by fecha",
          [obj],
          (error, result) => {
            
            if (error) {
              rechazar(null);
            }
            if (result.rows.length > 0) {
              resolver(result);
            } else {
              resolver(null);
            }
          }
        );
    });
  }


  static async registrerph(obj, fecha) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "SELECT id_oferta_ph, codigo_observatorio, numero_predial_antiguo, numero_predial_nuevo, matricula_inmobiliaria, tipo_oferta, departamento, municipio, nombre_barrio, estrato, direccion, valor_arriendo, valor_administracion, valor_oferta_venta, porcentaje_de_negociacion, valor_oferta_negociado, anio_construccion, altura_edificio, no_piso, area_construida, area_privada, no_garajes, no_depositos, vr_total_terraza, vr_garajes, vr_depositos, observaciones, latitud, longitud, conservacion, fecha_captura_oferta, tiempo_oferta_mercado, numero_contacto_oferente, nombre_oferente, coeficiente, avaluo_catastral, destinacion_economica, derecho_tipo, tipo_tipologia FROM private.offerph ph where ph.codigo_observatorio=$1 and ph.fecha=$2 order by id_oferta_ph",
          [obj, fecha],
          (error, result) => {
            
            if (error) {
              rechazar(null);
            }
            if (result.rows.length > 0) {
              resolver(result);
            } else {
              resolver(null);
            }
          }
        );
    });
  }

  static async registrernph(obj, fecha) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "SELECT id_oferta_nph, codigo_observatorio, numero_predial_antiguo, numero_predial_nuevo, matricula_inmobiliaria, tipo_oferta, departamento, municipio, nombre_barrio, estrato, direccion, valor_arriendo, valor_de_la_oferta, porcentaje_de_negociacion, valor_oferta_negociado, anio_construccion, area_terreno, area_construccion, vr_m2_construccion, vr_m2_terreno, observaciones, latitud, longitud, conservacion, fecha_captura_oferta, tiempo_oferta_mercado, numero_contacto_oferente, nombre_oferente, avaluo_catastral, destinacion_economica, derecho_tipo, tipo_tipologia FROM private.offernph nph where nph.codigo_observatorio=$1 and nph.fecha=$2 order by id_oferta_nph",
          [obj, fecha],
          (error, result) => {
            
            if (error) {
              rechazar(null);
            }
            if (result.rows.length > 0) {
              
              resolver(result);
            } else {
              resolver(null);
            }
          }
        );
    });
  }

  static async registrerrural(obj, fecha) {
    pool.inicia();

    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "SELECT id_oferta_rural, codigo_observatorio, numero_predial_antiguo, numero_predial_nuevo, matricula_inmobiliaria, tipo_oferta, departamento, municipio, nombre_vereda, estrato, tipo_inmuebles, direccion, valor_arriendo, valor_de_la_oferta, porcentaje_de_negociacion, valor_oferta_negociado, anio_construccion, area_terreno, area_construccion, vr_m2_construccion, vr_ha_terreno, observaciones, latitud, longitud, conservacion, fecha_captura_oferta, tiempo_oferta_mercado, numero_contacto_oferente, nombre_oferente, avaluo_catastral, destinacion_economica, derecho_tipo, tipo_tipologia, tipo_cultivos, construcciones_anexas FROM private.offerrural rural where rural.codigo_observatorio=$1 and rural.fecha=$2 order by id_oferta_rural",
          [obj, fecha],
          (error, result) => {
            
            if (error) {
              rechazar(null);
            }
            if (result.rows.length > 0) {
              resolver(result);
            } else {
              resolver(null);
            }
          }
        );
    });
  }

  static async offerdataph(obj) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "SELECT id_oferta_ph, codigo_observatorio, numero_predial_antiguo, numero_predial_nuevo, matricula_inmobiliaria, tipo_oferta, departamento, municipio, fecha FROM private.offerph ph where ph.codigo_observatorio=$1 and ph.estado_registro='Activo'",
          [obj],
          (error, result) => {
            
            if (error) {
              rechazar(null);
            }
            if (result.rows.length > 0) {
              resolver(result);
            } else {
              resolver(null);
            }
          }
        );
    });
  }

  static async offerdatanph(obj) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "SELECT id_oferta_nph, codigo_observatorio, numero_predial_antiguo, numero_predial_nuevo, matricula_inmobiliaria, tipo_oferta, departamento, municipio, fecha FROM private.offernph nph where nph.codigo_observatorio=$1 and nph.estado_registro='Activo'",
          [obj],
          (error, result) => {
            
            if (error) {
              rechazar(null);
            }
            if (result.rows.length > 0) {
              
              resolver(result);
            } else {
              resolver(null);
            }
          }
        );
    });
  }

  static async offerdatarural(obj) {
    pool.inicia();

    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "SELECT id_oferta_rural, codigo_observatorio, numero_predial_antiguo, numero_predial_nuevo, matricula_inmobiliaria, tipo_oferta, departamento, municipio, fecha FROM private.offerrural rural where rural.codigo_observatorio=$1 and rural.estado_registro='Activo'",
          [obj],
          (error, result) => {
            
            if (error) {
              rechazar(null);
            }
            if (result.rows.length > 0) {
              resolver(result);
            } else {
              resolver(null);
            }
          }
        );
    });
  }

  static async deletPh(id_observatorio,matricula) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "UPDATE private.offerph SET estado_registro='Inactivo' WHERE codigo_observatorio=$1 and matricula_inmobiliaria=$2",
          [id_observatorio, matricula],
          (error, result) => {
            console.log(error);
            if (error) {
              rechazar(false);
            }
            resolver(true);
          }
        );
    });
  }

  static async deletNph(id_observatorio,matricula) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "UPDATE private.offernph SET estado_registro='Inactivo' WHERE codigo_observatorio=$1 and matricula_inmobiliaria=$2",
          [id_observatorio, matricula],
          (error, result) => {
            console.log(error);
            if (error) {
              rechazar(false);
            }
            resolver(true);
          }
        );
    });
  }

  static async deletRural(id_observatorio,matricula) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "UPDATE private.offerrural SET estado_registro='Inactivo' WHERE codigo_observatorio=$1 and matricula_inmobiliaria=$2",
          [id_observatorio, matricula],
          (error, result) => {
            console.log(error);
            if (error) {
              rechazar(false);
            }
            resolver(true);
          }
        );
    });
  }

}

module.exports = UserService;
