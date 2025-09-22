import { Grid, makeStyles, useMediaQuery,CardMedia,Tooltip,Button } from "@material-ui/core";
import React, { Component } from "react";
import * as Values from "Observatorio/Variables/values";
import Small from "Observatorio/img/Small.svg";
import word from "Observatorio/img/PDF1.png";
import geograph from "Observatorio/img/04_catastro_multiproposito_metodos_calculo.webp";
import {useTranslation} from "react-i18next";
import tecnicasvaluatorias from "../../files/Documento_Investistigacion_Tecnicas_Valuatorias.pdf"

const useStyle = makeStyles({
  gridglobal: {
    padding: "0 5vw 2vw 5vw",
  },
  boton4: {
    padding: "4px 30px",
    borderRadius: "2vh",
    backgroundColor: Values.Redwinecolor,
    color: Values.TextButton,
    fontFamily: Values.SourceRoboto,
    textTransform: "capitalize",
    transition: "all 0.8s ease-out",
    cursor: "pointer",

    width: "max-content",
    fontSize: "0.8em",
    borderRadius: "1em",
    // fontWeight: "bold",
    "&:hover": {
      backgroundColor: Values.HoverButton,
      border: "none",
    },
  },
  margboton: {
    margin: "1em 0 0 0",
    borderRadius: "2vh",
    backgroundColor: "#ffffff",
    fontFamily: Values.SourceRoboto,
    color: "#4C4C4C",
    transition: "all 0.8s ease-out",
    margin: "2% 0 0 0",
    width: "78vh",
    fontSize: "calc(1em + 0.3vh)",
    borderRadius: "2vh",
    fontWeight: "bold",
    border: "none",
    boxShadow: "3px 3px 10px #7b7676",
    padding: "0.3em 1em 0.3em 1em",
  },
  gridglobalmovil: {
    padding: "0 5vw 2vw 5vw",
  },
  contentrulesp2: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    margin: "1em 0 0 0",
    fontWeight: "bold"
  },
  titleStyle: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontWeight: "bold",
    fontSize: Values.SizeTitle,
    padding: Values.PaddingTitleText,
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
  contentrulesp3: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: "calc(0.6em + 0.5vh)",
    textAlign:"center",
  },
  contentrulesp: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    // textAlign: "justify",
    margin: "1em 0 0 0",
  },
  num: {
    backgroundColor: "#821a3f",
    borderRadius: "50%",
    textAlign: "center",
    color: Values.TextButton,
    fontFamily: Values.SourceWorksans,
    fontWeight: "bold",
    fontSize: "calc(1.9em + 1vh)",
    width: "3.5rem",
    height: "3.5rem",
    padding: "0vh 0vh",
  },
  numpadding: {
    paddingTop: "2%",
  },
  numpadding1: {
    paddingTop: "4%",
  },
  titleStyle2: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontWeight: "bold",
    fontSize: Values.SizeSubtitle,
    //padding: "0px 6vw 1em 6vw",
    //textAlign: "center",
  },
  textStyle: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    //textAlign: "center",
    //padding: "0 5vw 0 5vw",
  },
  titleStyle3: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontWeight: "bold",
    fontSize: Values.SizeSubtitle,
    padding: "0px 15vw 1em 15vw",
    textAlign: "center",
  },
  textStyle2: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "center",
    padding: "0 25vw 0 25vw",
  },
  numeros: {
    height: "100%",
    flexGrow: "1",
    maxWidth: "100%",
    flexBasis: "0",
    margin: "3vh 0 0 0"
  },
  alink:{
    textDecoration:"none",
  },
  mediawidth:{
    maxWidth:"100% !important",
    flexBasis:"100% !important",
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
    margin: "2% 0 0 0",
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

  circuloavaluos:{

    maxWidth: "8.3333333% !important"

  },

  imagen_transfer: {
    width: "100% !important",
    height: "55vh",
    marginBottom: "0%",
    backgroundSize: "70vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${geograph})`,
    backgroundPosition: "center",
  },
  imagen_transfer2: {
    width: "100%",
    height: "40vh",
    marginBottom: "3%",
    backgroundSize: "60vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${geograph})`,
    backgroundPosition: "bottom",
    flexBasis: "100% !important",
    maxWidth: "100% !important",
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
}
});

const ImagenTransfer = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:769px)");
  var estilo = null;
  {
    matches
      ? (estilo = classes.imagen_transfer)
      : (estilo = classes.imagen_transfer2);
  }
  return <Grid xs={5} className={estilo}></Grid>;
};

const ajustable = "ajustable"

const avaluos = () => {
  const classes = useStyle();
  const [t, i18n]= useTranslation("global");
  const matches = useMediaQuery("(min-width:769px)");
  var estilo = null;
  var estilo3 = null;
  var estilo2 = null;
  var estilo4 = null;
  {
    if (matches){
      estilo=classes.gridglobal;
      estilo4=classes.boton;
      estilo2 = classes.excel;
    }else{
      estilo=classes.gridglobalmovil;
      estilo2 = classes.excel2;
      estilo3 = classes.mediawidth;
      estilo4=classes.boton1;
    }
  }
  return (
    <Grid container direction="column" id="target-two" className={estilo}>
      <Grid container>
        <h3 className={classes.titleStyle+" "+ajustable}>
        {t("methods.methods")}
        </h3>
      </Grid>
      <Grid container>
        <p className={classes.contentrulesp+" "+ajustable}>
        {t("methods.methods2")}
        </p>
      </Grid>
      <Grid container direction="row">
      <Grid container direction="column" xs={7} className={classes.numpadding}>
        <Grid
          item
          container
          direction="row"
          xs
          justifyContent="center"
          alignItems="center"
          className={classes.numeros}
        >
          <Grid container xs={1} className={classes.circuloavaluos}>
            <h1 className={classes.num}>1</h1>
          </Grid>
          <Grid
            container
            direction="column"
            xs
          >
            <h1 className={classes.titleStyle2+" "+ajustable}>
            {t("methods.methods3")}
            </h1>
            <p className={classes.textStyle+" "+ajustable}>
            {t("methods.methods4")}
            </p>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          xs
          justifyContent="center"
          alignItems="center"
          className={classes.numeros}
        >
          <Grid container xs={1} className={classes.circuloavaluos}>
            <h1 className={classes.num}>2</h1>
          </Grid>
          <Grid
            container
            direction="column"
            xs
          >
            <h1 className={classes.titleStyle2+" "+ajustable}>
            {t("methods.methods5")}
            </h1>
            <p className={classes.textStyle+" "+ajustable}>
            {t("methods.methods6")}
            </p>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          xs
          justifyContent="center"
          alignItems="center"
          className={classes.numeros}
        >
          <Grid container xs={1} className={classes.circuloavaluos}>
            <h1 className={classes.num}>3</h1>
          </Grid>
          <Grid
            container
            direction="column"
            xs
          >
            <h1 className={classes.titleStyle2+" "+ajustable}>
            {t("methods.methods7")}
            </h1>
            <p className={classes.textStyle+" "+ajustable}>
            {t("methods.methods8")}
            </p>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          xs
          justifyContent="center"
          alignItems="center"
          className={classes.numeros}
        >
          <Grid container xs={1} className={classes.circuloavaluos}>
            <h1 className={classes.num}>4</h1>
          </Grid>
          <Grid
            container
            direction="column"
            xs
          >
            <h1 className={classes.titleStyle2+" "+ajustable}>
            {t("methods.methods9")}
            </h1>
            <p className={classes.textStyle+" "+ajustable}>
            {t("methods.methods10")}
            </p>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          xs
          justifyContent="center"
          alignItems="center"
          className={classes.numeros}
        >
          <Grid container xs={1} className={classes.circuloavaluos}>
            <h1 className={classes.num}>5</h1>
          </Grid>
          <Grid
            container
            direction="column"
            xs
          >
            <h1 className={classes.titleStyle2+" "+ajustable}>
            {t("methods.methods11")}
            </h1>
            <p className={classes.textStyle+" "+ajustable}>
            {t("methods.methods12")}
            </p>
          </Grid>
        </Grid>
      </Grid>
      <ImagenTransfer/>
      </Grid>
      {/* <Grid
        item
        container
        direction="column"
        xs
        justifyContent="center"
        alignItems="center"
        className={(classes.numeros, classes.numpadding)}
      >
        <Grid items container xs justifyContent="center">
          <h1 className={classes.num}>3</h1>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <h1 className={classes.titleStyle3+" "+ajustable}>{t("methods.methods7")}</h1>
          <p className={classes.textStyle2+" "+ajustable}>
          {t("methods.methods8")}
          </p>
        </Grid>
      </Grid> */}
      {/* <Grid container direction="row" className={classes.numpadding}>
        <Grid
          item
          container
          direction="column"
          xs
          justifyContent="center"
          alignItems="center"
          className={classes.numeros}
        >
          <Grid container justifyContent="center">
            <h1 className={classes.num}>4</h1>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <h1 className={classes.titleStyle2+" "+ajustable}>{t("methods.methods9")}</h1>
            <p className={classes.textStyle+" "+ajustable}>
            {t("methods.methods10")}
            </p>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          xs
          justifyContent="center"
          alignItems="center"
          className={classes.numeros}
        >
          <Grid items container xs justifyContent="center">
            <h1 className={classes.num}>5</h1>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <h1 className={classes.titleStyle2+" "+ajustable}>{t("methods.methods11")}</h1>
            <p className={classes.textStyle+" "+ajustable}>
            {t("methods.methods12")}
            </p>
          </Grid>
        </Grid>
      </Grid> */}
      <Grid
        direction="row"
        item
        container
        xs
        justifyContent="flex-start"
        alignItems="center"
        className={classes.numpadding}
      >
        <Grid container>
          <p className={classes.contentrulesp2+" "+ajustable}>
          {t("methods.methods13")}
          </p>
        </Grid>
        
      </Grid>
      <Grid
          container
          direction="row"
          className={classes.margboton}
          justifyContent="center"
        >
          <Grid container item xs justifyContent="initial" alignItems="center">
            <p className={classes.contentrulesp3}><strong>Técnicas Valuatorias 472 KB   |   01/09/2025</strong></p>
          </Grid>
          <Grid Grid container item xs={4} justifyContent="flex-end">
            <Tooltip title="Descripción: Técnica valuatorias en Colombia y el mundo" arrow>
              <Button
                className={classes.boton4 + " " + ajustable}
                href={tecnicasvaluatorias} download
                target="_blank"
              >
                {t("cadastre.see")}
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
      {/* <Tooltip title="Descripción: Técnica valuatorias en Colombia y el mundo" arrow>
        <button className={estilo4+" "+ajustable}>
          <a target="_blank" className={classes.alink} href={tecnicasvaluatorias} download>
            <Grid container direction="row">
              <Grid item xs={4} direction="column" container  className={estilo3}>
                <CardMedia className={estilo2} image={word} />
                  </Grid>
                    <Grid item xs container direction="column" justifyContent="center">
                      <p className={classes.contentrulesp3}><strong>Nombre: TECNICAS VALUATORIAS</strong></p>
                      <p className={classes.contentrulesp3}>472 KB   |   01/09/2021</p>
                      <p className={classes.contentrulesp3}><strong>Descripción: </strong>Técnica valuatorias en Colombia y el mundo</p>
                    </Grid>
                  </Grid>
          </a>
        </button>
      </Tooltip>        */}
    </Grid>
  );
};

export default avaluos;
