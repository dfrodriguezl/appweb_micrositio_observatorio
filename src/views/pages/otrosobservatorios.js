import { Grid, makeStyles, useMediaQuery } from "@material-ui/core";
import React, { Component } from 'react';
import * as Values from 'Observatorio/Variables/values';
import CardsMaps from 'Observatorio/common/otroscards';
import Cardsinternational from 'Observatorio/common/cardsinternational';
import App from "Observatorio/img/App.svg";
import ButtonRedWine from "Observatorio/common/buttonredwine";

const useStyle = makeStyles({
  listyle:{
    paddingLeft:"0.6em"
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

      Textp2:{
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeText,
        textAlign: "start",  
        margin: "1em 0 0 1.2em",
        paddingLeft:"1em"
      },

      imagen_top:{    
        width: "100% !important",
        height: "50vh",
        backgroundSize: "70%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${App})`,       
        backgroundPositionX: "left", 
        backgroundPositionY: "25%",    
   },
 
   gridglobal:{
    padding: "0 10vw 0 10vw",    
  },
  gridglobalmovil:{
    padding: "0 5vw 2vw 5vw",    
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
          <Grid container justifyContent="center"
          alignItems="center">
          <h3 className={classes.Titleh3}>Otros observatorios inmobiliarios</h3>
                </Grid>
                <Grid item container direction="column" xs className={classes.containerTitle} >              
                <p className={classes.Textp}>
                    Existen varios Observatorios Inmobiliarios que recopilan la información del mercado inmobiliario, sus usos más relevantes son:                    
                </p> 
                <ol className={classes.Textp2}>
                    <li className={classes.listyle}>Cálculo de avalúos</li>
                    <li className={classes.listyle}>Registro de ofertas tanto públicas como privadas</li>
                    <li className={classes.listyle}>Seguimiento y análisis a las dinámicas inmobiliarias</li>
                    <li className={classes.listyle}>Integración con información estadística</li>
                    <li className={classes.listyle}>Publicación de datos oficiales</li>
                    <li className={classes.listyle}>Fuente de investigaciones científicas</li>
                </ol>    
                <p className={classes.Textp}>
                    Los mismos deben estar articulados con el Observatorio Nacional del Departamento Administrativo Nacional de Estadística (DANE).
                </p> 
            </Grid>
                <ImagenBottom/> 
        </Grid>
    );
}


const otrosobservatorios = () => {
    const classes = useStyle(); 
    const matches = useMediaQuery("(min-width:769px)");
    var estilo = null;
    {
      matches?estilo=classes.gridglobal:estilo=classes.gridglobalmovil
    }
    return (
        <Grid container justifyContent="center"
        alignItems="center"  className={estilo}>
            <Topobservatorio/>
            <CardsMaps/>
            <Cardsinternational/>
        </Grid>
    );
}

export default otrosobservatorios