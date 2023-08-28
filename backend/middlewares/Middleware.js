let Token = require('../classes/token')
 

class Middleware {
    static async verificaToken(req,res,next){
        const userToken = req.headers.token ? req.headers.token : '';
        await  Token.comprobarToken( userToken )
            .then((decoded) => {
                //console.log('Decoded', decoded );
                req.body.usuario = decoded.usuario;
               
                next();
            })
            .catch( err => {
               // console.log("token",err)
                res.json({
                    code:"UN001",
                    ok: false,
                    mensaje: 'Token no es correcto'
                });
            });
    }
}

module.exports = Middleware


