
const pool = require('../connection/conection')

class CeedService{
    
    static async createCeed(modelContact){
        pool.inicia()
        return new Promise((resolver, rechazar) => {
              pool.getConnection().query("INSERT INTO private.ceed (\"name\",email,dependencie,tempo_init,tempo_end,objetive) VALUES  ($1,$2,$3,$4,$5,$6);",[modelContact.name,modelContact.email,modelContact.dependencie,modelContact.tempo_init,modelContact.tempo_end,modelContact.objetive],(error,result)=>{
                  console.log(error) 
                  if(error){
                      rechazar(false)
                  }
                  resolver(true)
              })
          })
    }
}
module.exports = CeedService