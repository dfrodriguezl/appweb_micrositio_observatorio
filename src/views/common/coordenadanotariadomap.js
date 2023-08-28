class MapDashNotariado {
    static markersDataNotariado(data){ 
     // console.log("ARREGLO1", data) 
      let j=0;
      let location = [];    
      if(data.length <= 0 ){
        location[0] =
        {
              location: [4.3556, -74.0451],
              tooltip: {
                text: '<h2>Información</h2><br><h4>Sin información seleccionada para mostrar</h4>',
              },
        }
      }else{
        for (let i = 0; i < data.length; i+=3) {  
          location[j] =
             {
                   location: [data[i], data[i+1]],
                   tooltip: {
                     text: '<h2>Información</h2><br><h5>'+data[i+2]+'</h5>',
                   },
                   //prueba:data[i]
             }  
             j++;       
         }
      }   
     // console.log("arreglo12", location) 
      return location;
    }
  
  }
  module.exports = MapDashNotariado