import {
  Grid,
  makeStyles,
  Paper,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  useMediaQuery,
  Tooltip
} from "@material-ui/core";
import React, { Component } from "react";
import * as Values from "Observatorio/Variables/values";
import ButtonRedWine from "Observatorio/common/buttonredwine";
//import cardsotros from "Observatorio/common/cardsotros";
import {useTranslation} from "react-i18next";
import Sale from "Observatorio/img/igac-logo.png";
import Fill from "Observatorio/img/logo21.png";
import Segment from "Observatorio/img/logo3.png";
import Building_ from "Observatorio/img/logo41.png";
import Buildingamico from "Observatorio/img/logo5.png";
import logo6 from "Observatorio/img/logo6.png";
import logo7 from "Observatorio/img/logo7.png";

const useStyle = makeStyles({
  boton: {
    padding: "0em 1em 0em 1em",
    borderRadius: "2vh",
    backgroundColor: Values.Redwinecolor,
    color: Values.TextButton,
    fontFamily: Values.SourceRoboto,
    textTransform: "inherit",
    transition: "all 0.8s ease-out",
    cursor: "pointer",
    margin: "0 0 7% 0",
    width: "max-content",
    fontSize: "calc(1em + 0.3vh)",
    borderRadius: "2vh",
    // fontWeight: "bold",
    "&:hover": {
      backgroundColor: Values.HoverButton,
      border: "none",
    },
  },
  centerButton: {
    justifyContent: "center",
    padding: "0 0 0 0 !important",
  },

  centerText: {
    textAlign: "center",
  },

  contentcar: {
    paddingBottom: "0 !important",
  },

  TitlehPrincipal: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceWorksans,
    fontWeight: "bold",
    fontSize: "calc(1.2em + 0.9vh)",
    textAlign: "center",
    margin: "2% 0 2% 0",
  },


  Titleh3: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceWorksans,
    fontWeight: "bold",
    fontSize: Values.SizeText,
    textAlign: "center",
    margin: "2% 0 1% 0",
  },

  Titlehdes: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceWorksans,
    fontSize: Values.SizeText,
    textAlign: "center",
    margin: "2% 0 1% 0",
  },

  Textp: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeAuxiliary,
    textAlign: "start",
    margin: "0 6% 0 6%",
  },

  root: {
    width: "40vh",
    borderRadius: "1em",
    boxShadow: "3px 3px 10px #7b7676",
  },

  media: {
    height: "24vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "72%",
  },

  gridglobal: {
    padding: "0 10% 0 10%",
    width: "100%",
    padding: "1em",
    boxShadow: "3px 3px 10px #7b7676",
    marginTop: "-1vw",
    borderRadius: "1em",
    backgroundColor: "#ffffff"
  },

  cardglobal: {
    padding: "0% 0% 5% 0%",
    backgroundColor: "white",
  },

  cardglobal2: {
    padding: "0% 0% 0% 0%",
    backgroundColor: "white",
  },
});

const Cardsmapas = () => {
  const classes = useStyle();
  const matches2 = useMediaQuery("(min-width:1701px)");
  const [t, i18n]= useTranslation("global");
  const ajustable = "ajustable"
  const cardsotros = [
    {
        "id":1,
        "title":t("Other.National3"),
        "description":t("Other.National2"),
        "image_card":Sale,
        "link":"https://www.icde.gov.co/datos-y-recursos/datos-y-recursos-de-informacion/datos/observatorio/observatorio-inmobiliario"
    },
    {
        "id":2,
        "title":t("Other.National5"),
        "description":t("Other.National4"),
        "image_card":logo6,
        "link":"https://www.cali.gov.co/catastro/publicaciones/147970/observatorio-inmobiliario/"

    },
    {
        "id":3,
        "title":t("Other.National7"),
        "description":t("Other.National6"),
        "image_card":Segment,
        "link":"https://www.minvivienda.gov.co/viceministerio-de-vivienda/espacio-urbano-y-territorial/aula-de-financiamiento/informacion-territorial/observatorio-de-suelo-y-dinamica-inmobiliaria"
    },
    {
        "id":4,
        "title":t("Other.National9"),
        "description":t("Other.National8"),
        "image_card":Building_,
        "link":"http://catastro.barranquilla.gov.co:7000/Observatorio/index.html"
    },
    {
        "id":5,
        "title":t("Other.National11"),
        "description":t("Other.National10"),
        "image_card":Buildingamico,
        "link":"https://catastro.fusagasuga.gov.co/observatorio-inmobiliario/"
    },
    {
        "id":6,
        "title":t("Other.National13"),
        "description":t("Other.National12"),
        "image_card":Fill,
        "link":"https://www.catastrobogota.gov.co/observatorio-catastral/observatorio-tecnico-catastral"
    
    },
    {
        "id":7,
        "title":t("Other.National15"),
        "description":t("Other.National14"),
        "image_card":logo7,
        "link":"https://oiarmenia.org/obs/"
    }

]
  var estilo = null;
  {
    if (matches2) {
      estilo = 4;
    } else {
      estilo = true;
    }
  }
  return (
    <Grid container>
      <Grid container className={classes.gridglobal}>
      <Grid container direction="column">
            <h3 className={classes.TitlehPrincipal+" "+ajustable}>{t("Other.National")}</h3>
            </Grid>
        {cardsotros.map(function (cardsotros) {
          return (
            <Grid
              item
              container
              direction="row"
              xs={estilo}
              justifyContent="center"
              alignItems="center"
              key={cardsotros.id}
              className={classes.cardglobal}
            >
              <Card className={classes.root}>
                <CardContent className={classes.cardglobal2}>
                  <CardMedia
                    className={classes.media}
                    image={cardsotros.image_card}
                  />                  
                  <CardContent className={classes.centerText}>
                    <Typography className={classes.Titlehdes+" "+ajustable}>
                      {cardsotros.description}
                    </Typography>
                  </CardContent>
                  <CardContent className={classes.centerText}>
                    <Typography className={classes.Titleh3+" "+ajustable}>
                      {cardsotros.title}
                    </Typography>
                  </CardContent>
                </CardContent>
                <CardActions className={classes.centerButton}>
                    <Tooltip title={cardsotros.title} arrow>
                      <Button target="_blank" className={classes.boton+" "+ajustable} href={cardsotros.link}>
                      {t("Other.Visit")}
                      </Button>
                   </Tooltip>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Cardsmapas;
