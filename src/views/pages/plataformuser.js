import { Grid, makeStyles, useMediaQuery } from "@material-ui/core";
import React, { Component } from "react";
import * as Values from "Observatorio/Variables/values";
import Cardsformulario from "Observatorio/common/usercard";
import ButtonRedWine from "Observatorio/common/buttonredwine";
import { Redirect } from 'react-router';
const useStyle = makeStyles({
  gridglobal: {
    padding: "0 10vw 0 10vw",
  },
  gridglobalmovil: {
    padding: "0 5vw 0 5vw",
  },

  Titleh3: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeTitle,
    padding: "1em 0 0.5em 0",
  },

  Textp: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "start",
    margin: "0em 0 1.5em 0",
  },
});

const Topobservatorio = () => {
  const classes = useStyle();
  let name = localStorage.getItem("name");
  return (
    <Grid container direccion="row">      
      <Grid container justifyContent="center" alignItems="center">
        <h3 className={classes.Titleh3}>Plataforma Usuario</h3>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="row"
      >
        <p className={classes.Textp}>¡Bienvenido!, {name} a su plataforma, a continuación encontrará un resumen de la informacion suministrada</p>
      </Grid>
    </Grid>
  );
};

const otrosobservatorios = (props) => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:769px)");
  var estilo = null;
  {
    matches
      ? (estilo = classes.gridglobal)
      : (estilo = classes.gridglobalmovil);
  }

    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={estilo}
      >
        <Topobservatorio />
        <Cardsformulario />
      </Grid>
    );
  
};

export default otrosobservatorios;
