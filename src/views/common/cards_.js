import React, { Component } from 'react';
import Sale from "Observatorio/img/Sale.svg";
import Fill from "Observatorio/img/Fill.svg";
import Segment from "Observatorio/img/Segment.svg";
import Building_ from "Observatorio/img/Building_.svg";
import Buildingamico from "Observatorio/img/Buildingamico.svg";

const CardServicios =[
    {
        "id":1,
        "title":"Ofertas de inmobiliarias",
        "image_card":Sale,
        "description":"Permite conocer el valor y ubicación de las Ofertas Inmobiliarias existenes en el Territorio Nacional..",
        "link":"Observatorio/Visores/Esmeralda"
    },
    {
        "id":2,
        "title":"Boletines",
        "image_card":Fill,
        "description":"Publicaciòn y repositorio de Boletines generados a partir de la información recopilada, para el apoyo en las decisiones y adiciòn de valor.",
        "link":"Observatorio/Visores/Esmeralda2"
    },
    {
        "id":3,
        "title":"Estadisticas",
        "image_card":Segment,
        "description":"Genearación de Estadìsticas y/o Indicadores, sobre el comportamiento inmobiliario a lo largo del territorio Nacional.",
        "link":""
    }

]

export default CardServicios