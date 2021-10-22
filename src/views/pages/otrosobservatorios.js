import { Grid, makeStyles, useMediaQuery } from "@material-ui/core";
import React, { Component } from 'react';
import * as Values from 'Variables/values';
import CardsMaps from 'common/otroscards';
import App from "img/App.svg";
import ButtonRedWine from "common/buttonredwine";

const useStyle = makeStyles({
    
    gridglobal:{
        padding: "0 10% 0 10%",
      },
    
    Titleh3:{
        color: Values.Redwinecolor,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeTitle,
        padding: Values.PaddingTitleText,  
      },
    
      Textp:{
        color: Values.Redwinecolor,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeText,
        textAlign: "start",  
        margin: "1em 0 0 0",
      },

      imagen_top:{    
        width: "100% !important",
        height: "57vh",
        backgroundSize: "70%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${App})`,       
        backgroundPositionX: "left", 
        backgroundPositionY: "25%",    
   },
 
   gridglobal:{
    padding: "0 10vw 0 10vw",    
  },

   imagen_top2:{     
         width: "100%",
         height: "66vh",
         backgroundSize: "100%",
         backgroundRepeat: "no-repeat",
         backgroundImage: `url(${App})`,       
         backgroundPosition: "center center",
         flexBasis: "100% !important",
         maxWidth: "100% !important",
   },
});

const ImagenBottom = () => {
    const classes = useStyle();
    const matches = useMediaQuery('(min-width:769px)');
    var estilo = null;
    {matches ? estilo=classes.imagen_top:estilo=classes.imagen_top2}   
    return(
      <Grid item container direction="column" xs={4} className={estilo}></Grid>
      
    )
  } 

const Topobservatorio = () => {
    const classes = useStyle();    
    return (
        <Grid container direccion="row" >
                <Grid item container direction="column" xs className={classes.containerTitle}>
                <h3 className={classes.Titleh3}>Otros Observatorios Inmobiliarios</h3>
                <p className={classes.Textp}>
                    Existen varios Observatorios Inmobiliarios que recopilan la información del mercado inmobiliario, sus usos mas relevantes son:                    
                </p> 
                <p className={classes.Textp}>
                    1. Calculo de Avalúos
                    <br/>
                    2. Registro de Ofertas tanto públicas como privadas
                    <br/>
                    3. Seguimiento y análisis a las dinamicas inmobiliarias
                    <br/>
                    4. Integración con información estadística
                    <br/>
                    5. Publicación de datos oficiales
                    <br/>
                    6. Fuente de investigaciones cientifias
                </p>    
                <p className={classes.Textp}>
                    los mismos deben estar articulados con el Observatorio Nacional del Depatamento Nacional de Estadística - DANE.
                </p> 
            </Grid>
                <ImagenBottom/> 
        </Grid>
    );
}


const otrosobservatorios = () => {
    const classes = useStyle(); 
    return (
        <Grid container justifyContent="center"
        alignItems="center"  className={classes.gridglobal}>
            <Topobservatorio/>
            <CardsMaps/>
        </Grid>
    );
}

export default otrosobservatorios