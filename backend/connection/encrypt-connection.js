const Crypto = require('../crypto/Crypto')

class Cryptocadena {

    static cadena(){
        const txt = '{"host":"159.203.180.99", "user":"observatorio", "password":"observatorio", "database":"observatorio"}'
        const keyEncrypt ="ObservatorioInmobiliarioNacional2021xhladjljsljlejeieiwlwiwlqilwqijljwkcma"

        let connectionString = Crypto.encryp(txt,keyEncrypt)
        return connectionString;
    }

}
module.exports=Cryptocadena;