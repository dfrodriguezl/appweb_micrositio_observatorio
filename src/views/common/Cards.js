import { Grid, makeStyles, Paper, CardActions, Card, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import * as Values from 'Variables/values';
import ButtonRedWine from "common/buttonredwine";
import infomaps from "common/infomaps.json";



const useStyle = makeStyles({
  
  centerButton: {
    justifyContent: "center",
    padding: "0 0 8% 0 !important",
  },

  centerText:{
    textAlign: "center",
    padding: "10% 0 0 0",
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
        width: "50vh",
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
    console.log(infomaps)
    return (
      
      <Grid container>
        <Grid
          container
          className={classes.gridglobal}
        >
          {infomaps.map(function(infomaps) {     
                return(
                  <Grid
            item
            container
            direction="row"
            xs              
            justifyContent="center"
            alignItems="center"
            key={infomaps.id}
            className={classes.cardglobal}
          >                    
            <Card className={classes.root}>
              <CardContent className={classes.cardglobal}>
                <CardMedia
                  className={classes.media}
                  image={infomaps.image_card}                 
                />
                <CardContent className={classes.centerText}>
                  <Typography className={classes.Titleh3}>
                  {infomaps.title}  
                  </Typography>
                  <Typography className={classes.Textp}>
                  {infomaps.description}  
                  </Typography>
                </CardContent>
              </CardContent>
              <CardActions className={classes.centerButton}>
              <ButtonRedWine Title="Visitar" href={infomaps.link}/>
              </CardActions>
            </Card>
          </Grid>
                )  
          })}
        </Grid>
      </Grid>
    );
}

export default Cardsmapas