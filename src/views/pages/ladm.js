import { Grid, makeStyles, useMediaQuery, Button ,Tooltip} from "@material-ui/core";
import React, { Component } from "react";
import * as Values from 'Observatorio/Variables/values';
import uml from "Observatorio/img/uml.png";
import modelo from "Observatorio/img/LADM.jpg";
import {useTranslation} from "react-i18next";
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';
import rarmodelo from "../../files/MODELO.rar"
import imagenmodelo from "../../files/LADM.jpg"
const useStyle = makeStyles({
    imagen_top:{    
        width: "100% !important",
        height: "40vh",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${uml})`,       
        backgroundPosition: "center",
         
      },
      alink: {
        textDecoration: "none",
        color: Values.TextButton,    
        fontFamily: Values.SourceRoboto,
      },
      boton4: {
        padding: "0.3em 1em 0.3em 1em",
        borderRadius: "2vh",
        backgroundColor: Values.Redwinecolor,
        color: Values.TextButton,
        fontFamily: Values.SourceRoboto,
        textTransform: "capitalize",
        transition:"all 0.8s ease-out",
        cursor: "pointer",
        
        width: "max-content",
        fontSize: "calc(1em + 0.3vh)",
        borderRadius: "2vh",
        // fontWeight: "bold",
        "&:hover":{
            backgroundColor: Values.HoverButton,
            border:"none",
        }
    }, 
      imagen_top2:{     
         width: "100%",
         height: "50vh",
         backgroundSize: "100%",
         backgroundRepeat: "no-repeat",
         backgroundImage: `url(${uml})`,       
         backgroundPosition: "center center",
         flexBasis: "100% !important",
         maxWidth: "100% !important",
      },
      imagen_topmodel:{    
        width: "100% !important",
        height: "145vh",
        margin: "3em 0 0 0",
        backgroundSize: "135vh",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${modelo})`,       
        backgroundPosition: "center",
         
      },
      imagen_topmodel2:{     
        width: "100%",
        height: "85vh",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${modelo})`,       
        backgroundPosition: "center center",
        flexBasis: "100% !important",
        maxWidth: "100% !important",
     },
     boton: {
      padding: "0em 1em 0em 1em",
      borderRadius: "2vh",
      backgroundColor: Values.Redwinecolor,
      color: Values.TextButton,
      fontFamily: Values.SourceRoboto,
      textTransform: "inherit",
      transition: "all 0.8s ease-out",
      cursor: "pointer",
      margin: "1.5% 0 0 0",
      width: "max-content",
      fontSize: Values.SizetextcontentGrid,
      borderRadius: "2vh",
      // fontWeight: "bold",
      "&:hover": {
        backgroundColor: Values.HoverButton,
        border: "none",
      },
    },
    
      boton1: {
        padding: "0.3em 1em 0.3em 1em",
        borderRadius: "2vh",
        backgroundColor:"#ffffff",
        fontFamily: Values.SourceRoboto,
        textTransform: "capitalize",
        color: "#4C4C4C",
        transition:"all 0.8s ease-out",
        cursor: "pointer",
        margin: "2% 0 0 0",
        width: "100%",
        fontSize: "calc(1em + 0.3vh)",
        borderRadius: "2vh",
        fontWeight: "bold",
        border:"none",
        boxShadow: "3px 3px 10px #7b7676",
        
        "&:hover":{
            // backgroundColor: Values.HoverButton,
            border:"none",
            color: Values.TextButton,
        }
    },
      listyle:{
        paddingLeft:"0.6em",
        paddingRight: "0.6em",
      },
      gridglobal:{
        padding: "0 10vw 3vw 10vw",        
      },
      gridglobalmovil:{
        padding: "0 5vw 3vw 5vw",        
      },

      margboton:{
        margin:"1em 0 0 0",
      },
      circule:{
        margin: "0 0.5em 0 0vw",
        maxWidth: "17% !important",
        flexBasis: "8.333333% !important",        
      },
      
      titleStyle:{
        color: Values.Redwinecolor,
        fontFamily: Values.SourceRoboto,
        fontWeight: "bold",
        fontSize: Values.SizeTitle,
        padding: Values.PaddingTitleText,
        textAlign: "center",
      },
      textStyle: {
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeText,
        padding: "0 1vw 0 1vw",
      },
      textStyle1: {
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeText,
        padding: "0 1vw 0 1vw",
        marginLeft:"1.8vw",
      },
      textStyle2: {
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeText,
      },
      contentrulesp:{
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeText,        
        margin:"1em 0 1em 0", 
        padding: "0 3em 0 0",
      }, 
      contentrulesp2:{
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeText,        
        margin:"1em 0 1em 0", 
        paddingLeft:"2em"
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
      margintop: {
        padding: "0 10vw 3vw 10vw",
        backgroundColor: "#f4f4f4",
      },
      margintopmovil: {
        padding: "0 5vw 3vw 5vw",
        backgroundColor: "#f4f4f4",
      },  
     texto:{
      color: Values.Redwinecolor,
      fontFamily: Values.SourceRoboto,
      fontWeight: "bold",
      fontSize: Values.SizeSubtitle,
      padding: "0 0 1em 0",
      textAlign: "center",
     },

     texto1:{
      color: Values.Redwinecolor,
      fontFamily: Values.SourceRoboto,
      fontWeight: "bold",
      fontSize: Values.SizeSubtitle,      
      textAlign: "center",
     },
     circulemarg:{
       margin: "1vw 0 1vw 0",
    
  },
})

const Imagen = () => {
    const classes = useStyle();
    const matches = useMediaQuery('(min-width:769px)');
    var estilo = null;
    {matches ? estilo=classes.imagen_top :estilo=classes.imagen_top2}   
    return(
      <Grid item container xs={6} className={estilo}>   
      </Grid>  
    )  
} 

const Imagenuml = () => {
  const classes = useStyle();
  const matches = useMediaQuery('(min-width:769px)');
  var estilo = null;
  {matches ? estilo=classes.imagen_topmodel :estilo=classes.imagen_topmodel2}   
  return(
    <Grid container className={estilo}>   
    </Grid>  
  )  
} 

const Catastro = () => {
    const classes = useStyle();
    const matches = useMediaQuery("(min-width:769px)");
    const [t, i18n]= useTranslation("global");
    const ajustable = "ajustable"
    var estilo = null;
    {
      matches?estilo=classes.gridglobal:estilo=classes.gridglobalmovil
    }
    return(
        <Grid container direction="column" className={estilo}>
            <Grid container justifyContent="center" alignItems="center">
                    <h3 className={classes.titleStyle+" "+ajustable}>LADM</h3>
            </Grid>
            <Grid container direction="row">
                <Grid item container xs >
                    <p className={classes.contentrulesp+" "+ajustable}>
                        {t("ladm.ladm")}
                        <br></br>
                        <br></br>
                        {t("ladm.ladm2")}
                        <br></br>
                        <br></br>
                        {t("ladm.ladm3")}
                    </p>       
                </Grid>
                <Imagen/> 
            </Grid>
            <Grid container>
                {/* <p className={classes.contentrulesp}>
                </p>   */}
                <Imagenuml/>
            </Grid>
            <Grid container direction="column">
            <Tooltip title={t("ladm.ladm4")} arrow>
          <Button className={classes.boton+" "+ajustable}>
          <a target="_blank" className={classes.alink}
                  href={rarmodelo}
                  download
              >{t("ladm.ladm4")}</a>
              <DownloadForOfflineRoundedIcon style={{ fill: 'white' }}/>
            </Button>
            </Tooltip>
            <Tooltip title={t("ladm.ladm5")} arrow>
          <Button className={classes.boton+" "+ajustable}>
          <a target="_blank" className={classes.alink}
                  href={imagenmodelo}
                  download
              >{t("ladm.ladm5")}</a>
              <DownloadForOfflineRoundedIcon style={{ fill: 'white' }}/>
            </Button>
            </Tooltip>
            </Grid>
        </Grid>  
    )
}

const General = () => {
  const classes = useStyle();
   
  return(
      <Grid container id="target-two">
        <Catastro/>      
      </Grid>
  )
}

export default General;