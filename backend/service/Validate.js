class ValidService{

    static validPh(model) {
        let valores = Object.values(model);
        let fail="exito";        
            for (let i = 0; i < valores.length; i++) { 
                //console.log(typeof valores[i], valores[i])                              
                if(i<5){
                    //console.log(valores[i])                        
                        if(parseInt(valores[i]) >= 0 && valores[i] != null){                            
                            fail = "exito"                            
                        }else{
                            let position;
                            position=i+1;
                            fail= "Error en la Hoja Ph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo numerico"   
                            //console.log(valores[i])                         
                            break;
                        }
                }else{
                    if(i<8){
                        //console.log(valores[i])                        
                        if(typeof valores[i] === 'string' && valores[i] != null){                            
                            fail = "exito"                            
                        }else{
                            let position;
                            position=i+1;
                            fail= "Error en la Hoja Ph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo texto"   
                            //console.log(valores[i])                         
                            break;
                        }
                    }else{
                        if(i==8){
                            //console.log(valores[i])                        
                                if(parseInt(valores[i]) >= 0 && valores[i] != null){                            
                                    fail = "exito"                            
                                }else{
                                    let position;
                                    position=i+1;
                                    fail= "Error en la Hoja Ph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo numerico"   
                                    //console.log(valores[i])                         
                                    break;
                                }
                        }else{
                            if(i==9){
                                //console.log(valores[i])                        
                                if(typeof valores[i] === 'string' && valores[i] != null){                            
                                    fail = "exito"                            
                                }else{
                                    let position;
                                    position=i+1;
                                    fail= "Error en la Hoja Ph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo texto"   
                                    //console.log(valores[i])                         
                                    break;
                                }
                            }else{
                                if(i<25){
                                    //console.log(valores[i])                        
                                        if(parseInt(valores[i]) >= 0 && valores[i] != null){                            
                                            fail = "exito"                            
                                        }else{
                                            let position;
                                            position=i+1;
                                            fail= "Error en la Hoja Ph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo numerico"   
                                            //console.log(valores[i])                         
                                            break;
                                        }
                                }else{
                                    if(i==25){
                                        //console.log(valores[i])                        
                                        if(typeof valores[i] === 'string' && valores[i] != null){                            
                                            fail = "exito"                            
                                        }else{
                                            let position;
                                            position=i+1;
                                            fail= "Error en la Hoja Ph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo texto"   
                                            //console.log(valores[i])                         
                                            break;
                                        }
                                    }else{
                                        if(i<27){
                                            //console.log(valores[i])                        
                                                if(parseInt(valores[i]) >= 0 && valores[i] != null){                            
                                                    fail = "exito"                            
                                                }else{
                                                    let position;
                                                    position=i+1;
                                                    fail= "Error en la Hoja Ph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo numerico"   
                                                    //console.log(valores[i])                         
                                                    break;
                                                }
                                        }else{
                                            if(i==27){
                                                //console.log(valores[i])                        
                                                if(parseInt(valores[i]) > -100 && valores[i] != null){                            
                                                    fail = "exito"                            
                                                }else{
                                                    let position;
                                                    position=i+1;
                                                    fail= "Error en la Hoja Ph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo numerico"   
                                                    //console.log(valores[i])                         
                                                    break;
                                                }
                                            }else{
                                                if(i==28){
                                                    //console.log(valores[i])                        
                                                    if(parseInt(valores[i]) >= 0 && valores[i] != null){                            
                                                        fail = "exito"                            
                                                    }else{
                                                        let position;
                                                        position=i+1;
                                                        fail= "Error en la Hoja Ph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo numerico"   
                                                        //console.log(valores[i])                         
                                                        break;
                                                    }
                                                }else{
                                                    if(i==29){
                                                        //console.log(valores[i])                        
                                                        if(typeof valores[i] === 'object' && valores[i] != null){                            
                                                            fail = "exito"                            
                                                        }else{
                                                            let position;
                                                            position=i+1;
                                                            fail= "Error en la Hoja Ph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo fecha"   
                                                            //console.log(valores[i])                         
                                                            break;
                                                        }
                                                    }else{
                                                        if(i<32){
                                                            //console.log(valores[i])                        
                                                                if(parseInt(valores[i]) >= 0 && valores[i] != null){                            
                                                                    fail = "exito"                            
                                                                }else{
                                                                    let position;
                                                                    position=i+1;
                                                                    fail= "Error en la Hoja Ph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo numerico"   
                                                                    //console.log(valores[i])                         
                                                                    break;
                                                                }
                                                        }else{
                                                            if(i==32){
                                                                //console.log(valores[i])                        
                                                                if(typeof valores[i] === 'string' && valores[i] != null){                            
                                                                    fail = "exito"                            
                                                                }else{
                                                                    let position;
                                                                    position=i+1;
                                                                    fail= "Error en la Hoja Ph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo texto"   
                                                                    //console.log(valores[i])                         
                                                                    break;
                                                                }
                                                            }else{
                                                                if(i<38){
                                                                    //console.log(valores[i])                        
                                                                        if(parseInt(valores[i]) >= 0 && valores[i] != null){                            
                                                                            fail = "exito"                            
                                                                        }else{
                                                                            let position;
                                                                            position=i+1;
                                                                            fail= "Error en la Hoja Ph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo numerico"   
                                                                            //console.log(valores[i])                         
                                                                            break;
                                                                        }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }  
            console.log("---------------------------------------------------")
            return fail;
    }

    static validNph(model) {
        let valores = Object.values(model);
        let fail="exito";      
        //console.log(valores.length)  
            for (let i = 0; i < valores.length; i++) { 
                if(i<5){
                    //console.log(valores[i])                        
                        if(parseInt(valores[i]) >= 0 && valores[i] != null){                            
                            fail = "exito"                            
                        }else{
                            let position;
                            position=i+1;
                            fail= "Error en la Hoja Nph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo numerico"   
                            //console.log(valores[i])                         
                            break;
                        }
                }else{
                    if(i<8){
                        //console.log(valores[i])                        
                        if(typeof valores[i] === 'string' && valores[i] != null){                            
                            fail = "exito"                            
                        }else{
                            let position;
                            position=i+1;
                            fail= "Error en la Hoja Nph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo texto"   
                            //console.log(valores[i])                         
                            break;
                        }
                    }else{
                        if(i==8){
                            //console.log(valores[i])                        
                                if(parseInt(valores[i]) >= 0 && valores[i] != null){                            
                                    fail = "exito"                            
                                }else{
                                    let position;
                                    position=i+1;
                                    fail= "Error en la Hoja Nph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo numerico"   
                                    //console.log(valores[i])                         
                                    break;
                                }
                        }else{
                            if(i==9){
                                //console.log(valores[i])                        
                                if(typeof valores[i] === 'string' && valores[i] != null){                            
                                    fail = "exito"                            
                                }else{
                                    let position;
                                    position=i+1;
                                    fail= "Error en la Hoja Nph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo texto"   
                                    //console.log(valores[i])                         
                                    break;
                                }
                            }else{
                                if(i<19){
                                    //console.log(valores[i])                        
                                        if(parseInt(valores[i]) >= 0 && valores[i] != null){                            
                                            fail = "exito"                            
                                        }else{
                                            let position;
                                            position=i+1;
                                            fail= "Error en la Hoja Nph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo numerico"   
                                            //console.log(valores[i])                         
                                            break;
                                        }
                                }else{
                                    if(i==19){
                                        //console.log(valores[i])                        
                                        if(typeof valores[i] === 'string' && valores[i] != null){                            
                                            fail = "exito"                            
                                        }else{
                                            let position;
                                            position=i+1;
                                            fail= "Error en la Hoja Nph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo texto"   
                                            //console.log(valores[i])                         
                                            break;
                                        }
                                    }else{
                                        if(i<23){
                                            //console.log(valores[i])                        
                                                if(parseInt(valores[i]) > -100 && valores[i] != null){                            
                                                    fail = "exito"                            
                                                }else{
                                                    let position;
                                                    position=i+1;
                                                    fail= "Error en la Hoja Nph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo numerico"   
                                                    //console.log(valores[i])                         
                                                    break;
                                                }
                                        }else{
                                            if(i==23){
                                                //console.log(valores[i])                        
                                                if(typeof valores[i] === 'object' && valores[i] != null){                            
                                                    fail = "exito"                            
                                                }else{
                                                    let position;
                                                    position=i+1;
                                                    fail= "Error en la Hoja Ph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo fecha"   
                                                    //console.log(valores[i])                         
                                                    break;
                                                }
                                            }else{
                                                if(i<26){
                                                    //console.log(valores[i])                        
                                                        if(parseInt(valores[i]) >=0 && valores[i] != null){                            
                                                            fail = "exito"                            
                                                        }else{
                                                            let position;
                                                            position=i+1;
                                                            fail= "Error en la Hoja Nph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo numerico"   
                                                            //console.log(valores[i])                         
                                                            break;
                                                        }
                                                }else{
                                                    if(i==26){
                                                        //console.log(valores[i])                        
                                                        if(typeof valores[i] === 'string' && valores[i] != null){                            
                                                            fail = "exito"                            
                                                        }else{
                                                            let position;
                                                            position=i+1;
                                                            fail= "Error en la Hoja Nph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo texto"   
                                                            //console.log(valores[i])                         
                                                            break;
                                                        }
                                                    }else{
                                                        if(i<31){
                                                            //console.log(valores[i])                        
                                                                if(parseInt(valores[i]) >=0 && valores[i] != null){                            
                                                                    fail = "exito"                            
                                                                }else{
                                                                    let position;
                                                                    position=i+1;
                                                                    fail= "Error en la Hoja Nph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo numerico"   
                                                                    //console.log(valores[i])                         
                                                                    break;
                                                                }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            console.log("---------------------------------------------------")
            return fail;
    }

    static validRural(model) {
        let valores = Object.values(model);
        let fail="exito";        
        for (let i = 0; i < valores.length; i++) { 
            if(i<5){
                //console.log(valores[i])                        
                    if(parseInt(valores[i]) >= 0 && valores[i] != null){                            
                        fail = "exito"                            
                    }else{
                        let position;
                        position=i+1;
                        fail= "Error en la Hoja Rural, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo numerico"   
                        //console.log(valores[i])                         
                        break;
                    }
            }else{
                if(i<8){
                    //console.log(valores[i])                        
                    if(typeof valores[i] === 'string' && valores[i] != null){                            
                        fail = "exito"                            
                    }else{
                        let position;
                        position=i+1;
                        fail= "Error en la Hoja Nph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo texto"   
                        //console.log(valores[i])                         
                        break;
                    }
                }else{
                    if(i==8){
                        //console.log(valores[i])                        
                            if(parseInt(valores[i]) >= 0 && valores[i] != null){                            
                                fail = "exito"                            
                            }else{
                                let position;
                                position=i+1;
                                fail= "Error en la Hoja Nph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo numerico"   
                                //console.log(valores[i])                         
                                break;
                            }
                    }else{
                        if(i<11){
                            //console.log(valores[i])                        
                            if(typeof valores[i] === 'string' && valores[i] != null){                            
                                fail = "exito"                            
                            }else{
                                let position;
                                position=i+1;
                                fail= "Error en la Hoja Nph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo texto"   
                                //console.log(valores[i])                         
                                break;
                            }
                        }else{
                            if(i<20){
                                //console.log(valores[i])                        
                                    if(parseInt(valores[i]) >= 0 && valores[i] != null){                            
                                        fail = "exito"                            
                                    }else{
                                        let position;
                                        position=i+1;
                                        fail= "Error en la Hoja Nph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo numerico"   
                                        //console.log(valores[i])                         
                                        break;
                                    }
                            }else{
                                if(i==20){
                                    //console.log(valores[i])                        
                                    if(typeof valores[i] === 'string' && valores[i] != null){                            
                                        fail = "exito"                            
                                    }else{
                                        let position;
                                        position=i+1;
                                        fail= "Error en la Hoja Nph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo texto"   
                                        //console.log(valores[i])                         
                                        break;
                                    }
                                }else{
                                    if(i<24){
                                        //console.log(valores[i])                        
                                            if(parseInt(valores[i]) > -100 && valores[i] != null){                            
                                                fail = "exito"                            
                                            }else{
                                                let position;
                                                position=i+1;
                                                fail= "Error en la Hoja Nph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo numerico"   
                                                //console.log(valores[i])                         
                                                break;
                                            }
                                    }else{
                                        if(i==24){
                                            //console.log(valores[i])                        
                                            if(typeof valores[i] === 'object' && valores[i] != null){                            
                                                fail = "exito"                            
                                            }else{
                                                let position;
                                                position=i+1;
                                                fail= "Error en la Hoja Ph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo fecha"   
                                                //console.log(valores[i])                         
                                                break;
                                            }
                                        }else{
                                            if(i<27){
                                                //console.log(valores[i])                        
                                                    if(parseInt(valores[i]) >=0 && valores[i] != null){                            
                                                        fail = "exito"                            
                                                    }else{
                                                        let position;
                                                        position=i+1;
                                                        fail= "Error en la Hoja Nph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo numerico"   
                                                        //console.log(valores[i])                         
                                                        break;
                                                    }
                                            }else{
                                                if(i==27){
                                                    //console.log(valores[i])                        
                                                    if(typeof valores[i] === 'string' && valores[i] != null){                            
                                                        fail = "exito"                            
                                                    }else{
                                                        let position;
                                                        position=i+1;
                                                        fail= "Error en la Hoja Nph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo texto"   
                                                        //console.log(valores[i])                         
                                                        break;
                                                    }
                                                }else{
                                                    if(i<32){
                                                        //console.log(valores[i])                        
                                                            if(parseInt(valores[i]) >=0 && valores[i] != null){                            
                                                                fail = "exito"                            
                                                            }else{
                                                                let position;
                                                                position=i+1;
                                                                fail= "Error en la Hoja Nph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo numerico"   
                                                                //console.log(valores[i])                         
                                                                break;
                                                            }
                                                    }else{
                                                        if(i<34){
                                                            //console.log(valores[i])                        
                                                            if(typeof valores[i] === 'string' && valores[i] != null){                            
                                                                fail = "exito"                            
                                                            }else{
                                                                let position;
                                                                position=i+1;
                                                                fail= "Error en la Hoja Nph, en la columna : "+ position + " con el valor: " + valores[i]+" no es de tipo texto"   
                                                                //console.log(valores[i])                         
                                                                break;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        console.log("---------------------------------------------------")
        return fail;
    }
}

module.exports = ValidService;