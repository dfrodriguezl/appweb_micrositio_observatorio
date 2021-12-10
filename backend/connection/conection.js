const Pool = require('pg')

function conexion(){
    this.pool=null;

    this.inicia= function(){
        this.pool=new Pool({
         connectionLimit:100,
         host:'localhost',
         user:'',
         password:'',
         database: ''
        })
    }
    this.obtener= function(callback){
        this.pool.getConnection(function(error,connection){
         callback(error,connection);
        })
    }   
}

module.exports=new conexion();

