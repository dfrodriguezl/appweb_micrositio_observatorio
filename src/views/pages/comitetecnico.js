import { Grid, makeStyles, useMediaQuery } from "@material-ui/core";
import React, { Component } from "react";
import * as Values from 'Observatorio/Variables/values';
import Small from "Observatorio/img/Small.svg";
import Meeting from "Observatorio/img/Meeting.svg";
import Remote from "Observatorio/img/Remote.svg";

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
      backgroundSize: "106%",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${Meeting})`,       
      backgroundPosition: "center",
       
    },      
    imagen_top2:{     
       width: "100%",
       height: "47vh",
       backgroundSize: "100%",
       backgroundRepeat: "no-repeat",
       backgroundImage: `url(${Meeting})`,       
       backgroundPosition: "center center",
       flexBasis: "100% !important",
       maxWidth: "100% !important",
    },
    imagen_Judge:{    
      width: "100% !important",
      height: "47vh",
      backgroundSize: "106%",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${Remote})`,       
      backgroundPosition: "center",
       
       
    },       
    imagen_Judge2:{     
       width: "100%",
       height: "47vh",
       backgroundSize: "100%",
       backgroundRepeat: "no-repeat",
       backgroundImage: `url(${Remote})`,       
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

const Comite = () => {
  const classes = useStyle();
  return(      
      <Grid container direction="column">
          <Grid container direction="row" className={classes.gridglobal}>
              <Grid container justifyContent="center" alignItems="center">
                  <h3 className={classes.titleStyle}>Comité Técnico Asesor</h3>
              </Grid>
              <Grid item container direction="column" xs className={classes.containerTitle}>
              <p className={classes.contentrulesp}>
                Acorde al Decreto 148 de 2020, e-l Comite Técnico Asesor es la Instancia Técnica Asesora, que tiene por objetivo garantizar la idoneidad de las propuestas de regulación de la Gestión Catastral, presentadas por el Instituto Geográfico Agustin Codazzi - IGAC, entre sus funciones estan:
              </p>        
              <p className={classes.contentrulesp}>
                    1. Velar por la idoneidad de las propuestas presentadas por el IGAC
                    <br/>
                    2. Recomendar el ajuste de las propuestas presentadas por el IGAC
                    <br/>
                    3. Emitir conceptos a favor o en contra acerca de lad propuestas presentadas por el IGAC
                    <br/>
                    4. Dar concepto sobre el uso de insumos cartográficos que esten pro fuera del rango de temporalidad y especificaciones técnicas.
                    <br/>
                    5. Las demas establecidad en el Comité
              </p>        
              </Grid>
              <Imagen/> 
          </Grid>
          <Grid container direction="row" className={classes.gridglobal}>
              <Grid container justifyContent="center" alignItems="center">
                  <h3 className={classes.titleStyle2}>Composición del Comité Técnico Asesor</h3>
              </Grid>
              <ImagenJudge/>   
              <Grid item container direction="column" xs className={classes.containerTitle}>
              <p className={classes.contentrulesp}>
                    El Comité Técnico Asesor esta compuesto por:
                    </p>  
                    <p className={classes.contentrulesp}>
                    1. Director/a del Departamento Administrativo Nacional de Estadística - DANE, quien presidira dicho comité.
                    <br/>    
                    2. Director/a Técnico/a de Registro ó Superintendente delegado de tierras de la Superintendencia de Notariado y Registro - SNR ó su delegado/a de nivel Asesor.
                    <br/>    
                    3. Director/a Técnico/a de Geoestadística del  DANE o su delegado/a de nivel Asesor, tiene como labor exclusiva la Secretaría Técnica del Comité y la disposición de los medios logisticos y operativos.
                    <br/>    
                    4. Dos expertos/as internacionales
                    <br/>    
                    5. Dos expertos/as nacionales
                    </p>  
                    <p className={classes.contentrulesp}>
                    Para la seleccion de los expertos nacionales e internacionales, el DANE definira los criterios de seleccion que considere propicios para el desenvolvimiento de sus labores dentro del comité.
                    </p>         
              </Grid>           
          </Grid>
      </Grid>
    
  )
}

export default Comite;