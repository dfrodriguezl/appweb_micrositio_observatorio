const CryptoJS = require('crypto-js')

class Crypto {

    static encryp(data,key){
        return CryptoJS.AES.encrypt(data,key).toString()
    }
    static decryp(data,key){
        var resultDecryp = CryptoJS.AES.decrypt(data,key)
        return resultDecryp.toString(CryptoJS.enc.Utf8)
    }
}

module.exports = Crypto