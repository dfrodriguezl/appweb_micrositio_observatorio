import { Grid, makeStyles, Typography } from "@material-ui/core";
import React, { Component, useMediaQuery } from 'react';
import * as Values from 'Observatorio/Variables/values';
import App from "Observatorio/img/Mobilelogin-amico1.svg";
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
        width: "100%",
        padding: "0px"
    },
    containerForm: {
        backgroundColor: "#f3f3f3",
        borderRadius: "10px 10px 10px 10px",
        padding: "20px"
    },
    itemTextField: {
        backgroundColor: "white",
        width: "100%"
    },
    gridMain:{
        paddingBottom:"50px"
    }
});

const ImagenBottom = () => {
    const classes = useStyle();
    return (
        <img className={classes.imageRigth} src={App}></img>
    )
}

const FormRegister = () => {
    const classes = useStyle();
    return (
        <Grid container direccion="row" className={classes.gridMain} >
            

            <Grid item container xs={12} sm={6} md={6} lg={6} alignItems="center"  >
                <Grid item container>
                    <Typography className={classes.Titleh3}>
                        <strong>Registro</strong>
                    </Typography>
                </Grid>
                <Grid direction="row" spacing={1} item container className={classes.containerForm} xs={12} sm={12} md={12} lg={12} alignItems="center">
                    <Grid item container >
                        <Typography className={classes.Textp} >
                            Tipo de Usuario *
                        </Typography>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <TextField item size="small" className={classes.itemTextField} id="outlined-basic" label="Seleccione ...." />
                    </Grid>
                    <Grid item container>
                        <Typography className={classes.Textp} >
                            Nombre o Razon social *
                        </Typography>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12} >
                        <TextField item size="small" className={classes.itemTextField} id="outlined-basic" label="" />
                    </Grid>
                    <Grid item container >
                        <Typography className={classes.Textp} >
                            Correo electrónico *
                        </Typography>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <TextField item size="small" className={classes.itemTextField} id="outlined-basic" label="" />
                    </Grid>
                    <Grid item container >
                        <Typography className={classes.Textp} >
                            Confirmar Correo electrónico *
                        </Typography>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <TextField item size="small" className={classes.itemTextField} id="outlined-basic" label="" />
                    </Grid>
                    <Grid item container >
                        <Typography className={classes.Textp} >
                            El Correo electrónico suministrado corresponderá al usuario de ingreso a la plataforma
                        </Typography>
                    </Grid>

                    <Grid item container>
                        <Typography className={classes.Textp} >
                            Teléfono
                        </Typography>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <TextField item size="small" className={classes.itemTextField} id="outlined-basic" />
                    </Grid>
                    <Grid item container>
                        <Typography className={classes.Textp} >
                            Clave *
                        </Typography>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <TextField item size="small" className={classes.itemTextField} id="outlined-basic" />
                    </Grid>
                    <Grid item container>
                        <Typography className={classes.Textp} >
                            Confirmar clave *
                        </Typography>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <TextField item size="small" className={classes.itemTextField} id="outlined-basic" />
                    </Grid>

                    <Grid item container >
                        <Typography className={classes.Textp} >
                            La clave debe ser por lo menos de 8 caracteres
                        </Typography>
                    </Grid>
                    <Grid item container >
                        <Typography className={classes.Textp} >
                            * Campo obligatorio
                        </Typography>
                    </Grid>
                    <Grid item container >
                        <ButtonRedWine Title="Enviar" />
                    </Grid>

                </Grid>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6}>
                <ImagenBottom />
                <Grid item container  >
                    <Typography>
                        Una vez haya realizado el registro usted podra: cargar / suministrar y / o descargar  información / formularios, visualizar estadísticas y historico de la información suministrada como usuario.
                    </Typography>
                </Grid>
            </Grid>


        </Grid>
    );
}


const Register = () => {
    const classes = useStyle();
    return (
        <Grid container justifyContent="center" spacing={3}
            alignItems="center" className={classes.gridglobal}>
            <FormRegister />

        </Grid>
    );
}

export default Register