const Pool = require('pg').Pool
const Crypto = require('../crypto/Crypto')
const Crypto1 = require('../connection/encrypt-connection')
//const connectionString = "U2FsdGVkX1/Dr/r0Q8Ee5f/poCoPZSYSCzR4FdzuuXKhNW23jxe88ModlydoFnUg0eB5fCNPk+hLwpQWlhvi1RWHzvGfdOsucYETVx3KiI/NxFFi/wKNkEFC30XdFyuTvYOgN8NYzLkLwOk1RwqhtvhCpK7qaiANo28W0YH1ltKHXKot1e49bz+Bog32U/2VeDLq6LdQ8+irynuYOszEeg=="
const connectionString = Crypto1.cadena()
const keyEncrypt ="ObservatorioInmobiliarioNacional2021xhladjljsljlejeieiwlwiwlqilwqijljwkcma"
function conexion(){
    this.pool=null;

    this.inicia= function(){
        let resultDecryp = Crypto.decryp(connectionString,keyEncrypt)
	    //console.log(resultDecryp);
        let jsonResult = JSON.parse(resultDecryp)
        this.pool=new Pool({
            connectionLimit:100,
            host:jsonResult.host,
            user:jsonResult.user,
            password: jsonResult.password,
            database: jsonResult.database,
            port:5444
            //port:49155
           })
    }
    this.getConnection= function(){
        //console.log(this.pool)
        return this.pool
    } 
}

module.exports=new conexion();

