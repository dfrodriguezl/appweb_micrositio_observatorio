import { Grid, makeStyles, useMediaQuery, Button ,CardMedia, Tooltip } from "@material-ui/core";
import React, { Component } from "react";
import * as Values from 'Observatorio/Variables/values';
import Meeting from "Observatorio/img/repo2.jpg";
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';
import resumenejecutivo from "../../../backend/files/DOC_DIRECTIVO_IND_2021_20211203.pdf"
import documentotecnico from "../../../backend/files/DOC_TECN_IND_20211203.pdf"

const useStyle = makeStyles({
  margintop:{
      padding: "0 0 5% 0",
      backgroundColor:"#f4f4f4",
    },
    tabla:{
      borderCollapse:"collapse",
      textAlign:"left",
      margin: "1.5em 0 0 0",
    },
    columnatabla:{
      borderBottom: "1px dotted",
      textAlign:"center"
    },
    boton: {
      padding: "0em 0.5em 0em 0.5em",
      borderRadius: "2vh",
      backgroundColor: Values.Redwinecolor,
      
      textTransform: "capitalize",
      transition:"all 0.8s ease-out",
      cursor: "pointer",
      width: "max-content",
      fontSize: "calc(0.8em + 0.2vh)",
      borderRadius: "2vh",
      // fontWeight: "bold",
      "&:hover":{
          backgroundColor: Values.HoverButton,
          border:"none",
      }
  },
  alink: {
    textDecoration: "none",
    color: Values.TextButton,    
    fontFamily: Values.SourceRoboto,
  },
    containercontent:{    
      padding: "0.7em 0 0.7em 0.7em",
      color: "#585858",
      fontWeight:"normal",
      fontFamily: Values.SourceRoboto,
      fontSize: Values.SizeText,
    },
    containerbarra: {
      margin: "1em 0 0 0",
      backgroundColor: "#F3F3F3",
      padding: "0.7em 0 0.7em 0.7em",
      color: "#585858",
      fontFamily: Values.SourceRoboto,
      fontSize: Values.SizeText,
      fontWeight:"normal",
      textAlign:"center"
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
      backgroundSize: "35vh",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${Meeting})`,       
      backgroundPosition: "center",
       
    },      
    imagen_top2:{     
       width: "100%",
       height: "25vh",
       backgroundSize: "34vh",
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


const ExperimentalStadistics = () => {
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
                  <h3 className={classes.titleStyle}>Estadísticas experimentales</h3>
              </Grid>              
              <Imagen/> 
              <Grid item container direction="column" xs className={classes.containerTitle}>
              <p className={classes.contentrulesp}>
              Los documentos de estadísticas experimentales, hacen referencia a los procedimientos y análisis de las variables estadísticas del geoportal del Departamento Administrativo Nacional de Estadística - DANE, condensados en indicadores cuyo resultado se puede apreciar en el visor dispuesto en la presente herramienta 
              </p> 
              </Grid>
              
      </Grid>
      <table className={classes.tabla}>
        <tr>
          <th className={classes.containerbarra}>Documento</th>
          <th className={classes.containerbarra}>Versión</th>
          <th className={classes.containerbarra}>Formato</th>
          <th className={classes.containerbarra}>Tamaño</th>
          <th className={classes.containerbarra}>Descargar</th>
        </tr>
        <tr className={classes.columnatabla}>
          <th className={classes.containercontent}>RESUMEN EJECUTIVO ESTADISTICAS EXPERIMENTALES</th>
          <th className={classes.containercontent}>V1</th>
          <th className={classes.containercontent}>Pdf</th>
          <th className={classes.containercontent}>42.341 KB</th>
          <th className={classes.containercontent}>
          <Tooltip title="Descargar" arrow>
            <Button className={classes.boton}>
          <a target="_blank" className={classes.alink}
                  href={resumenejecutivo}
                  download
              >Descargar</a>
              <DownloadForOfflineRoundedIcon style={{ fill: 'white' }}/>
            </Button>
            </Tooltip>
            </th>

        </tr>
        <tr className={classes.columnatabla}>
          <th className={classes.containercontent}>DOCUMENTO TÉCNICO ESTADISTICAS EXPERIMENTALES</th>
          <th className={classes.containercontent}>V1</th>
          <th className={classes.containercontent}>Pdf</th>
          <th className={classes.containercontent}>64.292 KB</th>
          <th className={classes.containercontent}>
          <Tooltip title="Descargar" arrow>
          <Button className={classes.boton}>
          <a target="_blank" className={classes.alink}
                  href={documentotecnico}
                  download
              >Descargar</a>
              <DownloadForOfflineRoundedIcon style={{ fill: 'white' }}/>
            </Button>
            </Tooltip>
            </th>
        </tr>
      </table>
      </Grid>
    
  )
}

export default ExperimentalStadistics;