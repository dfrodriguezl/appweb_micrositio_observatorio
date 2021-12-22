const { Router } = require('express')
const UserController = require('../controller/UserController')
const ContactController = require('../controller/ContactController')
const CeedController = require('../controller/CeedController')
const  Middleware = require('../middlewares/Middleware')
const router = Router();

router.post('/users',  UserController.createUser);
router.post('/login', UserController.login)
router.get('/user',Middleware.verificaToken, UserController.testToken)
router.post('/contact',ContactController.sendMessage)
router.post('/user/forgetpassword',UserController.forgetPassword)
router.post('/ceed',CeedController.createCeed)

module.exports = router;
