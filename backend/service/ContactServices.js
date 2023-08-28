
const pool = require('../connection/conection')

class ContactService{
    
    static async createContact(modelContact){
        pool.inicia()
        return new Promise((resolver, rechazar) => {
              pool.getConnection().query("INSERT INTO private.contactenos(id,name, email,phone,tema,address) VALUES (default,$1, $2,$3,$4,$5)",[modelContact.name,modelContact.email,modelContact.phone,modelContact.tema,modelContact.address],(error,result)=>{
                 // console.log(error) 
                  if(error){
                      rechazar(false)
                  }
                  resolver(true)
              })
          })
    }
}
module.exports = ContactService