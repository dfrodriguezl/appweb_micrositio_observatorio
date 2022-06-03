const CeedService = require('../service/CeedService')
let Util = require('../common/Util')
class CeedController{
    static async createCeed(req,res){
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
          let success = await CeedService.createCeed(body)
          if (success != true) {
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


module.exports = CeedController;