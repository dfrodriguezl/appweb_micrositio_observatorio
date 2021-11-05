import { Grid, makeStyles, useMediaQuery, Paper, CardActions, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import * as Values from 'Observatorio/Variables/values';
import Delivery from "Observatorio/img/Delivery.svg";

import imageItem from "Observatorio/img/DANE_Estadisticas_imagen_principal.svg"
import CardStatistics  from './cardstatistics';

const useStyle = makeStyles({
  marginTop: {
    marginTop: 50
  },
  imageCard: {
    maxWidth: 250
  },
  gridglobal: {
    padding: "0% 10% 0 10%",
  },
  descriptionStatistics: {
    fontSize: 25,
    color: "#4C4C4C",
    fontFamily: Values.SourceRoboto,
    textAlign: "left"
  },
  imageRight: {
    maxHeight: 600,
    top: 100
  },
  TitleStatistics: {
    color: "#821A3F",
    fontSize: 50,
    fontWeight: "bold",
    marginTop: 20,
    fontFamily: Values.SourceRoboto
  },
  SubTitleStatistics: {
    color: "#821A3F",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom:20,
    fontFamily: Values.SourceRoboto
  },

  Textpdes: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeAuxiliary,
    textAlign: "start",
    margin: "0 6% 0 6%",
  },

  centerButton: {
    justifyContent: "center",
    padding: "0 0 8% 0 !important",
  },

  centerText: {
    textAlign: "center",
    padding: "5% 0 0 0",
  },

  Titleh3: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeTitle,
    padding: Values.PaddingTitleText,
  },

  Textp: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "start",
    margin: "1em 0 0 0",
  },

  Textpcard: {
    color: "#585858",
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "center",
    margin: "2% 0 1% 0",

  },

  root: {
    width: "40vh",
    borderRadius: "1em",
    boxShadow: "3px 3px 10px #7b7676",
  },

  media: {
    height: "28vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  },

  cardglobal: {
    //margin: "0% 0% 0% 0%",
    padding: "0% 0% 5% 0%",
    backgroundColor: "white",
  },

  cardglobal2: {
    //margin: "0% 0% 0% 0%",
    padding: "0% 0% 0% 0%",
    backgroundColor: "white",
  },

  imagen_top: {
    width: "100% !important",
    height: "42vh",
    backgroundSize: "80%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Delivery})`,
    backgroundPosition: "center",

  },
  containerImg:{
    textAlign:"center"
  },
  contentcar: {
    paddingBottom: "0 !important",
  },

  imagen_top2: {
    width: "100%",
    height: "66vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Delivery})`,
    backgroundPosition: "center center",
    flexBasis: "100% !important",
    maxWidth: "100% !important",
  },
});

const ImagenBottom = () => {
  const classes = useStyle();
  const matches = useMediaQuery('(min-width:769px)');
  var estilo = null;
  { matches ? estilo = classes.imagen_top : estilo = classes.imagen_top2 }
  return (
    <Grid item container direction="column" xs={4} className={estilo}></Grid>

  )
}

const Cardsservice = () => {
  const classes = useStyle();
  return (
    <Grid container
    >
      <Grid container
        item
        direction="column"
        justifyContent="center"
        xs={12}
        md={6}
        lg={6}
        className={classes.cardglobal}
      >
        <Typography className={classes.TitleStatistics}  >
          Estadisticas
        </Typography>
        <Typography className={classes.descriptionStatistics}>
          La articulación de los Observatorios Inmobiliarios de los Gestores Catastrales en el Observatorio Inmobiliario Nacional, generara continuo conocimiento sobre las tendencias y dinamicas del mercado inmobiliario en el Territorio Nacional, el cual servira de base para la toma de decisiones.  ---
        </Typography>
      </Grid>
      <Grid container item xs={12} sm={12} md={6} lg={6} className={classes.containerImg} >
        <img src={imageItem} />
      </Grid>
      <Grid container xs={12} sm={12} md={12} lg={12}>
        <Typography className={classes.SubTitleStatistics}  >
          Construcción
        </Typography>
      </Grid>
      <Grid
        container
        className={classes.gridglobal}
        alignItems="stretch"
      >
         <CardStatistics></CardStatistics>
      </Grid>
    </Grid>
  );
}

const ViewService = () => {
  const classes = useStyle();
  return (
    <Grid container justifyContent="center"
      alignItems="center" className={classes.gridglobal}>
      <Cardsservice />
    </Grid>
  );
}

export default ViewService