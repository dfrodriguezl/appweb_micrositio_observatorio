class ValidService{

    static validPh(model) {

        let valores = Object.values(model);
        let fail="exito";    
        let contfail = 0;             
            for (let i = 0; i < valores.length; i++) { 
                if(i > 0 && i <= 4 ){
                     if(valores[i] == "Vacio" || valores[i] == "vacio"){
                        contfail++
                        if(contfail < 4){
                            fail = "exito" 
                        }else{
                            let position;
                            position=i+1;
                            fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i] + " El codigo Homologado se convierte en obligatorio"                          
                            break;
                        }
                     }else{
                        if(i == 1){
                            if(valores[i].length==20){
                                fail = "exito" 
                            }else{
                                let position;
                                position=i+1;
                                fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
                                break;
                            } 
                        }else{
                            if(i == 2){
                                if(valores[i].length==30){
                                    fail = "exito" 
                                }else{
                                    let position;
                                    position=i+1;
                                    fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
                                    break;
                                } 
                            }else{
                                if(i==3){
                                    if(valores[i].length==12){
                                        fail = "exito" 
                                    }else{
                                        let position;
                                        position=i+1;
                                        fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
                                        break;
                                    } 
                                }
                            }
                        }
                     }
                }else{
                    if(i>=5 && i<=7){                      
                        if(parseInt(valores[i]) >= 0 && valores[i] != null){     
                            fail = "exito"                  
                        }else{
                            let position;
                            position=i+1;
                            fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i]                                                   
                            break;
                        }
                    }else{
                        if(i==8){
                            //console.log(valores[i])                        
                            if(typeof valores[i] === 'string' && valores[i] != null){                            
                                fail = "exito"                            
                            }else{
                                let position;
                                position=i+1;
                                fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i]    
                                //console.log(valores[i])                         
                                break;
                            }
                        }else{
                            if(i==9){
                                if(parseInt(valores[i])>=0){
                                    fail = "exito" 
                                }else{
                                    let position;
                                        position=i+1;
                                        fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i]    
                                        break;
                                }
                            }else{
                                if(i==10){                  
                                    if(typeof valores[i] === 'string' && valores[i] != null){                            
                                        fail = "exito"                            
                                    }else{
                                        let position;
                                        position=i+1;
                                        fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i]    
                                        //console.log(valores[i])                         
                                        break;
                                    }
                                }else{
                                    if(i==11){
                                        if(valores[5]==1){
                                            if(parseInt(valores[i])>0){
                                                fail = "exito" 
                                            }else{
                                                let position;
                                                position=i+1;
                                                fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i]                           
                                                break;
                                            }
                                        }else{
                                            if(parseInt(valores[i])==0){
                                                fail = "exito" 
                                            }else{
                                                let position;
                                                position=i+1;
                                                fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i]                           
                                                break;
                                        }
                                    }                            
                                }else{
                                    if(i==12){
                                        if(parseInt(valores[i]) >= 0 && valores[i] != null){                            
                                            fail = "exito"                            
                                        }else{
                                            let position;
                                            position=i+1;
                                            fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i]    
                                            //console.log(valores[i])                         
                                            break;
                                        }
                                    }else{
                                        if(i>=13 && i<=15){
                                            if(valores[5]==0){
                                               if(i==14){
                                                let conDecimal = valores[i].toFixed(3); 
                                                if(parseFloat(conDecimal)>=0){
                                                    fail = "exito" 
                                                }else{
                                                    let position;
                                                    position=i+1;
                                                    fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i]                         
                                                    break; 
                                                }
                                               }else{
                                               // console.log("prueba4", valores[i])
                                                if(parseInt(valores[i])>=0 && valores[i] != null){
                                                    fail = "exito" 
                                                }else{
                                                    let position;
                                                    position=i+1;
                                                    fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i]                         
                                                    break;
                                                }  
                                               }                                          
                                            }else{
                                                if(parseInt(valores[i])==0){
                                                    fail = "exito" 
                                                }else{
                                                    let position;
                                                    position=i+1;
                                                    fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i]                           
                                                    break;
                                                }
                                            }
                                        }else{
                                            if(i>=16 && i<=17){
                                                if(parseInt(valores[i])>=0 && valores[i] != null){
                                                    fail = "exito" 
                                                }else{
                                                    let position;
                                                    position=i+1;
                                                    fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i]                           
                                                    break; 
                                                }
                                            }else{
                                                if(i==18){
                                                    if(parseInt(valores[i])>0 && valores[i] != null){
                                                        fail = "exito" 
                                                    }else{
                                                        let position;
                                                        position=i+1;
                                                        fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i]                           
                                                        break; 
                                                    }
                                                }else{
                                                    if(i==19){
                                                        if(parseInt(valores[i])>=0 && valores[i] != null){
                                                            fail = "exito" 
                                                        }else{
                                                            let position;
                                                            position=i+1;
                                                            fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i]                           
                                                            break; 
                                                        }
                                                    }else{
                                                        if(i==20){
                                                            if(parseInt(valores[i])>0 && valores[i] != null){
                                                                fail = "exito" 
                                                            }else{
                                                                let position;
                                                                position=i+1;
                                                                fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i]                           
                                                                break; 
                                                            }
                                                        }else{
                                                            if(i>=21 && i<=25){
                                                                if(parseInt(valores[i])>=0 && valores[i] != null){
                                                                    fail = "exito" 
                                                                }else{
                                                                    let position;
                                                                    position=i+1;
                                                                    fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i]                           
                                                                    break; 
                                                                }
                                                            }else{
                                                                if(i==26){
                                                                    if(typeof valores[i] === 'string' && valores[i] != null){                            
                                                                        fail = "exito"                            
                                                                    }else{
                                                                        let position;
                                                                        position=i+1;
                                                                        fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i]                           
                                                                        break;  
                                                                    }
                                                                }else{
                                                                    if(i==27){
                                                                        if(parseInt(valores[i])>0 && valores[i] != null){
                                                                            fail = "exito" 
                                                                        }else{
                                                                            let position;
                                                                            position=i+1;
                                                                            fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i]                           
                                                                            break; 
                                                                        }
                                                                    }else{
                                                                        if(i==28){
                                                                            if(parseInt(valores[i])> -100 && valores[i] != null){
                                                                                fail = "exito" 
                                                                            }else{
                                                                                let position;
                                                                                position=i+1;
                                                                                fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i]                           
                                                                                break; 
                                                                            }
                                                                        }else{
                                                                            if(i==29){
                                                                                if(parseInt(valores[i])>=0 && valores[i] != null){
                                                                                    fail = "exito" 
                                                                                }else{
                                                                                    let position;
                                                                                    position=i+1;
                                                                                    fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i]                           
                                                                                    break; 
                                                                                }
                                                                            }else{
                                                                                if(i==30){
                                                                                    if(valores[i]>0 && valores[i] != null){
                                                                                        fail = "exito" 
                                                                                    }else{
                                                                                        let position;
                                                                                        position=i+1;
                                                                                        fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i]                           
                                                                                        break; 
                                                                                    }                                                                                
                                                                                }else{
                                                                                    if(i==31){
                                                                                        if(parseInt(valores[i])>=0 && valores[i] != null){
                                                                                            fail = "exito" 
                                                                                        }else{
                                                                                            let position;
                                                                                            position=i+1;
                                                                                            fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i]                           
                                                                                            break; 
                                                                                        }           
                                                                                    }else{
                                                                                        if(i==32){
                                                                                            if(parseInt(valores[i])>=0 && valores[i] != null){
                                                                                                fail = "exito"
                                                                                            }else{
                                                                                                let position;
                                                                                                position=i+1;
                                                                                                fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i]                           
                                                                                                break; 
                                                                                            }
                                                                                        }else{
                                                                                            if(i==33){
                                                                                                if(typeof valores[i] === 'string' && valores[i] != null){
                                                                                                    fail = "exito"
                                                                                                }else{
                                                                                                    let position;
                                                                                                    position=i+1;
                                                                                                    fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i]                           
                                                                                                    break; 
                                                                                                }
                                                                                            }else{
                                                                                                if(i==34){
                                                                                                    if(valores[5]==0){
                                                                                                        //let conDecimal = valores[i].toFixed(2); 
                                                                                                        if(parseFloat(valores[i])>=0){
                                                                                                            fail = "exito"
                                                                                                        }else{
                                                                                                            let position;
                                                                                                            position=i+1;
                                                                                                            fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i]                           
                                                                                                            break; 
                                                                                                        }
                                                                                                    }else{
                                                                                                        if(parseInt(valores[i])==0){
                                                                                                            fail = "exito"
                                                                                                        }else{
                                                                                                            let position;
                                                                                                            position=i+1;
                                                                                                            fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i]                           
                                                                                                            break; 
                                                                                                        }
                                                                                                    }
                                                                                                }else{
                                                                                                    if(i==35){
                                                                                                        if(parseInt(valores[i])>=0){
                                                                                                            fail = "exito"
                                                                                                        }else{
                                                                                                            let position;
                                                                                                            position=i+1;
                                                                                                            fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i]                           
                                                                                                            break; 
                                                                                                        }
                                                                                                    }else{
                                                                                                        if(i==36){
                                                                                                            if(parseInt(valores[i])>0){
                                                                                                                fail = "exito"
                                                                                                            }else{
                                                                                                                let position;
                                                                                                                position=i+1;
                                                                                                                fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i]                           
                                                                                                                break; 
                                                                                                            } 
                                                                                                        }else{
                                                                                                            if(i>=37 && i<=38){
                                                                                                                if(parseInt(valores[i])>=0){
                                                                                                                    fail = "exito"
                                                                                                                }else{
                                                                                                                    let position;
                                                                                                                    position=i+1;
                                                                                                                    fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja PH y en la columna "+ position + " con el valor: " + valores[i]                           
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
        return fail;
    }

    static validNph(model) {
        let valores = Object.values(model);
        let fail="exito";   
        let contfail = 0;       
            for (let i = 0; i < valores.length; i++) {                 
                if(i > 0 && i <= 4 ){
                    if(valores[i] == "Vacio" || valores[i] == "vacio"){
                       contfail++
                       if(contfail < 4){
                           fail = "exito" 
                       }else{
                           let position;
                           position=i+1;
                           fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja NPH y en la columna "+ position + " con el valor: " + valores[i] + " El codigo Homologado se convierte en obligatorio"                          
                           break;
                       }
                    }else{
                       if(i == 1){
                           if(valores[i].length==20){
                               fail = "exito" 
                           }else{
                               let position;
                               position=i+1;
                               fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja NPH y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
                               break;
                           } 
                       }else{
                           if(i == 2){
                               if(valores[i].length==30){
                                   fail = "exito" 
                               }else{
                                   let position;
                                   position=i+1;
                                   fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja NPH y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
                                   break;
                               } 
                           }else{
                               if(i==3){
                                   if(valores[i].length==12){
                                       fail = "exito" 
                                   }else{
                                       let position;
                                       position=i+1;
                                       fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja NPH y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
                                       break;
                                   } 
                               }
                           }
                       }
                    }
               }else{
                    if(i>=5 && i<=7){
                        if(parseInt(valores[i]) >= 0 && valores[i] != null){
                            fail = "exito"  
                        }else{
                            let position;
                            position=i+1;
                            fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja NPH y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
                            break;
                        }
                    }else{
                        if(i==8){                      
                            if(typeof valores[i] === 'string' && valores[i] != null){                            
                                fail = "exito"                            
                            }else{
                                let position;
                                position=i+1;
                                fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja NPH y en la columna "+ position + " con el valor: " + valores[i]                         
                                break;
                            }
                        }else{
                            if(i==9){
                                if(parseInt(valores[i]) >= 0 && valores[i] != null){
                                    fail = "exito"  
                                }else{
                                    let position;
                                    position=i+1;
                                    fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja NPH y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
                                    break;
                                }
                            }else{
                                if(i==10){
                                    if(typeof valores[i] === 'string' && valores[i] != null){                            
                                        fail = "exito"                            
                                    }else{
                                        let position;
                                        position=i+1;
                                        fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja NPH y en la columna "+ position + " con el valor: " + valores[i]                         
                                        break;
                                    }
                                }else{
                                    if(i==11){
                                        if(valores[5]==1){
                                            if(parseInt(valores[i]) > 0 && valores[i] != null){
                                                fail = "exito"  
                                            }else{
                                                let position;
                                                position=i+1;
                                                fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja NPH y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
                                                break;
                                            }
                                        }else{
                                            if(parseInt(valores[i])==0){
                                                fail = "exito"   
                                            }else{
                                                let position;
                                                position=i+1;
                                                fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja NPH y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
                                                break;
                                            }
                                        }
                                    }else{
                                        if(i==12){
                                            if(valores[5]==0){
                                                if(parseInt(valores[i]) > 0 && valores[i] != null){
                                                    fail = "exito"  
                                                }else{
                                                    let position;
                                                    position=i+1;
                                                    fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja NPH y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
                                                    break;
                                                }
                                            }else{
                                                if(parseInt(valores[i])==0){
                                                    fail = "exito"   
                                                }else{
                                                    let position;
                                                    position=i+1;
                                                    fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja NPH y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
                                                    break;
                                                }
                                            }
                                        }else{
                                            if(i==13){
                                                if(valores[5]==0){
                                                    if(parseFloat(valores[i]) >= 0 && valores[i] != null){
                                                        fail = "exito"  
                                                    }else{
                                                        let position;
                                                        position=i+1;
                                                        fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja NPH y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
                                                        break;
                                                    }
                                                }else{
                                                    if(parseFloat(valores[i])==0){
                                                        fail = "exito"   
                                                    }else{
                                                        let position;
                                                        position=i+1;
                                                        fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja NPH y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
                                                        break;
                                                    }
                                                }
                                            }else{
                                                if(i==14){
                                                    if(valores[5]==0){
                                                        if(parseInt(valores[i]) > 0 && valores[i] != null){
                                                            fail = "exito"  
                                                        }else{
                                                            let position;
                                                            position=i+1;
                                                            fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja NPH y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
                                                            break;
                                                        }
                                                    }else{
                                                        if(parseInt(valores[i])==0){
                                                            fail = "exito"   
                                                        }else{
                                                            let position;
                                                            position=i+1;
                                                            fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja NPH y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
                                                            break;
                                                        }
                                                    }
                                                }else{
                                                    if(i==15){
                                                        if(parseInt(valores[i]) >= 0 && valores[i] != null){
                                                            fail = "exito"  
                                                        }else{
                                                            let position;
                                                            position=i+1;
                                                            fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja NPH y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
                                                            break;
                                                        }
                                                    }else{
                                                        if(i>=16 && i<=19){
                                                            if(parseInt(valores[i]) > 0 && valores[i] != null){
                                                                fail = "exito"  
                                                            }else{
                                                                let position;
                                                                position=i+1;
                                                                fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja NPH y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
                                                                break;
                                                            }
                                                        }else{
                                                            if(i==20){
                                                                if(typeof valores[i] === 'string' && valores[i] != null){
                                                                    fail = "exito" 
                                                                }else{
                                                                    let position;
                                                                    position=i+1;
                                                                    fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja NPH y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
                                                                    break;
                                                                }
                                                            }else{
                                                                if(i==21){
                                                                    if(parseFloat(valores[i]) > 0 && valores[i] != null){
                                                                        fail = "exito"  
                                                                    }else{
                                                                        let position;
                                                                        position=i+1;
                                                                        fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja NPH y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
                                                                        break;
                                                                    }
                                                                }else{
                                                                    if(i==22){
                                                                        if(parseFloat(valores[i]) > -100 && valores[i] != null){
                                                                            fail = "exito"  
                                                                        }else{
                                                                            let position;
                                                                            position=i+1;
                                                                            fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja NPH y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
                                                                            break;
                                                                        }
                                                                    }else{
                                                                        if(i>=23 && i<=24){
                                                                            if(parseInt(valores[i]) > 0 && valores[i] != null){
                                                                                fail = "exito"  
                                                                            }else{
                                                                                let position;
                                                                                position=i+1;
                                                                                fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja NPH y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
                                                                                break;
                                                                            }
                                                                        }else{
                                                                            if(i==25){
                                                                                if(parseInt(valores[i])>= 0 && valores[i] != null){
                                                                                    fail = "exito"  
                                                                                }else{
                                                                                    let position;
                                                                                    position=i+1;
                                                                                    fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja NPH y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
                                                                                    break;
                                                                                }
                                                                            }else{
                                                                                if(i==26){
                                                                                    if(parseInt(valores[i])>= 0 && valores[i] != null){
                                                                                        fail = "exito"  
                                                                                    }else{
                                                                                        let position;
                                                                                        position=i+1;
                                                                                        fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja NPH y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
                                                                                        break;
                                                                                    }
                                                                                }else{
                                                                                    if(i==27){
                                                                                        if(typeof valores[i] === 'string' && valores[i] != null){
                                                                                            fail = "exito" 
                                                                                        }else{
                                                                                            let position;
                                                                                            position=i+1;
                                                                                            fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja NPH y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
                                                                                            break;
                                                                                        }
                                                                                    }else{
                                                                                    if(i==28){
                                                                                        if(parseInt(valores[i])>= 0 && valores[i] != null){
                                                                                            fail = "exito"  
                                                                                        }else{
                                                                                            let position;
                                                                                            position=i+1;
                                                                                            fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja NPH y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
                                                                                            break;
                                                                                        }
                                                                                    }else{
                                                                                        if(i==29){
                                                                                            if(parseInt(valores[i])>= 0 && valores[i] != null){
                                                                                                fail = "exito"  
                                                                                            }else{
                                                                                                let position;
                                                                                                position=i+1;
                                                                                                fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja NPH y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
                                                                                                break;
                                                                                            }
                                                                                        }else{
                                                                                            if(i>=30 && i<=31){
                                                                                                if(parseInt(valores[i])>= 0 && valores[i] != null){
                                                                                                    fail = "exito"  
                                                                                                }else{
                                                                                                    let position;
                                                                                                    position=i+1;
                                                                                                    fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja NPH y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
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
                                        }
                                    }
                                }
                            }
                        }
                    }
               }
            }
            return fail;
    }

    static validRural(model) {
        let valores = Object.values(model);  
        let contfail = 0;  
        let fail="exito";        
        for (let i = 0; i < valores.length; i++) { 
            if(i > 0 && i <= 4 ){
                if(valores[i] == "Vacio" || valores[i] == "vacio"){
                   contfail++
                   if(contfail < 4){
                       fail = "exito" 
                   }else{
                       let position;
                       position=i+1;
                       fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja RURAL y en la columna "+ position + " con el valor: " + valores[i] + " El codigo Homologado se convierte en obligatorio"                          
                       break;
                   }
                }else{
                   if(i == 1){
                       if(valores[i].length==20){
                           fail = "exito" 
                       }else{
                           let position;
                           position=i+1;
                           fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja RURAL y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
                           break;
                       } 
                   }else{
                       if(i == 2){
                           if(valores[i].length==30){
                               fail = "exito" 
                           }else{
                               let position;
                               position=i+1;
                               fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja RURAL y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
                               break;
                           } 
                       }else{
                           if(i==3){
                               if(valores[i].length==12){
                                   fail = "exito" 
                               }else{
                                   let position;
                                   position=i+1;
                                   fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja RURAL y en la columna "+ position + " con el valor: " + valores[i] + " Cantidad de caracteres"                          
                                   break;
                               } 
                           }
                       }
                   }
                }
           }else{
                if(i>=5 && i<=7){
                    if(parseInt(valores[i]) >= 0 && valores[i] != null){                            
                        fail = "exito"                            
                    }else{
                        let position;
                        position=i+1;
                        fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja RURAL y en la columna "+ position + " con el valor: " + valores[i]                        
                        break;
                    }
                }else{
                    if(i==8){
                        if(typeof valores[i] === 'string' && valores[i] != null){                            
                            fail = "exito"                            
                        }else{
                            let position;
                            position=i+1;
                            fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja RURAL y en la columna "+ position + " con el valor: " + valores[i]    
                            break;
                        }
                    }else{
                        if(i==9){                       
                                if(parseInt(valores[i]) > 0 && valores[i] != null){                            
                                    fail = "exito"                            
                                }else{
                                    let position;
                                    position=i+1;
                                    fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja RURAL y en la columna "+ position + " con el valor: " + valores[i]    
                                    break;
                                }
                        }else{
                            if(i>=10 && i<=11){
                                if(typeof valores[i] === 'string' && valores[i] != null){                            
                                    fail = "exito"                            
                                }else{
                                    let position;
                                    position=i+1;
                                    fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja RURAL y en la columna "+ position + " con el valor: " + valores[i]    
                                    break;
                                }
                            }else{
                                if(i==12){
                                    if(valores[5]==1){
                                        if(parseInt(valores[i]) > 0 && valores[i] != null){                            
                                            fail = "exito"                            
                                        }else{
                                            let position;
                                            position=i+1;
                                            fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja RURAL y en la columna "+ position + " con el valor: " + valores[i]    
                                            break;
                                        }
                                    }else{
                                        if(parseInt(valores[i]) == 0 && valores[i] != null){                            
                                            fail = "exito"                            
                                        }else{
                                            let position;
                                            position=i+1;
                                            fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja RURAL y en la columna "+ position + " con el valor: " + valores[i]    
                                            break;
                                        }
                                    }
                                }else{
                                    if(i==13){
                                        if(valores[5]==0){
                                            if(parseInt(valores[i]) > 0 && valores[i] != null){                            
                                                fail = "exito"                            
                                            }else{
                                                let position;
                                                position=i+1;
                                                fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja RURAL y en la columna "+ position + " con el valor: " + valores[i]    
                                                break;
                                            }
                                        }else{
                                            if(parseInt(valores[i]) == 0 && valores[i] != null){                            
                                                fail = "exito"                            
                                            }else{
                                                let position;
                                                position=i+1;
                                                fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja RURAL y en la columna "+ position + " con el valor: " + valores[i]    
                                                break;
                                            }
                                        }
                                    }else{
                                        if(i==14){
                                            if(valores[5]==0){
                                                if(parseFloat(valores[i]) >= 0 && valores[i] != null){                            
                                                    fail = "exito"                            
                                                }else{
                                                    let position;
                                                    position=i+1;
                                                    fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja RURAL y en la columna "+ position + " con el valor: " + valores[i]    
                                                    break;
                                                }
                                            }else{
                                                if(parseInt(valores[i]) == 0 && valores[i] != null){                            
                                                    fail = "exito"                            
                                                }else{
                                                    let position;
                                                    position=i+1;
                                                    fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja RURAL y en la columna "+ position + " con el valor: " + valores[i]    
                                                    break;
                                                }
                                            }
                                        }else{
                                            if(i==15){
                                                if(valores[5]==0){
                                                    if(parseInt(valores[i]) > 0 && valores[i] != null){                            
                                                        fail = "exito"                            
                                                    }else{
                                                        let position;
                                                        position=i+1;
                                                        fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja RURAL y en la columna "+ position + " con el valor: " + valores[i]    
                                                        break;
                                                    }
                                                }else{
                                                    if(parseInt(valores[i]) == 0 && valores[i] != null){                            
                                                        fail = "exito"                            
                                                    }else{
                                                        let position;
                                                        position=i+1;
                                                        fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja RURAL y en la columna "+ position + " con el valor: " + valores[i]    
                                                        break;
                                                    }
                                                }
                                            }else{
                                                if(i==16){
                                                    if(parseInt(valores[i]) >= 0 && valores[i] != null){                            
                                                        fail = "exito"                            
                                                    }else{
                                                        let position;
                                                        position=i+1;
                                                        fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja RURAL y en la columna "+ position + " con el valor: " + valores[i]    
                                                        break;
                                                    }
                                                }else{
                                                    if(i==17){
                                                        if(parseFloat(valores[i]) >= 0 && valores[i] != null){                            
                                                            fail = "exito"                            
                                                        }else{
                                                            let position;
                                                            position=i+1;
                                                            fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja RURAL y en la columna "+ position + " con el valor: " + valores[i]    
                                                            break;
                                                        }
                                                    }else{
                                                        if(i>=18 && i<=20){
                                                            if(parseInt(valores[i]) >= 0 && valores[i] != null){                            
                                                                fail = "exito"                            
                                                            }else{
                                                                let position;
                                                                position=i+1;
                                                                fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja RURAL y en la columna "+ position + " con el valor: " + valores[i]    
                                                                break;
                                                            }
                                                        }else{
                                                            if(i==21){
                                                                if(typeof valores[i] === 'string' && valores[i] != null){                            
                                                                    fail = "exito"                            
                                                                }else{
                                                                    let position;
                                                                    position=i+1;
                                                                    fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja RURAL y en la columna "+ position + " con el valor: " + valores[i]    
                                                                    break;
                                                                }
                                                            }else{
                                                                if(i==22){
                                                                    if(parseInt(valores[i]) > 0 && valores[i] != null){                            
                                                                        fail = "exito"                            
                                                                    }else{
                                                                        let position;
                                                                        position=i+1;
                                                                        fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja RURAL y en la columna "+ position + " con el valor: " + valores[i]    
                                                                        break;
                                                                    }
                                                                }else{
                                                                    if(i==23){
                                                                        if(parseFloat(valores[i]) > -100 && valores[i] != null){                            
                                                                            fail = "exito"                            
                                                                        }else{
                                                                            let position;
                                                                            position=i+1;
                                                                            fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja RURAL y en la columna "+ position + " con el valor: " + valores[i]    
                                                                            break;
                                                                        }
                                                                    }else{
                                                                        if(i==24){
                                                                            if(parseInt(valores[i]) >= 0 && valores[i] != null){                            
                                                                                fail = "exito"                            
                                                                            }else{
                                                                                let position;
                                                                                position=i+1;
                                                                                fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja RURAL y en la columna "+ position + " con el valor: " + valores[i]    
                                                                                break;
                                                                            }
                                                                        }else{
                                                                            if(i>=25 && i<=27){
                                                                                if(parseInt(valores[i]) > 0 && valores[i] != null){                            
                                                                                    fail = "exito"                            
                                                                                }else{
                                                                                    let position;
                                                                                    position=i+1;
                                                                                    fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja RURAL y en la columna "+ position + " con el valor: " + valores[i]    
                                                                                    break;
                                                                                }
                                                                            }else{
                                                                                if(i==28){
                                                                                    if(typeof valores[i] === 'string' && valores[i] != null){                            
                                                                                        fail = "exito"                            
                                                                                    }else{
                                                                                        let position;
                                                                                        position=i+1;
                                                                                        fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja RURAL y en la columna "+ position + " con el valor: " + valores[i]    
                                                                                        break;
                                                                                    }
                                                                                }else{
                                                                                    if(i==29){
                                                                                        if(parseInt(valores[i]) >= 0 && valores[i] != null){                            
                                                                                            fail = "exito"                            
                                                                                        }else{
                                                                                            let position;
                                                                                            position=i+1;
                                                                                            fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja RURAL y en la columna "+ position + " con el valor: " + valores[i]    
                                                                                            break;
                                                                                        }
                                                                                    }else{
                                                                                        if(i==30){
                                                                                            if(parseInt(valores[i]) >= 0 && valores[i] != null){                            
                                                                                                fail = "exito"                            
                                                                                            }else{
                                                                                                let position;
                                                                                                position=i+1;
                                                                                                fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja RURAL y en la columna "+ position + " con el valor: " + valores[i]    
                                                                                                break;
                                                                                            }
                                                                                        }else{
                                                                                            if(i>=31 && i<=32){
                                                                                                if(parseInt(valores[i]) >= 0 && valores[i] != null){                            
                                                                                                    fail = "exito"                            
                                                                                                }else{
                                                                                                    let position;
                                                                                                    position=i+1;
                                                                                                    fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja RURAL y en la columna "+ position + " con el valor: " + valores[i]    
                                                                                                    break;
                                                                                                }
                                                                                            }else{
                                                                                                if(i>=33 && i<=34){
                                                                                                    if(typeof valores[i] === 'string' && valores[i] != null){                            
                                                                                                        fail = "exito"                            
                                                                                                    }else{
                                                                                                        let position;
                                                                                                        position=i+1;
                                                                                                        fail= "Hubo un problema con la carga del archivo, se detecto un error en la hoja RURAL y en la columna "+ position + " con el valor: " + valores[i]    
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
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
           }
        }
        return fail;        
    }
}

module.exports = ValidService;