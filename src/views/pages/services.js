import { Grid, makeStyles, useMediaQuery ,Paper, CardActions, Card, CardContent, CardMedia, Button, Typography, Tooltip } from '@material-ui/core';
import React, { Component } from 'react';
import * as Values from 'Observatorio/Variables/values';
import Delivery from "Observatorio/img/servicios.jpg";
import ButtonRedWine from "Observatorio/common/buttonredwine";

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
    margin: "10% 0 4% 0",
    width: "max-content",
    fontSize: "calc(1em + 0.3vh)",
    borderRadius: "2vh",
    // fontWeight: "bold",
    "&:hover": {
      backgroundColor: Values.HoverButton,
      border: "none",
    },
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
        backgroundSize: "53vh",
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

const Topservice = () => {
    const classes = useStyle();    
    return (
        <Grid container direccion="row" >
          <Grid container justifyContent="center"
          alignItems="center">
          <h3 className={classes.Titleh3}>Servicios</h3>
                </Grid>
                <Grid item container direction="column" xs className={classes.containerTitle}>
                <p className={classes.Textp}>El Observatorio Inmobiliario Nacional recopila y pública información acerca del mercado inmobiliario.</p>      
                <p className={classes.Textp}>
                  La información publicada está articulada con los demás observatorios a nivel nacional, tales como: Metropolitanos, regionales, municipales y distritales y busca disponer de la información acorde a estándares establecidos y de forma oficial, agregar valor mediante la consolidación de datos y aplicar nuevos métodos analíticos.</p> 
                </Grid>
                <ImagenBottom/> 
        </Grid>
    );
}

const Cardsservice = () => {
    const classes = useStyle();    
    return (
      <Grid container>
        <Grid
          container
          className={classes.gridglobal}
        >
          {infocards.map(function(infocards) {
            
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
                    <Typography className={classes.Textpcard}>
                      {infocards.title}
                    </Typography>
                    <Typography className={classes.Textpdes}>
                      {infocards.description}  
                    </Typography>
                  </CardContent>
                </CardContent>
                <CardActions className={classes.centerButton}>
                <Tooltip title={infocards.title} arrow>                    
                  <Button target="_blank" className={classes.boton} href={infocards.link}>Visitar</Button>
                </Tooltip>
                </CardActions>
              </Card>
            </Grid>
            )
          })}
        </Grid>
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
        alignItems="center"  className={estilo}>
            <Topservice/>
            <Cardsservice/>
        </Grid>
    );
}

export default ViewService