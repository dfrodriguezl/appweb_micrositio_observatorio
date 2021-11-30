import { Grid, makeStyles, useMediaQuery, Typography } from "@material-ui/core";
import React, { Component } from 'react';
import * as Values from 'Observatorio/Variables/values';

import ImageCeed from "Observatorio/img/Ceed01.jpeg"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ButtonRedWine from "Observatorio/common/buttonredwine";
import AmicoImage from "Observatorio/img/amico.png"
const useStyle = makeStyles({

    gridglobalmovil: {
        padding: "0 5vw 0 5vw"
    },

    Titleh3:{
        color: Values.Redwinecolor,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeTitle, 
        padding: Values.PaddingTitleText,
        fontWeight:"bold"
      },

    Textp:{
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeText,
        textAlign: "start",  
        margin: "1em 0 0 0",
      },
    Titleh3Main: {
        color: Values.Redwinecolor,
        fontFamily: Values.SourceRoboto,
        fontSize: "35px",
        padding: Values.PaddingTitleText,
    },
    TextpCenter: {
        color: "#585858",
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeText,
        textAlign: "left",
        width: 700
    },
    imagen_top: {
        width: "100% !important",
        height: "65vh",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${ImageCeed})`,
        backgroundPositionX: "left",
        backgroundPositionY: "20%",
    },

    gridglobal: {
        padding: "0 10vw 0 10vw",
    },
    TextFieldWidth: {
        width: "100%"
    },
    imagen_top2: {
        width: "100%",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${ImageCeed})`,
        backgroundPosition: "center center",
        flexBasis: "100% !important",
        maxWidth: "100% !important",
    },
    imageAmico: {
        position: "absolute",
        right: 80
    },
    imageTop: {
        width: "100%",
        padding: "20px",
        marginTop:"30px",
        zIndex:-1
    },
    imageTop02: {
        width: 400,
        padding: "20px",
        marginTop:"30px",
        zIndex:-1
    },
    TextFieldWidth02:{
        width:400
    }
});

const ImagenBottom = () => {
    const classes = useStyle();
    const matches = useMediaQuery('(max-width:769px)');
    let image = matches ? classes.imageTop : classes.imageTop02
    return (
        <img src={ImageCeed} className={image} />

    )
}

const TopCeed = () => {
    const classes = useStyle();
    
    return (
        <Grid container direccion="row" >
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <Grid container
                >
                    <h3 className={classes.Titleh3}>Censo de Edificaciones (CEED)</h3>
                </Grid>
                <Grid item container direction="column" xs className={classes.containerTitle}>
                    <p className={classes.Textp}>
                        El Censo de Edificaciones (CEED), realizado por el Departamento Nacional de Estadistica - DANE,  busca determinar el estado de la actividad edificadora, caracterizándola por los estados de obra (en proceso, paralizada y
                        culminada) que son presentados según las variables de desagregación captadas por la investigación, para las áreas urbanas y metropolitanas que
                        corresponden a la cobertura geográfica definida.
                </p>
                </Grid>
            </Grid>
            <Grid xs={12} sm={6} md={6} lg={6} item>
            <ImagenBottom />
            </Grid>

        </Grid>
    );

}

const Form = () => {
    const classes = useStyle()
    const matches = useMediaQuery('(max-width:769px)');
    let TextFieldWidth = matches ? classes.TextFieldWidth : classes.TextFieldWidth02
    return (
        <Grid container direction="column" spacing={2}>
            <Grid container item
            >
                <h3 className={classes.Titleh3}>Solicitud de Información</h3>
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
                <Typography item className={classes.Textp}>
                    De acuerdo con el  Artículo 2.2.2.2.26. <b>Obligación de suministro de información la gestión
                    catastral</b>, en su numeral 4 que menciona:

                </Typography>
            </Grid>

            <Grid container item xs={12} sm={12} md={12} lg={12} justifyContent="center" >
                <i className={classes.TextpCenter}>"El DANE deberá suministrar al Gestor Catastral el Censo de Edificaciones CEED a nivel de manzana. Lo anterior en el marco de la reserva estadística contenida en el artículo 5° de la Ley 79 de 1993."</i>
            </Grid>
            <Grid container item>
                <p className={classes.Textp}>De acuerdo con lo anterior, por favor diligencie el siguiente cuestionario**:</p>
            </Grid>
            <Grid container item direction="row">
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <Typography className={classes.Textp}>
                        Nombre *
                    </Typography>
                </Grid>
                <Grid item lg={9} md={9} sm={12} xs={12}>
                    <TextField className={TextFieldWidth} id="outlined-basic" label="Nombre" />
                </Grid>
            </Grid>
            <Grid container item direction="row">
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <Typography className={classes.Textp} >
                        Correo *
                    </Typography>
                </Grid>
                <Grid item lg={9} md={9} sm={12} xs={12}>
                    <TextField className={TextFieldWidth} id="outlined-basic" label="Correo" />
                </Grid>
            </Grid>
            <Grid container item>
                <img src={AmicoImage} className={classes.imageAmico}></img>
            </Grid>
            <Grid container item direction="row">
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <Typography className={classes.Textp} >
                        Cargo *
                    </Typography>
                </Grid>
                <Grid item lg={9} md={9} sm={12} xs={12}>
                    <TextField className={TextFieldWidth} id="outlined-basic" label="Cargo" />
                </Grid>
            </Grid>
            <Grid container item direction="row">
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <Typography className={classes.Textp} >
                        Dependencia *
                    </Typography>
                </Grid>
                <Grid item lg={9} md={9} sm={12} xs={12}>
                    <TextField className={TextFieldWidth} id="outlined-basic" label="Dependencia" />
                </Grid>
            </Grid>
            <Grid container item direction="row">
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <Typography className={classes.Textp}>
                        Gestor Catastral *
                    </Typography>
                </Grid>
                <Box className={TextFieldWidth}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Gestor catastro</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                        >
                            <MenuItem value={10}>Gestor catastro Antioquia</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
            <Grid container item direction="row">
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <Typography className={classes.Textp}>
                        Temporalidad *
                    </Typography>
                </Grid>
                <Grid item lg={9} md={9} sm={12} xs={12}>
                    <Grid container item direction="row">
                        <Grid item lg={3} md={3} sm={6} xs={6}>
                            <Typography className={classes.Textp}>
                                de:
                            </Typography>
                        </Grid>
                        <Grid item lg={3} md={3} sm={6} xs={6}>
                            <Typography className={classes.Textp}>
                                hasta:
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item direction="row" spacing={2}>
                        <Grid item lg={3} md={3} sm={6} xs={6}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">1996</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="1996"
                                    >
                                        <MenuItem value={10}>1996</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item lg={2} md={2} sm={6} xs={6} >
                            <Box sx={{ minWidth: 120 }} >
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">2010</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="1996"
                                    >
                                        <MenuItem value={10}>2010</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item direction="row">
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <Typography className={classes.Textp}>
                        Objetivo de uso de la información
                    </Typography>
                </Grid>
                <Grid item lg={9} md={9} sm={12} xs={12}>
                    <TextField
                        className={TextFieldWidth}
                        id="outlined-multiline-static"
                        label="objetivo"
                        multiline
                        rows={4}
                    />
                </Grid>
            </Grid>
            <Grid container item direction="column">
                <Typography className={classes.Textp}>
                    * Campos obligatorio
                </Typography>
                <Typography className={classes.Textp}>
                    ** La solicitud de información será enviada al correo registrado.
                </Typography>
            </Grid>
            <Grid container item>
                <ButtonRedWine Title="Enviar" />
            </Grid>
        </Grid>
    )
}


const Ceed = () => {
    const classes = useStyle();
    const matches = useMediaQuery("(min-width:769px)");
    var estilo = null;
    {
      matches?estilo=classes.gridglobal:estilo=classes.gridglobalmovil
    }
    return (
        <Grid container justifyContent="center"
            alignItems="center" className={estilo}>
            <TopCeed />
            <Form />
        </Grid>
    );
}

export default Ceed