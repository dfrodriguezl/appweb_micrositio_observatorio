var express = require('express');
var app = express();
var path = require('path');
let fs = require('fs')
var cors = require('cors')
var expressStaticGzip = require("express-static-gzip");

var DIST_DIR = path.join(__dirname, "../dist");
var routes =  require('./route/route')

console.log(DIST_DIR)

app.use("/", expressStaticGzip(DIST_DIR));
app.use(cors())

app.use("/logodane",(req,res)=>{
  res.sendFile(path.join(__dirname, "../dist/logodane.png"));
})
app.use("/logoinmobiliario",(req,res)=>{
  res.sendFile(path.join(__dirname, "../dist/logoinmobiliario.png"));
})

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({
    extended: true,
    limit: '50mb'
}));

app.use("",routes)

//backend en el puerto 3000
app.listen(3000, function () {
  console.log(Date().toString());
});

app.get('/*', (req,res) =>{
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});
