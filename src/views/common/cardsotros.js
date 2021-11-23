import React, { Component } from 'react';
import Sale from "Observatorio/img/Sale.svg";
import Fill from "Observatorio/img/Fill.svg";
import Segment from "Observatorio/img/Segment.svg";
import Building_ from "Observatorio/img/Building_.svg";
import Buildingamico from "Observatorio/img/Buildingamico.svg";

const cardotros = [
    {
        "id":1,
        "title":"IGAC",
        "image_card":Sale,
        "link":"http://www2.igac.gov.co/igac_web/contenidos/plantilla_anclasDocs_cont_pagDetalle.jsp?idMenu=101"
    },
    {
        "id":2,
        "title":"Bogotá",
        "image_card":Fill,
        "link":"http://www.inventariobogota.gov.co/observatorios/observatorio-tecnico-catastral-otc"
    },
    {
        "id":3,
        "title":"Barranquilla",
        "image_card":Segment,
        "link":"http://catastro.barranquilla.gov.co:7000/Observatorio/"
    },
    {
        "id":4,
        "title":"Cali",
        "image_card":Building_,
        "link":"https://www.cali.gov.co/catastro/publicaciones/147970/observatorio-inmobiliario/"
    },
    {
        "id":5,
        "title":"Medellín",
        "image_card":Buildingamico,
        "link":"http://catastrooime.blogspot.com/"
    }

]

export default cardotros;