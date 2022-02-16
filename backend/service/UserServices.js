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

  static async searchOfferPh(file) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "select o.id_oferta_ph, o.codigo_observatorio from private.offerph o where o.id_oferta_ph= $1 and o.codigo_observatorio= $2",
          [file.a, file.b],
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

  static async searchOfferNph(file) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "select o.id_oferta_nph, o.codigo_observatorio from private.offernph o where o.id_oferta_nph= $1 and o.codigo_observatorio= $2",
          [file.a, file.b],
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

  static async searchOfferRural(file) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "select o.id_oferta_rural, o.codigo_observatorio from private.offerrural o where o.id_oferta_rural= $1 and o.codigo_observatorio= $2",
          [file.a, file.b],
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

  static async updateOfferPh(file) {
    pool.inicia();

    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "UPDATE private.offerph SET numero_predial_antiguo=$3, numero_predial_nuevo=$4, matricula_inmobiliaria=$5, tipo_oferta=$6, departamento=$7, municipio=$8, nombre_barrio=$9, estrato=$10, direccion=$11, valor_arriendo=$12, valor_administracion=$13, valor_oferta_venta=$14,porcentaje_de_negociacion=$15, valor_oferta_negociado=$16, anio_construccion=$17, altura_edificio=$18, no_piso=$19, area_construida=$20, area_privada=$21, no_garajes=$22, no_depositos=$23, vr_total_terraza=$24, vr_garajes=$25, vr_depositos=$26, observaciones=$27, latitud=$28, longitud=$29, conservacion=$30, fecha_captura_oferta=$31, tiempo_oferta_mercado=$32, numero_contacto_oferente=$33, nombre_oferente=$34, coeficiente=$35, avaluo_catastral=$36, destinacion_economica=$37, derecho_tipo=$38, tipo_tipologia=$39 WHERE id_oferta_ph=$1 and codigo_observatorio=$2",
          [file.a, file.b, file.c, file.d, file.e, file.f, file.g, file.h, file.i, file.j, file.k, file.l, file.m, file.n, file.o, file.p, file.q, file.r, file.s, file.t, file.u, file.w, file.x, file.y, file.z, file.a26, file.a27, file.a28, file.a29, file.a30, file.a31, file.a32, file.a33, file.a34,file.a35, file.a36, file.a37, file.a38,file.a39],
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

  static async updateOfferNph(file) {
    pool.inicia();

    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "UPDATE private.offernph SET numero_predial_antiguo=$3, numero_predial_nuevo=$4, matricula_inmobiliaria=$5, tipo_oferta=$6, departamento=$7, municipio=$8, nombre_barrio=$9, estrato=$10, direccion=$11, valor_arriendo=$12, valor_de_la_oferta=$13, porcentaje_de_negociacion=$14, valor_oferta_negociado=$15, anio_construccion=$16, area_terreno=$17, area_construccion=$18, vr_m2_construccion=$19, vr_m2_terreno=$20, observaciones=$21, latitud=$22, longitud=$23, conservacion=$24, fecha_captura_oferta=$25, tiempo_oferta_mercado=$26, numero_contacto_oferente=$27, nombre_oferente=$28, avaluo_catastral=$29, destinacion_economica=$30, derecho_tipo=$31, tipo_tipologia=$32 WHERE id_oferta_nph=$1 and codigo_observatorio=$2",
          [file.a, file.b, file.c, file.d, file.e, file.f, file.g, file.h, file.i, file.j, file.k, file.l, file.m, file.n, file.o, file.p, file.q, file.r, file.s, file.t, file.u, file.w, file.x, file.y, file.z, file.a26, file.a27, file.a28, file.a29, file.a30, file.a31, file.a32],
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

  static async updateOfferRural(file) {
    pool.inicia();

    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "UPDATE private.offerrural SET numero_predial_antiguo=$3, numero_predial_nuevo=$4, matricula_inmobiliaria=$5, tipo_oferta=$6, departamento=$7, municipio=$8, nombre_vereda=$9, estrato=$10, tipo_inmuebles=$11, direccion=$12, valor_arriendo=$13, valor_de_la_oferta=$14, porcentaje_de_negociacion=$15, valor_oferta_negociado=$16, anio_construccion=$17, area_terreno=$18, area_construccion=$19, vr_m2_construccion=$20, vr_ha_terreno=$21, observaciones=$22, latitud=$23, longitud=$24, conservacion=$25, fecha_captura_oferta=$26, tiempo_oferta_mercado=$27, numero_contacto_oferente=$28, nombre_oferente=$29, avaluo_catastral=$30, destinacion_economica=$31, derecho_tipo=$32, tipo_tipologia=$33, tipo_cultivos=$34, construcciones_anexas=$35 WHERE id_oferta_rural=$1 and codigo_observatorio=$2",
          [file.a, file.b, file.c, file.d, file.e, file.f, file.g, file.h, file.i, file.j, file.k, file.l, file.m, file.n, file.o, file.p, file.q, file.r, file.s, file.t, file.u, file.w, file.x, file.y, file.z, file.a26, file.a27, file.a28, file.a29, file.a30, file.a31, file.a32, file.a33, file.a34,file.a35],
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

  static async uploadfileph(file) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      const r = pool
        .getConnection()
        .query(
          "INSERT INTO private.offerph(id_offerph,id_oferta_ph, codigo_observatorio, numero_predial_antiguo, numero_predial_nuevo, matricula_inmobiliaria, tipo_oferta, departamento, municipio, nombre_barrio, estrato, direccion, valor_arriendo, valor_administracion, valor_oferta_venta, porcentaje_de_negociacion, valor_oferta_negociado, anio_construccion, altura_edificio, no_piso, area_construida, area_privada, no_garajes, no_depositos, vr_total_terraza, vr_garajes, vr_depositos, observaciones, latitud, longitud, conservacion, fecha_captura_oferta, tiempo_oferta_mercado, numero_contacto_oferente, nombre_oferente, coeficiente, avaluo_catastral, destinacion_economica, derecho_tipo, tipo_tipologia) VALUES (default,$1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39)",
          [file.a, file.b, file.c, file.d, file.e, file.f, file.g, file.h, file.i, file.j, file.k, file.l, file.m, file.n, file.o, file.p, file.q, file.r, file.s, file.t, file.u, file.w, file.x, file.y, file.z, file.a26, file.a27, file.a28, file.a29, file.a30, file.a31, file.a32, file.a33, file.a34, file.a35, file.a36, file.a37, file.a38, file.a39 ],
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

  static async uploadfilerural(file) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      const r = pool
        .getConnection()
        .query(
          "INSERT INTO private.offerrural(id_offerrural,id_oferta_rural, codigo_observatorio, numero_predial_antiguo, numero_predial_nuevo, matricula_inmobiliaria, tipo_oferta, departamento, municipio, nombre_vereda, estrato, tipo_inmuebles,direccion,valor_arriendo, valor_de_la_oferta, porcentaje_de_negociacion, valor_oferta_negociado, anio_construccion, area_terreno, area_construccion,vr_m2_construccion,vr_ha_terreno,observaciones, latitud, longitud, conservacion, fecha_captura_oferta, tiempo_oferta_mercado, numero_contacto_oferente, nombre_oferente, avaluo_catastral, destinacion_economica, derecho_tipo, tipo_tipologia, tipo_cultivos, construcciones_anexas) VALUES (default,$1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35)",
          [file.a, file.b, file.c, file.d, file.e, file.f, file.g, file.h, file.i, file.j, file.k, file.l, file.m, file.n, file.o, file.p, file.q, file.r, file.s, file.t, file.u, file.w, file.x, file.y, file.z, file.a26, file.a27, file.a28, file.a29, file.a30, file.a31, file.a32, file.a33, file.a34,file.a35],
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

  static async uploadfilenph(file) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      const r = pool
        .getConnection()
        .query(
          "INSERT INTO private.offernph(id_offernph,id_oferta_nph, codigo_observatorio, numero_predial_antiguo, numero_predial_nuevo, matricula_inmobiliaria, tipo_oferta, departamento, municipio, nombre_barrio, estrato, direccion, valor_arriendo, valor_de_la_oferta, porcentaje_de_negociacion, valor_oferta_negociado, anio_construccion, area_terreno,area_construccion, vr_m2_construccion,vr_m2_terreno, observaciones, latitud, longitud, conservacion, fecha_captura_oferta, tiempo_oferta_mercado, numero_contacto_oferente, nombre_oferente,  avaluo_catastral, destinacion_economica, derecho_tipo, tipo_tipologia) VALUES (default,$1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32)",
          [file.a, file.b, file.c, file.d, file.e, file.f, file.g, file.h, file.i, file.j, file.k, file.l, file.m, file.n, file.o, file.p, file.q, file.r, file.s, file.t, file.u, file.w, file.x, file.y, file.z, file.a26, file.a27, file.a28, file.a29, file.a30, file.a31, file.a32 ],
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

  static async statisticsph(obj) {
    pool.inicia();
    return new Promise((resolver, rechazar) => {
      pool
        .getConnection()
        .query(
          "SELECT count(*) as cantidad FROM private.offerph r where r.codigo_observatorio=$1",
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
          "SELECT count(*) as cantidad FROM private.offernph r where r.codigo_observatorio=$1",
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
          "SELECT count(*) as cantidad FROM private.offerrural r where r.codigo_observatorio=$1",
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
}

module.exports = UserService;
