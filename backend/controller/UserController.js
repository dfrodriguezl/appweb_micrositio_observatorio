let Util = require("../common/Util");
const EmailService = require("../service/EmailServices");
const UserService = require("../service/UserServices");
const TemplateRegister = require("../template/TemplateRegister");
const TemplateLogin = require("../template/TemplateLogin");
const Token = require("../classes/token");
const xlsxFile = require("read-excel-file/node");
const fs = require("fs");
const ParserModel = require("../classes/parserModel");
const SheetsController = require("./SheetsController");
class UserController {

  static async changePassord(req, res) {
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
      let login = await UserService.login({
        email: req.body.usuario.email,
        infokey: req.body.infokey,
      });
      if (login) {
        req.body.email = req.body.usuario.email;
        req.body.infokey = req.body.newinfokey;
        let updatePassword = await UserService.updatePassword(req.body);
        if (updatePassword) {
          response.code = "OK";
          response.message = "Cambio de contraseña exitoso";
        } else {
          response.code = "ERR001";
          response.message =
            "Lo sentimos, ocurrio un problema en nuestro sistema";
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
          "https://nowsoft.app/Observatorio/restore/" +
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
        if (success) {
          const id = success.id;
          console.log(id);
          let contenidoTemplateLogin = TemplateLogin.getTemplateLogin(id);
          await EmailService.sendEmail({
            email: body.email,
            contenido: contenidoTemplateLogin,
            subject: "Usuario Registrado",
          });
        } else {
          response.code = "ERROR";
          response.message = "Ocurrio un error en el registro de datos";
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
    
    if (!body || typeof body !== "object") {
      util.saveData(response);
      return util.sendResponse();
    }
    try {
      let userFound = await UserService.login(body);

      if (userFound) {
        response.code = "OK";
        response.message = "Usuario encontrado";        
        const tokenUser = await Token.getJwtToken({
          id: userFound.id,
          name: userFound.name,
          email: userFound.email,
        });
        response.data = {
          token: tokenUser,
          name: userFound.name,
          id: userFound.id,
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

  static async statistics(req, res) {
    let util = new Util(res);
    let body = req.body;
    let response = {
      status: 200,
      data: {},
      message: "Email Enviado Exitosamente",
      code: "OK",
    };    
    try {           
        let selectph = await UserService.statisticsph(req.body.usuario.id);
        let selectnph = await UserService.statisticsnph(req.body.usuario.id);
        let selectrural = await UserService.statisticsrural(req.body.usuario.id);
        if (selectph && selectnph && selectrural) {
          response.code = "OK";
          response.message = "Estadisticas encontradas";
          response.data = {
            cantidadph: selectph.cantidad,
            cantidadnph: selectnph.cantidad,
            cantidadrural: selectrural.cantidad,
          };
        } else {
          response.code = "ERR001";
          response.message =
            "Lo sentimos, ocurrio un problema en nuestro sistema";
        }
    } catch (error) {
      console.log(error);
      response.code = "ERROR";
      response.message = "Ocurrio un error en la actualizacion de datos";
    }
    
    util.saveData(response);
    return util.sendResponse();
  }

  static async upload(req, res) {
    let util = new Util(res);
    let file = req.files.archivo;
    
    let ext = "xlsx";
    let log = "asd";
    let nombre = Date.now() + ".xlsx"
    let stream = fs.createWriteStream("./public/" + nombre);
    // let position = 0;
    let response = {
      status: 200,
      data: {},
      message: "registro exitoso",
      code: "OK",
    };
    stream.write(file.data, async (err) => { //excel
      try {
        xlsxFile("./public/" + nombre, { getSheets: true })
          .then(async (sheets) => {
            console.log(sheets)
            for(let i = 0; i < sheets.length;i++){
              let rows = await  SheetsController.openSheetsFile(nombre,sheets[i].name)
              let newRows = rows.splice(2, rows.length);
                for (let i = 0; i < newRows.length; i++) {
                  let dataToSend;                                                 
                  switch (sheets[i].name) {                                         
                    case "PH":
                      console.log({dataToSend})
                      dataToSend = ParserModel.transformToSheetsPH(                          
                        newRows[i]
                      ); //transforma en el objeto que se creo en el enviador
                      
                      let phfound = await UserService.searchOfferPh(dataToSend);     
                      if(phfound){
                        await UserService.updateOfferPh(dataToSend)  //aqui iria para update
                        console.log("holaph")
                      }else{
                        await UserService.uploadfileph(dataToSend)  //aqui iria parainsert
                        
                      }
                      break;
                    case "NPH":                        
                      dataToSend = ParserModel.transformToSheetsNPH(                          
                        newRows[i]
                      ); //transforma en el objeto que se creo en el enviador
                      
                      let nphfound = await UserService.searchOfferNph(dataToSend);
                      if(nphfound){
                        await UserService.updateOfferNph(dataToSend)  //aqui iria para update
                        console.log("holanph")
                      }else{
                        await UserService.uploadfilenph(dataToSend)  //aqui iria parainsert
                        
                      }
                      break;
                    case "RURAL":                        
                      dataToSend = ParserModel.transformToSheetsRURAL(                          
                        newRows[i]
                      ); //transforma en el objeto que se creo en el enviador
                      
                      let ruralfound = await UserService.searchOfferRural(dataToSend);
                      if(ruralfound){
                        await UserService.updateOfferRural(dataToSend)  //aqui iria para update
                      }else{
                        await UserService.uploadfilerural(dataToSend)  //aqui iria parainsert
                        
                      }
                      break;
                  }
                }   
            }
            util.saveData(response);
            return util.sendResponse();
          })
          .catch((err) => {
            console.log(err)
            response.code = "ERROR";
            response.message = "Ocurrio un error inesperado";
            util.saveData(response);
            return util.sendResponse();
          });
      } catch (error) {
        console.log(error)
        response.code = "ERROR";
        response.message = "Ocurrio un error inesperado";
        util.saveData(response);
        return util.sendResponse();
      }  
    });
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
