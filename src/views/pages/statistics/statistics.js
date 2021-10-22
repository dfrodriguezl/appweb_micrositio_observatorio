import { Grid, makeStyles, Paper, CardActions, Card, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import * as Values from 'Variables/values';
import triangles from "img/paris.jpg";
import ButtonRedWine from "common/buttonredwine";
import { FcShop } from "react-icons/fc";
import infocards from "../../common/statistics.json"
//import imageIndex from "../../../img/estadisticas/"
import imageItem from "../../../img/DANE_Estadisticas_imagen_principal.svg"

const useStyle = makeStyles({
  textLeft: {
    marginLeft: 40
  },
  descriptionStatistics: {
    fontSize: 30,
    color: "#585858"
  },
  imageRight: {
    height: 600
  },
  TitleStatistics: {
    color: "#821A3F",
    fontSize: 50,
    fontWeight: "bold",
    marginTop: 20
  },
  gridglobal: {
    padding: "0 10% 0 10%",
  },
  titleCard:{
    textAlign:"center"
  },
  imagen_top: {
    width: "100%",
    height: "10vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${triangles})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",

  },

  centerButton: {
    justifyContent: "center",
    padding: "0 0 8% 0 !important",
  },

  centerText: {
    textAlign: "center",
    padding: "10% 0 0 0",
  },

  gridglobal: {
    padding: "5% 10% 1% 10%",
  },

  Titleh3: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceWorksans,
    fontWeight: "bold",
    fontSize: Values.SizeSubtitle,
    textAlign: "center",
    padding: "0 0 1em 0",
  },

  Textp: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeAuxiliary,
    textAlign: "center",
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
    borderRadius: "0 0 4% 4%",
    boxShadow: "0px 6px 10px #7b7676",
  },

  cardglobal: {
    //margin: "0% 0% 0% 0%",
    padding: "0% 0% 5% 0%",
    backgroundColor: "#fafafa",
  },
});

const Topservice = () => {
  const classes = useStyle();
  return (
    <Grid container className={classes.imagen_top}>
    </Grid>
  );
}

const Cardsservice = () => {
  const classes = useStyle();
  console.log(infocards)
  return (
    <Grid container sm={12} xs={12}>
      <Grid sm={5}
        xs={5}
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.textLeft}
      >
        <Typography className={classes.TitleStatistics} md={12} >
          Estadisticas
        </Typography>
        <Typography className={classes.descriptionStatistics}>
          La articulación de los Observatorios Inmobiliarios de los Gestores Catastrales en el Observatorio Inmobiliario Nacional, generara continuo conocimiento sobre las tendencias y dinamicas del mercado inmobiliario en el Territorio Nacional, el cual servira de base para la toma de decisiones.  ---
        </Typography>
      </Grid>
      <Grid container item xs={6} sm={6} alignItems="flex-end" direction="row" >

        <img src={imageItem} className={classes.imageRight} />
      </Grid>
      <Grid
        container
        className={classes.gridglobal}
      >

        {infocards[0].map(function (data) {

          return (
            <Grid
              item
              container
              direction="row"
              xs
              justifyContent="center"
              alignItems="center"
              key={data.id}
              className={classes.cardglobal}
            >
              <Card className={classes.root}>
                <CardContent>
                  <Typography className={classes.titleCard}>
                    {data.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.description}
                  </Typography>
                </CardContent>
                <CardActions className={classes.centerButton}>
                  <ButtonRedWine Title="Visitar" href="#" />
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  );
}




const ViewService = () => {
  const classes = useStyle();
  return (
    <Grid>
      <Topservice />
      <Cardsservice />
      <Topservice />
    </Grid>
  );
}

export default ViewService