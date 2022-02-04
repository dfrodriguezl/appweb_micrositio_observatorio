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

  static async uploadfile(file) {
    pool.inicia();

    return new Promise((resolver, rechazar) => {
      const r = pool
        .getConnection()
        .query(
          "INSERT INTO private.offerPH(id_ofertaph, codigo_observatorio,numero_predial_antiguo,numero_predial_nuevo,matricula_inmobiliaria,tipo_oferta,departamento,municipio,nombre_barrio,estrato,direccion, valor_arriendo, valor_oferta_venta, porcentaje_de_negociacion, valor_oferta_negociado,anio_construccion,altura_edificio, no_piso, area_construida, area_privada, no_garajes, no_despositos, vr_total_terraza, vr_garajes, vr_depositos, observaciones, latitud,longitud,conservacion,fecha_captura_oferta, tiempo_oferta_mercado,numero_contacto_oferente, nombre_oferente,coeficiente,avaluo_catastral, destinacion_economica, derecho_tipo, tipo_tipologia) VALUES (default,$1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38) RETURNING id",
          [file.a, file.b, file.c, file.d, file.e, file.f, file.g, file.h, file.i, file.j, file.k, file.l, file.m, file.n, file.o, file.p, file.q, file.r, file.s, file.t, file.u, file.w, file.x, file.y, file.z, file.a26, file.a27, file.a28, file.a29, file.a30, file.a31, file.a32, file.a33, file.a34, file.a35, file.a36, file.a37, file.a38 ],
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
}

module.exports = UserService;
