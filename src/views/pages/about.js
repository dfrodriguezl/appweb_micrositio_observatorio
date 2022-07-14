import { Grid, makeStyles, useMediaQuery, Button ,CardMedia } from "@material-ui/core";
import React, { Component } from "react";
import * as Values from "Observatorio/Variables/values";
import House from "Observatorio/img/about.jpg";
import Judge from "Observatorio/img/decretoabout.jpg";
import {useTranslation} from "react-i18next";
import word from "Observatorio/img/powerpoint.png";

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
    //textAlign: "justify",
    margin: "1em 0 0 0",
  },
  imagen_top: {
    width: "100% !important",
    height: "28vw",
    backgroundSize: "35vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${House})`,
    backgroundPosition: "center",
  },
  imagen_top2: {
    width: "100%",
    height: "47vh",
    marginTop:"7%",
    backgroundSize: "35vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${House})`,
    backgroundPosition: "center center",
    flexBasis: "100% !important",
    maxWidth: "100% !important",
  },
  imagen_Judge: {
    width: "100% !important",
    height: "27vw",
    backgroundSize: "33vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Judge})`,
    backgroundPosition: "center",
  },
  imagen_Judge2: {
    width: "100%",
    height: "47vh",
    backgroundSize: "35vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Judge})`,
    backgroundPosition: "center center",
    flexBasis: "100% !important",
    maxWidth: "100% !important",
  },
  excel: {
    height: "14vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "80%",
    width:"100%",
  },
  excel2: {
    height: "10vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "28%",
  },
  alink:{
    textDecoration:"none",
  },
  contentrulesp3: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: "calc(0.6em + 0.3vh)",
    textAlign:"center",
  },
  boton: {
    padding: "0.3em 1em 0.3em 1em",
    borderRadius: "2vh",
    backgroundColor:"#ffffff",
    fontFamily: Values.SourceRoboto,
    textTransform: "capitalize",
    color: "#4C4C4C",
    transition:"all 0.8s ease-out",
    cursor: "pointer",
    //margin: "2% 0 0 0",
    width: "30%",
    fontSize: "calc(1em + 0.3vh)",
    borderRadius: "2vh",
    fontWeight: "bold",
    border:"none",
    boxShadow: "3px 3px 10px #7b7676",
    
    "&:hover":{
        // backgroundColor: Values.HoverButton,
        border:"none",
        color: Values.TextButton,
    }
  },

  boton1: {
    padding: "0.3em 1em 0.3em 1em",
    borderRadius: "2vh",
    backgroundColor:"#ffffff",
    fontFamily: Values.SourceRoboto,
    textTransform: "capitalize",
    color: "#4C4C4C",
    transition:"all 0.8s ease-out",
    cursor: "pointer",
    margin: "2% 0 0 0",
    width: "100%",
    fontSize: "calc(1em + 0.3vh)",
    borderRadius: "2vh",
    fontWeight: "bold",
    border:"none",
    boxShadow: "3px 3px 10px #7b7676",
    
    "&:hover":{
        // backgroundColor: Values.HoverButton,
        border:"none",
        color: Values.TextButton,
    }
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

const ajustable = "ajustable"

const About = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:769px)");
  const [t, i18n]= useTranslation("global");
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

  var estilo3 = null;
  var estilo2 = null;
  var estilo4 = null;
  {
    if (matches){
      estilo4=classes.boton;
      estilo2 = classes.excel;
    }else{
      estilo2 = classes.excel2;
      estilo3 = classes.mediawidth;
      estilo4=classes.boton1;
    }
  }

  return (
    <Grid container direction="column" id="target-two" className={estilomovil}>
      <Grid container direction="row">
        <Grid container justifyContent="center" alignItems="center">
          <h3 className={classes.titleStyle +" "+ajustable}>{t("about.observatorio")}</h3>
        </Grid>
        <Grid
          item
          container
          direction="column"
          xs
          className={classes.containerTitle}
        >
          <p className={classes.contentrulesp+" "+ajustable}>
          {t("about.observatorio2")}
          </p>
          <p className={classes.contentrulesp+" "+ajustable}>
          {t("about.observatorio3")}
          </p>
        </Grid>
        <Imagen />
      </Grid>

      {/* <button className={estilo4}>
        <a className={classes.alink} href="" download>
          <Grid container direction="row">
                                <Grid item xs={4} direction="column" container  className={estilo3}>
                                  <CardMedia className={estilo2} image={word} />
                                </Grid>
                                <Grid item xs container direction="column" justifyContent="center">
                                  <p className={classes.contentrulesp3}><strong>Nombre: Observatorio Inmobiliario</strong></p>
                                  <p className={classes.contentrulesp3}>7.248 KB   |   01/08/2021</p>
                                  <p className={classes.contentrulesp3}><strong>Descripción: </strong>Presentación Observatorio Inmobiliario Nacional</p>
                                </Grid>
            </Grid>
          </a>
        </button> */}


      <Grid container direction="row">
        <Grid container justifyContent="center" alignItems="center">
          <h3 className={classes.titleStyle2+" "+ajustable}>{t("about.decreto")}</h3>
        </Grid>
        <ImagenJudge />
        <Grid
          item
          container
          direction="column"
          xs
          className={classes.containerTitle}
        >
          <p className={classes.contentrulesp+" "+ajustable}>
            <strong>
            {t("about.decreto2")}
            </strong>{" "}
            {t("about.decreto3")}{" "}
            <strong>
            {t("about.decreto4")}
            </strong>{" "}
            {t("about.decreto5")}
          </p>
        </Grid>
      </Grid>
      {/* <Grid container >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.containerTitle}
      >
        <h1 className={classes.titleStyle}>
        Estructura decreto 148
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
              <p className={estilo}>Disposiciones generales del servicio público</p>
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
              <p className={estilo}>Procedimientos del enfoque multipropósito</p>
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
              <p className={estilo}>Información económica y catastral</p>
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
              <p className={estilo}>Inspección vigilancia y control</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid> */}
    </Grid>
  );
};

export default About;
