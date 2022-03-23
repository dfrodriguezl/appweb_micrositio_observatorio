let jwt = require('jsonwebtoken')
let seed = 'este-es-el-seed-de-mi-app-secreto';
let caducidad = '30d';

class Token {
   static async  getJwtToken(payload) {
        return jwt.sign({
            usuario: payload
        }, seed, { expiresIn: caducidad });
    }
    static  destroyer(token){
        jwt.destroy(token)
    }
    static async generateJwtToken(payload){
        return jwt.sign({
            usuario: payload
        }, seed, { expiresIn: '1h' });
    }

   static async comprobarToken(userToken){
        return new Promise( (resolve, reject ) => {
            jwt.verify(userToken, seed, ( err, decoded ) => {
                if (err) {
                    reject();
                } else {
                    //console.log(decoded)
                    resolve(decoded);
                }
            })
        });

    }
}
module.exports = Token

