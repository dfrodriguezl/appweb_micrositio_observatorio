import { Grid, makeStyles, useMediaQuery } from "@material-ui/core";
import React, { Component } from 'react';
import * as Values from 'Variables/values';
import CardsMaps from 'common/Cards';
import Paper from "img/Paper.svg";
import ButtonRedWine from "common/buttonredwine";


const useStyle = makeStyles({
    
    gridglobal:{
        padding: "0 10% 0 10%",
      },
    
    Titleh3:{
        color: Values.Redwinecolor,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeSubtitle,
        padding: Values.PaddingTitleText,  
      },
    
      Textp:{
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeText,
        textAlign: "start",  
        margin: "2% 0 0 0",
      },

      imagen_top:{    
        width: "100% !important",
        height: "45vh",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${Paper})`,       
        backgroundPositionY: "-5vh",         
   },
 
   gridglobal:{
    padding: "0 10vw 0 10vw",    
  },

   imagen_top2:{     
         width: "100%",
         height: "50vh",
         backgroundSize: "100%",
         backgroundRepeat: "no-repeat",
         backgroundImage: `url(${Paper})`,       
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

const Topmaps = () => {
    const classes = useStyle();    
    return (
        <Grid container direccion="row" >
          <Grid container justifyContent="center"
          alignItems="center">
          <h3 className={classes.Titleh3}>{Values.TitleGeovisores}</h3>
                </Grid>
                <Grid item container direction="column" xs className={classes.containerTitle}>
                
                <p className={classes.Textp}>
                  Un geovisor o visor geográfico, corresponde a una herramienta en línea que permite la consulta de información a través de una interfaz geográfica, mediante la cual se puede reunir, gestionar y/o analizar datos. 
                </p>     
                <p className={classes.Textp}>
                  La ventaja de los Geovisores radica en el análisis de la ubicación espacial y la visualizacion de información la cual se realiza por capas mediante la utilización de mapas
                  </p>  
                </Grid>
                <ImagenBottom/> 
        </Grid>
    );
}


const maps = () => {
    const classes = useStyle(); 
    return (
        <Grid container justifyContent="center"
        alignItems="center"  className={classes.gridglobal}>
            <Topmaps/>
            <CardsMaps/>
        </Grid>
    );
}

export default maps
