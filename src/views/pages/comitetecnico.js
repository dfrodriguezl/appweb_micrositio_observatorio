import { Grid, makeStyles, useMediaQuery, Button ,CardMedia,Tooltip} from "@material-ui/core";
import React, { Component } from "react";
import * as Values from 'Observatorio/Variables/values';
import Small from "Observatorio/img/Small.svg";
import Meeting from "Observatorio/img/Meting.jpg";
import Remote from "Observatorio/img/composicion.jpg";
import Discussion from "Observatorio/img/logro.jpg";
import ButtonRedWine from "Observatorio/common/buttonredwine";

import word from "Observatorio/img/powerpoint.png";

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
      fontSize: "calc(0.8em + 1vh)",
      margin: "1% 0 0 0",
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
      backgroundSize: "55vh",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${Meeting})`,       
      backgroundPosition: "center",
       
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
      padding: "0em 1em 0em 1em",
      borderRadius: "2vh",
      backgroundColor: Values.Redwinecolor,
      color: Values.TextButton,
      fontFamily: Values.SourceRoboto,
      textTransform: "inherit",
      transition: "all 0.8s ease-out",
      cursor: "pointer",
      margin: "2% 0 3% 100%",
      width: "max-content",
      fontSize: "calc(1em + 0.3vh)",
      borderRadius: "2vh",
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
    padding: "0.3em 1em 0.3em 1em",
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
      <Grid container direction="column"  className={estilo}>
          <Grid container direction="row">
              <Grid container justifyContent="center" alignItems="center">
                  <h3 className={classes.titleStyle}>Comité técnico asesor</h3>
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
      
      {/* <button className={estilo4}>
        <a className={classes.alink} href="https://nowsoft.app/geoportal/descargas/oin/Presentación_ComiteTécnicoAsesor.pptx" download>
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

          <Grid container direction="row">
              <Grid container justifyContent="center" alignItems="center">
                  <h3 className={classes.titleStyle}>Composición del comité técnico asesor</h3>
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
              <Grid container justifyContent="flex-start" className={classes.margboton}>
                  <h3 className={classes.titleStyle2}>Resolución 1149 de 2021</h3>
                  <Grid item xs={4}>
                  <Tooltip title="Resolución 1149 de 2021" arrow>
                  <Button className={classes.botonver}
                    href="https://igac.gov.co/es/contenido/resolucion-1149-de-2021"                    
                  >Ver</Button></Tooltip>
                </Grid>
              </Grid>
              </Grid>
              <Imagen3/> 
      </Grid>
      

      </Grid>
    
  )
}

export default Comite;