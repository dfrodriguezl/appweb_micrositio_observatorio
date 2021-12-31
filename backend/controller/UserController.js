let Util = require("../common/Util");
const EmailService = require("../service/EmailServices");
const UserService = require("../service/UserServices");
const TemplateRegister = require("../template/TemplateRegister");
const Token = require("../classes/token");
class UserController {
  static async changePassord(req, res) {
    let util = new Util(res);
    console.log(req.body)
    let body = req.body;
    let response = {
      status: 200,
      data: {},
      message: "Email Enviado Exitosamente",
      code: "OK",
    };
    if (!body || typeof body !== "object") {
      util.saveData(response);
      return util.sendResponse();
    }
    try {
      let login = await UserService.login({
        email: req.body.usuario.email,
        infokey: req.body.infokey,
      });
      if (login) {
        req.body.email = req.body.usuario.email;
        req.body.infokey = req.body.newinfokey
        let updatePassword = await UserService.updatePassword(req.body);
        if (updatePassword) {
          response.code = "OK";
          response.message = "Cambio de contraseña exitoso";
        } else {
          response.code = "ERR001";
          response.message =
            "Lo sentimos , ocurrio un problema en nuestro sistema";
        }
      } else {
        response.code = "PWS001";
        response.message = "La contraseña no coincide con la contraseña actual";
      }
    } catch (error) {
      console.log(error);
      response.code = "ERROR";
      response.message = "Ocurrio un error en la actualizacion de datos";
    }
    util.saveData(response);
    return util.sendResponse();
  }
  static async resetPassword(req, res) {
    let util = new Util(res);
    console.log(req.body);
    let body = req.body;
    let response = {
      status: 200,
      data: {},
      message: "Email Enviado Exitosamente",
      code: "OK",
    };
    if (!body || typeof body !== "object") {
      util.saveData(response);
      return util.sendResponse();
    }
    try {
      let updatePassword = await UserService.updatePassword(body);

      if (updatePassword) {
        response.code = "OK";
        response.message = "Cambio de contraseña exitoso";
      } else {
        response.code = "USER001";
        response.message =
          "Lo sentimos, ese correo no esta registrado en nuestro sistema";
      }
    } catch (error) {
      console.log(error);
      response.code = "ERROR";
      response.message = "Ocurrio un error en la actualizacion de datos";
    }
    util.saveData(response);
    return util.sendResponse();
  }
  static async forgetPassword(req, res) {
    let util = new Util(res);
    let body = req.body;
    let response = {
      status: 200,
      data: {},
      message: "Email Enviado Exitosamente",
      code: "OK",
    };
    if (!body || typeof body !== "object") {
      util.saveData(response);
      return util.sendResponse();
    }
    try {
      let userFound = await UserService.searchUserEmail(body);

      if (userFound) {
        const tokenUser = await Token.generateJwtToken({
          id: userFound.id,
          name: userFound.name,
          email: userFound.email,
        });
        let split = tokenUser.split(".");
        let contenidoTemplate = TemplateRegister.getTemplateRegister(
          "http://localhost:9000/observatorio/restore/" +
            split[0] +
            "/" +
            split[1] +
            "/" +
            split[2]
        );
        await EmailService.sendEmail({
          email: body.email,
          contenido: contenidoTemplate,
          subject: "Recuperación contraseña",
        });
      } else {
        response.code = "USER001";
        response.message =
          "Lo sentimos, ese correo no esta registrado en nuestro sistema";
      }
    } catch (error) {
      console.log(error);
      response.code = "ERROR";
      response.message = "Ocurrio un error en el registro de datos";
    }
    util.saveData(response);
    return util.sendResponse();
  }
  static async createUser(req, res) {
    let util = new Util(res);
    let body = req.body;
    let response = {
      status: 200,
      data: {},
      message: "registro exitoso",
      code: "OK",
    };
    console.log(body);
    if (!body || typeof body !== "object") {
      util.saveData(response);
      return util.sendResponse();
    }
    try {
      let userFound = await UserService.searchUserEmail(body);
      if (userFound) {
        response.code = "US001";
        response.message = "Ocurrio un error en el registro de datos";
      } else {
        let success = await UserService.createUser(body);
        if (success != true) {
          response.code = "ERROR";
          response.message = "Ocurrio un error en el registro de datos";
        } else {
          await EmailService.sendEmail({
            email: body.email,
            contenido: "Felicidades te has registrado en nuestra plataforma",
            subject: "Usuario Registrado",
          });
        }
      }
    } catch (error) {
      console.log(error);
      response.code = "ERROR";
      response.message = "Ocurrio un error en el registro de datos";
    }

    util.saveData(response);
    return util.sendResponse();
  }

  static async login(req, res) {
    let util = new Util(res);
    let body = req.body;
    let response = {
      status: 200,
      data: {},
      message: "registro exitoso",
      code: "OK",
    };
    console.log(body);
    if (!body || typeof body !== "object") {
      util.saveData(response);
      return util.sendResponse();
    }
    try {
      let userFound = await UserService.login(body);

      if (userFound) {
        response.code = "OK";
        response.message = "Usuario encontrado";
        console.log(userFound);
        const tokenUser = await Token.getJwtToken({
          id: userFound.id,
          name: userFound.name,
          email: userFound.email,
        });
        response.data = {
          token: tokenUser,
          name:userFound.name
        };
      } else {
        response.code = "USER001";
        response.message = "Usuario o contraseña incorrectos";
      }
    } catch (error) {
      console.log(error);
      response.code = "ERROR";
      response.message = "Ocurrio un error inesperado";
    }
    util.saveData(response);
    return util.sendResponse();
  }

  static async testToken(req, res) {
    let util = new Util(res);
    let response = {
      status: 200,
      data: {},
      message: "prueba exitosa",
      code: "OK",
    };
    util.saveData(response);
    return util.sendResponse();
  }
}

module.exports = UserController;
