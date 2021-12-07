import { Grid, makeStyles, useMediaQuery ,Paper, CardActions, Card, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import * as Values from 'Observatorio/Variables/values';
import Delivery from "Observatorio/img/Delivery.svg";
import ButtonRedWine from "Observatorio/common/buttonredwine";

import infocards from "Observatorio/common/cards_.js";

const useStyle = makeStyles({
  
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
    backgroundSize: "80%",
  },

  cardglobal: {
    //margin: "0% 0% 0% 0%",
    padding: "0% 0% 5% 0%",  
    backgroundColor: "white",
  },

  cardglobal2: {
    //margin: "0% 0% 0% 0%",
    padding: "0% 0% 0% 0%",  
    backgroundColor: "white",
  },

  imagen_top:{    
    width: "100% !important",
        height: "42vh",
        backgroundSize: "80%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${Delivery})`,       
        backgroundPosition: "initial",  
     
},

contentcar:{
  paddingBottom:"0 !important",
},

imagen_top2:{     
     width: "100%",
     height: "66vh",
     backgroundSize: "100%",
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
                  <CardContent className={classes.centerText, classes.contentcar}>                      
                    <Typography className={classes.Textpcard}>
                      {infocards.title}
                    </Typography>
                    <Typography className={classes.Textpdes}>
                      {infocards.description}  
                    </Typography>
                  </CardContent>
                </CardContent>
                <CardActions className={classes.centerButton}>
                <ButtonRedWine Values="1" Title="Visitar" href={infocards.link}/>
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