const Pool = require('pg').Pool
const Crypto = require('../crypto/Crypto')
const connectionString = "U2FsdGVkX1/Dr/r0Q8Ee5f/poCoPZSYSCzR4FdzuuXKhNW23jxe88ModlydoFnUg0eB5fCNPk+hLwpQWlhvi1RWHzvGfdOsucYETVx3KiI/NxFFi/wKNkEFC30XdFyuTvYOgN8NYzLkLwOk1RwqhtvhCpK7qaiANo28W0YH1ltKHXKot1e49bz+Bog32U/2VeDLq6LdQ8+irynuYOszEeg=="
const keyEncrypt ="ObservatorioInmobiliarioNacional2021xhladjljsljlejeieiwlwiwlqilwqijljwkcma"
function conexion(){
    this.pool=null;

    this.inicia= function(){
        let resultDecryp = Crypto.decryp(connectionString,keyEncrypt)
        let jsonResult = JSON.parse(resultDecryp)
        this.pool=new Pool({
            connectionLimit:100,
            host:jsonResult.host,
            user:jsonResult.user,
            password: jsonResult.password,
            database: jsonResult.database,
            port:49155
           })
    }
    this.getConnection= function(){
        return this.pool
    } 
}

module.exports=new conexion();

