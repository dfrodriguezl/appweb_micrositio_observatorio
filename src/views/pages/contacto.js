import { Grid, makeStyles, Typography,useMediaQuery } from "@material-ui/core";
import React from 'react';
import * as Values from 'Observatorio/Variables/values';
import App from "Observatorio/img/App.svg";
import ContactImage from "Observatorio/img/contact.jpeg"
import ItemRedWine from "Observatorio/common/itemredwine";
import TextField from '@mui/material/TextField';
import ButtonRedWine from "Observatorio/common/buttonredwine";
const useStyle = makeStyles({

    gridglobal: {
        padding: "0 10vw 0 10vw",
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

    gridglobalmovil: {
        padding: "0 5vw 0 5vw",
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
        height: 400
    },
    TextFieldStyle: {
        backgroundColor: "#F3F3F3",
        width: "100%"
    },
    TextFieldStyle02: {
        backgroundColor: "#F3F3F3",
        width: 300
    },
    marginTop: {
        marginTop: 80,
        marginBotton: 60
    },
    marginBotton: {
        marginBotton: 60
    },
    textFieldMultiline:{
        width:"100%",
        marginTop:"5px",
        backgroundColor: "#F3F3F3",
    },
    ImageContact02:{
        width:"100%"
    },
    containerRow:{
        marginTop:"100px !important"
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
    const matches = useMediaQuery('(max-width:769px)');
    let image = matches ? classes.ImageContact02 : classes.ImageContact
    let textFieldStyle = matches ? classes.TextFieldStyle: classes.TextFieldStyle02
    var estilo = null;
    {
      matches?estilo=classes.gridglobal:estilo=classes.gridglobalmovil
    }
    return (
        <Grid container justifyContent="center"
            alignItems="center" className={estilo}>
            <TopContacto />
            <Grid container spacing={2} direction="row">

                <Grid item container xs={12} sm={12} md={5} lg={5}>
                    <img src={ContactImage} className={image}></img>
                </Grid>
                <Grid item direction="column" xs={12} sm={12} md={6} lg={6} container spacing={1} >
                    <Grid item direction="row" container>
                        <Grid item lg={5} md={5} sm={5} xs={12}>
                            <Typography className={classes.Textp}>
                                Nombre *
                            </Typography>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={12}>
                            <TextField size="small" className={textFieldStyle} id="outlined-basic"  />
                        </Grid>
                    </Grid>
                    <Grid item direction="row"  container>
                        <Grid item lg={5} md={5} sm={5} xs={12} >
                            <Typography className={classes.Textp}>
                                Celular/Teléfono
                            </Typography>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={12}>
                            <TextField size="small" className={textFieldStyle} id="outlined-basic"  />
                        </Grid>
                    </Grid>
                    <Grid item direction="row" container>
                        <Grid item lg={5} md={5} sm={5} xs={12}>
                            <Typography className={classes.Textp}>
                                Dirección
                            </Typography>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={12}>
                            <TextField size="small" className={textFieldStyle} id="outlined-basic"  />
                        </Grid>
                    </Grid>
                    <Grid item direction="row" container>
                        <Grid item lg={5} md={5} sm={5} xs={12}>
                            <Typography className={classes.Textp}>
                                Correo electrónico *
                            </Typography>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={12}>
                            <TextField size="small" className={textFieldStyle} id="outlined-basic"  />
                        </Grid>
                    </Grid>

                    <Grid item  container justifyContent="center">
                            <Typography className={classes.Textp}>
                                Petición / Queja / Reclamo y/o Sugerencia *
                            </Typography>
                    </Grid>
                    <Grid container item>
                        <TextField
                            id="filled-multiline-static"
                            multiline
                            rows={6}
                            defaultValue=""
                            className={classes.textFieldMultiline}
                        />
                    </Grid>
                    <Grid container item   >
                        <Grid item lg={10} md={10} sm={10} xs={12} >
                        <Typography className={classes.Textp}>
                                * Campos Obligatorios
                            </Typography>
                        </Grid>
                        <Grid item container direction="row" lg={2} md={2} sm={2} xs={12} justifyContent="flex-end">
               
                            <ButtonRedWine Title="Enviar"></ButtonRedWine>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    );
}

export default Contacto