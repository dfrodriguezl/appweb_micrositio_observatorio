import React, { Component } from 'react';
import {Grid, makeStyles, useMediaQuery} from "@material-ui/core";
import * as Values from 'Variables/values';
import notfound from "img/404.svg";

const useStyle = makeStyles({
    containerImg:{
        width: "100%",
        height: "100vh",
        backgroundSize: "100%",
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
        padding:"3% 10% 3% 10%",
      },
      titleStyle:{
        color: Values.Redwinecolor,
        fontFamily: Values.SourceWorksans,
        fontWeight: "bold",
        fontSize: Values.SizeSubtitle,
        padding: "0.5em 0 0.5em 0",
      },
});



const Imgnotfound = () => {
     const classes = useStyle();
     const matches = useMediaQuery('(min-width:1281px)');
     var estilo = null;
    {matches ? estilo=classes.containerImg:estilo=classes.containerImg2} 
     return(
       <Grid item container direction="column" xs={8} className={estilo}>           
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
            >
                <h1 className={classes.titleStyle}>Página no encontrada</h1>
            </Grid>
    );
};

const Notfound = () => {
    const classes = useStyle();
    return(
     <Grid item container className={classes.global} justifyContent="center"
     alignItems="center">
       <Mensajenotfound/>
       <Imgnotfound/>
     </Grid>
    );
};

export default Notfound