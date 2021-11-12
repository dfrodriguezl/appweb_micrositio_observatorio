import {
  Grid,
  makeStyles,
  useMediaQuery ,
  Paper,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import * as Values from "Observatorio/Variables/values";
import ButtonRedWine from "Observatorio/common/buttonredwine";
import cardplataforma from "Observatorio/common/cardsplataforma";

const useStyle = makeStyles({
  centerButton: {
    justifyContent: "center",
    padding: "0 0 0 0 !important",
  },

  centerText: {
    textAlign: "center",
  },

  contentcar: {
    paddingBottom: "0 !important",
  },

  Titleh3: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontWeight: "bold",
    fontSize: Values.SizeText,
    textAlign: "center",
    // margin: "2% 0 1% 0",
  },

  Textp: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeAuxiliary,
    textAlign: "start",
    margin: "0 6% 0 6%",
  },

  root: {
    width: "100%",
    borderRadius: "1em",
    boxShadow: "3px 3px 10px #7b7676",
  },

  media: {
    height: "24vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    backgroundPositionX: "3%",
    backgroundPositionY: "37%",
  },

  media2: {
    height: "24vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "110%",
    backgroundPositionX: "3%",
    backgroundPositionY: "47%",
  },

  gridglobal: {
    padding: "0 10% 0 10%",
  },

  cardglobal: {
    padding: "0% 0% 1.5% 0%",
    backgroundColor: "white",
  },

  cardglobal2: {
    padding: "0% 0% 0% 0%",
    backgroundColor: "white",
  },
});

const Cardsmapas = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:863px)");
  var estilo = null;
  {
    matches ? (estilo = classes.media) : (estilo = classes.media2);
  }
  return (
    <Grid container>
      <Grid container>
        {cardplataforma.map(function (cardplataforma) {
          return (
            <Grid
              container
              direction="column"
              key={cardplataforma.id}
              className={classes.cardglobal}
            >
              <Card className={classes.root}>
                <CardContent className={classes.cardglobal2}>
                <Grid container direction="row" item xs>
                    <Grid item xs={2} direction="column" container>
                    <CardMedia
                        className={estilo}
                        image={cardplataforma.image_card}
                    />
                    </Grid>
                    <Grid item xs container direction="column">
                    <CardContent
                    className={(classes.centerText, classes.contentcar)}>
                    <Typography className={classes.Titleh3}>
                      {cardplataforma.title}
                    </Typography>
                  </CardContent>
                    </Grid>
                </Grid>                    
                </CardContent>
                {/* <CardActions className={classes.centerButton}>
                  <ButtonRedWine Title="Hola" href={cardplataforma.link} />
                </CardActions> */}
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Cardsmapas;
