import React, { Component } from 'react';
import Sale from "Observatorio/img/igac-logo.png";
import Fill from "Observatorio/img/logo2.png";
import Segment from "Observatorio/img/logo3.png";
import Building_ from "Observatorio/img/logo4.png";
import Buildingamico from "Observatorio/img/logo5.png";
import logo6 from "Observatorio/img/logo6.png";
import logo7 from "Observatorio/img/logo7.png";

const cardotros = [
    {
        "id":1,
        "title":"IGAC",
        "description":"Infraestructura Colombiana de datos espaciales",
        "image_card":Sale,
        "link":"https://www.icde.gov.co/datos-y-recursos/datos-y-recursos-de-informacion/datos/observatorio/observatorio-inmobiliario"
    },
    {
        "id":2,
        "title":"Santiago de Cali",
        "description":"Observatorio inmobiliario catastral OIC",
        "image_card":logo6,
        "link":"https://www.cali.gov.co/catastro/publicaciones/147970/observatorio-inmobiliario/"

    },
    {
        "id":3,
        "title":"Bogotá",
        "description":"Observatorio de suelo y dinamica inmobiliaria OSD",
        "image_card":Segment,
        "link":"https://www.minvivienda.gov.co/viceministerio-de-vivienda/espacio-urbano-y-territorial/aula-de-financiamiento/informacion-territorial/observatorio-de-suelo-y-dinamica-inmobiliaria"
    },
    {
        "id":4,
        "title":"Barranquilla",
        "description":"Observatorio inmobiliairo",
        "image_card":Building_,
        "link":"http://catastro.barranquilla.gov.co:7000/Observatorio/index.html"
    },
    {
        "id":5,
        "title":"Fusagasugá",
        "description":"Observatorio inmobiliairo",
        "image_card":Buildingamico,
        "link":"https://catastro.fusagasuga.gov.co/observatorio-inmobiliario/"
    },
    {
        "id":6,
        "title":"Bogotá",
        "description":"Observatorio tecnico catastral",
        "image_card":Fill,
        "link":"https://www.catastrobogota.gov.co/observatorio-catastral/observatorio-tecnico-catastral"
    
    },
    {
        "id":7,
        "title":"Armenia",
        "description":"Observatorio Inmobiliario y de vivienda de Armenia OIVA",
        "image_card":logo7,
        "link":"https://oiarmenia.org/obs/"
    }

]

export default cardotros;