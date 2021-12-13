import { Grid, makeStyles, Typography, Button } from "@material-ui/core";
import React, {  useState } from 'react';
import * as Values from 'Observatorio/Variables/values';
import App from "Observatorio/img/Mobilelogin-amico1.svg";
import TextField from '@mui/material/TextField';
import Modal from "Observatorio/pages/modal"
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import {Loader} from '../loader/loader'
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
    gridMain: {
        paddingBottom: "50px"
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

const ImagenBottom = () => {
    const classes = useStyle();
    return (
        <img className={classes.imageRigth} src={App}></img>
    )
}

const FormRegister = () => {
    const classes = useStyle();
    const [form, setForm] = useState({
        tipoUsuario: null,
        razonSocial: "",
        correoElectronico: "",
        telefono: "",
        clave: "",
        confirmarCorreo: "",
        confirmarClave: "",
        showPassword: false,
        showConfirmPassword: false

    })
    const [open, setOpen] = useState(false)
    const [formComplete, setFormComplete] = useState(false);
 
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleClickShowPassword = (event) => {
        setForm({
            ...form,
            showPassword: !form.showPassword,
        });
    };

    const handleClickShowConfirmPassword = (event) => {
        setForm({
            ...form,
            showConfirmPassword: !form.showConfirmPassword,
        });
    };
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

        if(!form.tipoUsuario){
            setFormComplete(false)
            return
        }
        if(!form.correoElectronico ||form.correoElectronico == ""){
                setFormComplete(false)
                return
        }
        if(!form.razonSocial ||form.razonSocial == ""){
            setFormComplete(false)
            return
        }
        if(!form.clave || form.clave == ""){
            setFormComplete(false)
            return
        }
        setFormComplete(true)

    }
    const handleClose = () => setOpen(false)

    const [openLoading,setLoading] = useState(false)

    const sendForm = () => {
        if(form.clave != form.confirmarClave){
            alert("Contraseña no coincides")
        }
        if(form.correoElectronico != form.confirmarCorreo){
            alert("correo no coincide")
        }
        axios.post(
            "/users", 
             form, 
             {
                 headers: { 
                     'Content-Type' : 'application/json' 
                 }
             }
     ).then(response => {        
           setLoading(false)
           setOpen(true)
           setForm({
             nombre:"",
             telefono:"",
             direccion:"",
             correoElectronico:"",
             peticion:""
           })
     });
    }
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

                        <Box className={classes.itemTextField}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Seleccione ...</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Age"
                                    onChange={handleChangeValue}
                                    name="tipoUsuario"
                                    value={form.tipoUsuario}
                                >
                                    <MenuItem value="20">Persona Natural</MenuItem>
                                    <MenuItem value="30">Persona Juridica</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item container>
                        <Typography className={classes.Textp} >
                            Nombre o Razon social *
                        </Typography>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12} >
                        <TextField name="razonSocial" value={form.razonSocial} onChange={handleChangeValue} item size="small" className={classes.itemTextField} id="outlined-basic" label="" />
                    </Grid>
                    <Grid item container >
                        <Typography className={classes.Textp} >
                            Correo electrónico *
                        </Typography>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <TextField item name="correoElectronico" value={form.correoElectronico} onChange={handleChangeValue} size="small" className={classes.itemTextField} id="outlined-basic" label="" />
                    </Grid>
                    <Grid item container >
                        <Typography className={classes.Textp} >
                            Confirmar Correo electrónico *
                        </Typography>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <TextField item value={form.confirmarCorreo} name="confirmarCorreo" onChange={handleChangeValue} size="small" className={classes.itemTextField} id="outlined-basic" label="" />
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

                        <FormControl className={classes.itemTextField} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password"></InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={form.showPassword ? 'text' : 'password'}
                                value={form.clave}
                                name="clave"

                                onChange={handleChangeValue}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {form.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>

                    </Grid>
                    <Grid item container>
                        <Typography className={classes.Textp} >
                            Confirmar clave *
                        </Typography>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <FormControl className={classes.itemTextField} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password"></InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={form.showConfirmPassword ? 'text' : 'password'}
                                value={form.confirmarClave}
                                name="confirmarClave"

                                onChange={handleChangeValue}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowConfirmPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {form.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
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

                        <Button  disabled={!formComplete} handleClose={handleClose} className={classes.boton} disableElevation onClick={sendForm} >Enviar</Button>

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
            <Loader open={openLoading}></Loader>
            <Modal open={open} handleClose={handleClose} Title="Su registro ha sido ¡Exitoso!" textContainer="Al correo diligenciado llegará un e-mail indicando su codigo de registro, que correponde al codigo_observatorio que es necesario suministrar cada vez que se suba información a la plataforma" >

            </Modal>

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