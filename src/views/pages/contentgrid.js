import { Grid, makeStyles } from "@material-ui/core";
import React, { Component } from "react";
import city from "../../img/city2.jpg";
import figure from "../../img/figura.svg";
// import styles from "../../css/Top.module.css";
import ButtonRedWine from "../common/buttonredwine";

//Contenido para Center_content

const Title = "¿Qué es el Observatorio Inmobiliario Nacional?";
const Text =
  "Es una infraestructura de datos capaz de consolidar aplicando ténicas registrales, la información que proviene de los observatorios inmobiliarios locales y otros actores clave, conforme a estándares establecidos, disponerlos de manera oficiao, agregando valor mediante la consolidación, gestión de sus propios datos y aplicación de nuevos métodos analíticos.";

const useStyle = makeStyles({
  textStyle: {
    color: "black",
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: "3vh",
    textAlign: "justify",
    padding: "0 1vw 0em 1vw",
  },

  titleStyle:{
    color: "black",
    fontFamily: "Work sans",
    fontWeight: "bold",
    fontSize: "5vh",
    padding: "0.2em 0 0.5em 0",
  },

  containerTall:{
    minHeight: "25vh",
  },

  imagen_top:{
    width: "100%",
    height: "50vh",
    backgroundRepeat: "no-repeat",
    backgroundImage:`url(${city})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",         
  },

  Titleh3:{
    color: "white",
    fontFamily: 'Work sans',
    fontWeight: "bold",
    fontSize: "5vh",
    textAlign: "center",   
    padding: "1em 0 1em 0",
  },

  Textp:{
    color: "white",
    fontFamily: 'roboto',
    fontWeight: "bold",
    fontSize: "3.5vh",
    textAlign: "center",  
    padding: "0 10vw 1em 10vw", 
  },

  containerImg:{
    width: "100% !important",
    height: "50vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${figure})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "center center",
  },

  containerTitle:{
    minHeight: "10vh"
  },

  contentrulesh1:{
    color: "#821a3f",
    fontFamily: "Work sans",
    fontWeight: "bold",
    fontSize: "5vh",
    textAlign: "center", 
    padding: "1em 0 1em 0",
},

contentrulesp:{
  color: "#000000",
  fontFamily: "roboto",
  fontWeight: "bold",
  fontSize: "3vh",
  textAlign: "center",  
  padding: "0 10vw 1em 10vw", 
},
  

});

const Top_content = () => {
  const classes = useStyle();
  return(
    <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
    className={classes.imagen_top}
  >
    <h3 className={classes.Titleh3}>{Title}</h3>
    <p className={classes.Textp}>{Text}</p>
    <ButtonRedWine Title="Acerca de" />
  </Grid>
  );
  };

const Center_content = () => {
    const classes = useStyle();
    return (
    <Grid container>
      <Grid item container direction="column" xs>
        <Grid
          item
          xs
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={classes.containerTall}
        >
          <h1 className={classes.titleStyle}>Seguimiento</h1>
          <p className={classes.textStyle}>Seguimiento proactivo de transacciones y cambios en el tiempo.</p>
        </Grid>
        <Grid
          item
          xs
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={classes.containerTall}
        >
          <h1 className={classes.titleStyle}>Comunicación</h1>
          <p className={classes.textStyle}>
            Comunicación directa y en doble via con los ciudadanos mediante
            servicios digitales para segurar una actualización permanente.
          </p>
        </Grid>
      </Grid>
      <Grid item container direction="column" xs>
        <Grid
          item
          xs
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={classes.containerTitle}
        >
          <h1 className={classes.titleStyle}>Ventajas</h1>
        </Grid>
        <Grid item xs>
          <div
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className={classes.containerImg}
          ></div>
        </Grid>
      </Grid>
      <Grid item container direction="column" xs>
        <Grid
          item
          xs
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={classes.containerTall}
        >
          <h1 className={classes.titleStyle}>Integración</h1>
          <p className={classes.textStyle}>
            Integración con diversas fuentes de información públicas y privadas
            relativas a la planificación, el uso, las restricciones y los
            servicios públicos.
          </p>
        </Grid>
        <Grid
          item
          xs
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={classes.containerTall}
        >
          <h1 className={classes.titleStyle}>LADM</h1>
          <p className={classes.textStyle}>
            Basado en información catastral multipropósito compatible con el
            estandar LADM
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Bottom_content = () => {
  const classes = useStyle();
  return(
    <Grid
      container = "false"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <h1 className={classes.contentrulesh1}>Normatividad</h1>
      <p className={classes.contentrulesp}>
        Los observatorios inmobiliarios son una práctica ya implementada en
        Colombia por parte de algunos Catastros que lo han venido impulsando como
        mecanismo de visibilidad de información, captura de datos de diferentes
        fuentes e insumo para la generación de nueva información resultante de su
        análisis.
      </p>
      <ButtonRedWine
        Title="DECRETO 148 DE 2020"
        href="https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%20148%20DEL%2004%20DE%20FEBRERO%20DE%202020.pdf"
      />
    </Grid>
  );
}

const ContentGrid = () => (
  <Grid>
    <Top_content />
    <Center_content />
    <Bottom_content />
  </Grid>
);
export default ContentGrid;
