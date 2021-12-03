var express = require('express');
var app = express();
var path = require('path');
let fs = require('fs')
var cors = require('cors')
var expressStaticGzip = require("express-static-gzip");
  
var DIST_DIR = path.join(__dirname, "../dist");


app.use("/",expressStaticGzip(DIST_DIR));

app.use(cors())

app.get('/:name', function(req, res) {
  let fileName = req.params.name
  console.log("leyendo archivo")
  var file = fs.readFileSync(__dirname + '/public/'+fileName, 'binary');
  res.setHeader('Content-Length', file.length);
  res.setHeader('Content-disposition', 'attachment; filename='+fileName);
  res.write(file, 'binary');
  res.end(); 
})


/*app.get('/*', (req,res) =>{
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});*/

  
//backend en el puerto 3000
app.listen(3000, function () {
  console.log(Date().toString());
});

