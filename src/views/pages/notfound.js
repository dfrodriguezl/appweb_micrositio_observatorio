import React, { Component } from 'react';
import {Grid, makeStyles, useMediaQuery} from "@material-ui/core";
import * as Values from 'Observatorio/Variables/values';
import notfound from "Observatorio/img/404.svg";

const useStyle = makeStyles({
    containerImg:{
        width: "100%",
        height: "80vh",
        backgroundSize: "54%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${notfound})`,    
        backgroundPosition: "center",
      },

      containerImg2:{
        width: "100%",
        height: "60vh",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${notfound})`,    
        backgroundPosition: "center",
      },

      global:{
        padding:"0 10vw 0 10vw",
      },
      globalmovil:{
        padding:"0 5vw 0 5vw",
      },
      titleStyle:{
        color: Values.Redwinecolor,
        fontFamily: Values.SourceRoboto,
        fontWeight: "bold",
        fontSize: Values.SizeSubtitle,
        padding: Values.PaddingTitleText,
      },
});



const Imgnotfound = () => {
     const classes = useStyle();
     const matches = useMediaQuery('(min-width:1281px)');
     var estilo = null;
    {matches ? estilo=classes.containerImg:estilo=classes.containerImg2} 
     return(
       <Grid item container direction="column" xs={12} className={estilo}>           
       </Grid>
       
     );
   };

  const Mensajenotfound = () => {
    const classes = useStyle();
    return(
            <Grid
                direction="column"
                container
                justifyContent="center"
                alignItems="center"
            >
                <h1 className={classes.titleStyle}>Página no encontrada</h1>
            </Grid>
    );
};

const Notfound = () => {
    const classes = useStyle();
    const matches = useMediaQuery("(min-width:769px)");
    var estilo = null;
    {
      matches?estilo=classes.global:estilo=classes.globalmovil
    }
    return(
     <Grid item container className={estilo} justifyContent="center"
     alignItems="center">
       <Mensajenotfound/>
       <Imgnotfound/>
     </Grid>
    );
};

export default Notfound