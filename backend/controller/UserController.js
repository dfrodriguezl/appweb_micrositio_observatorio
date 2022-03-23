let Util = require("../common/Util");
const EmailService = require("../service/EmailServices");
const Validate = require("../service/Validate");
const UserService = require("../service/UserServices");
const TemplateRegister = require("../template/TemplateRegister");
const TemplateLogin = require("../template/TemplateLogin");
const Token = require("../classes/token");
const xlsxFile = require("read-excel-file/node");
const fs = require("fs");
const ParserModel = require("../classes/parserModel");
const SheetsController = require("./SheetsController");
const xlsx = require('xlsx');
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
        console.log(response.data)
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
        let selectph  = await UserService.statisticsph_venta_arriendo(req.body.usuario.id);
        let selectnph  = await UserService.statisticsnph_venta_arriendo(req.body.usuario.id);
        let selectrural  = await UserService.statisticsrural_venta_arriendo(req.body.usuario.id);
        let selectphdestinacioneconomicaPh = await UserService.statisticsph_destinacion_economica(req.body.usuario.id);
        let selectphdestinacioneconomicaNph = await UserService.statisticsnph_destinacion_economica(req.body.usuario.id);
        let selectphdestinacioneconomicaRural = await UserService.statisticsrural_destinacion_economica(req.body.usuario.id);
        if (selectph && selectnph && selectrural && selectphdestinacioneconomicaPh && selectphdestinacioneconomicaNph && selectphdestinacioneconomicaRural) {          
          response.code = "OK";
          response.message = "Estadisticas encontradas";   
          let arrayph = selectph.rows
          let arraynph = selectnph.rows
          let arrayrural = selectrural.rows
          let arrayphdestinacion=selectphdestinacioneconomicaPh.rows
          let arraynphdestinacion=selectphdestinacioneconomicaNph.rows
          let arrayruraldestinacion=selectphdestinacioneconomicaRural.rows         
          // console.log("hola1", arraynphdestinacion)
          // console.log("hola2", arrayruraldestinacion)
            const totalph = arrayph.reduce((prev, curr)=>{              
              prev[curr['nombre_tipo_oferta']]=curr['venta_arriendo'];
              return prev
             }, {});   
             
             const totalnph = arraynph.reduce((prev, curr)=>{              
              prev[curr['nombre_tipo_oferta']]=curr['venta_arriendo'];
              return prev
             }, {});  

             const totalrural = arrayrural.reduce((prev, curr)=>{              
              prev[curr['nombre_tipo_oferta']]=curr['venta_arriendo'];
              return prev
             }, {}); 

             const totaldestinacionPh = arrayphdestinacion.reduce((prev, curr)=>{              
              prev[curr['destinacionph']]=curr['destinacion'];
              return prev
             }, {}); 

             const totaldestinacionNph = arraynphdestinacion.reduce((prev, curr)=>{              
              prev[curr['destinacionnph']]=curr['destinacion'];
              return prev
             }, {}); 

             const totaldestinacionRural = arrayruraldestinacion.reduce((prev, curr)=>{              
              prev[curr['destinacionrural']]=curr['destinacion'];
              return prev
             }, {}); 

            response.data = {
              cantidadph_arrendo_ventaph: totalph,
              cantidadph_arrendo_ventanph: totalnph,
              cantidadph_arrendo_ventarural: totalrural,
              cantidad_destinacion_economica_ph: totaldestinacionPh,
              cantidad_destinacion_economica_nph: totaldestinacionNph,
              cantidad_destinacion_economica_rural: totaldestinacionRural
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
        if (selectph) {
          response.code = "OK";
          response.message = "Estadisticas encontradas";
          let arrayph = selectph.rows

          // console.log(arrayph.length)
          // console.log("___________________")
          // console.log(arrayph)

          // const totallocationph = arrayph.reduce((prev, curr)=>{              
          //   prev[curr['nombre_destinacion_economica']]=curr['direccion'];
          //   return prev
          //  }, {}); 

          response.data = {
            locationph: arrayph,
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
    //console.log("prueba", response.data)
    util.saveData(response);
    return util.sendResponse();
  }

  static async upload(req, res) {
    let util = new Util(res);
    let file = req.files.archivo;
    let id_obsevatorio = req.body.usuario.id;
    let ext = "xlsx";
    let log = "asd";
    let nombre = Date.now() + ".xlsx"
    //let stream = fs.createWriteStream("./public/" + nombre);       
    let response = {
      status: 200,
      data: {},
      message: "registro exitoso",
      code: "OK",
    };
    let wb= xlsx.read(file.data, {type: "buffer"})
    //.then(async (wb) =>{
    try {
      for(let i = 0; i < wb.SheetNames.length; i++){
        //console.log(wb.SheetNames[i])
        let ws01 = wb.Sheets[wb.SheetNames[i]]
        let data01 = xlsx.utils.sheet_to_json(ws01) 
        let newRows = data01.splice(1, data01.length);       
        for (let j = 0; j < newRows.length; j++){                     
          let valid; 
          switch (wb.SheetNames[i]) {                                         
            case "PH":                                
              valid = Validate.validPh(newRows[j]);              
              if(valid==="exito"){                
                let phfound = await UserService.searchOfferPh1(newRows[j],id_obsevatorio);           
                if(phfound){
                  await UserService.updateOfferPh1(newRows[j], id_obsevatorio)  //aqui iria para update                          
                }else{
                  await UserService.uploadfileph1(newRows[j], id_obsevatorio)  //aqui iria parainsert                          
                }                        
              }else{                        
                response.code = valid;
                j = newRows.length;
                i = wb.SheetNames.length            
              }
              break;
            case "NPH":  
              valid = Validate.validNph(newRows[j]);
              //console.log("Hola",newRows[j])
              if(valid==="exito"){
              let nphfound = await UserService.searchOfferNph1(newRows[j], id_obsevatorio);
              if(nphfound){
                await UserService.updateOfferNph1(newRows[j], id_obsevatorio)  //aqui iria para update                        
              }else{
                await UserService.uploadfilenph1(newRows[j], id_obsevatorio)  //aqui iria parainsert                        
              }
             }else{
              response.code = valid;
              j = newRows.length;
              i = wb.SheetNames.length;  
             }                     
             break;
             case "RURAL":                        
              valid = Validate.validRural(newRows[j]);
              //console.log("Hola",newRows[j])
              if(valid==="exito"){
                let ruralfound = await UserService.searchOfferRural1(newRows[j], id_obsevatorio);                
                if(ruralfound){
                  await UserService.updateOfferRural1(newRows[j], id_obsevatorio)  //aqui iria para update
                }else{
                  await UserService.uploadfilerural1(newRows[j], id_obsevatorio)  //aqui iria parainsert                          
                }
              }else{
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
      console.log(error)
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
