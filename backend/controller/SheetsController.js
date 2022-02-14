
const xlsxFile = require("read-excel-file/node");
class SheetsController {
    static async openFile(nameFile){
        return new Promise((resolve,reject)=>{
            xlsxFile("./public/" + nameFile).then((data)=>{
                resolve(data)
            }).catch((error)=>{
                reject(null)
            })
        });
    }

    static async openSheetsFile(nameFile, nameSheet){
        return new Promise((resolve,reject)=>{
            xlsxFile("./public/" + nameFile, { sheet: nameSheet}).then((data)=>{
                resolve(data)
            }).catch((error)=>{
                reject(null)
            })
        });
    }
}



module.exports = SheetsController;