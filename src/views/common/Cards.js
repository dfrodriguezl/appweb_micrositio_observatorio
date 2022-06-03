import { Grid, makeStyles, Paper, CardActions, Card, CardContent, CardMedia, Button, Typography,Tooltip } from '@material-ui/core';
import React, { Component } from 'react';
import * as Values from 'Observatorio/Variables/values';
import ButtonRedWine from "Observatorio/common/buttonredwine";
import infomaps from "Observatorio/common/infomaps.json";

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
      margin: "2% 0 2% 0",
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
        fontSize: "calc(1em + 0.3vh)",
        borderRadius: "2vh",
        // fontWeight: "bold",
        "&:hover": {
          backgroundColor: Values.HoverButton,
          border: "none",
        },
      }
});

const Cardsmapas = () => {
    const classes = useStyle();
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
              <CardContent className={classes.cardglobal2}>
                <CardMedia
                  className={classes.media}
                  image={infomaps.image_card}                 
                />
                {/* , classes.contentcar */}
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
              <Tooltip title={infomaps.title} arrow>
              <Button target="_blank" className={classes.boton} href={infomaps.link}>Visitar</Button>
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

export default Cardsmapas