const { Router } = require('express')

// const storage = require('../classes/multer')
// const multer = require('multer')
// const uploader = multer({storage})
// const filedata = require('../classes/filedate')
// router.post('/upload', uploader.single('file'), async(req, res) =>{
//     const {file, body }= req    

//     if(file && body){
//         const newfile = new filedata({
//             filename: file.filename,
//             urlFile: `http://localhost:3000/${file.filename}`
//         })
//         res.json({
//             newfile: newfile
//         })
//     }
// })
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
router.post('/PlataformaUsuario',UserController.upload)
module.exports = router;
