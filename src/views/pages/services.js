import { Grid, makeStyles, useMediaQuery ,Paper, CardActions, Card, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import * as Values from 'Variables/values';
import Delivery from "img/Delivery.svg";
import ButtonRedWine from "common/buttonredwine";
import {FcShop} from "react-icons/fc";
import infocards from "common/cards.json";

const useStyle = makeStyles({
  
    gridglobal:{
        padding: "0 10% 0 10%",
      },


    Textpdes:{
      color: Values.TextParagraph,
      fontFamily: Values.SourceRoboto,
      fontSize: Values.SizeAuxiliary,
      textAlign: "start",  
      margin: "0 10% 0 10%",
     },
  
  centerButton: {
    justifyContent: "center",
    padding: "0 0 8% 0 !important",
  },

  centerText: {
    textAlign: "center",
    padding: "10% 0 0 0",
  },

  gridglobal: {
    padding: "0 10% 1% 10%",
  },

  Titleh3:{
    color: Values.Redwinecolor,
    fontFamily: Values.SourceWorksans,
    fontSize: Values.SizeSubtitle,
    padding: "8% 0 0 0",  
  },

  Textp:{
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "start",  
    margin: "2% 0 0 0",
  },

  Textpcard:{
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "center",  
    margin: "2% 0 1% 0",
  },

  root: {
    width: "40vh",
    borderRadius: "1em",
    boxShadow: "3px 3px 10px #7b7676",
  },

  media: {
    height: "28vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    borderRadius: "0 0 4% 4%",
    boxShadow: "0px 6px 10px #7b7676",
  },

  cardglobal: {
    //margin: "0% 0% 0% 0%",
    padding: "0% 0% 5% 0%",  
    backgroundColor: "#fafafa",
  },

  imagen_top:{    
    width: "100% !important",
     height: "60vh",
     backgroundSize: "77%",
     backgroundRepeat: "no-repeat",
     backgroundImage: `url(${Delivery})`,
    backgroundPosition: "center",
     
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
    <Grid item container direction="column" xs={6} className={estilo}></Grid>
    
  )
} 

const Topservice = () => {
    const classes = useStyle();    
    return (
        <Grid container direccion="row" >
                <Grid item container direction="column" xs className={classes.containerTitle}>
                <h3 className={classes.Titleh3}>Servicios</h3>
                <p className={classes.Textp}>{Values.TextGeovisor}</p>      
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
                <CardContent className={classes.cardglobal}>
                  <CardMedia
                    className={classes.media}
                    image= {infocards.image_card}
                    title={infocards.title}
                  />
                  <CardContent className={classes.centerText}>                      
                    <Typography className={classes.Textpcard}>
                      {infocards.title}
                    </Typography>
                    <Typography className={classes.Textpdes}>
                      {infocards.description}  
                    </Typography>
                  </CardContent>
                </CardContent>
                <CardActions className={classes.centerButton}>
                <ButtonRedWine Title="Visitar" href="#"/>
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
    return (
        <Grid container justifyContent="center"
        alignItems="center"  className={classes.gridglobal}>
            <Topservice/>
            <Cardsservice/>
        </Grid>
    );
}

export default ViewService