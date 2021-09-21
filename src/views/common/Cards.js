import { Grid, makeStyles, Paper, CardActions, Card, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import * as Values from '../../Variables/values';
import triangles from "../../img/triangles.svg";
import ButtonRedWine from "../common/buttonredwine";


const useStyle = makeStyles({
  
  centerButton: {
    justifyContent: "center",
    padding: "0 0 8% 0 !important",
  },

  centerText:{
    textAlign: "center",
    padding: "14% 0 0 0",
  },

    gridglobal:{
      padding: "5% 10% 1% 10%",
    },
    
    Titleh3:{
        color: Values.TextButton,
        fontFamily: Values.SourceWorksans,
        fontWeight: "bold",
        fontSize: "calc(0.5em + 2.2vh)",
        textAlign: "center",   
        padding: "1em 0 1em 10%",
      },
    
      Textp:{
        color: Values.TextButton,
        fontFamily: Values.SourceRoboto,
        fontWeight: "bold",
        fontSize: "calc(1em + 1.5vh)",
        textAlign: "start",  
        margin: "0 10% 1em 10%",
      },

      paper: {
        height: "30vw",
        width: "25vw",
        backgroundolor: "#0b00ff",
      },

      root: {
        width: 373,
        borderRadius: "1em",        
        boxShadow: "3px 3px 10px #7b7676",
      },
      media: {
        height: 280,

      },
      cardglobal:{
        margin: "0% 0% 0% 0%",
        padding: "0% 0% 5% 0%",        
        backgroundColor: "#fafafa",
      },
});

const Cardsmapas = () => {
    const classes = useStyle();
    return (
      <Grid container>
        <Grid
          container
          className={classes.gridglobal}
        >
          {[0, 1, 2, 3, 4, 5].map((value) => (
            <Grid
              item
              container
              direction="row"
              xs              
              justifyContent="center"
              alignItems="center"
              key={value}
              className={classes.cardglobal}
            >                    
              <Card className={classes.root}>
                <CardContent className={classes.cardglobal}>
                  <CardMedia
                    className={classes.media}
                    image="https://concepto.de/wp-content/uploads/2018/08/Londres-e1533855310803.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent className={classes.centerText}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardContent>
                <CardActions className={classes.centerButton}>                
                  <ButtonReqdWine Title="Visitar" />   
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    );
}

export default Cardsmapas