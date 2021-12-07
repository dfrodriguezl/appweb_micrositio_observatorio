import { Grid, makeStyles, useMediaQuery } from "@material-ui/core";
import React, { Component } from "react";
import * as Values from "Observatorio/Variables/values";
import House from "Observatorio/img/House.svg";
import Judge from "Observatorio/img/Judge.svg";

const useStyle = makeStyles({
  margintop: {
    padding: "0 0 5% 0",
    backgroundColor: "#f4f4f4",
  },
  puntos: {
    padding: "1.5vw 0 0px 1vh",
  },
  containerTitle: {
    minHeight: "13vh",
  },
  titleStyle: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontWeight: "bold",
    fontSize: Values.SizeTitle,
    padding: Values.PaddingTitleText,
    textAlign: "center",
  },
  titleStyle2: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontWeight: "bold",
    fontSize: Values.SizeTitle,
    padding: Values.PaddingTitleText,
    textAlign: "center",
  },
  gridglobal: {
    padding: "0 10vw 3vw 10vw",
  },
  gridglobalmovil: {
    padding: "0 5vw 3vw 5vw",
  },
  num: {
    backgroundColor: "#4c4c4c",
    borderRadius: "50%",
    textAlign: "center",
    color: Values.TextButton,
    fontFamily: Values.SourceWorksans,
    fontWeight: "bold",
    fontSize: Values.SizeSubtitle,
    width: "3.5rem",
    height: "3.5rem",
    padding: "1vh 2vh",
  },
  textStyle1: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "left",
    padding: "0 0 0 0.3vw",
    width: "60%",
  },
  textStyle2: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "center",
    padding: "0 2vw 0 3vw",
  },
  contentrulesp: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "justify",
    margin: "1em 0 0 0",
  },
  imagen_top: {
    width: "100% !important",
    height: "40vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${House})`,
    backgroundPosition: "center",
  },
  imagen_top2: {
    width: "100%",
    height: "47vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${House})`,
    backgroundPosition: "center center",
    flexBasis: "100% !important",
    maxWidth: "100% !important",
  },
  imagen_Judge: {
    width: "100% !important",
    height: "47vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Judge})`,
    backgroundPosition: "center",
  },
  imagen_Judge2: {
    width: "100%",
    height: "47vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Judge})`,
    backgroundPosition: "center center",
    flexBasis: "100% !important",
    maxWidth: "100% !important",
  },
});

const Imagen = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:660px)");
  var estilo = null;
  {
    matches ? (estilo = classes.imagen_top) : (estilo = classes.imagen_top2);
  }
  return (
    <Grid item container direction="column" xs={4} className={estilo}></Grid>
  );
};

const ImagenJudge = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:660px)");
  var estilo = null;
  {
    matches
      ? (estilo = classes.imagen_Judge)
      : (estilo = classes.imagen_Judge2);
  }
  return (
    <Grid item container direction="column" xs={4} className={estilo}></Grid>
  );
};

const About = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:769px)");
  var estilo = null;
  var estilomovil = null;
  var direccion = null;
  {
    if(matches){
      estilo = classes.textStyle1
      direccion = "row"
      estilomovil=classes.gridglobal
    }else{
      estilo = classes.textStyle2
      direccion = "column"
      estilomovil=classes.gridglobalmovil
    }
  }
  return (
    <Grid container direction="column" className={estilomovil}>
      <Grid container direction="row">
        <Grid container justifyContent="center" alignItems="center">
          <h3 className={classes.titleStyle}>¿Qué es un Observatorio?</h3>
        </Grid>
        <Grid
          item
          container
          direction="column"
          xs
          className={classes.containerTitle}
        >
          <p className={classes.contentrulesp}>
            Existen varios tipos de observatorios, sin embargo, se entiende por observatorio, un instrumento que recopila, analiza e interpreta información relevante de un tema previamente establecido, con el fin de generar conocimiento, para el posterior monitoreo y soporte al proceso de toma decisiones. 
          </p>
          <p className={classes.contentrulesp}>
            Todo observatorio debe tener como objetivos la compilación e integración de información, la elaboración de estadísticas globales y específicas, la formulación de análisis y proyecciones y la alimentación periódica de indicadores.
          </p>
        </Grid>
        <Imagen />
      </Grid>
      <Grid container direction="row">
        <Grid container justifyContent="center" alignItems="center">
          <h3 className={classes.titleStyle2}>Decreto 148 de 2020</h3>
        </Grid>
        <ImagenJudge />
        <Grid
          item
          container
          direction="column"
          xs
          className={classes.containerTitle}
        >
          <p className={classes.contentrulesp}>
            <strong>
              Artículo 2.2.2.6.1. Observatorio Inmobiliario Catastral.
            </strong>{" "}
            Todos los Gestores Catastrales{" "}
            <strong>
              deberán contar con un Observatorio Inmobiliario Catastral
            </strong>{" "}
            donde se recopilará la información del mercado inmobiliario del área
            geográfica a su cargo, proveniente de fuentes tales como afertas,
            transacciones, costos de construcción, entre otras, y{" "}
            <strong>
              el cual deberá estar articulado, para tal efecto, con el
              Observatorio Nacional del Departamento Nacional de Estadística
              (DANE).
            </strong>{" "}
            Todo avalúo comercial deberá estar sustentado en información
            registrada en el observatorio inmobiliario catastral, para lo cual
            se deberá garantizar que cualquier tipo de información utilizada en
            el avalúo sea registrada en el observatorio. Lo anterior, sin
            perjuicio de las normas relacionadas con la protección de datos
            personales
          </p>
        </Grid>
      </Grid>
      <Grid container >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.containerTitle}
      >
        <h1 className={classes.titleStyle}>
        Estructura Decreto 148
        </h1>
      </Grid>
      <Grid item container xs direction="column">
        <Grid
          container
          direction={direccion}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item container direction="row" xs={6} className={classes.puntos}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <h1 className={classes.num}>1</h1>
              <p className={estilo}>Disposiciones Generales del Servicio Público</p>
            </Grid>
          </Grid>
          <Grid item container direction="row" xs={6} className={classes.puntos}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <h1 className={classes.num}>2</h1>
              <p className={estilo}>Procedimientos del Enfoque Multipropósito</p>
            </Grid>
          </Grid>
          <Grid item container direction="row" xs={6} className={classes.puntos}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <h1 className={classes.num}>3</h1>
              <p className={estilo}>Información Económica y Catastral</p>
            </Grid>
          </Grid>
          <Grid item container direction="row" xs={6} className={classes.puntos}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <h1 className={classes.num}>4</h1>
              <p className={estilo}>Inspección Vigilancia y Control</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </Grid>
  );
};

export default About;
