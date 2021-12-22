const Pool = require('pg').Pool

function conexion(){
    this.pool=null;

    this.inicia= function(){
        this.pool=new Pool({
            connectionLimit:100,
            host:'',
            user:'',
            password:'',
            database: '',
            port:49155
           })
    }
    this.getConnection= function(){
        return this.pool
    } 
}

module.exports=new conexion();

