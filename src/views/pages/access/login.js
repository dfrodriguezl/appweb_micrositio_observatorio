import { Grid, makeStyles, Typography } from "@material-ui/core";
import React, { Component } from 'react';
import * as Values from 'Observatorio/Variables/values';
import App from "Observatorio/img/tipologia.png";
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
        width: 500
    },
    containerForm: {
        backgroundColor: "#f3f3f3",
        borderRadius: "10px 10px 10px 10px",
        padding: "20px"
    },
    itemTextField: {
        backgroundColor: "white",
        width: "350px"
    }
});

const ImagenBottom = () => {
    const classes = useStyle();
    return (
        <img className={classes.imageRigth} src={App}></img>
    )
}

const FormAccess = () => {
    const classes = useStyle();
    return (
        <Grid container direccion="row" >
            <Grid container justifyContent="center"
                alignItems="center">

            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <ImagenBottom />
            </Grid>
            <Grid item container xs={12} sm={6} md={6} lg={6} alignItems="center"  >
                <Grid direction="row" item container className={classes.containerForm} xs={12} sm={12} md={12} lg={12} alignItems="center">
                    <Grid item lg={3} md={3} sm={3}>
                        <Typography className={classes.Textp} >
                            Nombre
                        </Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6}>
                        <TextField item className={classes.itemTextField} id="outlined-basic" label="Nombre" />
                    </Grid>
                    <Grid item lg={3} md={3} sm={3}>

                    </Grid>
                    <Grid item lg={3} md={3} sm={3}>
                        <Typography className={classes.Textp} >
                            Contraseña
                        </Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6}>
                        <TextField item className={classes.itemTextField} id="outlined-basic" label="Contraseña" />
                    </Grid>
                    <Grid item lg={3} md={3} sm={3}>

                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography className={classes.Textp} >
                            Si no esta registrado, por favor hágalo mediante el siguiente botón
                        </Typography>
                    </Grid>
                    <Grid item container justifyContent="center" alignItems="center">
                        <ButtonRedWine Title="Registrarse" />
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