import { Grid, makeStyles, useMediaQuery } from "@material-ui/core";
import React, { Component } from "react";
import * as Values from "Observatorio/Variables/values";
import Small from "Observatorio/img/Small.svg";

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
    margin: "2% 0 2% 0",
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

const avaluos = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:769px)");
  var estilo = null;
  {
    matches?estilo=classes.gridglobal:estilo=classes.gridglobalmovil
  }
  return (
    <Grid container direction="column" className={estilo}>
      <Grid container justifyContent="center" alignItems="center">
        <h3 className={classes.titleStyle}>
          Métodos para el Cálculo de Avalúos
        </h3>
      </Grid>
      <Grid container>
        <p className={classes.contentrulesp}>
          Para la determinación del valor comercial de los inmuebles, se disponen de diferentes Métodos que proveen valores aproximados por los cuales se  pueden realizar transacciones, entre los mas comunes se encuentran:
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
            <h1 className={classes.titleStyle2}>
              Método de Comparacion o de Mercado
            </h1>
            <p className={classes.textStyle}>
              Corresponde al estudio de ofertas o transacciones recientes de
              bienes similares o comparales al objeto de avaluo
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
            <h1 className={classes.titleStyle2}>
              Método de Capitalización de rentas o Ingresos
            </h1>
            <p className={classes.textStyle}>
              Es la determinación del valor comercial de un inmueble a partir
              del análisis de rentas o ingresos del mismo, puede ser del objeto
              de estudio o de bienes similares
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
          <h1 className={classes.titleStyle3}>Método de Costo de Reposición</h1>
          <p className={classes.textStyle2}>
            Consiste en establecer el vlor comercial de una construcción a patir
            de la depreciación de una estimacion del costo de sus materiales
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
            <h1 className={classes.titleStyle2}>Método Residual</h1>
            <p className={classes.textStyle}>
              Consiste en establecer el valor comercial de un terreno, mediante
              la estimación del valor total de las ventas de un proyecto de
              construcción, acorde a la normatividad urbanística vigente y de
              conformidad con el mercado del bien final vendible.
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
            <h1 className={classes.titleStyle2}>Otros</h1>
            <p className={classes.textStyle}>
                        Otros métodos estadísticos para el calculo de avalúos comerciales.
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
          <p className={classes.contentrulesp2}>
            En el siguiente enlace se podra descargar un documento teorico
            respecto a las Tecnicas Valuatorias mas conocidad y usadas para la
            determinacion de avalúos
          </p>
        </Grid>
        
      </Grid>
          <button className={classes.boton}>
            <a
              className={classes.alink}
              href="Observatorio/src/files/Documento_Investistigacion_Tecnicas_Valuatorias.docx"
              download
            >
              Descargar
            </a>
          </button>
    </Grid>
  );
};

export default avaluos;
