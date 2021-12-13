const pool = require('../connection/conection')

class UserService {


        static async createUser(modelUser){
            pool.inicia()

          return new Promise((resolver, rechazar) => {
                pool.getConnection().query("INSERT INTO private.user (id,name, email,phone,passwordUser) VALUES (default,$1, $2,$3,$4)",[modelUser.name,modelUser.email,modelUser.phone,modelUser.infokey],(error,result)=>{
                    if(error){
                        rechazar(false)
                    }
                    resolver(true)
                })
            
              
            })
        }

        static async login(modelUser){
            pool.inicia()

            return new Promise((resolver, rechazar) => {
                  pool.getConnection().query("select u.id ,u.name ,u.email  from private.user u where u.email = $1 and u.passwordUser = $2",[modelUser.email,modelUser.infokey],(error,result)=>{
                      if(error){
                          rechazar(null)
                      }
                      resolver(result)
                  })
              
                
              })
        }
}

module.exports = UserService