const Crypto = require('../crypto/Crypto')

class Cryptocadena {

    static cadena(){
        //const txt = '{"host":"159.203.180.99", "user":"observatorio", "password":"observatorio", "database":"observatorio"}'
        const txt = '{"host":"10.168.48.22", "user":"geo_oinmob", "password":"UG8F2blcWh", "database":"observatorio"}'
        const keyEncrypt ="ObservatorioInmobiliarioNacional2021xhladjljsljlejeieiwlwiwlqilwqijljwkcma"

        let connectionString = Crypto.encryp(txt,keyEncrypt)
        return connectionString;
    }

}
module.exports=Cryptocadena;