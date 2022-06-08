import { Grid, makeStyles, useMediaQuery, Button ,CardMedia} from "@material-ui/core";
import React, { Component } from "react";
import * as Values from 'Observatorio/Variables/values';
import uml from "Observatorio/img/uml.png";
import modelo from "Observatorio/img/MODELO.jpg";
import enviroment from "../../config/enviroment";

const useStyle = makeStyles({
  gridglobal: {
    padding: "0 10vw 3vw 10vw",
  },

  gridglobalmovil: {
    padding: "0 5vw 3vw 5vw",
  },

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
      gridglobal:{
        padding: "0 10vw 0vw 10vw",        
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
        fontSize: "calc(1em + 1vh)",
        padding: "0 0 1vw 0",
        textDecoration:"none",
        "&:hover": {
          textDecoration:"underline",
          color:"#821a3f"
        },
      },
      textStyle1: {
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeText,
        padding: "0 0 1vw 0",
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
      },backgroundPosition: "center", 

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

const Resulta = () => {       
    const resultado = localStorage.getItem("searchcobjet");
    const resultado1 = JSON.parse(resultado)
    const classes = useStyle();
    const matches = useMediaQuery("(min-width:769px)");
    const incremento = 0;
    var estilo = null;
    {
      matches?estilo=classes.gridglobal:estilo=classes.gridglobalmovil
    }
    return(
        <Grid container className={estilo}>
            {resultado1.map(function (resultado1) {              
            return (
                <Grid container direction="row">           
                      <a className={classes.textStyle} href={`${enviroment.endpoint}${resultado1.url}`}>{`${resultado1.titulo}`}</a>                      
                      <p className={classes.textStyle1}>{resultado1.descripcion}</p>
                </Grid>
            );
          })}
        </Grid>
    )
}

const Busqueda = () => {
    const classes = useStyle();
    const matches = useMediaQuery("(min-width:769px)");
    var estilo = null;
    {
      matches?estilo=classes.gridglobal:estilo=classes.gridglobalmovil
    }
    return(
        <Grid container direction="column" className={estilo}>
            <Grid container justifyContent="center" alignItems="center">
                    <h3 className={classes.titleStyle}>Resultado de la busqueda</h3>
            </Grid>            
        </Grid>  
    )
}

const GeneralBusqueda = () => {
  const classes = useStyle();
   
  return(
      <Grid container>
        <Busqueda/>  
        <Resulta/>    
      </Grid>
  )
}

export default GeneralBusqueda;