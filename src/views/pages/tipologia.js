import { Grid, makeStyles, useMediaQuery } from "@material-ui/core";
import React, { Component } from 'react';
import * as Values from 'Observatorio/Variables/values';
import CardsMaps from 'Observatorio/common/tipologiacards';
import App from "Observatorio/img/tipologia.png";
import ButtonRedWine from "Observatorio/common/buttonredwine";

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
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeText,
        textAlign: "start",  
        margin: "1em 0 0 0",
      },

      imagen_top:{    
        width: "100% !important",
        height: "70vh",
        backgroundSize: "70%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${App})`,       
        backgroundPositionX: "left", 
        backgroundPositionY: "20%",    
   },
 
   gridglobal:{
    padding: "0 10vw 0 10vw",    
  },
  imageRigth:{
    width:500
  }
});

const ImagenBottom = () => {
    const classes = useStyle();
    const matches = useMediaQuery('(min-width:769px)');
    var estilo = null;
    
    return(
      <img className={classes.imageRigth} src={App}></img>
      
      
    )
  } 

const TopTipologia = () => {
    const classes = useStyle();    
    return (
        <Grid container direccion="row" >
           <Grid container justifyContent="center"
          alignItems="center">
  
                </Grid>
                <Grid item container direction="column" xs={12} sm={6} md={6} lg={6} className={classes.containerTitle}>
                <h3 className={classes.Titleh3}>Tipologías Constructivas</h3>
                <p className={classes.Textp}>
                Las Tipologías Constructivas se refieren al tipo de construcciòn en las cuales se clasifica un inmueble, teniendo como punto de partida sus caracteristicas arquitectonicas, funciones de uso, actividades economicas, entre otras; Acorde a la Clasificaciòn realizada por el Instituto Geogràfico Agustin Codazzi - IGAC, existen 10 Tipologias constructivas: Asamblea, Negocios, Educativo, Industrial, De Alto Riesgo, Institucional, Mercantil, Residencial, Almacenamiento y Otras.
                
                </p> 
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
            <ImagenBottom/> 
            </Grid>
                
        </Grid>
    );
}


const Tipologias = () => {
    const classes = useStyle(); 
    return (
        <Grid container justifyContent="center"
        alignItems="center"  className={classes.gridglobal}>
            <TopTipologia/>
        </Grid>
    );
}

export default Tipologias