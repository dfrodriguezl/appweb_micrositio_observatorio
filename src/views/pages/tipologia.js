import { Grid, makeStyles, useMediaQuery,CardMedia } from "@material-ui/core";
import React, { Component } from 'react';
import * as Values from 'Observatorio/Variables/values';
import CardsMaps from 'Observatorio/common/tipologiacards';
import App from "Observatorio/img/tipologia.png";
import ButtonRedWine from "Observatorio/common/buttonredwine";
import word from "Observatorio/img/word.png";
import "isomorphic-fetch"
const useStyle = makeStyles({

  gridglobal: {
    padding: "0 10vw 0 10vw",
  },
  
  contentrulesp3: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: "calc(0.6em + 0.3vh)",
    textAlign:"center",
  },
  alink:{
    textDecoration:"none",
  },
  boton1: {
    padding: "0.3em 1em 0.3em 1em",
    borderRadius: "2vh",
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
    backgroundColor:"#ffffff",
    
    "&:hover":{
        // backgroundColor: Values.HoverButton,
        border:"none",
        color: Values.TextButton,
    }
  },
  gridglobalmovil: {
    padding: "0 5vw 0 5vw",
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

  imagen_top: {
    width: "100% !important",
    height: "70vh",
    backgroundSize: "70%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${App})`,
    backgroundPositionX: "left",
    backgroundPositionY: "20%",
  },

  imageRigth: {
    width: 500
  },
  imageMobile: {
    width: "100%"
  },
  mediawidth:{
    maxWidth:"100% !important",
    flexBasis:"100% !important",
  },
  boton: {
    padding: "0.3em 1em 0.3em 1em",
    borderRadius: "2vh",
    color: "Values.TextButton",
    backgroundColor:"#ffffff",
    fontFamily: Values.SourceRoboto,
    textTransform: "capitalize",
    transition: "all 0.8s ease-out",
    cursor: "pointer",
    margin: "10% 0 4% 0",
    width: "max-content",
    fontSize: "calc(1em + 0.3vh)",
    borderRadius: "2vh",
    fontWeight: "bold",
    border:"none",
    boxShadow: "3px 3px 10px #7b7676",
    "&:hover": {
      
      border: "none",
    }
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
});

const ImagenBottom = () => {
  const classes = useStyle();
  const matches = useMediaQuery('(max-width:769px)');
  let estilo = matches ? classes.imageMobile : classes.imageRigth
  console.log(estilo)

  return (
    <img className={estilo} src={App}></img>

  )
}

const TopTipologia = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:769px)");
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
    <Grid item container direccion="row" xs={12} sm={12} md={12} lg={12} >

      <Grid item container direction="column" xs={12} sm={6} md={6} lg={6} className={classes.containerTitle}>
        <h3 className={classes.Titleh3}>Tipologías Constructivas</h3>
        <p className={classes.Textp}>
          Las tipologías constructivas se refieren al tipo de construcción en las cuales se clasifica un inmueble, teniendo como punto de partida sus características arquitectónicas, funciones de uso, actividades economicas, entre otras; acorde a la clasificación realizada por el Instituto Geogràfico Agustin Codazzi - IGAC, existen 10 tipologías constructivas: Asamblea, negocios, educativo, industrial, de alto riesgo, institucional, mercantil, residencial, almacenamiento y otras.
        </p>
        <p className={classes.Textp}>
          En el siguiente botón se podrá descargar un documento que lista las Tipologías Constructivas mas habituales en Colombia.
        </p>
        <button className={estilo4}>
        <a className={classes.alink} href="/Observatorio/file/TIPO_CONSTRUCTIVAS.docx" download>
          <Grid container direction="row">
                                <Grid item xs={4} direction="column" container  className={estilo3}>
                                  <CardMedia className={estilo2} image={word} />
                                </Grid>
                                <Grid item xs container direction="column" justifyContent="center">
                                  <p className={classes.contentrulesp3}><strong>Nombre: TIPO_CONTRUCTIVAS</strong></p>
                                  <p className={classes.contentrulesp3}>84 KB   |   03/12/2021</p>
                                  <p className={classes.contentrulesp3}><strong>Descripción: </strong>Tipologías constructivas habituales en Colombia</p>
                                </Grid>
            </Grid>
          </a>
        </button>
        
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <ImagenBottom />
      </Grid>

    </Grid>
  );
}


const Tipologias = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:769px)");
  var estilo = null;
  {
    matches ? estilo = classes.gridglobal : estilo = classes.gridglobalmovil
  }
  return (
    <Grid container justifyContent="center"
      alignItems="center" className={estilo} id="myApp">
      <TopTipologia />
    </Grid>
  );
}

export default Tipologias