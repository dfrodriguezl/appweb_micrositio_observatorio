
let Util = require('../common/Util')
const EmailService = require('../service/EmailServices')
const UserService = require('../service/UserServices')
const  Token = require('../classes/token')
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
                        let userFound = await UserService.login(body)

                        if(userFound){
                                response.code = "OK"
                                response.message = "Usuario encontrado"
                                console.log(userFound)
                                const tokenUser = await Token.getJwtToken({
                                        id: userFound.id,
                                        name: userFound.name,
                                        email:userFound.email
                                    });
                                response.data = {
                                        token: tokenUser
                                }
                        }else{
                                response.code = "USER001"
                                response.message = "Usuario o contraseña incorrectos"
                        }

                }catch(error){
                        console.log(error)
                        response.code = "ERROR"
                        response.message = "Ocurrio un error inesperado"

                }
                util.saveData(response)
                return util.sendResponse()
        }

        static async testToken(req,res){
                let util = new Util(res)
                let response ={
                    status : 200,
                    data : {},
                    message:"prueba exitosa",
                    code : "OK"
                }
                util.saveData(response)
                return util.sendResponse()
        }
}

module.exports =   UserController