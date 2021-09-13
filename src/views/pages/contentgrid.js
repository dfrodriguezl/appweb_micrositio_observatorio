import { Grid, makeStyles } from "@material-ui/core";
import React, { Component } from "react";
import city from "../../img/citycolor.svg";
import figure from "../../img/figura.svg";
import ButtonRedWine from "../common/buttonredwine";
import * as Values from '../../Variables/values';

//Contenido para Center_content

const useStyle = makeStyles({
  
  gridglobal:{
    padding: "0 10% 0 10%",
    
  },
  
  marginbuttom:{
    margin: "5% 0 5% 0",
    backgroundColor:"#f4f4f4",
  },

  margintop:{
    margin: "5% 0 0 0",
  },

  textStyle: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontWeight: "bold",
    fontSize: "calc(0.5em + 3vh)",
    textAlign: "center",
    padding: "0 1vw 0em 1vw",
  },

  titleStyle:{
    color: Values.Redwinecolor,
    fontFamily: Values.SourceWorksans,
    fontWeight: "bold",
    fontSize: "calc(1em + 3vh)",
    padding: "0.2em 0 0.5em 0",
  },


  imagen_top:{
    width: "100%",    
    backgroundRepeat: "no-repeat",
    backgroundImage:`url(${city})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",      
  },

  Titleh3:{
    color: Values.Redwinecolor,
    fontFamily: Values.SourceWorksans,
    fontWeight: "bold",
    fontSize: "calc(0.5em + 4vh)",
    textAlign: "center",   
    padding: "2em 0 2em 0",
  },

  Textp:{
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontWeight: "bold",
    fontSize: "calc(1em + 1.5vh)",
    textAlign: "center",  
    margin: "1em 14% 2em 14%", 
    backgroundColor: Values.Colorbottom,
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
    color: Values.Redwinecolor,
    fontFamily: Values.SourceWorksans,
    fontWeight: "bold",
    fontSize: "calc(1em + 4vh)",
    textAlign: "center", 
    padding: "1em 0 1em 0",
},

contentrulesp:{
  color: Values.TextParagraph,
  fontFamily: Values.SourceRoboto,
  fontWeight: "bold",
  fontSize: "calc(1em + 1vh)",
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
    <h3 className={classes.Titleh3}>{Values.TitleHomeTop}</h3>
    <p className={classes.Textp}>{Values.TextHomeTop}</p>
    <ButtonRedWine Title="Acerca de" />
  </Grid>
  );
  };

const Center_content = () => {
    const classes = useStyle();
    return (
    <Grid container className={classes.margintop}>
      <Grid item container direction="column" xs>
        <Grid          
          container
          direction="column"          
          justifyContent="center"
          alignItems="center"
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
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={classes.containerTitle}
        >
          <h1 className={classes.titleStyle}>Ventajas</h1>
        </Grid>
        <Grid item xs>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className={classes.containerImg}
          ></Grid>
        </Grid>
      </Grid>
      <Grid item container direction="column" xs>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
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
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={classes.marginbuttom}
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

const ContentGrid = () =>{
  const classes = useStyle(); 
  return(
    <Grid container className={classes.gridglobal}>
      <Top_content/>
      <Center_content/>
      <Bottom_content/>
    </Grid>
  );
} 

export default ContentGrid;
