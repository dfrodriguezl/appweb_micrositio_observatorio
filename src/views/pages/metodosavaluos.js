import { Grid, makeStyles, useMediaQuery,CardMedia,Tooltip } from "@material-ui/core";
import React, { Component } from "react";
import * as Values from "Observatorio/Variables/values";
import Small from "Observatorio/img/Small.svg";
import word from "Observatorio/img/PDF1.png";
import geograph from "Observatorio/img/geograph.png";
import {useTranslation} from "react-i18next";
import tecnicasvaluatorias from "../../files/Documento_Investistigacion_Tecnicas_Valuatorias.pdf"

const useStyle = makeStyles({
  gridglobal: {
    padding: "0 10vw 2vw 10vw",
  },
  gridglobalmovil: {
    padding: "0 5vw 2vw 5vw",
  },
  contentrulesp2: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    margin: "1em 0 0 0",
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
    fontSize: "calc(0.6em + 0.3vh)",
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
  numpadding: {
    paddingTop: "6%",
  },
  numpadding1: {
    paddingTop: "4%",
  },
  titleStyle2: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontWeight: "bold",
    fontSize: Values.SizeSubtitle,
    padding: "0px 6vw 1em 6vw",
    textAlign: "center",
  },
  textStyle: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "center",
    padding: "0 5vw 0 5vw",
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
      <Grid container justifyContent="center" alignItems="center">
        <h3 className={classes.titleStyle+" "+ajustable}>
        {t("methods.methods")}
        </h3>
      </Grid>
      <Grid container>
        <p className={classes.contentrulesp+" "+ajustable}>
        {t("methods.methods2")}
        </p>
      </Grid>
      <Grid container direction="row" className={classes.numpadding}>
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
            <h1 className={classes.num}>1</h1>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
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
          direction="column"
          xs
          justifyContent="center"
          alignItems="center"
          className={classes.numeros}
        >
          <Grid items container xs justifyContent="center">
            <h1 className={classes.num}>2</h1>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <h1 className={classes.titleStyle2+" "+ajustable}>
            {t("methods.methods5")}
            </h1>
            <p className={classes.textStyle+" "+ajustable}>
            {t("methods.methods6")}
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid
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
      </Grid>
      <Grid container direction="row" className={classes.numpadding}>
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
      </Grid>
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
      <Tooltip title="Descripción: Técnica valuatorias en Colombia y el mundo" arrow>
        <button className={estilo4+" "+ajustable}>
          <a target="_blank" className={classes.alink} href={tecnicasvaluatorias} download>
            <Grid container direction="row">
              <Grid item xs={4} direction="column" container  className={estilo3}>
                <CardMedia className={estilo2} image={word} />
                  </Grid>
                    <Grid item xs container direction="column" justifyContent="center">
                      <p className={classes.contentrulesp3}><strong>Nombre: TECNICAS VALUATORIAS</strong></p>
                      <p className={classes.contentrulesp3}>472 KB   |   01/09/2021</p>
                      {/* <p className={classes.contentrulesp3}><strong>Descripción: </strong>Técnica valuatorias en Colombia y el mundo</p> */}
                    </Grid>
                  </Grid>
          </a>
        </button>
      </Tooltip>      
    </Grid>
  );
};

export default avaluos;
