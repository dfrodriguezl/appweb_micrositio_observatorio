import { Grid, makeStyles, useMediaQuery, Typography } from "@material-ui/core";
import React, { useState } from 'react';
import * as Values from 'Observatorio/Variables/values';

import ImageCeed from "Observatorio/img/pexels-nadiia-yahaha-12288463 1m.png"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AmicoImage from "Observatorio/img/pexels-andrea-piacquadio-3760067 1 (3).png"
import axios from 'axios';
import {Loader} from '../../loader/loader'
import Modal from "Observatorio/pages/modal"
import enviroment from "../../../../config/enviroment"
const useStyle = makeStyles({

    cuadro:{marginRight:"39px"},

    gridglobalmovil: {
        padding: "0 5vw 0 5vw"
    },

    Titleh3:{
        color: Values.Redwinecolor,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeTitle, 
        padding: Values.PaddingTitleText,
        fontWeight:"bold",
      },

    Textp:{
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeText,
        textAlign: "start",  
        //margin: "1em 0 0 0",
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
        height: "30vh",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        //backgroundImage: `url(${ImageCeed})`,
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
        //backgroundImage: `url(${ImageCeed})`,
        backgroundPosition: "center center",
        flexBasis: "100% !important",
        maxWidth: "100% !important",
    },
    imageAmico: {
        right: "9%",
        width: "38%",
        top: "126%",
        position: "absolute",
    },
    imageAmico2: {
        display:"none"
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
    },
    boton: {
        padding: "0.3em 1em 0.3em 1em",
        borderRadius: "2vh",
        border:"none",
        backgroundColor: Values.Redwinecolor,
        color: Values.TextButton,
        fontFamily: Values.SourceRoboto,
        textTransform: "capitalize",
        transition: "all 0.8s ease-out",
        cursor: "pointer",
        width: "max-content",
        fontSize: "calc(1em + 0.3vh)",
        borderRadius: "2vh",
        fontWeight: "bold",
        marginBottom:"41px",
        "&:hover": {
            backgroundColor: Values.HoverButton,
            border: "none",
        }
    }
});

const ImagenBottom = () => {
    const classes = useStyle();
    const matches = useMediaQuery('(max-width:769px)');
    let image = matches ? classes.imagen_top: classes.imagen_top2
    return (
        <img src={ImageCeed} className={image} />

    )
}

const ImagenBottom2 = () => {
    const classes = useStyle();
    const matches = useMediaQuery('(max-width:769px)');
    let image = matches ? classes.imageAmico2: classes.imageAmico
    return (
        <img src={AmicoImage} className={image}></img>
    )
}

const TopCeed = () => {
    const classes = useStyle();
    
    return (
        <Grid container direccion="row" >
            <Grid container justifyContent="center">
                    <h3 className={classes.Titleh3}>Censo de Edificaciones (CEED)</h3>
                </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                
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
    const [form, setForm] = useState({
        name: "",
        email:"",
        dependencie:"",
        tempo_init:"",
        tempo_end:"",
        objetive:""
    })
    let TextFieldWidth = matches ? classes.TextFieldWidth : classes.TextFieldWidth02

    const handleChangeValue = (event) => {
        let name = event.target.name
        let value = event.target.value
      
        let newForm = {
            ...form,
            [name]: value
        }
        setForm(newForm)
    }
    const handleClose = () => setOpen(false)
    const sendForm = () => {
      
        console.log("enviando form")
       setLoading(true)
        axios.post(
            `${enviroment.endpoint}/ceed`, 
             form, 
             {
                 headers: { 
                     'Content-Type' : 'application/json' 
                 }
             }
     ).then(response => { 
         console.log(response)  
         
         if(response.status == 200 ){
             if(response.data.code == "OK"){
                setOpen(true)
                setLoading(false)
                setForm({
                    name: "",
                    email:"",
                    dependencie:"",
                    tempo_init:"",
                    tempo_end:"",
                    objetive:""
                })
             }else{
                 setLoading(false)
                 alert('Lo sentimos ocurrio un problema')
             }

         }else{
            setLoading(false)
            alert('Lo sentimos ocurrio un problema')
         } 
         
     });
    }
    const [open, setOpen] = useState(false)
    const [openLoading,setLoading] = useState(false)
    return (
        <Grid container direction="column" spacing={2}>
            <Grid container item justifyContent="center">
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
                    <TextField className={TextFieldWidth}  value={form.name} name="name" onChange={handleChangeValue}  id="outlined-basic" label="Nombre" />
                </Grid>
            </Grid>
            <Grid container item direction="row">
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <Typography className={classes.Textp} >
                        Correo *
                    </Typography>
                </Grid>
                <Grid item lg={9} md={9} sm={12} xs={12}>
                    <TextField className={TextFieldWidth}  value={form.email} name="email" onChange={handleChangeValue} id="outlined-basic" label="Correo" />
                </Grid>
            </Grid>
            <Grid container item>
                <ImagenBottom2/>
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
                    <TextField className={TextFieldWidth}  value={form.dependencie} name="dependencie" onChange={handleChangeValue} id="outlined-basic" label="Dependencia" />
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
                            <MenuItem value={20}>Gestor catastro Medellin</MenuItem>
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
                        <Grid className={classes.cuadro} item lg={2} md={3} sm={6} xs={6}>
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
                        <Grid className={classes.cuadro} item lg={2} md={3} sm={6} xs={6}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">1996</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label=""
                                        onChange={handleChangeValue}
                                        name="tempo_init"
                                        value={form.tempo_init}
                                    >
                                         <MenuItem value=""></MenuItem>
                                        <MenuItem value="1996">1996</MenuItem>
                                        <MenuItem value="1998">1998</MenuItem>
                                        <MenuItem value="2000">2000</MenuItem>
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
                                        label=""
                                        onChange={handleChangeValue}
                                        name="tempo_end"
                                        value={form.tempo_end}
                                    >
                                       <MenuItem value=""></MenuItem>
                                        <MenuItem value="1996">1996</MenuItem>
                                        <MenuItem value="1998">1998</MenuItem>
                                        <MenuItem value="2000">2000</MenuItem>
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
                        value={form.objetive} 
                        name="objetive" 
                        onChange={handleChangeValue}
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
                     <button onClick={sendForm} className={classes.boton}>Enviar</button>
            </Grid>

            <Loader open={openLoading}></Loader>
            <Modal open={open} handleClose={handleClose} Title="Excelente" textContainer="Su registro ha sido ¡Exitoso! " >

            </Modal>
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