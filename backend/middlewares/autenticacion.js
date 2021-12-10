
import Token from '../classes/token';
 

export const verificaToken = ( req, res, next  ) => {

    const userToken = req.get('x-token') || '';
    Token.comprobarToken( userToken )
        .then((decoded) => {
            console.log('Decoded', decoded );
            req.usuario = decoded.usuario;
            next();
        })
        .catch( err => {
            res.json({
                ok: false,
                mensaje: 'Token no es correcto'
            });
        });
}


