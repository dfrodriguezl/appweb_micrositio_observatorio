import { Grid, makeStyles, useMediaQuery } from "@material-ui/core";
import React, { Component } from "react";
import bloques from "Observatorio/img/Building.svg";
import figure from "Observatorio/img/Career.svg";
import lawyer from "Observatorio/img/Lawyer.svg";
import Maintenance from "Observatorio/img/Maintenance.svg";
import ButtonRedWine from "Observatorio/common/buttonredwine";
import * as Values from "Observatorio/Variables/values";

const useStyle = makeStyles({
  puntos: {
    padding: "1.5vw 0 0px 1vh",
  },

  marginbutton: {
    padding: "2em 0em 0 0em",
  },
  marginbutton1: {
    padding: "2em 0em 0 6%",
  },
  marginbutton2: {
    padding: "2em 0em 0 11%",
  },

  numpadding: {
    paddingTop: "6%",
  },

  numpaddingVentajas: {
    padding: "5% 0% 0% 0%",
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

  num1: {
    backgroundColor: "#821a3f",
    borderRadius: "50%",
    width: "1.3rem",
    height: "1.3rem",
  },

  gridglobal: {
    padding: "0 10vw 3vw 10vw",
  },

  gridglobalmovil: {
    padding: "0 5vw 3vw 5vw",
  },

  marginbuttom: {
    padding: "5% 0 5% 0",
    backgroundColor: Values.TextButton,
  },

  margintop: {
    padding: "0 10vw 3vw 10vw",
    backgroundColor: "#f4f4f4",
  },

  margintop1: {
    padding: "0 14.5vw 3vw 14.5vw",
    backgroundColor: "#f4f4f4",
  },

  textStyle: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "center",
    padding: "0 1vw 0 1vw",
  },

  textStyle1: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "center",
    padding: "0 0 0 0.3vw",
  },

  textStyle3: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,    
    padding: "0 1vw 0 1vw",
    width:"51%"
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
    fontSize: Values.SizeSubtitle,
    padding: "0 0 1em 0",
    textAlign: "center",
  },

  imagen_top: {
    width: "100% !important",
    height: "50vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${bloques})`,
    backgroundPosition: "initial",
  },

  imagen_top2: {
    width: "100%",
    height: "42vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${bloques})`,
    backgroundPosition: "initial",
    flexBasis: "100% !important",
    maxWidth: "100% !important",
  },

  imagen_top3: {
    width: "100%",
    height: "42vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${bloques})`,
    backgroundPosition: "initial",
  },

  Titleh3: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontWeight: "bold",
    fontSize: Values.SizeTitle,
    padding: Values.PaddingTitleText,
  },

  Textp: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    margin: "1em 0 0em 0",
    backgroundColor: Values.Colormid,
  },

  containerImg: {
    width: "100% !important",
    height: "51vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${figure})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "center center",
  },

  containerImgNormativa: {
    width: "100% !important",
    height: "44vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${lawyer})`,
    backgroundSize: "80%",
    backgroundPosition: "center center",
  },

  containerImgNormativa2: {
    width: "100% !important",
    height: "51vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${lawyer})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "center center",
    flexBasis: "100% !important",
    maxWidth: "100% !important",
  },

  containerImg2: {
    display: "none",
  },

  containerImgNone: {
    backgroundImage: "none",
  },

  containerTitle: {
    minHeight: "13vh",
  },

  contentrulesh1: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeTitle,
    textAlign: "center",
    padding: Values.PaddingTitleText,
  },

  contentrulesp: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "justify",
    margin: "1em 0 0em 0",
  },

  contentrulesp2: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "justify",
    margin: "2.4em 0 0em 0",
    fontWeight: "bold",
  },

  imagen_uso: {
    backgroundSize: "50%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Maintenance})`,
    backgroundPositionX: "81%",
    backgroundPositionY: "38%",
  },

  imagen_uso2: {
    backgroundSize: "50%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Maintenance})`,
    backgroundPositionX: "85%",
    backgroundPositionY: "3.6vw !important",
  },
});

const Imagen = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(max-width:660px)");
  const matches2 = useMediaQuery("(min-width:1281px)");  
  
  var estilo = null;
  {
    if (matches2) {
      estilo = classes.imagen_top;
    } else {
      if (matches) {
        estilo = classes.imagen_top2;
      } else {
        estilo = classes.imagen_top3;
      }
    }
  }
  return (
    <Grid item container direction="column" xs={6} className={estilo}></Grid>
  ); 
};

const ImagenNormativa = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:660px)");
  var estilo = null;
  {
    matches
      ? (estilo = classes.containerImgNormativa)
      : (estilo = classes.containerImgNormativa2);
  }
  return (
    <Grid item container direction="column" xs={6} className={estilo}></Grid>
  );
};

const ImagenCenter = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:769px)");
  var estilo = null;
  {
    matches
      ? (estilo = classes.containerImg)
      : (estilo = classes.containerImg2);
  }
  return <Grid item container direction="column" xs className={estilo}></Grid>;
};

const ImagenBottom = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:769px)");
  var estilo = null;
  {
    matches ? (estilo = classes.imagen_uso) : (estilo = classes.containerImg2);
  }
  return (
    <Grid item container direction="column" xs={4} className={estilo}></Grid>
  );
};

const Top_content = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:769px)");
    var estilo = null;
    {
      matches?estilo=classes.gridglobal:estilo=classes.gridglobalmovil
    }
  return (
    <Grid container direction="row" className={estilo}>
      <Grid container justifyContent="center" alignItems="center">
        <h3 className={classes.Titleh3}>{Values.TitleHomeTop}</h3>
      </Grid>
      <Grid item container direction="column" xs>
        <Grid>
          <p className={classes.Textp}>
            El Observatorio Inmobiliario Nacional es un Sistema de Información,
            que cuenta con un Componente Geográfico cuyo objetivo es consolidar
            los datos provenientes y recopilados por los Gestores Catastrales en
            relación al mercado inmobiliario, de fuentes como: ofertas,
            transacciones, costos de construcción, entre otras, para apoyar y
            facilitar la toma de decisiones relacionadas al Ordenamiento
            Territorial.
          </p>
          {/* <p className={classes.Textp}>
            Este Sistema cumple con los estandares establecidos por el Instituto
            Geográfico Agustín Codazzi - IGAC, que es la maxima autoridad
            catastral en la Nación y cuya información esta a disposición del
            público.
          </p> */}
        </Grid>
        <Grid container>
          <ButtonRedWine Title="Acerca de" href="/Observatorio/Acerca" />
        </Grid>
      </Grid>
      <Imagen />
    </Grid>
  );
};

const Center_content = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:431px)");
  var estilo = null;
  {
    matches ? (estilo = classes.margintop) : (estilo = classes.margintop1);
  }
  return (
    <Grid container className={estilo}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.containerTitle}
      >
        <h1 className={classes.titleStyle}>Ventajas del Observatorio</h1>
      </Grid>
      <Grid item container direction="column" xs>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={classes.numpadding}
        >
          <h1 className={classes.num}>1</h1>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <h1 className={classes.titleStyle2}>Seguimiento y Disposición</h1>
          <p className={classes.textStyle}>
            Seguimiento y disposición en el tiempo de ofertas, transacciones,
            costos de construcción, entre otros.
          </p>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={classes.numpadding}
        >
          <h1 className={classes.num}>2</h1>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <h1 className={classes.titleStyle2}>Integración</h1>
          <p className={classes.textStyle}>
            Integración con diversos Sistemas de Información de nivel publico y
            privado.
          </p>
        </Grid>
      </Grid>
      <ImagenCenter />
      <Grid item container direction="column" xs>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={classes.numpadding}
        >
          <h1 className={classes.num}>3</h1>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <h1 className={classes.titleStyle2}>Comunicación</h1>
          <p className={classes.textStyle}>
            Comunicación directa y en doble vía con los ciudadanos mediante la
            puesta en marcha de servicios digitales para asegurar una
            actualización permanente de la información predial.
          </p>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={classes.numpadding}
        >
          <h1 className={classes.num}>4</h1>
        </Grid>
        <Grid
          item
          xs
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <h1 className={classes.titleStyle2}>LADM</h1>
          <p className={classes.textStyle}>
            Basado en el modelo estandar LADM - COL para la interoperailidad de
            información del Catastro Multipróposito.
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Bottom_content = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:769px)");
    var estilo = null;
    {
      matches?estilo=classes.gridglobal:estilo=classes.gridglobalmovil
    }
  return (
    <Grid
    id="Normativa"
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={(classes.marginbuttom, estilo)}
    >
      <Grid container direction="row">
        <Grid container justifyContent="center" alignItems="center">
          <h1 className={classes.contentrulesh1}>Normatividad</h1>
        </Grid>
        <Grid item container direction="column" xs>
          <Grid container direction="column">
            <p className={classes.contentrulesp}>
              Para la disposición de información del mercado inmobiliario, se
              pone a disposición y funcionamiento el Observatorio Inmobiliario
              Nacional, que articula e integra diferentes fuentes de información
              en este campo.
            </p>
            <p className={classes.contentrulesp}>
              Los observatorios inmobiliarios son una práctica ya implementada
              en Colombia por parte de algunos Catastros desentralizados, como
              mecanismos de visibilidad de información e insumo para la
              generación de conocimiento.
            </p>
            <p className={classes.contentrulesp}>
              El Observatorio Inmobiliario Nacional tiene su fundamento
              normativo en:
            </p>
          </Grid>
          <Grid container direction="column">
              <Grid direction="row" item container xs>
              <Grid container item xs={4}>
                <p className={classes.contentrulesp2}>DECRETO 148 DE 2020</p>
                </Grid>
                <Grid className={classes.marginbutton2}>
                  <ButtonRedWine
                    Title="Ver"
                    href="https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%20148%20DEL%2004%20DE%20FEBRERO%20DE%202020.pdf"
                    Values="1"
                  />
                </Grid>
              </Grid>
              <Grid direction="row" item container xs>
                <Grid container item xs={4}>
                <p className={classes.contentrulesp2}>LEY 1955 DE 2019</p>
                </Grid>
                <Grid className={classes.marginbutton2}>
                  <ButtonRedWine
                    Title="Ver"
                    href="https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%20148%20DEL%2004%20DE%20FEBRERO%20DE%202020.pdf"
                    Values="1"
                  />
                </Grid>
              </Grid>
              <Grid direction="row" item container xs>
              <Grid container item xs={4}>
                <p className={classes.contentrulesp2}>CONPES 3958 DE 2019</p>
                </Grid>
                <Grid className={classes.marginbutton2}>
                  <ButtonRedWine
                    Title="Ver"
                    href="https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%20148%20DEL%2004%20DE%20FEBRERO%20DE%202020.pdf"
                    Values="1"
                  />
                </Grid>
              </Grid>
          </Grid>
        </Grid>
        <ImagenNormativa />
      </Grid>
    </Grid>
  );
};

const Bottom_content_footer = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:1281px)");
  const matches2 = useMediaQuery("(max-width:769px)");
  var estilo = null;
  var estilo2 = null;
  console.log({ matches2 });
  if (matches) {
    estilo = classes.imagen_uso;
    estilo2 = classes.textStyle;
  } else {
    if (matches2) {
      estilo = classes.containerImgNone;
      estilo2 = classes.textStyle3;
    } else {
      estilo = classes.imagen_uso2;
      estilo2 = classes.textStyle;
    }
  }
  return (
    <Grid id="uso" container className={classes.margintop}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.containerTitle}
      >
        <h1 className={classes.titleStyle}>
          Uso del Observatorio Inmobiliario Nacional
        </h1>
      </Grid>
      <Grid item container direction="column" xs className={estilo}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <h1 className={classes.num}>1</h1>
          <p className={estilo2}>Seguimiento dinamica inmobiliaria</p>
          <Grid item container direction="column" xs className={classes.puntos}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <h1 className={classes.num1}></h1>
              <p className={classes.textStyle1}>Ofertas</p>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <h1 className={classes.num1}></h1>
              <p className={classes.textStyle1}>Transacciones</p>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <h1 className={classes.num1}></h1>
              <p className={classes.textStyle1}>Costos de Construcción</p>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <h1 className={classes.num1}></h1>
              <p className={classes.textStyle1}>Avaluós</p>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <h1 className={classes.num1}></h1>
              <p className={classes.textStyle1}>Otros</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          className={classes.numpaddingVentajas}
        >
          <h1 className={classes.num}>2</h1>
          <p className={estilo2}>
            Integración información estadística
          </p>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          className={classes.numpaddingVentajas}
        >
          <h1 className={classes.num}>3</h1>
          <p className={estilo2}>Publicidad de datos oficiales</p>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          className={classes.numpaddingVentajas}
        >
          <h1 className={classes.num}>4</h1>
          <p className={estilo2}>Fuente de investigaciónes</p>
        </Grid>
      </Grid>
    </Grid>
  );
};

const ContentGrid = () => {
  const classes = useStyle();
  return (
    <Grid container>
      <Top_content />
      <Center_content />
      <Bottom_content />
      <Bottom_content_footer />
    </Grid>
  );
};

export default ContentGrid;
