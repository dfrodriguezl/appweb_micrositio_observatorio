let Util = require("../common/Util");
const EmailService = require("../service/EmailServices");
const Validate = require("../service/Validate");
const UserService = require("../service/UserServices");
const TemplateRegister = require("../template/TemplateRegister");
const TemplateLogin = require("../template/TemplateLogin");
const Token = require("../classes/token");
//import enviroment from "../../src/config/enviroment";
const xlsxFile = require("read-excel-file/node");
const fs = require("fs");
const ParserModel = require("../classes/parserModel");
const SheetsController = require("./SheetsController");
const xlsx = require("xlsx");
const moment = require("moment");
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
          `https://geoportal.dane.gov.co/observatorio/restore/` +
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
          rol: userFound.id_user,
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

  static async filesregistrer(req, res) {
    let util = new Util(res);
    let body = req.body;
    let response = {
      status: 200,
      data: {},
      message: "Email Enviado Exitosamente",
      code: "OK",
    };
    try {
      let selectph = await UserService.fileregistrerph(req.body.usuario.id);
      let selectnph = await UserService.fileregistrernph(req.body.usuario.id);
      let selectrural = await UserService.fileregistrerrural(
        req.body.usuario.id
      );
      let arrayph=1;
      let arraynph=1;
      let arrayrural=1;
      if (selectph || selectnph || selectrural) {
        if (selectph) {
          arrayph = selectph.rows;
        }
        if (selectnph) {
          arraynph = selectnph.rows;
        }
        if (selectrural) {
          arrayrural = selectrural.rows;
        }
        response.code = "OK";
          response.message = "Estadisticas encontradas";
          response.data = {
            fileph: arrayph,
            filenph: arraynph,
            filerural: arrayrural,
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

  static async filebig(req, res) {
    let util = new Util(res);
    let body = req.body;
    const page = req.query.page || 0;
    //const valor = page -1;
    const size = req.query.size || 10;
    //console.log("alejo temprano", page, size)
    let options = {
      limit: +size,
      offset: (+page)*(+size)
    }
    const {rowCount, rows} = await UserService.filebig(options);
    const total= await UserService.allcountfilebig();    
    let response = {
      status: 200,
      data: {},
      message: "Email Enviado Exitosamente",
      code: "OK",
    };
    try { 
      if (rows) {
        let arraybig = rows;
        const paginas = Number(total.rows[0].count)/size;
        response.code = "OK";
        response.message = "Estadisticas encontradas";
        response.data = {
          filebigdata: arraybig,
          paginasall: paginas
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

  static async filebigexcel(req, res) {
    let util = new Util(res);
    const datamercadoexcel = await UserService.filebigexcelmercado();    
    let response = {
      status: 200,
      data: {},
      message: "Email Enviado Exitosamente",
      code: "OK",
    };
    try { 
      if (datamercadoexcel) {
        let arraybig = datamercadoexcel.rows;
        response.code = "OK";
        response.message = "Estadisticas encontradas";
        response.data = {
          filebigdataexcel: arraybig
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

  static async filebigexcelsearch(req, res) {
    let util = new Util(res);
    const busqueda = req.query.busqueda;
    console.log("variablealejo", busqueda)
    const datamercadoexcelsearch = await UserService.filebigexcelmercadosearch(busqueda);    
    let response = {
      status: 200,
      data: {},
      message: "Email Enviado Exitosamente",
      code: "OK",
    };
    try { 
      if (datamercadoexcelsearch) {
        let arraybig = datamercadoexcelsearch.rows;
        response.code = "OK";
        response.message = "Estadisticas encontradas";
        response.data = {
          filebigdataexcelsearch: arraybig
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

  static async filebigsearch(req, res) {
    let util = new Util(res);
    let body = req.body;
    const busqueda = req.query.busqueda;
    const page = req.query.page || 0;
    const size = req.query.size || 10;
    let options = {
      limit: +size,
      offset: (+page)*(+size),
      busqueda: busqueda
    }
    const {rowCount, rows} = await UserService.filebigsearch(options);
    const total= await UserService.allcountfilebigsearch(options);    
    let response = {
      status: 200,
      data: {},
      message: "Email Enviado Exitosamente",
      code: "OK",
    };
    try { 
      if (rows) {
        let arraybig = rows;
        const paginas = Number(total.rows[0].count)/size;
        response.code = "OK";
        response.message = "Estadisticas encontradas";
        response.data = {
          filebigdata: arraybig,
          paginasall: paginas
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

  static async registrerdownload(req, res) {
    let util = new Util(res);
    let body = req.body;
    let fecha = new Date();
    fecha.setTime(Date.parse(req.headers.data));
    let newDate = moment.utc(fecha).format("YYYY-MM-DD");
    let id_obsevatorio = req.body.usuario.id;
    let response = {
      status: 200,
      data: {},
      message: "Email Enviado Exitosamente",
      code: "OK",
    };
    try {
      let selectph = await UserService.registrerph(id_obsevatorio, newDate);
      let selectnph = await UserService.registrernph(id_obsevatorio, newDate);
      let selectrural = await UserService.registrerrural(
        id_obsevatorio,
        newDate
      );
      let arrayph=1;
      let arraynph=1;
      let arrayrural=1; 
      //alejandro     
      if (selectph || selectnph || selectrural) {
        if (selectph) {
          arrayph = selectph.rows;
        }
        if (selectnph) {
          arraynph = selectnph.rows;
        }
        if (selectrural) {
          arrayrural = selectrural.rows;
        }
        response.code = "OK";
        response.message = "Estadisticas encontradas";
        response.data = {
          fileph: arrayph,
          filenph: arraynph,
          filerural: arrayrural,
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

  static async offerdata(req, res) {
    let util = new Util(res);
    let body = req.body;
    let id_obsevatorio = req.body.usuario.id;
    let response = {
      status: 200,
      data: {},
      message: "Email Enviado Exitosamente",
      code: "OK",
    };
    try {
      let selectph = await UserService.offerdataph(id_obsevatorio);
      let selectnph = await UserService.offerdatanph(id_obsevatorio);
      let selectrural = await UserService.offerdatarural(id_obsevatorio);
      let arrayph = [];
      let arraynph = [];
      let arrayrural = [];
      if (selectph != null) {
        arrayph = selectph.rows;
      }
      if (selectnph != null) {
        arraynph = selectnph.rows;
      }
      if (selectrural != null) {
        arrayrural = selectrural.rows;
      }
      if (arrayph && arraynph && arrayrural) {
        response.code = "OK";
        response.message = "Estadisticas encontradas";
        response.data = {
          fileph: arrayph,
          filenph: arraynph,
          filerural: arrayrural,
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

  static async statistics_venta_arriendo(req, res) {
    let util = new Util(res);
    let body = req.body;
    let response = {
      status: 200,
      data: {},
      message: "Email Enviado Exitosamente",
      code: "OK",
    };
    try {
      let selectph = await UserService.statisticsph_venta_arriendo(
        req.body.usuario.id
      );
      let selectnph = await UserService.statisticsnph_venta_arriendo(
        req.body.usuario.id
      );
      let selectrural = await UserService.statisticsrural_venta_arriendo(
        req.body.usuario.id
      );
      let selectphdestinacioneconomicaPh =
        await UserService.statisticsph_destinacion_economica(
          req.body.usuario.id
        );
      let selectphdestinacioneconomicaNph =
        await UserService.statisticsnph_destinacion_economica(
          req.body.usuario.id
        );
      let selectphdestinacioneconomicaRural =
        await UserService.statisticsrural_destinacion_economica(
          req.body.usuario.id
        );
      let arrayph;
      let arraynph;
      let arrayrural;
      let arrayphdestinacion;
      let arraynphdestinacion;
      let arrayruraldestinacion;

      if (selectph != null) {
        arrayph = selectph.rows;
      } else {
        arrayph = [];
      }
      if (selectnph != null) {
        arraynph = selectnph.rows;
      } else {
        arraynph = [];
      }
      if (selectrural != null) {
        arrayrural = selectrural.rows;
      } else {
        arrayrural = [];
      }
      if (selectphdestinacioneconomicaPh != null) {
        arrayphdestinacion = selectphdestinacioneconomicaPh.rows;
      } else {
        arrayphdestinacion = [];
      }
      if (selectphdestinacioneconomicaNph != null) {
        arraynphdestinacion = selectphdestinacioneconomicaNph.rows;
      } else {
        arraynphdestinacion = [];
      }
      if (selectphdestinacioneconomicaRural != null) {
        arrayruraldestinacion = selectphdestinacioneconomicaRural.rows;
      } else {
        arrayruraldestinacion = [];
      }
      if (
        arrayph &&
        arraynph &&
        arrayrural &&
        arrayphdestinacion &&
        arraynphdestinacion &&
        arrayruraldestinacion
      ) {
        response.code = "OK";
        response.message = "Estadisticas encontradas";

        const totalph = arrayph.reduce((prev, curr) => {
          prev[curr["nombre_tipo_oferta"]] = curr["venta_arriendo"];
          return prev;
        }, {});

        const totalnph = arraynph.reduce((prev, curr) => {
          prev[curr["nombre_tipo_oferta"]] = curr["venta_arriendo"];
          return prev;
        }, {});

        const totalrural = arrayrural.reduce((prev, curr) => {
          prev[curr["nombre_tipo_oferta"]] = curr["venta_arriendo"];
          return prev;
        }, {});

        const totaldestinacionPh = arrayphdestinacion.reduce((prev, curr) => {
          prev[curr["destinacionph"]] = curr["destinacion"];
          return prev;
        }, {});

        const totaldestinacionNph = arraynphdestinacion.reduce((prev, curr) => {
          prev[curr["destinacionnph"]] = curr["destinacion"];
          return prev;
        }, {});

        const totaldestinacionRural = arrayruraldestinacion.reduce(
          (prev, curr) => {
            prev[curr["destinacionrural"]] = curr["destinacion"];
            return prev;
          },
          {}
        );

        response.data = {
          cantidadph_arrendo_ventaph: totalph,
          cantidadph_arrendo_ventanph: totalnph,
          cantidadph_arrendo_ventarural: totalrural,
          cantidad_destinacion_economica_ph: totaldestinacionPh,
          cantidad_destinacion_economica_nph: totaldestinacionNph,
          cantidad_destinacion_economica_rural: totaldestinacionRural,
        };
      } else {
        console.log("verificando error");
        response.code = "ERR001";
        response.message =
          "Lo sentimos, ocurrio un problema en nuestro sistema";
      }
    } catch (error) {
      console.log(error);
      response.code = "ERROR";
      response.message = "Ocurrio un error en la actualizacion de datos";
    }
    //console.log(response.data, "hola data")
    util.saveData(response);
    return util.sendResponse();
  }

  static async locationUser(req, res) {
    let util = new Util(res);
    let body = req.body;
    let response = {
      status: 200,
      data: {},
      message: "Email Enviado Exitosamente",
      code: "OK",
    };
    try {
      let selectph = await UserService.locationPh(req.body.usuario.id);
      let selectnph = await UserService.locationNph(req.body.usuario.id);
      let selectrural = await UserService.locationRural(req.body.usuario.id);
      let arrayph = [];
      let arraynph = [];
      let arrayrural = [];
      if (selectph != null) {
        arrayph = selectph.rows;
      }
      if (selectnph != null) {
        arraynph = selectnph.rows;
      }
      if (selectrural != null) {
        arrayrural = selectrural.rows;
      }
      if (arrayph && arraynph && arrayrural) {
        response.code = "OK";
        response.message = "Estadisticas encontradas";
        response.data = {
          locationph: arrayph,
          locationnph: arraynph,
          locationrural: arrayrural,
        };
      } else {
        console.log("error 1");
        response.code = "ERR001";
        response.message =
          "Lo sentimos, ocurrio un problema en nuestro sistema";
      }
    } catch (error) {
      console.log(error);
      response.code = "ERROR";
      response.message = "Ocurrio un error en la actualizacion de datos";
    }
    //console.log("prueba", response)
    util.saveData(response);
    return util.sendResponse();
  }

  static async upload(req, res) {
    let util = new Util(res);
    let file = req.files.archivo;
    let id_obsevatorio = req.body.usuario.id;
    let ext = "xlsx";
    let log = "asd";
    let nombre = Date.now() + ".xlsx";
    //let stream = fs.createWriteStream("./public/" + nombre);

    let response = {
      status: 200,
      data: {},
      message: "registro exitoso",
      code: "OK",
    };
    let wb = xlsx.read(file.data, { type: "buffer" });
    //.then(async (wb) =>{
    try {
      for (let i = 0; i < wb.SheetNames.length; i++) {
        let ws01 = wb.Sheets[wb.SheetNames[i]];
        let data01 = xlsx.utils.sheet_to_json(ws01);
        let newRows = data01.splice(1, data01.length);
        let convert;
        for (let j = 0; j < newRows.length; j++) {
          let valid;
          switch (wb.SheetNames[i]) {
            case "PH":
              valid = Validate.validPh(newRows[j]);
              if (valid === "exito") {
                let phfound = await UserService.searchOfferPh1(
                  newRows[j],
                  id_obsevatorio
                );
                if (phfound) {
                  await UserService.updateOfferPh1(
                    newRows[j],
                    id_obsevatorio,
                    file.name
                  ); //aqui iria para update
                } else {
                  await UserService.uploadfileph1(
                    newRows[j],
                    id_obsevatorio,
                    file.name
                  ); //aqui iria parainsert
                }
              } else {
                response.code = valid;
                j = newRows.length;
                i = wb.SheetNames.length;
              }
              break;
            case "NPH":
              valid = Validate.validNph(newRows[j]);
              if (valid === "exito") {
                let nphfound = await UserService.searchOfferNph1(
                  newRows[j],
                  id_obsevatorio
                );
                if (nphfound) {
                  await UserService.updateOfferNph1(
                    newRows[j],
                    id_obsevatorio,
                    file.name
                  ); //aqui iria para update
                } else {
                  await UserService.uploadfilenph1(
                    newRows[j],
                    id_obsevatorio,
                    file.name
                  ); //aqui iria parainsert
                }
              } else {
                response.code = valid;
                j = newRows.length;
                i = wb.SheetNames.length;
              }
              break;
            case "RURAL":
              valid = Validate.validRural(newRows[j]);
              if (valid === "exito") {
                let ruralfound = await UserService.searchOfferRural1(
                  newRows[j],
                  id_obsevatorio
                );
                if (ruralfound) {
                  await UserService.updateOfferRural1(
                    newRows[j],
                    id_obsevatorio,
                    file.name
                  ); //aqui iria para update
                } else {
                  await UserService.uploadfilerural1(
                    newRows[j],
                    id_obsevatorio,
                    file.name
                  ); //aqui iria parainsert
                }
              } else {
                response.code = valid;
                j = newRows.length;
                i = wb.SheetNames.length;
              }
              break;
          }
        }
      }
      util.saveData(response);
      return util.sendResponse();
    } catch (error) {
      console.log(error);
      response.code = "ERROR";
      response.message = "Ocurrio un error inesperado";
      util.saveData(response);
      return util.sendResponse();
    }
    //})

    // stream.write(file.data, async (err) => { //excel
    //   try {
    //     xlsxFile("./public/" + nombre, { getSheets: true })//error pro
    //       .then(async (sheets) => {

    //         for(let i = 0; i < sheets.length;i++){

    //           let rows = await  SheetsController.openSheetsFile(nombre,sheets[i].name)

    //           let newRows = rows.splice(2, rows.length);
    //             for (let j = 0; j < newRows.length; j++) {
    //               let dataToSend;
    //               let valid;
    //               switch (sheets[i].name) {
    //                 case "PH":
    //                   dataToSend = ParserModel.transformToSheetsPH(
    //                     newRows[j]
    //                   ); //transforma en el objeto que se creo en el enviador
    //                   valid = Validate.validPh(dataToSend);
    //                   if(valid==="exito"){
    //                     let phfound = await UserService.searchOfferPh(dataToSend,id_obsevatorio);
    //                     if(phfound){
    //                       await UserService.updateOfferPh(dataToSend, id_obsevatorio)  //aqui iria para update
    //                     }else{
    //                       await UserService.uploadfileph(dataToSend, id_obsevatorio)  //aqui iria parainsert
    //                     }
    //                   }else{
    //                     response.code = valid;
    //                     j = newRows.length;
    //                     i = sheets.length
    //                   }
    //                   break;
    //                 case "NPH":
    //                   dataToSend = ParserModel.transformToSheetsNPH(
    //                     newRows[j]
    //                   ); //transforma en el objeto que se creo en el enviador
    //                   valid = Validate.validNph(dataToSend);
    //                   if(valid==="exito"){
    //                   let nphfound = await UserService.searchOfferNph(dataToSend, id_obsevatorio);
    //                   if(nphfound){
    //                     await UserService.updateOfferNph(dataToSend, id_obsevatorio)  //aqui iria para update
    //                   }else{
    //                     await UserService.uploadfilenph(dataToSend, id_obsevatorio)  //aqui iria parainsert
    //                   }
    //                  }else{
    //                   response.code = valid;
    //                   j = newRows.length;
    //                   i = sheets.length
    //                  }
    //                  break;
    //                 case "RURAL":
    //                   dataToSend = ParserModel.transformToSheetsRURAL(
    //                     newRows[j]
    //                   ); //transforma en el objeto que se creo en el enviador
    //                   valid = Validate.validRural(dataToSend);
    //                   if(valid==="exito"){
    //                     let ruralfound = await UserService.searchOfferRural(dataToSend, id_obsevatorio);
    //                     if(ruralfound){
    //                       await UserService.updateOfferRural(dataToSend, id_obsevatorio)  //aqui iria para update
    //                     }else{
    //                       await UserService.uploadfilerural(dataToSend, id_obsevatorio)  //aqui iria parainsert
    //                     }
    //                   }else{
    //                     response.code = valid;
    //                     j = newRows.length;
    //                     i = sheets.length
    //                   }
    //                   break;
    //               }
    //             }
    //         }
    //         util.saveData(response);
    //         return util.sendResponse();
    //       })
    //       .catch((err) => {
    //         console.log(err)
    //         response.code = "ERROR";
    //         response.message = "Ocurrio un error inesperado";
    //         util.saveData(response);
    //         return util.sendResponse();
    //       });
    //   } catch (error) {
    //     console.log(error)
    //     response.code = "ERROR";
    //     response.message = "Ocurrio un error inesperado";
    //     util.saveData(response);
    //     return util.sendResponse();
    //   }
    // });
  }

  static async delet(req, res) {
    let util = new Util(res);
    let body = req.body;
    let id_obsevatorio = req.body.usuario.id;
    let matricula = req.body.datos;
    let tabla = req.body.table;
    let fecha = req.body.fecha;
    let response = {
      status: 200,
      data: {},
      message: "Email Enviado Exitosamente",
      code: "OK",
    };
    try {
      switch (tabla) {
        case "Ph":
          await UserService.deletPh(id_obsevatorio, matricula, fecha);
          break;
        case "Nph":
          await UserService.deletNph(id_obsevatorio, matricula, fecha);
          break;
        case "Rural":
          await UserService.deletRural(id_obsevatorio, matricula, fecha);
          break;
      }
    } catch (error) {
      console.log(error);
      response.code = "ERROR";
      response.message = "Ocurrio un error en la actualizacion de datos";
    }
    //console.log("prueba", response)
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

  static async serach(req, res) {
    let util = new Util(res);
    let body = req.headers.body;
    let response = {
      status: 200,
      data: {},
      message: "Email Enviado Exitosamente",
      code: "OK",
    };
    try {
      let selectph = await UserService.serachresult(body);
      if (selectph) {
        let arrayph = selectph;
        response.code = "OK";
        response.message = "Estadisticas encontradas";
        response.data = {
          fileph: arrayph,
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

  static async userdownloadceed(req, res) {
    let util = new Util(res);
    let body = req.body;
    let response = {
      status: 200,
      data: {},
      message: "registro exitoso",
      code: "OK",
    };
    console.log("bodyalejo", body);
    // if (!body || typeof body !== "object") {
    //   util.saveData(response);
    //   return util.sendResponse();
    // }
    try {      
        let success = await UserService.userdownloadceed(body);
        let selectceed = await UserService.selectfechasceed(body)
        if (success && selectceed) {
          console.log("success2", success, selectceed)
          response.code = "OK";
          response.message = "Estadisticas encontradas";
          response.data = selectceed;
        } else {
          response.code = "ERROR";
          response.message = "Ocurrio un error en el registro de datos";
        }
    } catch (error) {
      console.log(error);
      response.code = "ERROR";
      response.message = "Ocurrio un error en el registro de datos";
    }

    util.saveData(response);
    return util.sendResponse();
  }


}

module.exports = UserController;
