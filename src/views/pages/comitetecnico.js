import { Grid, makeStyles, useMediaQuery } from "@material-ui/core";
import React, { Component } from "react";
import * as Values from 'Observatorio/Variables/values';
import Small from "Observatorio/img/Small.svg";
import Meeting from "Observatorio/img/Meeting.svg";
import Remote from "Observatorio/img/Remote.svg";
import Discussion from "Observatorio/img/Discussion.svg";
import ButtonRedWine from "Observatorio/common/buttonredwine";

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
    marginbutton: {
      padding: "0em 0em 0 0em",
    },
    marginbutton2: {
      padding: "0em 0em 0 11%",
    },
    titleStyle2:{
      color: Values.Redwinecolor,
      fontFamily: Values.SourceRoboto,
      fontWeight: "bold",
      fontSize: Values.SizeSubtitle,
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

    imagen_Discussion:{    
      width: "100% !important",
      height: "47vh",
      backgroundSize: "106%",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${Discussion})`,       
      backgroundPosition: "center",
       
       
    },       
    imagen_Discussion2:{     
       width: "100%",
       height: "47vh",
       backgroundSize: "100%",
       backgroundRepeat: "no-repeat",
       backgroundImage: `url(${Discussion})`,       
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

const Imagen3 = () => {
  const classes = useStyle();
  const matches = useMediaQuery('(min-width:660px)');
  var estilo = null;
  {matches ? estilo=classes.imagen_Discussion :estilo=classes.imagen_Discussion2}   
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
    var estilo2 = null;
    {
      if(matches){
        estilo=classes.gridglobal
        estilo2=classes.marginbutton2
      }else{
        estilo=classes.gridglobalmovil
        estilo2=classes.marginbutton
      }
    }
  return(      
      <Grid container direction="column"  className={estilo}>
          <Grid container direction="row">
              <Grid container justifyContent="center" alignItems="center">
                  <h3 className={classes.titleStyle}>Comité Técnico Asesor</h3>
              </Grid>
              <Grid item container direction="column" xs className={classes.containerTitle}>
              <p className={classes.contentrulesp}>
              Acorde al Decreto 148 de 2020, el Comité Técnico Asesor es la instancia técnica asesora, que tiene por objetivo garantizar la idoneidad de las propuestas de regulación de la gestión catastral, presentadas por el Instituto Geográfico Agustín Codazzi - IGAC, entre sus funciones estan:
              </p>        
              <ol className={classes.contentrulesp2}>
                    <li className={classes.listyle}>Velar por la idoneidad de las propuestas presentadas por el IGAC</li>
                    <li className={classes.listyle}>Recomendar el ajuste de las propuestas presentadas por el IGAC</li>
                    <li className={classes.listyle}>Emitir conceptos a favor o en contra acerca de las propuestas presentadas por el IGAC</li>
                    <li className={classes.listyle}>Dar concepto sobre el uso de insumos cartográficos que estén pro fuera del rango de temporalidad y especificaciones técnicas.</li>
                    <li className={classes.listyle}>Las demás establecidas en el Comité</li>
              </ol>        
              </Grid>
              <Imagen/> 
          </Grid>
          <Grid container direction="row">
              <Grid container justifyContent="center" alignItems="center">
                  <h3 className={classes.titleStyle}>Composición del Comité Técnico Asesor</h3>
              </Grid>
              <ImagenJudge/>   
              <Grid item container direction="column" xs className={classes.containerTitle}>
              <p className={classes.contentrulesp}>
                    El Comité Técnico Asesor está compuesto por:
                    </p>  
                    <ol className={classes.contentrulesp2}>
                    <li className={classes.listyle}>Director/a del Departamento Administrativo Nacional de Estadística - DANE, quien presidirá dicho comité.</li>
                    <li className={classes.listyle}>Director/a Técnico/a de Registro o Superintendente delegado de tierras de la Superintendencia de Notariado y Registro - SNR o su delegado/a de nivel Asesor.</li> 
                    <li className={classes.listyle}>Director/a Técnico/a de Geoestadística del  DANE o su delegado/a de nivel Asesor, tiene como labor exclusiva la Secretaría Técnica del Comité y la disposición de los medios logísticos y operativos.</li>
                    <li className={classes.listyle}>Dos expertos/as internacionales</li>                      
                    <li className={classes.listyle}>Dos expertos/as nacionales</li>
                    </ol>  
                    <p className={classes.contentrulesp}>
                    Para la selección de los expertos nacionales e internacionales, el DANE definirá los criterios de selección que considere propicios para el desenvolvimiento de sus labores dentro del comité.
                    </p>         
              </Grid>           
          </Grid>
          <Grid container direction="row">
              <Grid container justifyContent="center" alignItems="center">
                  <h3 className={classes.titleStyle}>Logros</h3>
              </Grid>
              <Grid item container direction="column" xs className={classes.containerTitle}>
              <p className={classes.contentrulesp}>
              La Instancia Técnica Asesora debatió la resolución 1149 de 2021, “Por la cual se actualiza la reglamentación técnica de la formación, actualización, conservación y difusión catastral con enfoque multipropósito”
              </p>        
              <Grid container justifyContent="flex-start" alignItems="center">
                  <h3 className={classes.titleStyle2}>RESOLUCIÓN 1149 DE 2021</h3>
                  <Grid className={estilo2}>
                  <ButtonRedWine
                    Title="Ver"
                    href="https://igac.gov.co/es/contenido/resolucion-1149-de-2021"
                    Values="1"
                  />
                </Grid>
              </Grid>
              </Grid>
              <Imagen3/> 
          </Grid>
      </Grid>
    
  )
}

export default Comite;