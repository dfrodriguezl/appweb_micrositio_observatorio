import { Grid, makeStyles, useMediaQuery} from "@material-ui/core";
import React, { Component } from 'react';
import * as Values from 'Observatorio/Variables/values';
import CardsMaps from 'Observatorio/common/Cards';
import Paper from "Observatorio/img/geovisor.jpg";
import ButtonRedWine from "Observatorio/common/buttonredwine";
import {useTranslation} from "react-i18next";


const useStyle = makeStyles({
    
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
        margin: "2% 0 0 0",
      },

      imagen_top:{    
        width: "100% !important",
        height: "45vh",
        backgroundSize: "32vh",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${Paper})`,       
        backgroundPosition: "center",         
   },
 
   gridglobal:{
    padding: "0 10vw 0 10vw",    
  },
  gridglobalmovil:{
    padding: "0 5vw 3vw 5vw",        
  },

   imagen_top2:{     
         width: "100%",
         height: "55vh",
         backgroundSize: "32vh",
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
    const [t, i18n]= useTranslation("global");  
    const ajustable = "ajustable"
    return (
        <Grid container direccion="row" >
          <Grid container justifyContent="center"
          alignItems="center">
          <h3 className={classes.Titleh3+" "+ajustable}>{t("geovisors.geovisor")}</h3>
                </Grid>
                <Grid item container direction="column" xs className={classes.containerTitle}>
                
                <p className={classes.Textp+" "+ajustable}>
                {t("geovisors.geovisor2")}</p>     
                <p className={classes.Textp+" "+ajustable}>{t("geovisors.geovisor3")}</p>  
                </Grid>
                <ImagenBottom/> 
        </Grid>
    );
}


const maps = () => {
    const classes = useStyle(); 
    const matches = useMediaQuery("(min-width:769px)");
    var estilo = null;
    {
      matches?estilo=classes.gridglobal:estilo=classes.gridglobalmovil
    }
    return (
        <Grid container justifyContent="center"
        alignItems="center" id="target-two" className={estilo}>
            <Topmaps/>
            <CardsMaps/>
        </Grid>
    );
}

export default maps
