const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname,'../public'))
    },
    filname: function(req, file, cb) {
        cb(null, `${file.file}-${Date.now()}.${file.mimetype.split('/')[1]}`)
    }
})

module.exports = storage