
let Util = require('../common/Util')
const EmailService = require('../service/EmailServices')
const ContactService = require('../service/ContactServices')


class ContactController{

    static async sendMessage(req,res){
        let util = new Util(res)    
        let body = req.body
        let response ={
            status : 200,
            data : {},
            message:"prueba exitosa",
            code : "OK"
        }

        console.log(body)
        if(!body || typeof(body) !== 'object'){
            util.saveData(response)
            return util.sendResponse()
        }
        try{
            let success = await ContactService.createContact(body)
            if(success != true){
                response.code = "ERROR"
                response.message = "Ocurrio un error en el registro de datos"
            }else{
                    await EmailService.sendEmail({
                            email:"idcarrillod@dane.gov.co",
                            contenido:"Tienes una  nueva solicitud de información  de "+body.name +" con el correo "+body.email,
                            subject:"Información Contactenos"
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
}

module.exports = ContactController