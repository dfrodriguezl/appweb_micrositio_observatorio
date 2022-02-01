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
