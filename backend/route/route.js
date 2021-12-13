const { Router } = require('express')
const UserController = require('../controller/UserController')
const router = Router();

router.post('/users',  UserController.createUser);


module.exports = router;
