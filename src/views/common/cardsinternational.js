import {
    Grid,
    makeStyles,
    Paper,
    CardActions,
    Card,
    CardContent,
    CardMedia,
    Button,
    Typography,
    useMediaQuery,
  } from "@material-ui/core";
  import React, { Component } from "react";
  import * as Values from "Observatorio/Variables/values";
  import cardsotros from "Observatorio/common/cardsinternacional";
  
  const useStyle = makeStyles({
    boton: {
      padding: "0.3em 1em 0.3em 1em",
      borderRadius: "2vh",
      backgroundColor: Values.Redwinecolor,
      color: Values.TextButton,
      fontFamily: Values.SourceRoboto,
      textTransform: "inherit",
      transition: "all 0.8s ease-out",
      cursor: "pointer",
      margin: "0 0 7% 0",
      width: "max-content",
      fontSize: "calc(1em + 0.3vh)",
      borderRadius: "2vh",
      // fontWeight: "bold",
      "&:hover": {
        backgroundColor: Values.HoverButton,
        border: "none",
      },
    },
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
      fontFamily: Values.SourceWorksans,
      fontWeight: "bold",
      fontSize: Values.SizeText,
      textAlign: "center",
      margin: "2% 0 1% 0",
    },
  
    Textp: {
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

    TitlehPrincipal: {
        color: Values.Redwinecolor,
        fontFamily: Values.SourceWorksans,
        fontWeight: "bold",
        fontSize: "calc(1.2em + 0.9vh)",
        textAlign: "center",
        margin: "2% 0 2% 0",
      },
  
    gridglobal: {
      padding: "0 10% 0 10%",
      width: "100%",
      padding: "1em",
      boxShadow: "3px 3px 10px #7b7676",
      marginTop: "1vw",
      borderRadius: "1em",
      backgroundColor: "#ffffff"
    },
  
    cardglobal: {
      padding: "0% 0% 5% 0%",
      backgroundColor: "white",
    },
  
    cardglobal2: {
      padding: "0% 0% 0% 0%",
      backgroundColor: "white",
    },
  });
  
  const Cardsmapasinternational = () => {
    const classes = useStyle();
    const matches2 = useMediaQuery("(min-width:1701px)");
    var estilo = null;
    {
      if (matches2) {
        estilo = 4;
      } else {
        estilo = true;
      }
    }
    return (
      <Grid container>
      
        <Grid container className={classes.gridglobal}>
            <Grid container direction="column">
            <h3 className={classes.TitlehPrincipal}>Observatorios internacionales</h3>
            </Grid>
          {cardsotros.map(function (cardsotros) {
            return (
              <Grid
                item
                container
                direction="row"
                xs={estilo}
                justifyContent="center"
                alignItems="center"
                key={cardsotros.id}
                className={classes.cardglobal}
              >
                <Card className={classes.root}>
                  <CardContent className={classes.cardglobal2}>
                    <CardMedia
                      className={classes.media}
                      image={cardsotros.image_card}
                    />
                    <CardContent className={classes.centerText}>
                      <Typography className={classes.Titleh3}>
                        {cardsotros.title}
                      </Typography>
                    </CardContent>
                  </CardContent>
                  <CardActions className={classes.centerButton}>
                    <Button className={classes.boton} href={cardsotros.link}>
                      Visitar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    );
  };
  
  export default Cardsmapasinternational;