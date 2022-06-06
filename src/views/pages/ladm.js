import { Grid, makeStyles, useMediaQuery, Button ,CardMedia} from "@material-ui/core";
import React, { Component } from "react";
import * as Values from 'Observatorio/Variables/values';
import uml from "Observatorio/img/uml.png";
import modelo from "Observatorio/img/MODELO.jpg";

const useStyle = makeStyles({
    imagen_top:{    
        width: "100% !important",
        height: "40vh",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${uml})`,       
        backgroundPosition: "center",
         
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
        height: "106vh",
        margin: "3em 0 0 0",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${modelo})`,       
        backgroundPosition: "center",
         
      },
      imagen_topmodel2:{     
        width: "100%",
        height: "50vh",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${modelo})`,       
        backgroundPosition: "center center",
        flexBasis: "100% !important",
        maxWidth: "100% !important",
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
      listyle:{
        paddingLeft:"0.6em",
        paddingRight: "0.6em",
      },
    //   imagen_Business:{    
    //     width: "100% !important",
    //     height: "40vh",
    //     backgroundSize: "85%",
    //     backgroundRepeat: "no-repeat",
    //     backgroundImage: `url(${Business})`,       
    //     backgroundPosition: "center",
         
    //   },    
    //   imagen_Business2:{     
    //      width: "100%",
    //      height: "50vh",
    //      backgroundSize: "100%",
    //      backgroundRepeat: "no-repeat",
    //      backgroundImage: `url(${Business})`,       
    //      backgroundPosition: "center center",
    //      flexBasis: "100% !important",
    //      maxWidth: "100% !important",
    //   },
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
    //   imagen_transfer:{    
    //     width: "100% !important",
    //     height: "37vh",
    //     backgroundSize: "85%",
    //     backgroundRepeat: "no-repeat",
    //     backgroundImage: `url(${Transfer})`,       
    //     backgroundPosition: "bottom",
         
    //   },   
    //   imagen_transfer2:{     
    //     width: "100%",
    //     height: "40vh",
    //     backgroundSize: "100%",
    //     backgroundRepeat: "no-repeat",
    //     backgroundImage: `url(${Transfer})`,       
    //     backgroundPosition: "bottom",
    //     flexBasis: "100% !important",
    //     maxWidth: "100% !important",
    //  },

//      imagen_png:{    
//       width: "100% !important",
//       height: "95vh",
//       backgroundSize: "69%",
//       backgroundRepeat: "no-repeat",
//       backgroundImage: `url(${ImgPng})`,       
//       backgroundPosition: "center",       
//     },   
//     imagen_png2:{     
//        width: "100%",
//        height: "113vh",
//        backgroundSize: "100%",
//        backgroundRepeat: "no-repeat",
//        backgroundImage: `url(${Hong})`,       
//        backgroundPositionY: "1vh",     
//    },
//    imagen_png4:{     
//     width: "100%",
//     height: "186vh",
//     backgroundSize: "100%",
//     backgroundRepeat: "no-repeat",
//     backgroundImage: `url(${Hong})`,       
//     backgroundPositionY: "1vh",     
// },
//    imagen_png3:{    
//     width: "100% !important",
//     height: "100vh",
//     backgroundSize: "100%",
//     backgroundRepeat: "no-repeat",
//     backgroundImage: `url(${ImgPng})`,       
//     backgroundPosition: "center",       
//   },   
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
    var estilo = null;
    {
      matches?estilo=classes.gridglobal:estilo=classes.gridglobalmovil
    }
    return(
        <Grid container direction="column" className={estilo}>
            <Grid container justifyContent="center" alignItems="center">
                    <h3 className={classes.titleStyle}>LADM</h3>
            </Grid>
            <Grid container direction="row">
                <Grid item container xs >
                    <p className={classes.contentrulesp}>
                        LADM es un modelo conceptual estructurado para brindar información de objetos territoriales de acuerdo con las relaciones establecidas dentro del mismo.
                        <br></br>
                        <br></br>
                        La Superintendencia de Notariado y Registro (SNR) y el Instituto Geográfico Agustín Codazzi (IGAC) con el apoyo del proyecto de Cooperación Suiza desarrollaron el modelo LADM_COL, para el Sistema de Administración de Tierras acorde a la norma ISO 19152:2012.
                        <br></br>
                        <br></br>
                        Por su parte el Departamento Administrativo Nacional de Estadística (DANE), creó un modelo basado en el modelo LADM_COL, para el suministro de información por parte de los Observatorios inmobiliarios y del Sistema Nacional de Información Catastral (SINIC), representado a continuación:
                    </p>       
                </Grid>
                <Imagen/> 
            </Grid>
            <Grid container>
                {/* <p className={classes.contentrulesp}>
                </p>   */}
                <Imagenuml/>
            </Grid>
        </Grid>  
    )
}

const General = () => {
  const classes = useStyle();
   
  return(
      <Grid container>
        <Catastro/>      
      </Grid>
  )
}

export default General;