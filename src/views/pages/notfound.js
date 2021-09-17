import React, { Component } from 'react';
import {Grid, makeStyles} from "@material-ui/core";
import * as Values from 'Variables/values';

const useStyle = makeStyles({
    containerImg:{
        width: "100%",
        height: "55vh",
        backgroundSize: "100%",
        margin: "0 0 0 8%",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",       
        backgroundPosition: "center center",
      },

      global:{
        padding:"3% 10% 3% 10%",
      },

      mensaje:{
        padding: "0 7% 0 0",
      },

      textStyle: {
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeText,
        textAlign: "start",
        padding: "0 0 0 0",
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
    return(
      <Grid item xs={8}>  
        <div className={classes.containerImg}></div>
      </Grid>
    );
  };

  const Mensajenotfound = () => {
    const classes = useStyle();
    return(
            <Grid
                item
                direction="column"
                container
                justifyContent="center"
                xs
                className={classes.mensaje}
            >
                <h1 className={classes.titleStyle}>¡Lo sentimos! Página en mantenimiento.</h1>
                <p className={classes.textStyle}>Apreciado usuario,</p>
                <br/>
                <p className={classes.textStyle}>La página que estás buscando se encuentra en mantenimiento temporal o corresponde a un enlace antiguo, te invitamos regresar al inicio y navegue en el menú principal. Gracias por tu comprensión.</p>
            </Grid>
    );
};

const Notfound = () => {
    const classes = useStyle();
    return(
        <Grid container direction="colunm" className={classes.global}>
            <Mensajenotfound/>
            <Imgnotfound/>
        </Grid>
    );
};

export default Notfound