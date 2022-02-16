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
router.get('/PlataformaUsuario',Middleware.verificaToken,UserController.statistics)
router.post('/PlataformaUsuario',UserController.upload)
module.exports = router;



// const path = require("path");
// const directory = path.join(__dirname, "./public/");