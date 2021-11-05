import { Grid, makeStyles, useMediaQuery } from "@material-ui/core";
import React, { Component } from "react";
import * as Values from 'Observatorio/Variables/values';
import House from "Observatorio/img/House.svg";
import Judge from "Observatorio/img/Judge.svg";

const useStyle = makeStyles({
    margintop:{
        padding: "0 0 5% 0",
        backgroundColor:"#f4f4f4",
      },
      containerTitle:{
        minHeight: "13vh"
      },
      titleStyle:{
        color: Values.Redwinecolor,
        fontFamily: Values.SourceRoboto,
        fontWeight: "bold",
        fontSize: Values.SizeTitle,
        padding: Values.PaddingTitleText,
      },
      titleStyle2:{
        color: Values.Redwinecolor,
        fontFamily: Values.SourceRoboto,
        fontWeight: "bold",
        fontSize: Values.SizeTitle,
        padding: Values.PaddingTitleText,
      },
      gridglobal:{
        padding: "0 10vw 0 10vw",
        
      },
      contentrulesp:{
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeText,
        textAlign: "justify",  
        margin:"1em 0 0 0",
      }, 
      imagen_top:{    
        width: "100% !important",
        height: "40vh",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${House})`,       
        backgroundPosition: "center",
         
      },      
      imagen_top2:{     
         width: "100%",
         height: "47vh",
         backgroundSize: "100%",
         backgroundRepeat: "no-repeat",
         backgroundImage: `url(${House})`,       
         backgroundPosition: "center center",
         flexBasis: "100% !important",
         maxWidth: "100% !important",
      },
      imagen_Judge:{    
        width: "100% !important",
        height: "47vh",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${Judge})`,       
        backgroundPosition: "center",
         
         
      },       
      imagen_Judge2:{     
         width: "100%",
         height: "47vh",
         backgroundSize: "100%",
         backgroundRepeat: "no-repeat",
         backgroundImage: `url(${Judge})`,       
         backgroundPosition: "center center",
         flexBasis: "100% !important",
         maxWidth: "100% !important",
      },   
})

const Imagen = () => {
    const classes = useStyle();
    const matches = useMediaQuery('(min-width:660px)');
    var estilo = null;
    {matches ? estilo=classes.imagen_top :estilo=classes.imagen_top2}   
    return(
      <Grid item container direction="column" xs={4} className={estilo}>   
      </Grid>  
    )  
  } 

  const ImagenJudge = () => {
    const classes = useStyle();
    const matches = useMediaQuery('(min-width:660px)');
    var estilo = null;
    {matches ? estilo=classes.imagen_Judge :estilo=classes.imagen_Judge2}   
    return(
      <Grid item container direction="column" xs={4} className={estilo}>   
      </Grid>  
    )  
  } 

const About = () => {
    const classes = useStyle();
    return(      
        <Grid container direction="column">
            <Grid container direction="row" className={classes.gridglobal}>
                <Grid container justifyContent="center" alignItems="center">
                    <h3 className={classes.titleStyle}>¿Qué es un Observatorio?</h3>
                </Grid>
                <Grid item container direction="column" xs className={classes.containerTitle}>
                <p className={classes.contentrulesp}>
                  Existen varios tipos de observatorios, sin embargo, se entiende por observatorio, un instrumento que recopila, analiza e interpreta información relevante de un tema previamente establecido, con el fin de generar conocimiento, para el posterior monitoreo y soporte al proceso de toma decisiones. 
                </p>        
                <p className={classes.contentrulesp}>
                  Todo observatorio debe tener como objetivos la compilación e integración de información, la elaboración de estadísticas globales y específicas, la formulación de análisis y proyecciones y la alimentación periódica de indicadores. 
                </p>        
                </Grid>
                <Imagen/> 
            </Grid>
            <Grid container direction="row" className={classes.gridglobal}>
                <Grid container justifyContent="center" alignItems="center">
                    <h3 className={classes.titleStyle2}>Decreto 148 de 2020</h3>
                </Grid>
                <ImagenJudge/>   
                <Grid item container direction="column" xs className={classes.containerTitle}>
                <p className={classes.contentrulesp}>
                    <strong>Artículo 2.2.2.6.1. Observatorio Inmobiliario Catastral.</strong> Todos los Gestores Catastrales <strong>deberán contar con un Observatorio Inmobiliario Catastral</strong> donde se recopilará la información del mercado inmobiliario del área geográfica a su cargo, proveniente de fuentes tales como afertas, transacciones, costos de construcción, entre otras, y <strong>el cual deberá estar articulado, para tal efecto, con el Observatorio Nacional del Departamento Nacional de Estadística (DANE).</strong> Todo avalúo comercial deberá estar sustentado en información registrada en el observatorio inmobiliario catastral, para lo cual se deberá garantizar que cualquier tipo de información utilizada en el avalúo sea registrada en el observatorio. Lo anterior, sin perjuicio de las normas relacionadas con la protección de datos personales
                </p>          
                </Grid>           
            </Grid>
        </Grid>
      
    )
}

export default About;