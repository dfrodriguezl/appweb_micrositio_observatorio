import { Grid, makeStyles, Paper, CardActions, Card, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import * as Values from 'Variables/values';
import triangles from "img/paris.jpg";
import ButtonRedWine from "common/buttonredwine";
import {FcShop} from "react-icons/fc";
import infocards from "common/cards.json";

const useStyle = makeStyles({
  
    gridglobal:{
        padding: "0 10% 0 10%",
      },

    imagen_top: {
    width: "100%",
    height: "10vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${triangles})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    
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
    padding: "5% 10% 1% 10%",
  },

  Titleh3: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceWorksans,
    fontWeight: "bold",
    fontSize: Values.SizeSubtitle,
    textAlign: "center",
    padding: "0 0 1em 0",
  },

  Textp: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeAuxiliary,
    textAlign: "center",
  },

  root: {
    width: "42vh",
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
});

const Topservice = () => {
    const classes = useStyle();    
    return (
        <Grid container className={classes.imagen_top}>
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
                    <Typography className={classes.Textp}>
                    <FcShop/>{infocards.title}
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
        <Grid>
            <Topservice/>
            <Cardsservice/>
            <Topservice/>
        </Grid>
    );
}

export default ViewService