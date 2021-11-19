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
    listyle:{
      paddingLeft:"0.6em"
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
      padding: "0 10vw 3vw 10vw",
      
    },
    gridglobalmovil:{
      padding: "0 5vw 3vw 5vw",
      
    },
    contentrulesp:{
      color: Values.TextParagraph,
      fontFamily: Values.SourceRoboto,
      fontSize: Values.SizeText, 
      margin:"1em 0 0 0",
    }, 
    contentrulesp2:{
      color: Values.TextParagraph,
      fontFamily: Values.SourceRoboto,
      fontSize: Values.SizeText, 
      margin:"1em 0 0 0",
      paddingLeft:"1em"
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
  const matches = useMediaQuery("(min-width:769px)");
    var estilo = null;
    {
      matches?estilo=classes.gridglobal:estilo=classes.gridglobalmovil
    }
  return(      
      <Grid container direction="column"  className={estilo}>
          <Grid container direction="row">
              <Grid container justifyContent="center" alignItems="center">
                  <h3 className={classes.titleStyle}>Comité Técnico Asesor</h3>
              </Grid>
              <Grid item container direction="column" xs className={classes.containerTitle}>
              <p className={classes.contentrulesp}>
                Acorde al Decreto 148 de 2020, e-l Comite Técnico Asesor es la Instancia Técnica Asesora, que tiene por objetivo garantizar la idoneidad de las propuestas de regulación de la Gestión Catastral, presentadas por el Instituto Geográfico Agustin Codazzi - IGAC, entre sus funciones estan:
              </p>        
              <ol className={classes.contentrulesp2}>
                    <li className={classes.listyle}>Velar por la idoneidad de las propuestas presentadas por el IGAC</li>
                    <li className={classes.listyle}>Recomendar el ajuste de las propuestas presentadas por el IGAC</li>
                    <li className={classes.listyle}>Emitir conceptos a favor o en contra acerca de lad propuestas presentadas por el IGAC</li>
                    <li className={classes.listyle}>Dar concepto sobre el uso de insumos cartográficos que esten pro fuera del rango de temporalidad y especificaciones técnicas.</li>
                    <li className={classes.listyle}>Las demas establecidad en el Comité</li>
              </ol>        
              </Grid>
              <Imagen/> 
          </Grid>
          <Grid container direction="row">
              <Grid container justifyContent="center" alignItems="center">
                  <h3 className={classes.titleStyle2}>Composición del Comité Técnico Asesor</h3>
              </Grid>
              <ImagenJudge/>   
              <Grid item container direction="column" xs className={classes.containerTitle}>
              <p className={classes.contentrulesp}>
                    El Comité Técnico Asesor esta compuesto por:
                    </p>  
                    <ol className={classes.contentrulesp2}>
                    <li className={classes.listyle}>Director/a del Departamento Administrativo Nacional de Estadística - DANE, quien presidira dicho comité.</li>
                    <li className={classes.listyle}>Director/a Técnico/a de Registro ó Superintendente delegado de tierras de la Superintendencia de Notariado y Registro - SNR ó su delegado/a de nivel Asesor.</li> 
                    <li className={classes.listyle}>Director/a Técnico/a de Geoestadística del  DANE o su delegado/a de nivel Asesor, tiene como labor exclusiva la Secretaría Técnica del Comité y la disposición de los medios logisticos y operativos.</li>
                    <li className={classes.listyle}>Dos expertos/as internacionales</li>                      
                    <li className={classes.listyle}>Dos expertos/as nacionales</li>
                    </ol>  
                    <p className={classes.contentrulesp}>
                    Para la seleccion de los expertos nacionales e internacionales, el DANE definira los criterios de seleccion que considere propicios para el desenvolvimiento de sus labores dentro del comité.
                    </p>         
              </Grid>           
          </Grid>
      </Grid>
    
  )
}

export default Comite;