let jwt = require('jsonwebtoken')
let seed = 'este-es-el-seed-de-mi-app-secreto';
let caducidad = '30d';

class Token {
   static async  getJwtToken( payload ) {
        return jwt.sign({
            usuario: payload
        }, seed, { expiresIn: caducidad });
    }
   static async  comprobarToken( userToken ){
        return new Promise( (resolve, reject ) => {
            jwt.verify( userToken, this.seed, ( err, decoded ) => {
                if (err) {
                    reject();
                } else {
                    resolve(decoded);
                }
            })
        });

    }
}
export default Token

