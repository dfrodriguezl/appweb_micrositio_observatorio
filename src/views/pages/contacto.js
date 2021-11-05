import { Grid, makeStyles } from "@material-ui/core";
import React from 'react';
import * as Values from 'Observatorio/Variables/values';
import App from "Observatorio/img/App.svg";
import ContactImage from "Observatorio/img/contact.jpeg"
import ItemRedWine from "Observatorio/common/itemredwine";
import TextField from '@mui/material/TextField';
import ButtonRedWine from "Observatorio/common/buttonredwine";
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
        height: "42vh",
        backgroundSize: "70%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${App})`,
        backgroundPositionX: "left",
        backgroundPositionY: "20%",
    },

    gridglobal: {
        padding: "0 10vw 0 10vw",
    },

    imagen_top2: {
        width: "100%",
        height: "66vh",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${App})`,
        backgroundPosition: "center center",
        flexBasis: "100% !important",
        maxWidth: "100% !important",
    },
    ImageContact: {
        width: 400,
        height:400
    },
    TextFieldStyle: {
        backgroundColor: "#F3F3F3",
        width: 400
    },
    marginTop:{
        marginTop:80,
        marginBotton:60
    },
    marginBotton:{
        marginBotton:60
    }
});

const TopContacto = () => {
    const classes = useStyle();
    return (
        <Grid container direction="row" >
            <Grid container >
                <h3 className={classes.Titleh3}>Contactenos</h3>
            </Grid>
        </Grid>
    );
}


const Contacto = () => {
    const classes = useStyle();
    return (
        <Grid container justifyContent="center"
            alignItems="center" className={classes.gridglobal}>
            <TopContacto />
            <Grid container direction="row">

                <Grid item container xs={12} sm={12} md={5} lg={5}>
                    <img src={ContactImage} className={classes.ImageContact}></img>
                </Grid>
                <Grid item direction="column" xs={12} sm={12} md={6} lg={6} >
                    <Grid item direction="row" container>
                        <Grid item lg={5} md={5} sm={5} xs={12}>
                            <ItemRedWine Text="Nombre"></ItemRedWine>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4}>
                            <TextField className={classes.TextFieldStyle} id="outlined-basic" label="Nombre" />
                        </Grid>
                    </Grid>
                    <Grid item direction="row" container>
                        <Grid item lg={5} md={5} sm={5} xs={12}>
                            <ItemRedWine Text="Celular/Teléfono"></ItemRedWine>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4}>
                            <TextField className={classes.TextFieldStyle} id="outlined-basic" label="Celular/Teléfono" />
                        </Grid>
                    </Grid>
                    <Grid item direction="row" container>
                        <Grid item lg={5} md={5} sm={5} xs={12}>
                            <ItemRedWine Text="Dirección"></ItemRedWine>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4}>
                            <TextField className={classes.TextFieldStyle} id="outlined-basic" label="Dirección" />
                        </Grid>
                    </Grid>
                    <Grid item direction="row" container>
                        <Grid item lg={5} md={5} sm={5} xs={12}>
                            <ItemRedWine Text="Correo Electrónico"></ItemRedWine>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4}>
                            <TextField className={classes.TextFieldStyle} id="outlined-basic" label="Correo" />
                        </Grid>
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} xs={12} container justifyContent="center">
                        <Grid item >
                            <ItemRedWine Text="Petición / Queja / Reclamo y/o Sugerencia"></ItemRedWine>
                        </Grid>
                    </Grid>
                    <Grid container item justifyContent="flex-end" className={classes.marginTop}>
                        <Grid item lg={2} md={2} sm={2} xs={4} justifyContent="flex-end">
                            <ButtonRedWine Title="Enviar"></ButtonRedWine>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    );
}

export default Contacto