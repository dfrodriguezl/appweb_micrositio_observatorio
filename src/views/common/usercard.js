import {
  Grid,
  makeStyles,
  useMediaQuery,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import SelectBox from 'devextreme-react/select-box';
import PieChart, {
  Series,
  Label,
  Connector,
  Size,
  Export,
} from 'devextreme-react/pie-chart';
import React, { Component } from "react";
import * as Values from "Observatorio/Variables/values";
import Projections from "Observatorio/img/Projections.svg";
import Data from "Observatorio/img/Data-rafiki.svg";
import Excel from "Observatorio/img/excel.png";
import geograph from "Observatorio/img/geograph.png";
import { dataSource } from "Observatorio/common/datosdashboard.js";


const useStyle = makeStyles({
  centerButton: {
    justifyContent: "center",
    padding: "0 0 0 0 !important",
  },

  centerText: {
    textAlign: "center",
    // padding: "3vh 0 0 0",
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

  marginout:{
    margin: "0 0 0.5vw 0",
  },

  contentrulesp2: {
    fontSize: "calc(0.8em + 0.9vh)",
    fontFamily: Values.SourceRoboto,
    color: Values.Redwinecolor,
  },

  contentrulesp3: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: "calc(0.5em + 0.4vh)",
    textAlign:"center",
  },


  Textp: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "start",
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
    width: "95%",
    borderRadius: "1em",
    boxShadow: "3px 3px 10px #7b7676",
    padding: "1em",
    margin: "0 0 2em 0.5em",
    backgroundColor:"#E5E5E5",
  },

  root5: {
    width: "95%",
    borderRadius: "1em",
    boxShadow: "3px 3px 10px #7b7676",
    padding: "1em",
    backgroundColor:"#ffffff",
    marginTop:"-1vw",
  },

  root2: {
    borderRadius: "1em",
    boxShadow: "3px 3px 10px #7b7676",
    padding: "1em",
    marginBottom: "2em",
    backgroundColor:"#ffffff",
  },

  root3: {
    width: "90%",
    borderRadius: "1em",
    border: "1px solid",
    backgroundColor:"#ffffff",
  },

  root4: {
    width: "95%",
    borderRadius: "1em",
    padding: "1em",
    backgroundColor:"#E5E5E5",    
    marginBottom: "2em",
  },

  rootcolor:{
    backgroundColor:"#E5E5E5",  
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
    backgroundSize: "60%",
  },

  media: {
    height: "47vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "90%",
    backgroundPosition: "center center",
  },

  media2: {
    height: "27vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "65%",
  },

mediawidth:{
  maxWidth:"100% !important",
  flexBasis:"100% !important",
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
  marginbutton2:{
    marginTop:"-2vw"
  },
  cardglobal2: {
    padding: "0% 0% 0% 0%",
    backgroundColor: "white",
  },
  margincard:{
      margin:"0 2vw 0 0",
      maxWidth:"100% !important",
      flexBasis:"100% !important"
  },
  margincard1:{
    margin:"0 3vw 0 0",
},
  alink:{
    textDecoration:"none",    
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
    margin: "10% 0 4% 0",
    width: "98%",
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
}
});

const Cardsmapas = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(max-width:769px)");
  const matches2 = useMediaQuery("(min-width:1281px)");  
  
  var estilo = null;
  var estilo2 = null;
  var estilo3 = null;
  {
    if (matches2) {
      estilo = classes.media;
      estilo2 = classes.excel;
    } else {
      if (matches) {
        estilo = classes.media2;
        estilo3 = classes.mediawidth;
        estilo2 = classes.excel2;
      } else {
        estilo = classes.media3;
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
              <Grid container direction="row" item xs>
                <Grid item xs={4} direction="column" container justifyContent="center" className={estilo3}>
                  <CardMedia className={estilo} image={Projections} />
                </Grid>
                <Grid item xs container direction="column" justifyContent="center">
                  <CardContent className={(classes.centerText)}>
                  <Grid container direction="row" item xs className={classes.root4} justifyContent="center">
                    <Grid className={classes.margincard} container direction="column" item xs={5} justifyContent="center">
                      <Grid container direction="row" className={classes.marginout}>
                        <Grid container item xs={8} className={classes.margincard1}>
                          <p className={classes.contentrulesp2}>
                          Cantidad de ofertas PH
                          </p>
                        </Grid>
                        <Grid container item xs justifyContent="center" alignItems="center" className={classes.root3}>                              
                          0
                        </Grid>
                      </Grid>
                      <Grid container direction="row" className={classes.marginout}>
                        <Grid container item xs={8} className={classes.margincard1}>
                          <p className={classes.contentrulesp2}>
                          Cantidad de ofertas NPH
                          </p>
                        </Grid>
                        <Grid container item xs justifyContent="center" alignItems="center" className={classes.root3}>                              
                        0
                            </Grid>
                            </Grid>
                            <Grid container direction="row" className={classes.marginout}>
                            <Grid container item xs={8} className={classes.margincard1}>
                            <p className={classes.contentrulesp2}>
                            Cantidad de ofertas rurales
                            </p>
                            </Grid>
                            <Grid container item xs justifyContent="center" alignItems="center" className={classes.root3}>                              
                               0
                            </Grid>
                            </Grid>
                    </Grid>                          
                          <Grid className={classes.root2} item xs>
                          <PieChart                        
                        id="pie"
                        dataSource={dataSource}
                        palette="Bright"
                        // title="Area of Countries"
                        >
                            <Series
                              argumentField="country"
                              valueField="medals"
                            >
                              <Label visible={true}>
                                <Connector visible={true} width={1} />
                              </Label>
                            </Series>
                            <Size width={700} />                            
                            T<Export enabled={true} />
                        </PieChart>
                          </Grid>
                          <Grid
                        container
                        direction="column"
                        item
                        xs={12}
                        className={classes.root5}
                      >                        
                        {/* <Grid
                          direction="row"
                          item
                          container
                          xs
                          justifyContent="flex-start"
                          alignItems="center"
                        >
                          <Grid container item xs={6}>
                            <p className={classes.contentrulesp2}>
                             
                            </p>
                          </Grid>
                          <Grid className={classes.marginbutton2}>
                          
                          </Grid>
                        </Grid> */}
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
                <Grid item xs={4} direction="column" container className={estilo3} justifyContent="center">
                  <CardMedia className={estilo} image={Data} />
                </Grid>
                <Grid item xs container direction="column">
                  <CardContent
                    className={(classes.centerText)}
                  >
                    <Grid container direction="row" item xs>
                      <Typography className={classes.Textp1}>
                      En esta sección podrá descargar el formato que contiene la estructura de mercado para PH, NPH y predios Rurales (el formato incluye especificaciones, descripcion de atributos y dominios en los casos que hay lugar), ejemplo de diligenciamento del respectivo formato en base de datos y capas geográficas. 
                      </Typography>
                      <Typography className={classes.Textp}>
                        Asi mismo esta habilitada la carga de información por cualquiera de los dos métodos utilizados
                      </Typography>
                    </Grid>
                  </CardContent>                  
                <Grid container direction="column" item xs >
                      <Grid
                        container
                        direction="column"
                        item
                        xs
                        className={classes.root1}
                      >
                        <p className={classes.contentrulesp2}>
                          Archivos para descarga
                        </p>
                        <Grid
                          direction="row"
                          item
                          container
                          xs
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Grid className={classes.marginbutton2} item
                          container
                          justifyContent="center"
                          alignItems="center"
                          xs={6}>
                            <button className={classes.boton}>
                            <a className={classes.alink} href="http://localhost:3000/EJEMPLO_MERCADO.xlsx" download>
                              <Grid container direction="row">
                                <Grid item xs={4} direction="column" container  className={estilo3}>
                                  <CardMedia className={estilo2} image={Excel} />
                                </Grid>
                                <Grid item xs container direction="column" justifyContent="center">
                                  <p className={classes.contentrulesp3}><strong>Nombre: EJEMPLO MERCADO</strong></p>
                                  <p className={classes.contentrulesp3}>36 KB   |   02/12/2021</p>
                                  <p className={classes.contentrulesp3}><strong>Descripción: </strong>Ejemplo de mercado según  formato establecido</p>
                                </Grid>
                              </Grid>
                              </a>
                            </button>
                          </Grid>                         
                          <Grid className={classes.marginbutton2} item
                          container
                          justifyContent="center"
                          alignItems="center"
                          xs={6}>
                            <button className={classes.boton}>
                            <a className={classes.alink} href="http://localhost:3000/FORMATO_MERCADO.xlsx" download>
                              <Grid container direction="row">
                                <Grid item xs={4} direction="column" container  className={estilo3}>
                                  <CardMedia className={estilo2} image={Excel} />
                                </Grid>
                                <Grid item xs container direction="column" justifyContent="center">
                                  <p className={classes.contentrulesp3}><strong>Nombre: FORMATO MERCADO</strong></p>
                                  <p className={classes.contentrulesp3}>50 KB   |   02/12/2021</p>
                                  <p className={classes.contentrulesp3}><strong>Descripción: </strong>Formato mercado para PH, NPH y predios rurales</p>
                                </Grid>
                              </Grid>
                              </a>
                            </button>
                          </Grid>    
                          <Grid className={classes.marginbutton2} item
                          container
                          justifyContent="center"
                          alignItems="center"
                          xs={6}>
                            <button className={classes.boton}>
                            <a className={classes.alink} href="http://localhost:3000/TECNICAS_VALUATORIAS.docx" download>
                              <Grid container direction="row">
                                <Grid item xs={4} direction="column" container  className={estilo3}>
                                  <CardMedia className={estilo2} image={geograph} />
                                </Grid>
                                <Grid item xs container direction="column" justifyContent="center">
                                  <p className={classes.contentrulesp3}><strong>Nombre: CAPAS GEOGRAFICAS</strong></p>
                                  <p className={classes.contentrulesp3}>472 KB   |   01/09/2021</p>
                                  <p className={classes.contentrulesp3}><strong>Descripción: </strong>Capas geográficas y ejemplo</p>
                                </Grid>
                              </Grid>
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
                        <p className={classes.contentrulesp2}>
                        Links para carga
                        </p>
                        <Grid
                          direction="row"
                          item
                          container
                          xs
                          justifyContent="flex-start"
                          alignItems="center"
                        >
                          <Grid className={classes.marginbutton2} item
                          container
                          justifyContent="center"
                          alignItems="center"
                          xs={6}>
                            <button className={classes.boton}>
                              <Grid container direction="row">
                                <Grid item xs={4} direction="column" container  className={estilo3}>
                                  <CardMedia className={estilo2} image={Excel} />
                                </Grid>
                                <Grid item xs container direction="column" justifyContent="center">
                                  <p className={classes.contentrulesp3}><strong>CARGA MERCADO</strong></p>
                                  <p className={classes.contentrulesp3}>Formato: Excel</p>
                                </Grid>
                              </Grid>
                            </button>
                          </Grid> 
                          <Grid className={classes.marginbutton2} item
                          container
                          justifyContent="center"
                          alignItems="center"
                          xs={6}>
                            <button className={classes.boton}>
                              <Grid container direction="row">
                                <Grid item xs={4} direction="column" container  className={estilo3}>
                                  <CardMedia className={estilo2} image={geograph} />
                                </Grid>
                                <Grid item xs container direction="column" justifyContent="center">
                                  <p className={classes.contentrulesp3}><strong>CARGA MERCADO</strong></p>
                                  <p className={classes.contentrulesp3}>Formato: Excel</p>
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
      </Grid>
    </Grid>
  );
};

export default Cardsmapas;
