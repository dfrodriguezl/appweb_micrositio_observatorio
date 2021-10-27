
import { Grid, makeStyles, CardActions, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import * as Values from 'Variables/values';
import Delivery from "img/Delivery.svg";
import ButtonRedWine from "common/buttonredwine";
import infocards from "common/statistics.js";

const useStyle = makeStyles({
    marginTop: {
      marginTop: 50
    },
    imageCard: {
      maxWidth: 250
    },
    gridglobal: {
      padding: "0% 10% 0 10%",
    },
    descriptionStatistics: {
      fontSize: 25,
      color: "black",
      fontFamily: Values.SourceRoboto,
      textAlign: "left"
    },
    imageRight: {
      maxHeight: 600,
      top: 100
    },
    TitleStatistics: {
      color: "#821A3F",
      fontSize: 50,
      fontWeight: "bold",
      marginTop: 20,
      fontFamily: Values.SourceRoboto
    },
  
    Textpdes: {
      color: Values.TextParagraph,
      fontFamily: Values.SourceRoboto,
      fontSize: Values.SizeAuxiliary,
      textAlign: "start",
     // margin: "0 6% 0 6%",
      overflow:"hidden",
    //  Height:200

    },
  
    centerButton: {
      justifyContent: "center",
      padding: "0 0 8% 0 !important",
    },
  
    centerText: {
      textAlign: "center",
      padding: "5% 0 0 0",
    },
  
    Titleh3: {
      color: Values.Redwinecolor,
      fontFamily: Values.SourceRoboto,
      fontSize: Values.SizeTitle,
      padding: Values.PaddingTitleText,
    },
  
    Textp: {
      color: Values.Redwinecolor,
      fontFamily: Values.SourceRoboto,
      fontSize: Values.SizeText,
      textAlign: "start",
      margin: "1em 0 0 0",
    },
  
    Textpcard: {
      color: "#585858",
      fontFamily: Values.SourceRoboto,
      fontSize: Values.SizeText,
      textAlign: "center"
  //    margin: "2% 0 1% 0",
  
    },
  
    root: {
      width: "40vh",
      height:"75vh",
      borderRadius: "1em",
      boxShadow: "3px 3px 10px #7b7676",
    },
    
  
    media: {
      height: "28vh",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
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
  
    imagen_top: {
      width: "100% !important",
      height: "42vh",
      backgroundSize: "80%",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${Delivery})`,
      backgroundPosition: "center",
  
    },
  
    contentcar: {
      paddingBottom: "0 !important",
      height:260,
      justifyContent:"center"

    },
  
    imagen_top2: {
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
const CardStatistics=()=>{
    let resultCards=[]
    const classes = useStyle();
          
        infocards.map((row)=>{
             row.map((infocard)=>{
                resultCards.push(
                    <Grid
                    item
                    container
                    direction="row"
                    xs
                    justifyContent="center"
                    alignItems="center"
                    key={infocard.id}
                    className={classes.cardglobal}
                  >
                    <Card className={classes.root}>
                      <CardContent className={classes.cardglobal2}>
                        <CardMedia
                          className={classes.media}
                          image={infocard.image_card}
                          title={infocard.title}
                        />
                        <CardContent className={classes.centerText, classes.contentcar}>
                          <Typography className={classes.Textpcard}>
                            {infocard.title}
                          </Typography>
                          <Typography className={classes.Textpdes}>
                            {infocard.description}
                          </Typography>
                        </CardContent>
                      </CardContent>
                      <CardActions className={classes.centerButton}>
                        <ButtonRedWine Title="Visitar" href="Servicios/estadisticas" />
                      </CardActions>
                    </Card>
                  </Grid>

                )
             })
        })
   return resultCards
}
export default CardStatistics;
