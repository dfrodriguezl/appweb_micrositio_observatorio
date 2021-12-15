import { Grid, makeStyles, Typography,useMediaQuery,Button } from "@material-ui/core";
import React, { useState } from 'react';
import * as Values from 'Observatorio/Variables/values';
import App from "Observatorio/img/App.svg";
import ContactImage from "Observatorio/img/contact.jpeg"
import TextField from '@mui/material/TextField';
import axios from 'axios';
import {Loader} from './loader/loader'
import Modal from "Observatorio/pages/modal"
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
    },
    boton: {
        padding: "0.3em 1em 0.3em 1em",
        borderRadius: "2vh",
        backgroundColor: Values.Redwinecolor,
        color: Values.TextButton,
        fontFamily: Values.SourceRoboto,
        textTransform: "capitalize",
        transition: "all 0.8s ease-out",
        cursor: "pointer",
        margin: "10% 0 4% 0",
        width: "max-content",
        fontSize: "calc(1em + 0.3vh)",
        borderRadius: "2vh",
        fontWeight: "bold",
        "&:hover": {
            backgroundColor: Values.HoverButton,
            border: "none",
        }
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
    const [openLoading,setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)
    const [form,setForm] = useState({
        nombre:"",
        telefono:"",
        direccion:"",
        correoElectronico:"",
        peticion:""
    })

    const [formComplete,setFormComplete] = useState(false)
    const handleChangeValue = (event) => {
        let name = event.target.name
        let value = event.target.value
      
        let newForm = {
            ...form,
            [name]: value
        }
        setForm(newForm)
        validateForm(newForm)
    }
    const validateForm = (form) =>{
        if(!form.nombre || form.nombre == ''){
            setFormComplete(false)
            return
        }
        if(!form.correoElectronico || form.correoElectronico == ''){
            setFormComplete(false)
            return
        }
        if(!form.peticion || form.peticion == ''){
            setFormComplete(false)
            return 
        }

        setFormComplete(true)

    }
    const sendForm = (event) =>{
        event.preventDefault();
        setLoading(true)
        let newBody ={
            name:form.nombre,
            phone:form.telefono,
            address:form.direccion,
            email:form.correoElectronico,
            tema:form.peticion
        }
          axios.post(
           "http://localhost:3000/contact", 
            newBody, 
            {
                headers: { 
                    'Content-Type' : 'application/json' 
                }
            }
    ).then(response => {    
        
        if(response.status == 200 ){
            if(response.data.code == "OK"){
               setLoading(false)
               setOpen(true)
               setForm({
                nombre:"",
                telefono:"",
                direccion:"",
                correoElectronico:"",
                peticion:""
              })
            }else{
                setLoading(false)
                alert('ocurrio un problema con el envio de mensajes')
            }

        }else{
           setLoading(false)
           alert('ocurrio un problema con el envio de mensajes')
        }  

    });
    /*
    axios.post(`/users`,{ formTemp })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })*/
    }
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
                            <TextField name="nombre" onChange={handleChangeValue} value={form.nombre} size="small" className={textFieldStyle} id="outlined-basic"  />
                        </Grid>
                    </Grid>
                    <Grid item direction="row"  container>
                        <Grid item lg={5} md={5} sm={5} xs={12} >
                            <Typography className={classes.Textp}>
                                Celular/Teléfono
                            </Typography>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={12}>
                            <TextField name="telefono" value={form.telefono} onChange={handleChangeValue} size="small" className={textFieldStyle} id="outlined-basic"  />
                        </Grid>
                    </Grid>
                    <Grid item direction="row" container>
                        <Grid item lg={5} md={5} sm={5} xs={12}>
                            <Typography className={classes.Textp}>
                                Dirección
                            </Typography>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={12}>
                            <TextField name="direccion" value={form.direccion} onChange={handleChangeValue} size="small" className={textFieldStyle} id="outlined-basic"  />
                        </Grid>
                    </Grid>
                    <Grid item direction="row" container>
                        <Grid item lg={5} md={5} sm={5} xs={12}>
                            <Typography className={classes.Textp}>
                                Correo electrónico *
                            </Typography>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={12}>
                            <TextField  name="correoElectronico" value={form.correoElectronico} onChange={handleChangeValue}  size="small" className={textFieldStyle} id="outlined-basic"  />
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
                            name="peticion"
                            value={form.peticion}
                            onChange={handleChangeValue}
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
               
                        <Button disabled={!formComplete} disableElevation className={classes.boton} onClick={sendForm} >Enviar</Button>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
            <Loader open={openLoading}></Loader>
            <Modal open={open} handleClose={handleClose} Title="Excelente!" textContainer="Su mensaje fue enviado correctamente" ></Modal>
        </Grid>
    );
}

export default Contacto