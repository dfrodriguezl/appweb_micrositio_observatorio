import axios from "axios";
import {
  Grid,
  makeStyles,
  useMediaQuery,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Modal,
  Box,
  TextField,
} from "@material-ui/core";
import SelectBox from "devextreme-react/select-box";
import { useForm } from "react-hook-form";
import {
  Chart,
  CommonSeriesSettings,
  SeriesTemplate,
  Format,
  ArgumentAxis,
  Font,
} from "devextreme-react/chart";
import PieChart, {
  Series,
  Label,
  Legend,
  Connector,
  Size,
  Export,
  Tooltip,
} from "devextreme-react/pie-chart";
import React, { Component, useState } from "react";
import * as Values from "Observatorio/Variables/values";
import Projections from "Observatorio/img/Projections.svg";
import Data from "Observatorio/img/Data-rafiki.svg";
import Excel from "Observatorio/img/excel.png";
import pdf from "Observatorio/img/pdf.png";
import geograph from "Observatorio/img/geograph.png";
import forgot from "Observatorio/img/Forgot.svg";
import { dataSource } from "Observatorio/common/datosdashboard.js";
import { dataSource2 } from "Observatorio/common/dashboardbar.js";
import enviroment from '../../config/enviroment'

const useStyle = makeStyles({
  botonmodal: {
    borderRadius: "2vh",
    backgroundColor: Values.Redwinecolor,
    color: Values.TextButton,
    fontFamily: Values.SourceWorksans,
    textTransform: "capitalize",
    transition: "all 0.8s ease-out",
    cursor: "pointer",
    marginTop: "4px",
    width: "max-content",
    fontSize: "calc(0.7em + 0.3vh)",
    borderRadius: "2vh",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: Values.HoverButton,
      border: "none",
    },
  },
  botonmodal1: {
    borderRadius: "2vh",
    backgroundColor: Values.Redwinecolor,
    color: Values.TextButton,
    fontFamily: Values.SourceWorksans,
    textTransform: "capitalize",
    transition: "all 0.8s ease-out",
    cursor: "pointer",
    marginTop: "4px",
    width: "max-content",
    fontSize: "calc(0.7em + 0.3vh)",
    borderRadius: "2vh",
    fontWeight: "bold",
    float: "right",
    textAlign: "center",
    border: "none",
    padding: "1vh 1vh 1vh 1vh",
  },
  centerButton: {
    justifyContent: "center",
    padding: "0 0 0 0 !important",
  },
  modalstyle: {
    position: "absolute",
    top: "50%",
    borderRadius: "2vh",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    backgroundColor: "#F3F3F3",
    border: "1px #000",
    boxShadow: "24px",
  },
  botonpass: {
    padding: "0.1em 0.5em 0.1em 0.5em",
    borderRadius: "2vh",
    backgroundColor: Values.Redwinecolor,
    color: Values.TextButton,
    fontFamily: Values.SourceRoboto,
    textTransform: "capitalize",
    transition: "all 0.8s ease-out",
    cursor: "pointer",
    width: "max-content",
    fontSize: "calc(1em + 0.3vh)",
    borderRadius: "2vh",
    // fontWeight: "bold",
    "&:hover": {
      backgroundColor: Values.HoverButton,
      border: "none",
    },
  },

  paddingmodal: {
    padding: "0 0 0 1em",
  },
  paddingmodal1: {
    padding: "0 0 0.5em 1em",
  },

  centerText: {
    textAlign: "center",
    // padding: "3vh 0 0 0",
  },

  contentcar: {
    paddingBottom: "0 !important",
  },

  Titleh: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontWeight: "bold",
    fontSize: "calc(1em + 1.5vh)",
    textAlign: "center",

    // margin: "2% 0 1% 0",
  },

  Titleh3: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontWeight: "bold",
    fontSize: "calc(1em + 1.5vh)",
    textAlign: "left",
  },

  marginout: {
    margin: "0 0 0.5vw 0",
  },

  contentrulesp2: {
    fontSize: "calc(0.8em + 0.9vh)",
    fontFamily: Values.SourceRoboto,
    color: Values.TextParagraph,
  },

  contentrulesp3: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: "calc(0.5em + 0.4vh)",
    textAlign: "center",
  },

  Textp: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "start",
    width: "90%",
    padding: "0 0 1em 0",
  },

  Textpass: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "center",
    width: "90%",
    padding: "0 0 1em 0",
  },

  Textp1: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "start",
    width: "90%",
    padding: "1em 0 1em 0",
  },

  root: {
    width: "100%",
    borderRadius: "1em",
    boxShadow: "3px 3px 10px #7b7676",
  },
  root1: {
    width: "74%",
    borderRadius: "1em",
    boxShadow: "3px 3px 10px #7b7676",
    padding: "1em",
    margin: "0 0 2em 12.5em",
    backgroundColor: "#E5E5E5",
  },

  rootpassword: {
    width: "80%",
    borderRadius: "1em",
    boxShadow: "3px 3px 10px #7b7676",
    padding: "1em",
    margin: "0 0 2em 1.5em",
    backgroundColor: "#E5E5E5",
  },

  rootno: {
    width: "91%",
    borderRadius: "1em",
    boxShadow: "3px 3px 10px #7b7676",
    padding: "1em",
    margin: "0 0 2em 2.5em",
    backgroundColor: "#E5E5E5",
  },

  rootno1: {
    width: "91%",
    borderRadius: "1em",
    boxShadow: "3px 3px 10px #7b7676",
    padding: "1em",
    margin: "0 0 2em 1em",
    backgroundColor: "#E5E5E5",
  },

  root5: {
    width: "100%",
    borderRadius: "1em",
    boxShadow: "3px 3px 10px #7b7676",
    padding: "1em",
    backgroundColor: "#ffffff",
    marginTop: "-1vw",
  },

  root2: {
    borderRadius: "1em",
    boxShadow: "3px 3px 10px #7b7676",
    padding: "1em",
    marginBottom: "2em",
    backgroundColor: "#ffffff",
  },

  root3: {
    width: "90%",
    borderRadius: "1em",
    border: "1px solid",
    backgroundColor: "#ffffff",
  },

  root4: {
    width: "100%",
    borderRadius: "1em",
    padding: "1em",
    backgroundColor: "#E5E5E5",
    margin: "2em 0 0 -0.6em",
  },

  rootcolor: {
    backgroundColor: "#E5E5E5",
  },

  excel: {
    height: "14vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "80%",
    width: "100%",
  },
  excel2: {
    height: "10vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "37%",
  },

  excel3: {
    height: "10vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "65%",
  },

  media: {
    height: "30vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "60%",
    backgroundPosition: "center center",
  },

  media1: {
    height: "30vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "72%",
    backgroundPosition: "right",
  },

  media2: {
    height: "27vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "43%",
  },

  mediawidth: {
    maxWidth: "100% !important",
    flexBasis: "100% !important",
  },

  media3: {
    height: "47vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "45%",
    backgroundPosition: "center",
  },

  media4: {
    height: "25vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "55%",
    backgroundPosition: "center",
  },

  gridglobal: {
    padding: "0 10% 0 10%",
  },

  cardglobal: {
    padding: "0% 0% 1.5% 0%",
    backgroundColor: "white",
  },
  marginbutton2: {
    marginTop: "-2vw",
  },
  cardglobal2: {
    padding: "0% 0% 0% 0%",
    backgroundColor: "white",
  },
  margincard: {
    margin: "0 2vw 0 0",
    maxWidth: "100% !important",
    flexBasis: "100% !important",
  },
  margincard1: {
    margin: "0 3vw 0 0",
  },
  alink: {
    textDecoration: "none",
  },
  contentnum: {
    fontFamily: Values.SourceRoboto,
    fontSize: "calc(1em + 1.5vh)",
    fontWeight: "bold",
    color: Values.Redwinecolor,
  },
  boton: {
    padding: "0.3em 1em 0.3em 1em",
    borderRadius: "2vh",
    backgroundColor: "#ffffff",
    fontFamily: Values.SourceRoboto,
    textTransform: "capitalize",
    color: "#4C4C4C",
    transition: "all 0.8s ease-out",
    cursor: "pointer",
    margin: "10% 0 4% 0",
    width: "98%",
    fontSize: "calc(1em + 0.3vh)",
    borderRadius: "2vh",
    fontWeight: "bold",
    border: "none",
    boxShadow: "3px 3px 10px #7b7676",

    "&:hover": {
      // backgroundColor: Values.HoverButton,
      border: "none",
      color: Values.TextButton,
    },
  },

  pading: {
    padding: "0 0 0 0",
  },
  pading2: {
    padding: "3vw 1vw 0 1vw",
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  bgcolor: "background.paper",
  boxShadow: 2,
  borderRadius: "10px",
  padding: "20px",
  p: 4,
};

const Cardsmapas = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(max-width:769px)");
  const matches2 = useMediaQuery("(min-width:1281px)");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const upload = () => {
    document.getElementById("file").files[0];
    console.log(document.getElementById("file").files[0]);

    const archivos = document.getElementById("file").files;
    const data = new FormData();
  
    data.append('archivo', archivos[0]);

    axios
      .post(`${enviroment.endpoint}/PlataformaUsuario`, data ,{
        headers: { 
            'Content-Type' : 'application/json' 
        }
    })
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          if (response.data.code == "OK") {
            localStorage.setItem("token", response.data.data.token);
            localStorage.setItem("name", response.data.data.name);
            props.setAuth(true);
          } else {
            setLoading(false);
            alert("Usuario o contraseña incorrecto");
          }
        } else {
          setLoading(false);
          alert("ocurrio un problema externo");
        }
      });
  };

  var estilo = null;
  var estilo2 = null;
  var estilo3 = null;
  var sizegrafico = null;
  var direccion = null;
  var pading = null;
  var title_ = null;
  var numero = null;
  var root = null;
  var estilo4 = null;
  var prueba = null;
  {
    if (matches2) {
      estilo = classes.media;
      estilo4 = classes.media1;
      estilo2 = classes.excel;
      direccion = "row";
      sizegrafico = 580;
      prueba = 1250;
      pading = classes.pading;
      title_ = "row";
      numero = 4;
      root = classes.root1;
    } else {
      if (matches) {
        estilo = classes.media2;
        estilo3 = classes.mediawidth;
        estilo2 = classes.excel2;
        sizegrafico = 300;
        prueba = 300;
        direccion = "column";
        pading = classes.pading2;
        title_ = "column";
        root = classes.rootno1;
        estilo4 = classes.media4;
      } else {
        estilo = classes.media3;
        sizegrafico = 450;
        prueba = 600;
        title_ = "column";
        pading = classes.pading2;
        root = classes.rootno;
        estilo4 = classes.media3;
        estilo2 = classes.excel3;
      }
    }
  }
  return (
    <Grid container>
      <Grid container>
        <Grid
          container
          direction="column"
          key={1}
          className={classes.cardglobal}
        >
          <Card className={classes.root}>
            <CardContent className={classes.cardglobal2}>
              <Grid container direction="column">
                <Grid container direction={direccion} className={pading}>
                  <Grid
                    container
                    item
                    xs
                    justifyContent="center"
                    alignItems="center"
                  >
                    <p className={classes.Titleh3}>Estadísticas</p>
                  </Grid>
                  <Grid
                    container
                    direction="column"
                    item
                    xs
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid
                      container
                      direction="row"
                      className={classes.marginout}
                    >
                      <Grid
                        container
                        item
                        xs={8}
                        className={classes.margincard1}
                        alignItems="center"
                      >
                        <p className={classes.contentrulesp2}>
                          Cantidad de ofertas PH
                        </p>
                      </Grid>
                      <Grid
                        container
                        item
                        xs
                        justifyContent="center"
                        alignItems="center"
                        className={classes.root3}
                      >
                        <p className={classes.contentnum}>0</p>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      direction="row"
                      className={classes.marginout}
                    >
                      <Grid
                        container
                        item
                        xs={8}
                        className={classes.margincard1}
                        alignItems="center"
                      >
                        <p className={classes.contentrulesp2}>
                          Cantidad de ofertas NPH
                        </p>
                      </Grid>
                      <Grid
                        container
                        item
                        xs
                        justifyContent="center"
                        alignItems="center"
                        className={classes.root3}
                      >
                        <p className={classes.contentnum}>0</p>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      direction="row"
                      className={classes.marginout}
                    >
                      <Grid
                        container
                        item
                        xs={8}
                        className={classes.margincard1}
                        alignItems="center"
                      >
                        <p className={classes.contentrulesp2}>
                          Cantidad de ofertas rurales
                        </p>
                      </Grid>
                      <Grid
                        container
                        item
                        xs
                        justifyContent="center"
                        alignItems="center"
                        className={classes.root3}
                      >
                        <p className={classes.contentnum}>0</p>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={numero} direction="column" container>
                    <CardMedia className={estilo} image={Projections} />
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs
                  container
                  direction="column"
                  justifyContent="center"
                >
                  <CardContent className={classes.centerText}>
                    <Grid
                      container
                      direction="row"
                      item
                      xs
                      className={classes.root4}
                      justifyContent="center"
                    >
                      <Grid className={classes.root2} item xs>
                        <Grid container item xs direction={title_}>
                          <Grid
                            container
                            item
                            xs
                            justifyContent="center"
                            alignItems="center"
                          >
                            <p className={classes.Titleh}>
                              Distribución por tipo de oferta
                            </p>
                          </Grid>
                          <Grid
                            container
                            item
                            xs
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                          >
                            <PieChart
                              id="pie"
                              dataSource={dataSource}
                              palette="Soft"
                            >
                              <Series
                                argumentField="country"
                                valueField="medals"
                              />
                              <Tooltip
                                enabled={true}
                                contentTemplate={customizeText}
                                color="#821a3f"
                              >
                                <Font size={18} color="white" />
                              </Tooltip>
                              <Size width={sizegrafico} />
                              <Export enabled={true} />
                            </PieChart>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        direction="column"
                        item
                        xs={12}
                        className={classes.root5}
                      >
                        <p className={classes.Titleh}>
                          Distribución por destinación económica
                        </p>
                        <Grid
                          direction="row"
                          item
                          container
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Chart
                            id="chart"
                            dataSource={dataSource2}
                            palette="Soft"
                          >
                            <CommonSeriesSettings
                              valueField="mass"
                              argumentField="id"
                              type="bar"
                              ignoreEmptyPoints={true}
                            >
                              {/* <Label visible={true}>
                                <Format type="fixedPoint" precision={0} />
                              </Label> */}
                            </CommonSeriesSettings>
                            <SeriesTemplate nameField="name" />
                            <Legend
                              visible={true}
                              verticalAlignment="top"
                              horizontalAlignment="center"
                              itemTextPosition="right"
                              width={18}
                            />
                            <Tooltip
                              enabled={true}
                              color="#821a3f"
                              customizeTooltip={customizeTooltip}
                            >
                              <Font size={18} color="white" />
                            </Tooltip>
                            <Size width={prueba} />
                            <Export enabled={true} />
                          </Chart>

                          {/* <Grid
                            item
                            xs={4}
                            direction="column"
                            container
                            justifyContent="center"
                            className={estilo3}
                          >
                            <CardMedia className={estilo} image={Growth} />
                          </Grid>
                          <Grid
                            className={classes.marginbutton2}
                            container
                            justifyContent="center"
                            item
                            xs
                          >
                            No hay estadísticas para mostrar
                          </Grid> */}
                        </Grid>
                      </Grid>
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
                <Grid item xs container direction="column">
                  <CardContent className={classes.centerText}>
                    <Grid container direction={direccion} className={pading}>
                      <Grid item xs={numero} direction="column" container>
                        <CardMedia className={estilo4} image={Data} />
                      </Grid>
                      <Grid
                        container
                        item
                        xs
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start"
                      >
                        <Typography className={classes.Textp1}>
                          En esta sección podrá descargar el formato que
                          contiene la estructura de mercado para PH, NPH y
                          predios Rurales (el formato incluye especificaciones,
                          descripcion de atributos y dominios en los casos que
                          hay lugar), ejemplo de diligenciamiento del respectivo
                          formato en base de datos y capas geográficas.
                        </Typography>
                        <Typography className={classes.Textp}>
                          Asi mismo esta habilitada la carga de información por
                          cualquiera de los dos métodos utilizados
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Grid container direction="column" item xs>
                    <Grid container direction="column" item xs className={root}>
                      <p className={classes.Titleh3}>Archivos para descarga</p>
                      <Grid
                        direction="row"
                        item
                        container
                        xs
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Grid
                          className={classes.marginbutton2}
                          item
                          container
                          justifyContent="center"
                          alignItems="center"
                          xs={6}
                        >
                          <button className={classes.boton}>
                            <a
                              className={classes.alink}
                              href="https://nowsoft.app/geoportal/descargas/oin/EJEMPLO_MERCADO.xlsx"
                              download
                            >
                              <Grid container direction="row">
                                <Grid
                                  item
                                  xs={4}
                                  direction="column"
                                  container
                                  className={estilo3}
                                >
                                  <CardMedia
                                    className={estilo2}
                                    image={Excel}
                                  />
                                </Grid>
                                <Grid
                                  item
                                  xs
                                  container
                                  direction="column"
                                  justifyContent="center"
                                >
                                  <p className={classes.contentrulesp3}>
                                    <strong>Nombre: EJEMPLO MERCADO</strong>
                                  </p>
                                  <p className={classes.contentrulesp3}>
                                    36 KB | 02/12/2021
                                  </p>
                                  <p className={classes.contentrulesp3}>
                                    <strong>Descripción: </strong>Ejemplo de
                                    mercado según formato establecido
                                  </p>
                                </Grid>
                              </Grid>
                            </a>
                          </button>
                        </Grid>
                        <Grid
                          className={classes.marginbutton2}
                          item
                          container
                          justifyContent="center"
                          alignItems="center"
                          xs={6}
                        >
                          <button className={classes.boton}>
                            <a
                              className={classes.alink}
                              href="https://nowsoft.app/geoportal/descargas/oin/FORMATO_MERCADO.xlsx"
                              download
                            >
                              <Grid container direction="row">
                                <Grid
                                  item
                                  xs={4}
                                  direction="column"
                                  container
                                  className={estilo3}
                                >
                                  <CardMedia
                                    className={estilo2}
                                    image={Excel}
                                  />
                                </Grid>
                                <Grid
                                  item
                                  xs
                                  container
                                  direction="column"
                                  justifyContent="center"
                                >
                                  <p className={classes.contentrulesp3}>
                                    <strong>Nombre: FORMATO MERCADO</strong>
                                  </p>
                                  <p className={classes.contentrulesp3}>
                                    50 KB | 02/12/2021
                                  </p>
                                  <p className={classes.contentrulesp3}>
                                    <strong>Descripción: </strong>Formato
                                    mercado para PH, NPH y predios rurales
                                  </p>
                                </Grid>
                              </Grid>
                            </a>
                          </button>
                        </Grid>
                        <Grid
                          className={classes.marginbutton2}
                          item
                          container
                          justifyContent="center"
                          alignItems="center"
                          xs={6}
                        >
                          <button className={classes.boton}>
                            <a
                              className={classes.alink}
                              href="https://nowsoft.app/geoportal/descargas/oin/INSTRUCTIVO_GEOPACKAGE.pdf"
                              download
                              target="_blank"
                            >
                              <Grid container direction="row">
                                <Grid
                                  item
                                  xs={4}
                                  direction="column"
                                  container
                                  className={estilo3}
                                >
                                  <CardMedia className={estilo2} image={pdf} />
                                </Grid>
                                <Grid
                                  item
                                  xs
                                  container
                                  direction="column"
                                  justifyContent="center"
                                >
                                  <p className={classes.contentrulesp3}>
                                    <strong>Nombre: MANUAL GEOPACKAGE</strong>
                                  </p>
                                  <p className={classes.contentrulesp3}>
                                    541 KB | 09/12/2021
                                  </p>
                                  <p className={classes.contentrulesp3}>
                                    <strong>Descripción: </strong>Manual cargue
                                    informacion Geopackage
                                  </p>
                                </Grid>
                              </Grid>
                            </a>
                          </button>
                        </Grid>
                        <Grid
                          className={classes.marginbutton2}
                          item
                          container
                          justifyContent="center"
                          alignItems="center"
                          xs={6}
                        >
                          <button className={classes.boton}>
                            <a
                              className={classes.alink}
                              href="https://nowsoft.app/geoportal/descargas/oin/OFERTAS_OBSERVATORIO.gpkg"
                              download
                            >
                              <Grid container direction="row">
                                <Grid
                                  item
                                  xs={4}
                                  direction="column"
                                  container
                                  className={estilo3}
                                >
                                  <CardMedia
                                    className={estilo2}
                                    image={geograph}
                                  />
                                </Grid>
                                <Grid
                                  item
                                  xs
                                  container
                                  direction="column"
                                  justifyContent="center"
                                >
                                  <p className={classes.contentrulesp3}>
                                    <strong>Nombre:</strong>
                                    OFERTAS OBSERVATORIO
                                  </p>
                                  <p className={classes.contentrulesp3}>
                                    160 KB | 09/12/2021
                                  </p>
                                  <p className={classes.contentrulesp3}>
                                    <strong>Descripción: </strong>Paquete
                                    mercado para PH, NPH y predios rurales
                                  </p>
                                </Grid>
                              </Grid>
                            </a>
                          </button>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container direction="column" item xs className={root}>
                      <p className={classes.Titleh3}>Links para carga</p>
                      <Grid
                        direction="row"
                        item
                        container
                        xs
                        justifyContent="flex-start"
                        alignItems="center"
                      >
                        <Grid
                          className={classes.marginbutton2}
                          item
                          container
                          justifyContent="center"
                          alignItems="center"
                          xs={6}
                        >
                          <button
                            className={classes.boton}
                            onClick={handleOpen}
                          >
                            <Grid container direction="row">
                              <Grid
                                item
                                xs={4}
                                direction="column"
                                container
                                className={estilo3}
                              >
                                <CardMedia className={estilo2} image={Excel} />
                              </Grid>
                              <Grid
                                item
                                xs
                                container
                                direction="column"
                                justifyContent="center"
                              >
                                <p className={classes.contentrulesp3}>
                                  <strong>CARGA MERCADO</strong>
                                </p>
                                <p className={classes.contentrulesp3}>
                                  Formato: Excel
                                </p>
                              </Grid>
                            </Grid>
                          </button>
                        </Grid>
                        <Grid
                          className={classes.marginbutton2}
                          item
                          container
                          justifyContent="center"
                          alignItems="center"
                          xs={6}
                        >
                          <button className={classes.boton}>
                            <Grid container direction="row">
                              <Grid
                                item
                                xs={4}
                                direction="column"
                                container
                                className={estilo3}
                              >
                                <CardMedia
                                  className={estilo2}
                                  image={geograph}
                                />
                              </Grid>
                              <Grid
                                item
                                xs
                                container
                                direction="column"
                                justifyContent="center"
                              >
                                <p className={classes.contentrulesp3}>
                                  <strong>CARGA CAPAS GEOGRÁFICAS</strong>
                                </p>
                                <p className={classes.contentrulesp3}>
                                  Formato: Gpkg
                                </p>
                              </Grid>
                            </Grid>
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
        <Grid
          container
          direction="column"
          key={3}
          className={classes.cardglobal}
        >
          <Card className={classes.root}>
            <CardContent className={classes.cardglobal2}>
              <Grid container direction="row" item xs>
                <Grid item xs container direction="column">
                  <CardContent className={classes.centerText}>
                    <Grid container direction={direccion} className={pading}>
                      <Grid item xs={numero} direction="column" container>
                        <CardMedia className={estilo} image={forgot} />
                      </Grid>
                      <Grid
                        container
                        item
                        xs
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Grid
                          container
                          className={classes.rootpassword}
                          justifyContent="center"
                        >
                          <Typography className={classes.Textpass}>
                            En el siguiente link podra modificar la contraseña.
                          </Typography>
                          <Typography className={classes.Textpass}>
                            Recuerde que debe tener por lo menos 8 caracteres
                          </Typography>
                          <Button
                            href="/Observatorio/ChangePassword"
                            className={classes.botonpass}
                          >
                            Cambiar Contraseña
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <form action="/files" method="post" encType="multipart/form-data">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              className={classes.Titlep}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Text in a modal
            </Typography>
            <Typography
              className={classes.Textp}
              id="modal-modal-description"
              sx={{ mt: 2 }}
            >
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <input
              className={classes.botonmodal}
              // onClick={}
              type="file"
              id="file"
              name="avatar"
              accept="xlsx/gpkg"
            />
            <input
              className={classes.botonmodal1}
              onClick={upload}
              type="submit"
              value="Cargar"
            />
          </Box>
        </Modal>
      </form>
    </Grid>
  );
};

function customizeText(arg) {
  return `${arg.valueText} (${arg.percentText})`;
}

function customizeTooltip(arg) {
  return {
    text: `${arg.seriesName} - ${arg.valueText}`,
  };
}
export default Cardsmapas;
