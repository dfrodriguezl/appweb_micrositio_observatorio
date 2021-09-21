import { Grid, makeStyles, Paper, CardActions, Card, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import * as Values from 'Variables/values';
import ButtonRedWine from "common/buttonredwine";


const useStyle = makeStyles({
  
  centerButton: {
    justifyContent: "center",
    padding: "0 0 8% 0 !important",
  },

  centerText:{
    textAlign: "center",
    padding: "10% 0 0 0",
  },

    gridglobal:{
      padding: "5% 10% 1% 10%",
    },
    
    Titleh3:{
      color: Values.Redwinecolor,
      fontFamily: Values.SourceWorksans,
      fontWeight: "bold",
      fontSize: Values.SizeSubtitle,
      textAlign: "center",   
      padding: "0 0 1em 0",
    },
    
      Textp:{
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeAuxiliary,
        textAlign: "start",  
        margin: "0 10% 0 10%",
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
      },

      cardglobal:{
        //margin: "0% 0% 0% 0%",
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
                    <Typography className={classes.Titleh3}>
                      Lizard
                    </Typography>
                    <Typography className={classes.Textp}>
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