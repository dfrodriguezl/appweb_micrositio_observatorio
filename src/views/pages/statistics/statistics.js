import { Grid, makeStyles, useMediaQuery, Paper, CardActions, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import * as Values from 'Observatorio/Variables/values';
import Delivery from "Observatorio/img/Delivery.svg";
import {useTranslation} from "react-i18next";

import imageItem from "Observatorio/img/estadistica.jpg"
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
  gridglobalmovil: {
    padding: "0% 5vw 2vw 5vw",
  },
  imageRight: {
    maxHeight: 600,
    top: 100
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
    width:"59vh",
    height:"41vh",
    marginTop:"2%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${imageItem})`,
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
    height: "40vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${imageItem})`,
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
  const [t, i18n]= useTranslation("global"); 
  const matches = useMediaQuery('(min-width:769px)');
  const ajustable = "ajustable"
  var estilo = null;
  {matches ? estilo=classes.imagen_top:estilo=classes.imagen_top2}   
  return (
    <Grid container
    >
      <Grid container justifyContent='center'>
      <Typography className={classes.Titleh3+" "+ajustable}  >
          <strong>{t("statistics.statistics")}</strong>
        </Typography>
      </Grid>
      <Grid container
        item
        direction="column"
        xs={12}
        md={6}
        lg={6}
        className={classes.cardglobal}
      >        
        <Typography className={classes.Textp+" "+ajustable}>
        {t("statistics.statistics2")}
        </Typography>
      </Grid>
      <Grid container item xs={12} sm={12} md={6} lg={6} className={classes.containerImg} justifyContent="center" alignItems='center'>
        <img src={imageItem}  className={estilo}/>
      </Grid>
      <Grid container justifyContent='center' xs={12} sm={12} md={12} lg={12}>
        <Typography className={classes.Titleh3+" "+ajustable}  >
          <strong>{t("statistics.building")}</strong>
        </Typography>
      </Grid>
      <Grid
        container
        className={classes.gridglobal+" "+ajustable}
        alignItems="stretch"
      >
         <CardStatistics></CardStatistics>
      </Grid>
    </Grid>
  );
}

const ViewService = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:769px)");
    var estilo = null;
    {
      matches?estilo=classes.gridglobal:estilo=classes.gridglobalmovil
    }
  return (
    <Grid container justifyContent="center"
      alignItems="center" id="target-two" className={estilo}>
      <Cardsservice />
    </Grid>
  );
}

export default ViewService