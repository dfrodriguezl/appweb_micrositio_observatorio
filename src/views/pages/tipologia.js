import { Grid, makeStyles, useMediaQuery } from "@material-ui/core";
import React, { Component } from 'react';
import * as Values from 'Observatorio/Variables/values';
import CardsMaps from 'Observatorio/common/tipologiacards';
import App from "Observatorio/img/tipologia.png";
import ButtonRedWine from "Observatorio/common/buttonredwine";

const useStyle = makeStyles({
    
    gridglobal:{
        padding: "0 10vw 0 10vw",
      },
      gridglobalmovil:{
        padding: "0 5vw 0 5vw",
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
 
  imageRigth:{
    width:500
  },
  imageMobile:{
    width:"100%"
  }
});

const ImagenBottom = () => {
    const classes = useStyle();
    const matches = useMediaQuery('(max-width:769px)');
    let estilo =  matches ?classes.imageMobile : classes.imageRigth
    console.log(estilo)
    
    return(
      <img className={estilo} src={App}></img>
      
    )
  } 

const TopTipologia = () => {
    const classes = useStyle();    
    return (
        <Grid item container direccion="row" xs={12} sm={12} md={12} lg={12} >
          
             <Grid item container direction="column" xs={12} sm={6} md={6} lg={6} className={classes.containerTitle}>
                <h3 className={classes.Titleh3}>Tipologías Constructivas</h3>
                <p className={classes.Textp}>
                Las tipologías constructivas se refieren al tipo de construcción en las cuales se clasifica un inmueble, teniendo como punto de partida sus características arquitectónicas, funciones de uso, actividades economicas, entre otras; acorde a la clasificación realizada por el Instituto Geogràfico Agustin Codazzi - IGAC, existen 10 tipologías constructivas: Asamblea, negocios, educativo, industrial, de alto riesgo, institucional, mercantil, residencial, almacenamiento y otras.
                
                </p> 
                <p className={classes.Textp}>
                En el siguiente botón se podrá descargar un documento que lista las Tipologías Constructivas mas habituales en Colombia.
                   </p>
                   <ButtonRedWine Title="descargar">

                   </ButtonRedWine>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                    <ImagenBottom/> 
            </Grid>
                
        </Grid>
    );
}


const Tipologias = () => {
    const classes = useStyle(); 
    const matches = useMediaQuery("(min-width:769px)");
    var estilo = null;
    {
      matches?estilo=classes.gridglobal:estilo=classes.gridglobalmovil
    }
    return (
        <Grid container justifyContent="center"
        alignItems="center"  className={estilo}>
            <TopTipologia/>
        </Grid>
    );
}

export default Tipologias 