import { Grid, makeStyles, Paper, CardActions, Card, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import * as Values from 'Observatorio/Variables/values';
import ButtonRedWine from "Observatorio/common/buttonredwine";
import cardstipologia from "Observatorio/common/cardtipologia";

const useStyle = makeStyles({
  
  centerButton: {
    justifyContent: "center",
    padding: "0 0 0 0 !important",
  },

  centerText:{
    textAlign: "center",
  },    

  contentcar:{
    paddingBottom:"0 !important",
  },
    
    Titleh3:{
      color: Values.Redwinecolor,
      fontFamily: Values.SourceWorksans,
      fontWeight: "bold",
      fontSize: Values.SizeText,
      textAlign: "center",   
      margin: "2% 0 1% 0",
    },
    
      Textp:{
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeAuxiliary,
        textAlign: "start",  
        margin: "0 6% 0 6%",
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

      gridglobal:{
        padding: "0 10% 0 10%",
      },

      cardglobal:{
        padding: "0% 0% 5% 0%",        
        backgroundColor: "white",
      },

      cardglobal2:{
        padding: "0% 0% 0% 0%",        
        backgroundColor: "white",
      },
});

const Cardstipologia = () => {
    const classes = useStyle();
    return (
      
      <Grid container>
        <Grid
          container
          className={classes.gridglobal}
        >
          {cardstipologia.map(function(cardstipologia) {     
                return(
                  <Grid
            item
            container
            direction="row"
            xs              
            justifyContent="center"
            alignItems="center"
            key={cardstipologia.id}
            className={classes.cardglobal}
          >                    
            <Card className={classes.root}>
              <CardContent className={classes.cardglobal2}>
                <CardMedia
                  className={classes.media}
                  image={cardstipologia.image_card}                 
                />
                <CardContent className={classes.centerText}>
                  <Typography className={classes.Titleh3}>
                  {cardstipologia.title}  
                  </Typography>
                  <Typography className={classes.Textp}>
                  {cardstipologia.description}  
                  </Typography>
                </CardContent>
              </CardContent>
              <CardActions className={classes.centerButton}>
              <ButtonRedWine Title="Visitar" href={cardstipologia.link}/>
              </CardActions>
            </Card>
          </Grid>
                )  
          })}
        </Grid>
      </Grid>
    );
}

export default Cardstipologia