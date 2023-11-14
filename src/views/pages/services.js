import { Grid, makeStyles, useMediaQuery ,Paper, CardActions, Card, CardContent, CardMedia, Button, Typography, Tooltip } from '@material-ui/core';
import React, { Component } from 'react';
import * as Values from 'Observatorio/Variables/values';
import Delivery from "Observatorio/img/servicios.jpg";
import ButtonRedWine from "Observatorio/common/buttonredwine";
import Ofertas from "Observatorio/img/servicios_05_ofertas.png";
import Boletin from "Observatorio/img/servicios_06_boletines.png";
import Estadistica from "Observatorio/img/servicios_06_estadisticas.png";
import {useTranslation} from "react-i18next";

import infocards from "Observatorio/common/cards_.js";

const useStyle = makeStyles({
  
  boton: {
    padding: "0em 1em 0em 1em",
    borderRadius: "2vh",
    backgroundColor: Values.Redwinecolor,
    color: Values.TextButton,
    fontFamily: Values.SourceRoboto,
    textTransform: "inherit",
    transition: "all 0.8s ease-out",
    cursor: "pointer",
    margin: "4% 0 4% 0",
    width: "max-content",
    fontSize: "calc(0.8em + 0.3vh)",
    borderRadius: "2vh",
    // fontWeight: "bold",
    "&:hover": {
      backgroundColor: Values.HoverButton,
      border: "none",
    },
  },
  

  imagen_QA: {
    width: "14%",
    height: "12vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Ofertas})`,
    backgroundPosition: "initial",
  },

  imagen_QA2: {
    width: "45%",
    height: "14vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Ofertas})`,
    backgroundPosition: "initial",
  },

  imagen_QA3: {
    width: "14%",
    height: "12vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Boletin})`,
    backgroundPosition: "initial",
  },

  imagen_QA4: {
    width: "45%",
    height: "14vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Boletin})`,
    backgroundPosition: "initial",
  },

  imagen_QA5: {
    width: "14%",
    height: "12vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Estadistica})`,
    backgroundPosition: "initial",
  },

  imagen_QA6: {
    width: "45%",
    height: "14vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Estadistica})`,
    backgroundPosition: "initial",
  },
    gridglobal:{
        padding: "0% 10% 2vw 10%",
      },

      gridglobalmovil:{
        padding: "0% 5vw 2vw 5vw",
      },

    Textpdes:{
      color: Values.TextParagraph,
      fontFamily: Values.SourceRoboto,
      fontSize: Values.SizeAuxiliary,
      textAlign: "start",  
      margin: "0 6% 0 6%",
     },
  
  centerButton: {
    justifyContent: "center",
    padding: "0 0 0 0 !important",
  },

  centerText: {
    textAlign: "center",
    padding: "5% 0 0 0",
  },

  Titleh3:{
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeTitle, 
    padding: Values.PaddingTitleText,
  },

  Textp:{
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "start",  
    margin: "1em 0 0 0",
  },

  Textpcard:{
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "center",  
    margin: "2% 0 2% 0",
  },

  root: {
    width: "40vh",
    borderRadius: "1em",
    boxShadow: "3px 3px 10px #7b7676",
  },

  media: {
    height: "24vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "30vh",
  },

  cardglobal: {
    //margin: "0% 0% 0% 0%",
    padding: "0% 0% 5% 0%",  
    backgroundColor: "white",
  },

  cardglobal2: {
    //margin: "0% 0% 0% 0%",
    padding: "5% 0% 0% 0%",  
    backgroundColor: "white",
  },

  imagen_top:{    
    width: "100% !important",
        height: "40vh",
        backgroundSize: "43vh",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${Delivery})`,       
        backgroundPosition: "center",  
     
},

contentcar:{
  paddingBottom:"0 !important",
},

imagen_top2:{     
     width: "100%",
     height: "40vh",
     backgroundSize: "50vh",
     backgroundRepeat: "no-repeat",
     backgroundImage: `url(${Delivery})`,       
     backgroundPosition: "center center",
     flexBasis: "100% !important",
     maxWidth: "100% !important",
},
textStyle: {
  color: Values.TextParagraph,
  fontFamily: Values.SourceRoboto,
  fontSize: Values.SizeText,
  //textAlign: "center",
  //padding: "0 1vw 0 1vw",  
  paddingLeft: "1vw",
},

textStyletext: {
  color: Values.TextParagraph,
  fontFamily: Values.SourceRoboto,
  fontSize: Values.SizeText,
  //textAlign: "center",
  //padding: "0 1vw 0 1vw",
  padding: "1vw 0vw 0vw 1vw",
},
marginP:{
  marginTop: "2%"
}
});

const ImagenBottom = () => {
  const classes = useStyle();
  const matches = useMediaQuery('(min-width:769px)');
  var estilo = null;
  {matches ? estilo=classes.imagen_top:estilo=classes.imagen_top2}   
  return(
    <Grid item container direction="column" xs={4} className={estilo}></Grid>
    
  )
} 

const ImagenQA = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(max-width:660px)");
  const matches2 = useMediaQuery("(min-width:1281px)");

  var estilo = null;
  {
    if (matches2) {
      estilo = classes.imagen_QA;
    } else {
      if (matches) {
        estilo = classes.imagen_QA2;
      } else {
        estilo = classes.imagen_QA2;
      }
    }
  }
  return <div className={estilo}></div>;
};

const ImagenQA2 = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(max-width:660px)");
  const matches2 = useMediaQuery("(min-width:1281px)");

  var estilo = null;
  {
    if (matches2) {
      estilo = classes.imagen_QA3;
    } else {
      if (matches) {
        estilo = classes.imagen_QA4;
      } else {
        estilo = classes.imagen_QA4;
      }
    }
  }
  return <div className={estilo}></div>;
};

const ImagenQA3 = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(max-width:660px)");
  const matches2 = useMediaQuery("(min-width:1281px)");

  var estilo = null;
  {
    if (matches2) {
      estilo = classes.imagen_QA5;
    } else {
      if (matches) {
        estilo = classes.imagen_QA6;
      } else {
        estilo = classes.imagen_QA6;
      }
    }
  }
  return <div className={estilo}></div>;
};

const ajustable = "ajustable"

const Topservice = () => {
    const classes = useStyle();   
    const [t, i18n]= useTranslation("global");  
    return (
        <Grid container direccion="row" >
          {/* <Grid container justifyContent="start"
          alignItems="center">
              
          </Grid> */}
                <Grid item container direction="column" xs className={classes.containerTitle} justifyContent="start">
                <h3 className={classes.Titleh3+" "+ajustable}>{t("services.service")}</h3>
                <p className={classes.Textp+" "+ajustable}>{t("services.service2")}</p>      
                <p className={classes.Textp+" "+ajustable}>
                {t("services.service3")}
                </p> 
                </Grid>
                <ImagenBottom/> 
        </Grid>
    );
}

const Cardsservice = () => {
    const classes = useStyle();    
    const [t, i18n]= useTranslation("global"); 
    return (
      <Grid container className={classes.marginP}>
          <Grid container xs={4}>
            <ImagenQA />
            <Grid
              xs={10}
              justifyContent="center"
              alignItems="center"
            >
              <p className={classes.textStyle + " " + ajustable}>
                <strong>{t("services.service4")}</strong>
              </p>
              <p className={classes.textStyletext + " " + ajustable}>
                {t("services.service5")}
              </p>
            </Grid>
          </Grid>
          <Grid container xs={4}>
            <ImagenQA2 />
            <Grid
              xs={10}
              justifyContent="center"
              alignItems="center"
            >
              <p className={classes.textStyle + " " + ajustable}>
                <strong>{t("services.service6")}</strong>
              </p>
              <p className={classes.textStyletext + " " + ajustable}>
                {t("services.service7")}
              </p>
            </Grid>
          </Grid>
          <Grid container xs={4}>
            <ImagenQA3 />
            <Grid
              xs={10}
              justifyContent="center"
              alignItems="center"
            >
              <p className={classes.textStyle + " " + ajustable}>
                <strong>{t("services.service8")}</strong>
              </p>
              <p className={classes.textStyletext + " " + ajustable}>
                {t("services.service9")}
              </p>
              <Tooltip title={t("services.service8")} arrow>                    
                  <Button target="_blank" className={classes.boton+" "+ajustable} href="https://www.dane.gov.co/index.php/estadisticas-por-tema">{t("services.visit")}</Button>
              </Tooltip>
            </Grid>
          </Grid>
          {/* {infocards.map(function(infocards) {
            
            return(
              <Grid
              item
              container
              direction="row"
              xs              
              justifyContent="center"
              alignItems="center"
              key={infocards.id}
              className={classes.cardglobal}
            >                    
              <Card className={classes.root}>
                <CardContent className={classes.cardglobal2}>
                  <CardMedia
                    className={classes.media}
                    image= {infocards.image_card}
                    title={infocards.title}
                  />
                  <CardContent className={classes.centerText + classes.contentcar}>                      
                    <Typography className={classes.Textpcard+" "+ajustable}>
                      {infocards.title}
                    </Typography>
                    <Typography className={classes.Textpdes+" "+ajustable}>
                      {infocards.description}  
                    </Typography>
                  </CardContent>
                </CardContent>
                <CardActions className={classes.centerButton}>
                <Tooltip title={infocards.title} arrow>                    
                  <Button target="_blank" className={classes.boton+" "+ajustable} href={infocards.link}>{t("services.visit")}</Button>
                </Tooltip>
                </CardActions>
              </Card>
            </Grid>
            )
          })} */}
      </Grid>
    );
}

const ViewService = () => {
    const classes = useStyle(); 
    const matches = useMediaQuery("(min-width:769px)");
    var estilo = null;
    {
      matches?estilo=classes.gridglobal:estilo=classes.gridglobalmovil
    }
    return (
        <Grid container justifyContent="center"
        alignItems="center" id="target-two" className={estilo}>
            <Topservice/>
            <Cardsservice/>
        </Grid>
    );
}

export default ViewService