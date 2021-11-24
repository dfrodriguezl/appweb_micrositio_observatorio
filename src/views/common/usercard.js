import {
  Grid,
  makeStyles,
  useMediaQuery,
  Paper,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import * as Values from "Observatorio/Variables/values";
import ButtonRedWine from "Observatorio/common/buttonredwine";
import cardplataforma from "Observatorio/common/cardsplataforma";
import Projections from "Observatorio/img/Projections.svg";
import Data from "Observatorio/img/Data-rafiki.svg";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

const useStyle = makeStyles({
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

  Titleh3: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontWeight: "bold",
    fontSize: Values.SizeText,
    textAlign: "left",

    marginRight: "1em",
    // margin: "2% 0 1% 0",
  },

  contentrulesp2: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
  },

  Textp: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "start",
    width: "90%",
    padding: "0 0 1em 0",
  },

  root: {
    width: "100%",
    borderRadius: "1em",
    boxShadow: "3px 3px 10px #7b7676",
  },
  root1: {
    width: "90%",
    borderRadius: "1em",
    boxShadow: "3px 3px 10px #7b7676",
    padding: "1em",
    marginBottom: "2em",
  },

  media: {
    height: "47vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    backgroundPositionX: "3%",
    backgroundPositionY: "-42%",
  },

  media2: {
    height: "24vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "110%",
    backgroundPositionX: "3%",
    backgroundPositionY: "88%",
  },

  media3: {
    height: "47vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    backgroundPositionX: "3%",
    backgroundPositionY: "70%",
  },

  gridglobal: {
    padding: "0 10% 0 10%",
  },

  cardglobal: {
    padding: "0% 0% 1.5% 0%",
    backgroundColor: "white",
  },

  cardglobal2: {
    padding: "0% 0% 0% 0%",
    backgroundColor: "white",
  },
  alink:{
    textDecoration:"none",
    color: Values.TextButton,
  },
  boton: {
    padding: "0.3em 1em 0.3em 1em",
    borderRadius: "2vh",
    backgroundColor: Values.Redwinecolor,
    color: Values.TextButton,
    fontFamily: Values.SourceRoboto,
    textTransform: "capitalize",
    transition:"all 0.8s ease-out",
    cursor: "pointer",
    margin: "10% 0 4% 0",
    width: "max-content",
    fontSize: "calc(1em + 0.3vh)",
    borderRadius: "2vh",
    fontWeight: "bold",
    border:"none",
    
    "&:hover":{
        backgroundColor: Values.HoverButton,
        border:"none",
    }
}
});

const Cardsmapas = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(max-width:769px)");
  const matches2 = useMediaQuery("(min-width:1281px)");  
  
  var estilo = null;
  {
    if (matches2) {
      estilo = classes.media;
    } else {
      if (matches) {
        estilo = classes.media2;
      } else {
        estilo = classes.media3;
      }
    }
  }
  return (
    <Grid container>
      <Grid container>
        {/* {cardplataforma.map(function (cardplataforma) {
          return ( */}
        <Grid
          container
          direction="column"
          key={1}
          className={classes.cardglobal}
        >
          <Card className={classes.root}>
            <CardContent className={classes.cardglobal2}>
              <Grid container direction="row" item xs>
                <Grid item xs={4} direction="column" container>
                  <CardMedia className={estilo} image={Projections} />
                </Grid>
                <Grid item xs container direction="column">
                  <CardContent
                    className={(classes.centerText, classes.contentcar)}
                  >
                    <Grid container direction="row" item xs>
                      <Typography className={classes.Titleh3}>
                        Dashboard
                      </Typography>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          container
          direction="column"
          key={2}
          className={classes.cardglobal}
        >
          <Card className={classes.root}>
            <CardContent className={classes.cardglobal2}>
              <Grid container direction="row" item xs>
                <Grid item xs={4} direction="column" container>
                  <CardMedia className={estilo} image={Data} />
                </Grid>
                <Grid item xs container direction="column">
                  <CardContent
                    className={(classes.centerText, classes.contentcar)}
                  >
                    <Grid container direction="row" item xs>
                      <Typography className={classes.Titleh3}>
                        Mercado:
                      </Typography>
                      <Typography className={classes.Textp}>
                        En esta sección podrá descargar el instructivo (Diagrama
                        Entidad-Relación, atributos, dominios e instrucciones),
                        ejemplo de diligenciamento de información en base de
                        datos o ejemplo de diligenciamiento de información en
                        capas geográficas y cargar de igual manera la
                        información.
                      </Typography>
                    </Grid>
                  </CardContent>
                  
                <Grid container direction="column" item xs alignItems="center" justifyContent="center">
                      <Grid
                        container
                        direction="column"
                        item
                        xs
                        className={classes.root1}
                      >
                        <Grid
                          direction="row"
                          item
                          container
                          xs
                          justifyContent="flex-start"
                          alignItems="center"
                        >
                          <Grid container item xs={6}>
                            <p className={classes.contentrulesp2}>
                              Instructivo
                            </p>
                          </Grid>
                          <Grid className={classes.marginbutton2}>
                            <button className={classes.boton}>
                              <a
                              className={classes.alink}
                                href="Observatorio/src/files/EjemploPresentaciondeDatosObservatorioInmobiliario.xlsx"
                                download
                              >
                                Descargar
                              </a>
                            </button>
                          </Grid>
                        </Grid>
                        <Grid
                          direction="row"
                          item
                          container
                          xs
                          justifyContent="flex-start"
                          alignItems="center"
                        >
                          <Grid container item xs={6}>
                            <p className={classes.contentrulesp2}>
                              Ejemplo Bases de Datos
                            </p>
                          </Grid>
                          <Grid className={classes.marginbutton2}>
                          <button className={classes.boton}>
                              <a
                              className={classes.alink}
                                href="Observatorio/src/files/MODELO_PRESENTACION_DATOS_OBSERVATORIO_INOMBILIARIO_NACIONAL_VERSION_1.xlsx"
                                download
                              >
                                Descargar
                              </a>
                            </button>
                          </Grid>
                        </Grid>
                        <Grid
                          direction="row"
                          item
                          container
                          xs
                          justifyContent="flex-start"
                          alignItems="center"
                        >
                          <Grid container item xs={6}>
                            <p className={classes.contentrulesp2}>
                              Ejemplo Capas Geográficas
                            </p>
                          </Grid>
                          <Grid className={classes.marginbutton2}>
                          <button className={classes.boton}>
                              <a
                              className={classes.alink}
                                href="Observatorio/src/files/MODELO_PRESENTACION_DATOS_OBSERVATORIO_INOMBILIARIO_NACIONAL_VERSION_1.xlsx"
                                download
                              >
                                Descargar
                              </a>
                            </button>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        direction="column"
                        item
                        xs
                        className={classes.root1}
                      >
                        <Grid
                          direction="row"
                          item
                          container
                          xs
                          justifyContent="flex-start"
                          alignItems="center"
                        >
                          <Grid container item xs={6}>
                            <p className={classes.contentrulesp2}>
                              Cargue Bases de Datos
                            </p>
                          </Grid>
                          <Grid className={classes.marginbutton2}>
                          <button className={classes.boton}>
                              <a
                              className={classes.alink}
                                href="Observatorio/src/files/MODELO_PRESENTACION_DATOS_OBSERVATORIO_INOMBILIARIO_NACIONAL_VERSION_1.xlsx"
                                download
                              >
                                Cargue
                              </a>
                            </button>
                          </Grid>
                        </Grid>
                        <Grid
                          direction="row"
                          item
                          container
                          xs
                          justifyContent="flex-start"
                          alignItems="center"
                        >
                          <Grid container item xs={6}>
                            <p className={classes.contentrulesp2}>
                              Cargue de Capas Geográficas
                            </p>
                          </Grid>
                          <Grid className={classes.marginbutton2}>
                          <button className={classes.boton}>
                              <a
                              className={classes.alink}
                                href="Observatorio/src/files/MODELO_PRESENTACION_DATOS_OBSERVATORIO_INOMBILIARIO_NACIONAL_VERSION_1.xlsx"
                                download
                              >
                                Cargue
                              </a>
                            </button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                </Grid>                
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        {/* //   );
        // })} */}
      </Grid>
    </Grid>
  );
};

export default Cardsmapas;
