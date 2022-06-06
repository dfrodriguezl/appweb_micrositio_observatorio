
const sha256 = require('js-sha256');

class EncryptData {
 
    static async encryptData(value){

        return sha256.hmac('prueba',value)
    }

}

module.exports = EncryptData