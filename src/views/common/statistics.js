import Sale from "Observatorio/img/Sale.svg";
import Fill from "Observatorio/img/Fill.svg";
import Segment from "Observatorio/img/Segment.svg";
import Building from "Observatorio/img/Building-amico.svg"
import BuildingRafiki from "Observatorio/img/Building-rafiki.svg"
import HouseSearch from "Observatorio/img/House-searching-cuate.svg"
const cardService= [
    [
        {
            "id":1,
            "title":"Censo de edificaciones (CEED)",
            "description":"Determina el estado actual de la actividad edificadora para establecer su composición, evolución y producción, contribuyendo a la medición y cálculo de los principales agregados macroeconómicos. ",
            "image_card":Sale,
            "link":"Observatorio//Servicios/estadisticas/Ceed"
        },
        {
            "id":2,
            "title":"Estadisticas de Licencias de Construcción (ELIC)",
            "description":"Tiene como objetivo conocer el potencial de la actividad edificadora del país, cuantificar el total de metros aprobados para construcción, por destino, según tipo de licencias, tipo de solicitud, clase de construcción y estrato socioeconómico. ",
            "image_card":Fill,
            "link":"Observatorio//Visores/Esmeralda2"
        },
        {
            "id":3,
            "title":"Financiación de Vivienda (FIV)",
            "description":"Permite conocer el volumen de recursos dirigidos a la construcción y adquisición de vivienda en el país, a través del análisis de monto y número de créditos desembolsados para compra de vivienda y del total de operaciones de créditos",
            "image_card":Segment,
            "link":"Observatorio//Visores/Esmeralda2"
        }
    ],
    [
        {
            "id":1,
            "title":"Índice de valoración predial (IVP)",
            "description":"Indice que mide la variación en el valor de los bienes inmuebles con destino económico habitacional. Se calcula con el promedio de las variaciones de los valores comerciales reportados en una muestra de predios visitados.",
            "image_card":BuildingRafiki,
            "link":"Observatorio//Visores/Esmeralda2"
        },
        {
            "id":2,
            "title":"Índice de Precios de la Vivienda Nueva (IPVN)",
            "description":"Es un indicador que permite conocer la evolución de los precios de venta de la vivienda nueva en proceso de construcción y/o hasta la última unidad vendida. ",
            "image_card":Building,
            "link":"Observatorio//Visores/Esmeralda2"
        },
        {
            "id":3,
            "title":"Vivienda VIS y NO VIS",
            "description":"Es un derivado del Censo de edificaciones (CEED), el cual se centra en presentar información del área y unidades de casas y apartamentos de acuerdo con la clasificación de vivienda de interés social y vivienda diferente de interés social..",
            "image_card":HouseSearch,
            "link":"Observatorio//Visores/Esmeralda2"
        }
    ]
]

export default cardService