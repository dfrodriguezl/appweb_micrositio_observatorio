import { Grid, makeStyles, useMediaQuery, Button ,CardMedia } from "@material-ui/core";
import React, { Component } from "react";
import * as Values from 'Observatorio/Variables/values';
import Meeting from "Observatorio/img/Personalfiles.svg";
import ButtonRedWine from "Observatorio/common/buttonredwine";

import word from "Observatorio/img/powerpoint.png";

const useStyle = makeStyles({
  margintop:{
      padding: "0 0 5% 0",
      backgroundColor:"#f4f4f4",
    },
    containerbarra:{
        margin:"1em 0 0 0",
        backgroundColor:"#F3F3F3",
        padding:"1em 0 1em 1em",
        color:"#585858",
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
      textAlign:"center"
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
    imagen_top:{    
      width: "100% !important",
      height: "25vh",
      backgroundSize: "55%",
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


const Repository = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:769px)");
    var estilo = null;
    {
      if(matches){
        estilo=classes.gridglobal
      }else{
        estilo=classes.gridglobalmovil
      }
    } 
  
  return(      
      <Grid container direction="column"  className={estilo}>
          <Grid container direction="row">
              <Grid container justifyContent="center" alignItems="center">
                  <h3 className={classes.titleStyle}>Repositorio Observatorio Inmobiliario Nacional</h3>
              </Grid>
              <Grid item container direction="column" xs className={classes.containerTitle}>
              <p className={classes.contentrulesp}>
              El repositorio documental del observatorio inmobiliario nacional, almacena todos los archivos de descarga (ultimas versiones) de la presente herramienta y los pone a disposición de los usuarios.
              </p>        
              <p className={classes.contentrulesp}>
              A continuación se listan los archivos, a los cuales se puede acceder mediante descarga:
              </p>  
              </Grid>
              <Imagen/> 
      </Grid>
      <Grid container direction="row" className={classes.containerbarra}>
            <Grid item container direction="column" xs={5}>
                <p>Nombre del archivo</p>
            </Grid>
            <Grid item container direction="column" xs={5}>
                <p>Descripción</p>
            </Grid>
            <Grid item container direction="column" xs={2}>
                <p>Descarga</p>
            </Grid>
      </Grid>
      </Grid>
    
  )
}

export default Repository;