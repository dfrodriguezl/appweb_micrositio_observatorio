import { Grid, makeStyles, useMediaQuery } from "@material-ui/core";
import React, { Component } from 'react';
import * as Values from 'Observatorio/Variables/values';
import Cardsformulario from 'Observatorio/common/usercard';
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

  //     imagen_top:{    
  //       width: "100% !important",
  //       height: "57vh",
  //       backgroundSize: "70%",
  //       backgroundRepeat: "no-repeat",
  //       backgroundImage: `url(${App})`,       
  //       backgroundPositionX: "left", 
  //       backgroundPositionY: "25%",    
  //  },
 
   gridglobal:{
    padding: "0 10vw 2vw 10vw",    
  },

  //  imagen_top2:{     
  //        width: "100%",
  //        height: "66vh",
  //        backgroundSize: "100%",
  //        backgroundRepeat: "no-repeat",
  //        backgroundImage: `url(${App})`,       
  //        backgroundPosition: "center center",
  //        flexBasis: "100% !important",
  //        maxWidth: "100% !important",
  //  },
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
    return (
        <Grid container justifyContent="center"
        alignItems="center"  className={classes.gridglobal}>
            <Topobservatorio/>
            <Cardsformulario/>
        </Grid>
    );
}

export default otrosobservatorios