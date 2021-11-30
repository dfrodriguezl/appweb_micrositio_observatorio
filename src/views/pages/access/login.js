import { Grid, makeStyles, Typography,useMediaQuery } from "@material-ui/core";
import React, { Component } from 'react';
import * as Values from 'Observatorio/Variables/values';
import App from "Observatorio/img/Mobilelogin-rafiki1.svg";
import TextField from '@mui/material/TextField';
import ButtonRedWine from "Observatorio/common/buttonredwinestandar";
const useStyle = makeStyles({

    gridglobal: {
        padding: "0 10% 0 10%",
    },

    Titleh3: {
        color: Values.Redwinecolor,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeTitle,
        padding: Values.PaddingTitleText,
    },

    Textp: {
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeText,
        textAlign: "start",
        margin: "1em 0 0 0",
    },

    imagen_top: {
        width: "100% !important",
        height: "70vh",
        backgroundSize: "70%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${App})`,
        backgroundPositionX: "left",
        backgroundPositionY: "20%",
    },

    gridglobal: {
        padding: "0 10vw 0 10vw",
    },
    imageRigth: {
        width: 400
    },
    containerForm: {
        backgroundColor: "#f3f3f3",
        borderRadius: "10px 10px 10px 10px",
        padding: "20px"
    },
    itemTextField: {
        backgroundColor: "white",
        width:"100%"
    },
    image:{
        width:"100%"
    }
});

const ImagenBottom = () => {
    const classes = useStyle();
    const matches = useMediaQuery('(max-width:769px)');
    let image = matches ? classes.image : classes.imageRigth
    return (
        <img className={image} src={App}></img>
    )
}

const FormAccess = () => {
    const classes = useStyle();
    const matches = useMediaQuery('(max-width:769px)');
    return (
        <Grid container direccion="row" >
            <Grid container justifyContent="center"
                alignItems="center">

            </Grid>
            <Grid item xs={12} sm={5} md={6} lg={6}>
                <ImagenBottom />
            </Grid>
            <Grid item container xs={12} sm={7} md={6} lg={6} alignItems="center"  >
                <Grid direction="row" spacing={2} item container className={classes.containerForm} xs={12} sm={12} md={12} lg={12} alignItems="center">
                    <Grid item lg={3} md={3} sm={3} xs={12}>
                        <Typography className={classes.Textp} >
                            Usuario
                        </Typography>
                    </Grid>
                    <Grid item lg={9} md={9} sm={9} xs={12}>
                        <TextField item size="small" className={classes.itemTextField} id="outlined-basic"  />
                    </Grid>

                    <Grid item lg={3} md={3} sm={3} xs={12}>
                        <Typography className={classes.Textp} >
                            Contraseña
                        </Typography>
                    </Grid>
                    <Grid item lg={9} md={9} sm={9} xs={12}>
                        <TextField item size="small" className={classes.itemTextField} id="outlined-basic"  />
                    </Grid>
                    <Grid item container justifyContent="center" alignItems="center">
                        <ButtonRedWine Title="Iniciar Sesión" />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography className={classes.Textp} >
                            Si no esta registrado, por favor hágalo mediante el siguiente botón
                        </Typography>
                    </Grid>
                    <Grid item container justifyContent="center" alignItems="center">
                        <ButtonRedWine Title="Registrarse"  href="/Observatorio/register"/>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography className={classes.Textp} >
                        Si olvido su contraseña, oprima el siguiente botón y siga las instrucciones
                        </Typography>
                    </Grid>
                    <Grid item container justifyContent="center" alignItems="center">
                        <ButtonRedWine Title="Olvido su contraseña"  href="/Observatorio/register"/>
                    </Grid>

                </Grid>
            </Grid>


        </Grid>
    );
}


const Access = () => {
    const classes = useStyle();
    return (
        <Grid container justifyContent="center"
            alignItems="center" className={classes.gridglobal}>
            <FormAccess />
        </Grid>
    );
}

export default Access