const { Router } = require('express')
const UserController = require('../controller/UserController')
const  Middleware = require('../middlewares/Middleware')
const router = Router();

router.post('/users',  UserController.createUser);
router.post('/login', UserController.login)
router.get('/user',Middleware.verificaToken, UserController.testToken)


module.exports = router;
