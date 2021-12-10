var connection = require('../conexion');


class FileUpload {


    static async uploadFiles(req,res,fs){
        for (var x = 0; x < files.length; x++) {
            //copiamos el archivo a la carpeta definitiva de fotos
            console.log(files[x]);
            ext = files[x].originalname.split(".").pop();

            fs.createReadStream('./uploads/' + files[x].filename).pipe(fs.createWriteStream('./public/categorias/' + files[x].originalname));
            //borramos el archivo temporal creado
            fs.unlink('./uploads/' + files[x].filename);
            fs.rename('./public/categorias/' + files[x].originalname, './public/categorias/' + log + "." + ext);
            nombre = log + "." + ext;
        }
    }
}