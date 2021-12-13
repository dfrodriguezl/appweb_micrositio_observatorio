var express = require('express');
var app = express();
var path = require('path');
let fs = require('fs')
var cors = require('cors')
var expressStaticGzip = require("express-static-gzip");

var DIST_DIR = path.join(__dirname, "../dist");


var nodemailer = require('nodemailer');

app.use("/", expressStaticGzip(DIST_DIR));

app.use(cors())

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({
    extended: true,
    limit: '50mb'
}));

app.get('/file/:name', function (req, res) {
  let fileName = req.params.name
  console.log("leyendo archivo")
  var file = fs.readFileSync(__dirname + '/public/' + fileName, 'binary');
  res.setHeader('Content-Length', file.length);
  res.setHeader('Content-disposition', 'attachment; filename=' + fileName);
  res.write(file, 'binary');
  res.end();
});

app.get('/rest/:name', function (req, res) {
  let fileName = req.params.name
  console.log("leyendo archivo")
  var file = fs.readFileSync(__dirname + '/public/' + fileName, {encoding: 'utf8'}).toString();
  
  return res.status(200).send(JSON.parse(file))

});


app.post("/contact",function(req,res){
    let body = req.body
    sendEmail({
      email:body.correoElectronico,
      contenido:"",
      subject:"",
      res:res
    })
})
app.post("/users", function (req, res) {
  let body = req.body
  console.log(req)
  console.log(body)
   sendEmail({
    email:body.correoElectronico,
    contenido:"",
    subject:"",
    res:res
  })

})

 function sendEmail({email,contenido,subject,res}){
   
}

/*app.get('/*', (req,res) =>{
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});*/


//backend en el puerto 3000
app.listen(3000, function () {
  console.log(Date().toString());
});

app.get('/*', (req,res) =>{
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});
