var express = require('express');
var app = express();
var path = require('path');
var expressStaticGzip = require("express-static-gzip");
  
var DIST_DIR = path.join(__dirname, "../dist");


app.use("/dist",expressStaticGzip(DIST_DIR));


app.get('/*', (req,res) =>{
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

  
//backend en el puerto 3000
app.listen(3000, function () {
  console.log(Date().toString());
});

