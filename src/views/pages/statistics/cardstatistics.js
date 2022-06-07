
import { Grid, makeStyles, CardActions, Card, CardContent, CardMedia, Typography, Tooltip, Button } from '@material-ui/core';
import React from 'react';
import * as Values from 'Observatorio/Variables/values';
import Delivery from "Observatorio/img/Delivery.svg";
import ButtonRedWine from "Observatorio/common/buttonredwine";
import infocards from "Observatorio/common/statistics.js";

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
      marginTop:"5px !important"
    },
  
    Textpcard: {
      color: "#585858",
      fontFamily: Values.SourceRoboto,
      fontSize: "20px",
      textAlign: "center"
  //    margin: "2% 0 1% 0",
  
    },
  
    root: {
      width: "40vh",
      borderRadius: "1em",
      boxShadow: "3px 3px 10px #7b7676",
    },
    
  
    media: {
      height: "24vh",
      width:"100%",
      backgroundSize:"36vh",
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
      padding: "5% 0% 0% 0%",
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
                        <CardContent className={classes.centerText + classes.contentcar}>
                          <Typography className={classes.Textpcard}>
                            {infocard.title}
                          </Typography>
                          <Typography className={classes.Textpdes}>
                            {infocard.description}
                          </Typography>
                        </CardContent>
                      </CardContent>
                      <CardActions className={classes.centerButton}>
                        <Tooltip title={infocard.title} arrow>                    
                          <Button target="_blank" className={classes.boton} href={infocard.link}>Visitar</Button>
                        </Tooltip>
                      </CardActions>
                    </Card>
                  </Grid>

                )
             })
        })
   return resultCards
}
export default CardStatistics;
