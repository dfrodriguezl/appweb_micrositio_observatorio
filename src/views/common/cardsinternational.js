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
    Tooltip
  } from "@material-ui/core";
  import React, { Component } from "react";
  import * as Values from "Observatorio/Variables/values";
  //import cardsotros from "Observatorio/common/cardsinternacional";
  import {useTranslation} from "react-i18next";
  import Sale from "Observatorio/img/Logo-header-web-blanc.png";
  import Fill from "Observatorio/img/nn1.png";
  import Segment from "Observatorio/img/inteobser1.png";
  
  const useStyle = makeStyles({
    boton: {
      padding: "4px 30px",
      backgroundColor: "#B91450",
      color: Values.TextButton,
      fontFamily: Values.SourceRoboto,
      textTransform: "inherit",
      //transition: "all 0.8s ease-out",
      cursor: "pointer",
      margin: "0% 0 7% 0",
      width: "max-content",
      fontSize: "0.8em",
      borderRadius: "1em",
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
      width: "35vh",
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
      fontFamily: "roboto",
      fontWeight: "bold",
      fontSize: "calc(0.7em + 1.6vh)",
      //textAlign: "center",
      margin: "2% 0 2% 0",
      },
  

    gridglobal: {
      padding: "0 5vw 0 5vw",
      width: "100%",
      //boxShadow: "3px 3px 10px #7b7676",
      marginTop: "2vw",
      //borderRadius: "1em",
      backgroundColor: "#ffffff",
    },
  
    cardglobal: {
      padding: "0% 0% 3% 0%",
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
    const [t, i18n]= useTranslation("global");
    const ajustable = "ajustable"
    const cardsotros = [
      {
          "id":1,
          "title":t("Other.International2"),
          "description":t("Other.International3"),
          "image_card":Sale,
          "link":"https://www.cba.gov.ar/el-observatorio-del-mercado-inmobiliario-renueva-su-web/"
      },
      {
          "id":2,
          "title":t("Other.International4"),
          "description":t("Other.International5"),
          "image_card":Fill,
          "link":"https://www.etxebide.euskadi.eus/web01-a1etxebi/es"
      },
      {
          "id":3,
          "title":t("Other.International6"),
          "description":t("Other.International7"),
          "image_card":Segment,
          "link":"https://www.etxebide.euskadi.eus/x39-ovhome/es/"
      },
  
  ]
    var estilo = null;
    {
      if (matches2) {
        estilo = 3;
      } else {
        estilo = true;
      }
    }
    return (
      <Grid container>
      
        <Grid container className={classes.gridglobal} justifyContent="center">
            <Grid container direction="column">
            <h3 className={classes.TitlehPrincipal+" "+ajustable}>{t("Other.International")}</h3>
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
                    <Typography className={classes.Titlehdes+" "+ajustable}>
                      {cardsotros.title}
                    </Typography>
                  </CardContent>
                    <CardContent className={classes.centerText}>
                      <Typography className={classes.Titleh3+" "+ajustable}>
                        {cardsotros.description}
                      </Typography>
                    </CardContent>
                  </CardContent>
                  <CardActions className={classes.centerButton}>
                  <Tooltip title={cardsotros.title} arrow>
                    <Button target="_blank" className={classes.boton+" "+ajustable} href={cardsotros.link}>
                    {t("Other.Visit")}
                    </Button>
                  </Tooltip>
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