class Dash {
 
  static dashBoardCake(data){  
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
       // console.log(data)    
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