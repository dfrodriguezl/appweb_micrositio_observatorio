import { Grid, makeStyles, useMediaQuery, Button ,CardMedia,Tooltip} from "@material-ui/core";
import React, { Component } from "react";
import * as Values from 'Observatorio/Variables/values';
import Small from "Observatorio/img/Small.svg";
import Meeting from "Observatorio/img/05_catastro_multiproposito_comite_tecnico.webp";
import Remote from "Observatorio/img/composicion.jpg";
import Discussion from "Observatorio/img/logro.jpg";
import ButtonRedWine from "Observatorio/common/buttonredwine";
import {useTranslation} from "react-i18next";

import word from "Observatorio/img/powerpoint.png";

const useStyle = makeStyles({
  margintop:{
      padding: "0 0 5% 0",
      backgroundColor:"#f4f4f4",
    },
    listyle:{
      paddingLeft:"0.6em",
      paddingBottom:"1vw"
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
      fontSize: "calc(1em + 0.5vh)",
      margin: "1% 0 0 0",
    },
    gridglobal:{
      padding: "0 5vw 3vw 5vw",
      
    },
    composicion:{
      padding: "0 5vw 3vw 5vw",
      background:"#fafafa"
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
      paddingLeft:"1em",
      listStyleType: "disclosure-closed"
    }, 
    imagen_top:{    
      width: "100% !important",
      height: "40vh",
      backgroundSize: "55vh",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${Meeting})`,       
      backgroundPositionY: "5vh",
      backgroundPositionX: "1.5vw",
       
    },      
    imagen_top2:{     
       width: "100%",
       height: "47vh",
       backgroundSize: "55vh",
       backgroundRepeat: "no-repeat",
       backgroundImage: `url(${Meeting})`,       
       backgroundPosition: "center center",
       flexBasis: "100% !important",
       maxWidth: "100% !important",
    },
    imagen_Judge:{    
      width: "100% !important",
      height: "47vh",
      backgroundSize: "47vh",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${Remote})`,       
      backgroundPosition: "center",
      margin: "0 2vh 0 0",
       
       
    },       
    botonver: {
      padding: "4px 40px",
      borderRadius: "1em",
      backgroundColor: Values.Redwinecolor,
      color: Values.TextButton,
      fontFamily: Values.SourceRoboto,
      textTransform: "capitalize",
      transition: "all 0.8s ease-out",
      cursor: "pointer",
      margin: "2% 0 3% 100%",
      width: "max-content",
      fontSize: "0.8em",
      // fontWeight: "bold",
      "&:hover": {
        backgroundColor: Values.HoverButton,
        border: "none",
      },
    },

    imagen_Judge2:{     
       width: "100%",
       height: "47vh",
       backgroundSize: "55vh",
       backgroundRepeat: "no-repeat",
       backgroundImage: `url(${Remote})`,       
       backgroundPosition: "center center",
       flexBasis: "100% !important",
       maxWidth: "100% !important",
    },   

    imagen_Discussion:{    
      width: "100% !important",
      height: "47vh",
      backgroundSize: "57vh",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${Discussion})`,       
      backgroundPosition: "center",
       
       
    },       
    imagen_Discussion2:{     
       width: "100%",
       height: "47vh",
       backgroundSize: "55vh",
       backgroundRepeat: "no-repeat",
       backgroundImage: `url(${Discussion})`,       
       backgroundPosition: "center center",
       flexBasis: "100% !important",
       maxWidth: "100% !important",
  },   
  margboton:{
    margin:"1em 0 0 0",
    borderRadius: "2vh",
    backgroundColor:"#ffffff",
    fontFamily: Values.SourceRoboto,
    color: "#4C4C4C",
    transition:"all 0.8s ease-out",
    margin: "2% 0 0 0",
    width: "70vh",
    fontSize: "calc(1em + 0.3vh)",
    borderRadius: "2vh",
    fontWeight: "bold",
    border:"none",
    boxShadow: "3px 3px 10px #7b7676",
    padding: "0em 1em 0em 1em",
  },
  excel: {
    height: "14vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "80%",
    width:"100%",
  },
  excel2: {
    height: "10vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "28%",
  },
  alink:{
    textDecoration:"none",
  },
  contentrulesp3: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: "calc(0.6em + 0.3vh)",
    textAlign:"center",
  },
  boton: {
    padding: "0.3em 1em 0.3em 1em",
    borderRadius: "2vh",
    backgroundColor:"#ffffff",
    fontFamily: Values.SourceRoboto,
    textTransform: "capitalize",
    color: "#4C4C4C",
    transition:"all 0.8s ease-out",
    cursor: "pointer",
    margin: "2% 0 0 0",
    width: "30%",
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
    <Grid item container direction="column" xs={6} className={estilo}>   
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

const Composicioncomite = () => {
  const classes = useStyle();
  const [t, i18n]= useTranslation("global");
  const ajustable = "ajustable"
  return(
    <Grid container direction="row" className={classes.composicion}>
              <Grid container>
                  <h3 className={classes.titleStyle}>{t("technical.composition")}</h3>
              </Grid>  
              <Grid item container direction="column" xs className={classes.containerTitle}>
              <p className={classes.contentrulesp}>
              {t("technical.composition2")}
                    </p>  
                    <ol className={classes.contentrulesp2}>
                    <li className={classes.listyle+" "+ajustable}>{t("technical.composition3")}</li>
                    <li className={classes.listyle+" "+ajustable}>{t("technical.composition4")}</li> 
                    <li className={classes.listyle+" "+ajustable}>{t("technical.composition5")}</li>
                    <li className={classes.listyle+" "+ajustable}>{t("technical.composition6")}</li>                      
                    <li className={classes.listyle+" "+ajustable}>{t("technical.composition7")}</li>
                    </ol>  
                    <p className={classes.contentrulesp}>
                    {t("technical.composition8")}
                    </p>         
              </Grid>           
          </Grid>
  )
}

const Logros = () => {
  const classes = useStyle();
  const [t, i18n]= useTranslation("global");
  const ajustable = "ajustable"
  return(
    <Grid container direction="row" className={classes.gridglobal}>
              <Grid container>
                  <h3 className={classes.titleStyle+" "+ajustable}>{t("technical.achievements")}</h3>
              </Grid>
              <Grid item container direction="column" xs className={classes.containerTitle}>
                <p className={classes.contentrulesp+" "+ajustable}>
                  {t("technical.achievements2")}<i>{t("technical.achievementscursiva")}</i>
                </p>        
                <Grid container className={classes.margboton}>
                  <h3 className={classes.titleStyle2+" "+ajustable}>{t("technical.resolution")}</h3>
                    <Grid item xs={4}>
                      <Tooltip title={t("technical.resolution")} arrow>
                      <Button className={classes.botonver+" "+ajustable}
                        href="https://igac.gov.co/es/contenido/resolucion-1149-de-2021"  target="_blank"                  
                      >{t("technical.view")}</Button></Tooltip>
                    </Grid>
                </Grid>
              </Grid>
    </Grid>
  )
}

const Comite = () => {
  const classes = useStyle();
  const ajustable = "ajustable"
  const [t, i18n]= useTranslation("global");
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
    var estilo3 = null;

    var estilo4 = null;
    {
      if (matches){
        estilo4=classes.boton;
        estilo2 = classes.excel;
      }else{
        estilo2 = classes.excel2;
        estilo3 = classes.mediawidth;
        estilo4=classes.boton1;
      }
    }  
  
  return(      
      <Grid container direction="column" id="target-two" className={estilo}>
          <Grid container direction="row">              
              <Grid item container direction="column" xs className={classes.containerTitle}>
              <h3 className={classes.titleStyle+" "+ajustable}>{t("technical.technical")}</h3>
              <p className={classes.contentrulesp+" "+ajustable}>
              {t("technical.technical2")}
              </p>        
              <ol className={classes.contentrulesp2}>
                    <li className={classes.listyle+" "+ajustable}>{t("technical.technical3")}</li>
                    <li className={classes.listyle+" "+ajustable}>{t("technical.technical4")}</li>
                    <li className={classes.listyle+" "+ajustable}>{t("technical.technical5")}</li>
                    <li className={classes.listyle+" "+ajustable}>{t("technical.technical6")}</li>
                    <li className={classes.listyle+" "+ajustable}>{t("technical.technical7")}</li>
              </ol>        
              </Grid>
              <Imagen/> 
      </Grid>
      
      {/* <button className={estilo4}>
        <a className={classes.alink} href="" download>
          <Grid container direction="row">
                                <Grid item xs={4} direction="column" container  className={estilo3}>
                                  <CardMedia className={estilo2} image={word} />
                                </Grid>
                                <Grid item xs container direction="column" justifyContent="center">
                                  <p className={classes.contentrulesp3}><strong>Nombre: Comité Técnico Asesor</strong></p>
                                  <p className={classes.contentrulesp3}>1.317 KB   |   01/10/2021</p>
                                  <p className={classes.contentrulesp3}><strong>Descripción: </strong>Presentación Comité Técnico Asesor para la regulación de la gestión catastral. </p>
                                </Grid>
            </Grid>
          </a>
        </button> */}
   
          
      

      </Grid>
    
  )
}

const ComiteTecnico = () => {
  return(
    <Grid>
      <Comite/>       
      <Composicioncomite/>
      <Logros/>    
    </Grid>
  )
}

export default ComiteTecnico;