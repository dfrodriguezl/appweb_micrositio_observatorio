
class Util{

    constructor(res){
        this.res = res
    }

    saveData(status, data, message, code){
        this.status = status
        this.data = data
        this.message = message
        this.code = code
    }

    sendResponse(){
        const result = {
            code: this.code,
            data:this.data,
            message:this.message,
            status:this.status
          };
          return this.res.status(this.statusCode).json(result);
    }
}