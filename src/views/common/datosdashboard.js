class Dash {
 
  static dashBoardCake(data){  
    if (typeof data.cantidadph === "undefined") {
      data.cantidadph = 0;
    }
    if (typeof data.cantidadnph === "undefined") {
      data.cantidadnph = 0;
    }
    if (typeof data.cantidadrural === "undefined") {
      data.cantidadrural = 0;
    }
  return (    
    [
      {
        country: 'Ofertas PH',
        medals: data.cantidadph
      }, 
      {
        country: 'Ofertas NPH',
        medals: data.cantidadnph
      }, 
      {
        country: 'Ofertas Rurales',
        medals: data.cantidadrural
      }           
    ]
  )
  }

  static dashBoardCakePh(data){     
    //console.log("uno validamos la data ph", data)
    if (typeof data.Venta === "undefined") {
      data.Venta = 0;
    }
    if (typeof data.Arrendamiento === "undefined") {
      data.Arrendamiento = 0;
    }  
    return (    
      [
        {
          country: 'Ofertas PH Venta',
          medals: data.Venta
        }, 
        {
          country: 'Ofertas PH Arrendamiento',
          medals: data.Arrendamiento
        },         
      ]
    )
  }

  static dashBoardCakeNph(data){  
   // console.log("uno validamos la data nph", data)
      if (typeof data.Venta === "undefined") {
        data.Venta = 0;
      }
      if (typeof data.Arrendamiento === "undefined") {
        data.Arrendamiento = 0;
      }      
      return (    
        [
          {
            country: 'Ofertas NPH Venta',
            medals: data.Venta
          }, 
          {
            country: 'Ofertas NPH Arriendo',
            medals: data.Arrendamiento
          },         
        ]
      )
  }

  static dashBoardCakeRural(data){    
   // console.log("uno validamos la data rural", data)
        if (typeof data.Venta === "undefined") {
          data.Venta = 0;
        }
        if (typeof data.Arrendamiento === "undefined") {
          data.Arrendamiento = 0;
        }     
        return (    
          [
            {
              country: 'Ofertas PH Venta',
              medals: data.Venta
            }, 
            {
              country: 'Ofertas PH Arrendamiento',
              medals: data.Arrendamiento
            },         
          ]
        )
  }
}

module.exports = Dash