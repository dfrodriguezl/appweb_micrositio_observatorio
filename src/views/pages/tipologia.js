import { Grid, makeStyles, useMediaQuery } from "@material-ui/core";
import React, { Component } from 'react';
import * as Values from 'Variables/values';
import CardsMaps from 'common/tipologiacards';
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

const TopTipologia = () => {
    const classes = useStyle();    
    return (
        <Grid container direccion="row" >
                <Grid item container direction="column" xs className={classes.containerTitle}>
                <h3 className={classes.Titleh3}>Tipologías</h3>
                <p className={classes.Textp}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed turpis sit amet velit porttitor congue laoreet eu ex. In dapibus accumsan metus eu eleifend. Pellentesque vitae scelerisque mauris.                   
                </p> 
            </Grid>
                <ImagenBottom/> 
        </Grid>
    );
}


const Tipologias = () => {
    const classes = useStyle(); 
    return (
        <Grid container justifyContent="center"
        alignItems="center"  className={classes.gridglobal}>
            <TopTipologia/>
            <CardsMaps/>
        </Grid>
    );
}

export default Tipologias