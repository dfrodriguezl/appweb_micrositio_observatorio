const { Router } = require('express')


const UserController = require('../controller/UserController')
const ContactController = require('../controller/ContactController')
const CeedController = require('../controller/CeedController')
const  Middleware = require('../middlewares/Middleware')
const router = Router();
const Crypto = require('../crypto/Crypto')
const keyEncrypt ="ObservatorioInmobiliarioNacional2021xhladjljsljlejeieiwlwiwlqilwqijljwkcma"
router.post('/users',  UserController.createUser);
router.post('/login', UserController.login)
router.get('/user',Middleware.verificaToken, UserController.testToken)
router.post('/contact',ContactController.sendMessage)
router.post('/user/forgetpassword',UserController.forgetPassword)
router.post('/ceed',CeedController.createCeed)
router.post('/user/resetpassword',Middleware.verificaToken,UserController.resetPassword)
router.post('/user/changepassword',Middleware.verificaToken,UserController.changePassord)
router.get('/PlataformaUsuario/statistics',Middleware.verificaToken,UserController.statistics)
router.get('/PlataformaUsuario/graphis',Middleware.verificaToken,UserController.statistics_venta_arriendo)
router.get('/PlataformaUsuario/location',Middleware.verificaToken,UserController.locationUser)
router.post('/PlataformaUsuario/upload',Middleware.verificaToken,UserController.upload)
router.post('/PlataformaUsuario',Middleware.verificaToken)
module.exports = router;


//verificar rutas undifine token
// const path = require("path");
// const directory = path.join(__dirname, "./public/");