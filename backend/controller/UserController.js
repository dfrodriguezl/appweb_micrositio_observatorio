
let Util = require('../common/Util')
const EmailService = require('../service/EmailServices')
const UserService = require('../service/UserServices')

class UserController {

        static async createUser(req, res){
            let util = new Util(res)
            let body = req.body
            let response ={
                status : 200,
                data : {},
                message:"registro exitoso",
                code : "OK"
            }
            console.log(body)
            if(!body || typeof(body) !== 'object'){
                util.saveData(response)
                return util.sendResponse()
            }
            try{
                let success = await UserService.createUser(body)
                if(success != true){
                    response.code = "ERROR"
                    response.message = "Ocurrio un error en el registro de datos"
                }else{
                        await EmailService.sendEmail({
                                email:body.email,
                                contenido:"Felicidades te has registrado en nuestra plataforma",
                                subject:"Usuario Registrado"
                        })
                }
            }catch(error){
                    console.log(error)
                response.code = "ERROR"
                response.message = "Ocurrio un error en el registro de datos"
            }
          
            util.saveData(response)
            return util.sendResponse()
        }


        static async login(req,res){
                
        }
}

module.exports = UserController