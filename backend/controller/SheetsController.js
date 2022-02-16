
const xlsxFile = require("read-excel-file/node");

class SheetsController {
    static async openFile(nameFile){
        return new Promise((resolve,reject)=>{
            xlsxFile("/home/geoportal/html/geoportal/descargas/oin/" + nameFile).then((data)=>{
                resolve(data)
            }).catch((error)=>{
                reject(null)
            })
        });
    }

    static async openSheetsFile(nameFile, nameSheet){
        return new Promise((resolve,reject)=>{
            xlsxFile("/home/geoportal/html/geoportal/descargas/oin/" + nameFile, { sheet: nameSheet}).then((data)=>{
                resolve(data)
            }).catch((error)=>{
                reject(null)
            })
        });
    }
}



module.exports = SheetsController;