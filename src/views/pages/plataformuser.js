import { Grid, makeStyles, useMediaQuery } from "@material-ui/core";
import React, { Component } from 'react';
import * as Values from 'Observatorio/Variables/values';
import Cardsformulario from 'Observatorio/common/usercard';
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
});



const Topobservatorio = () => {
  const classes = useStyle();
  return (
    <Grid container direccion="row">
      <Grid container justifyContent="center" alignItems="center">
        <h3 className={classes.Titleh3}>Plataforma Usuario</h3>
      </Grid>
    </Grid>
  );
};


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
            <Cardsformulario/>
        </Grid>
    );
}

export default otrosobservatorios