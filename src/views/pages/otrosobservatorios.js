import { Grid, makeStyles, useMediaQuery } from "@material-ui/core";
import React, { Component } from "react";
import * as Values from "Observatorio/Variables/values";
import CardsMaps from "Observatorio/common/otroscards";
import Cardsinternational from "Observatorio/common/cardsinternational";
import App from "Observatorio/img/bogot.jpg";
import ButtonRedWine from "Observatorio/common/buttonredwine";
import { useTranslation } from "react-i18next";

const useStyle = makeStyles({
  listyle: {
    paddingLeft: "0.6em",
    paddingRight: "3em",
    margin: "2vh 0 1vh 0"
    //float: "left"
  },

  Titleh3: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeTitle,
    padding: Values.PaddingTitleText,
  },

  Textp: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "start",
    margin: "1em 0 0 0",
  },

  Textp2: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "start",
    margin: "0em 0 0 0em",
    paddingLeft: "1em",
    listStyleType:"disclosure-closed",
    width: "33.33%"
  },

  imagen_top: {
    width: "100% !important",
    height: "46vh",
    backgroundSize: "52vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${App})`,
    backgroundPosition: "center",
    margin: "0 0 0 2vh",
  },

  gridglobal: {
    padding: "0 5vw 0 5vw",
  },
  gridglobalmovil: {
    padding: "0 5vw 2vw 5vw",
  },

  imagen_top2: {
    width: "100%",
    height: "58vh",
    backgroundSize: "68vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${App})`,
    backgroundPosition: "center center",
    flexBasis: "100% !important",
    maxWidth: "100% !important",
  },
});

const ImagenBottom = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:769px)");
  var estilo = null;
  {
    matches ? (estilo = classes.imagen_top) : (estilo = classes.imagen_top2);
  }
  return (
    <Grid item container direction="column" xs={4} className={estilo}></Grid>
  );
};

const ajustable = "ajustable";

const Topobservatorio = () => {
  const [t, i18n] = useTranslation("global");
  const classes = useStyle();
  return (
    <Grid container direccion="row" className={classes.gridglobal}>
      <Grid container>
        <h3 className={classes.Titleh3 + " " + ajustable}>
          {t("Other.Other")}
        </h3>
      </Grid>
      <Grid
        item
        container
        direction="column"
        xs
        className={classes.containerTitle}
      >
        <p className={classes.Textp + " " + ajustable}>{t("Other.Other2")}</p>
        <Grid container direction="row">
        <ol className={classes.Textp2}>
          <li className={classes.listyle + " " + ajustable}>
            {t("Other.Other3")}
          </li>
          <li className={classes.listyle + " " + ajustable}>
            {t("Other.Other6")}
          </li>
        </ol>
        <ol className={classes.Textp2}>
          <li className={classes.listyle + " " + ajustable}>
            {t("Other.Other4")}
          </li>
          <li className={classes.listyle + " " + ajustable}>
            {t("Other.Other7")}
          </li>
        </ol>
        <ol className={classes.Textp2}>
          <li className={classes.listyle + " " + ajustable}>
            {t("Other.Other5")}
          </li>
          <li className={classes.listyle + " " + ajustable}>
            {t("Other.Other8")}
          </li>
        </ol>
        </Grid>
        <p className={classes.Textp + " " + ajustable}>{t("Other.Other9")}</p>
      </Grid>
      {/* <ImagenBottom /> */}
    </Grid>
  );
};

const otrosobservatorios = () => {
  const [t, i18n] = useTranslation("global");
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
      id="target-two"
    >
      <Topobservatorio />
      <CardsMaps />
      <Cardsinternational />
    </Grid>
  );
};

export default otrosobservatorios;
