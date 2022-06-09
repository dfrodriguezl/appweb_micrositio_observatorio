import { Grid, makeStyles, Typography, Button, Tooltip} from "@material-ui/core";
import React, {  useState, useRef } from 'react';
import * as Values from 'Observatorio/Variables/values';
import App from "Observatorio/img/regis.jpg";
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
import enviroment from "../../../config/enviroment"
import ReCAPTCHA from "react-google-recaptcha"

const sha256 = require('js-sha256');
const useStyle = makeStyles({

    captcha1:{
        display:"none"
      },
      vista:{
        width: "6vh !important",
        marginLeft: "0px !important"
      },
  
      captcha2:{
        display:"grid"
      },

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

    text:{
        marginTop: "2vh",
    },

    gridglobal: {
        padding: "0 10vw 0 10vw",
    },
    imageRigth: {
        width: "60vh",
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

    labeltext1:{
        display:"none"
    },

    labeltext2:{
        display:"none"
    },

    labeltext3:{
        display:"none"
    },

    labeltext4:{
        display:"block",
        color: "#821a3f",
        fontWeight: "bold",
    },

    labeltext5:{
        display:"block",
        color: "#821a3f",
        fontWeight: "bold",
    },

    labeltext6:{
        display:"block",
        color: "#821a3f",
        fontWeight: "bold",
    },

    boton: {
        padding: "0.3em 1em 0.3em 1em",
        borderRadius: "6vh",
        backgroundColor: Values.Redwinecolor,
        color:"#F3F3F3 !important",
        fontFamily: Values.SourceRoboto,
        textTransform: "capitalize",
        transition: "all 0.8s ease-out",
        cursor: "pointer",
        margin: "4% 0 4% 0",
        width: "max-content",
        fontSize: "calc(1em + 0.3vh)",
        border: "none",
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
        <Grid container justifyContent="center">
            <img className={classes.imageRigth} src={App}></img>
        </Grid>
    )
}

const FormRegister = () => {
    const classes = useStyle();
    const clavecapchat = "6LfqtdgfAAAAAPCjDx9BmyhQfhzm0u4raPPXJUZ1"
    const [usuarioValido, cambiarUsuarioValido] = useState(false)
    const [Valido, cambiarValido] = useState(true)
    const captcha = useRef(null);

    const onChangecapchat = () => {
        if(captcha.current.getValue()){
          cambiarUsuarioValido(true)
        }

    }
    const [form, setForm] = useState({
        tipoUsuario: 10,
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
    const [openUserExits, setopenUserExits] = useState(false)
    const [openValidation, setOpenValidation] = useState(false)
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
        console.log({value});
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
    const handleCloseUserExits = () => setopenUserExits(false)
    const handleCloseUserValidation = () => setOpenValidation(false)

    const [openLoading,setLoading] = useState(false)
    const [errorcorreo,seterrorcorreo] = useState("true")
    const [errornombre,seterrornombre] = useState("true")
    const [errortelefono,seterrortelefono] = useState("true")
    const [errorcorreo2,seterrorcorreo2] = useState("true")
    const [errorpassword2,seterrorpassword2] = useState("true")

    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }   

    const validarcorreo2 = () =>{
        if(form.confirmarCorreo.length > 0){
            if(form.correoElectronico !== form.confirmarCorreo){
                seterrorcorreo2("false") 
            }else{
                seterrorcorreo2("true") 
            }
        }
    }

    const validarpassword2 = () =>{
        if(form.confirmarClave.length){
            if(form.clave !== form.confirmarClave){
                seterrorpassword2("false") 
            }else{
                seterrorpassword2("true") 
            }
        }
    }

    const validacionnombre = () =>{
        let expresion = expresiones
        let expresionnombre = expresiones.nombre
        if(expresion){
            if(expresionnombre.test(form.razonSocial)){
                seterrornombre("true")         
            }else{
                seterrornombre("false") 
            }
        }
    }

    const validacioncorreo = () =>{
        let expresion = expresiones
        let expresioncorreo = expresiones.correo
        if(expresion){            
            if(expresioncorreo.test(form.correoElectronico)){
                seterrorcorreo("true")         
            }else{
                seterrorcorreo("false") 
            }
        }
    }

    const validaciontelefono = () =>{
        let expresion = expresiones
        let expresiontelefono = expresiones.telefono
        if(expresion){
            if(expresiontelefono.test(form.telefono)){
                seterrortelefono("true")         
            }else{
                seterrortelefono("false") 
            }
        }
    }

    var leyendanombre = null;
    var leyendacorreo = null;
    var leyendacorreo2 = null;
    var leyendapassword2 = null;
    var leyendatelefono = null;
    if(errornombre==="true"){
        leyendanombre = classes.labeltext1;
    }else{
        leyendanombre = classes.labeltext4;
    }
    if(errorcorreo==="true"){
        leyendacorreo = classes.labeltext2;
    }else{
        leyendacorreo = classes.labeltext5;
    }
    if(errortelefono==="true"){
        leyendatelefono = classes.labeltext3;
    }else{
        leyendatelefono = classes.labeltext6;
    }
    if(errorcorreo2==="true"){
        leyendacorreo2= classes.labeltext1;
    }else{
        leyendacorreo2 = classes.labeltext4;
    }
    if(errorpassword2==="true"){
        leyendapassword2 = classes.labeltext1;
    }else{
        leyendapassword2 = classes.labeltext4;
    }

    var estilocaptcha = null;

    if(form.tipoUsuario == 10 && form.razonSocial == "" && form.correoElectronico == "" && form.telefono == "" && form.clave == "" && form.confirmarCorreo == "" && form.confirmarClave == "" && form.showPassword == false && form.showConfirmPassword == false){
      estilocaptcha=classes.captcha1
    }else{
      estilocaptcha=classes.captcha2
    }

    const sendForm = () => {     
        
        console.log("enviando form")
       
        if(form.clave != form.confirmarClave){
            alert("Contraseña no coincides")
            return
        }
        if(form.correoElectronico != form.confirmarCorreo){
            alert("correo no coincide")
            return
        }
        if(form.clave.length < 8){
            alert("la contraseña debe tener 8 caracteres")
            return
        }
        let valor = sha256.hmac('prueba',form.clave)
        let body={
            name: form.razonSocial,
            email: form.correoElectronico,
            phone: form.telefono,
            infokey: valor
        }
        setLoading(true)
        axios.post(
            `${enviroment.endpoint}/users`, 
             body, 
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
                window.location="/Observatorio/login"
             }else{
                 if(response.data.code == "US001"){
                    setLoading(false)
                    setopenUserExits(true)
                 }else{
                    setLoading(false)
                    alert('ocurrio un problema con la creación de su usuario')
                 }
                
             }

         }else{
            setLoading(false)
            alert('ocurrio un problema con la creación de su usuario')
         }  
         
     });
    }
    return (
        <Grid container direccion="row" className={classes.gridMain} >
                <Grid container justifyContent="center">
                    <Typography className={classes.Titleh3}>
                        <strong>Registro</strong>
                    </Typography>
                </Grid>

            <Grid item container xs={12} sm={6} md={6} lg={6}>
                
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
                                    <MenuItem value="40">Gestor Catastral</MenuItem>
                                    <MenuItem value="50">Observatorio Inmobiliario</MenuItem>
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
                        <TextField name="razonSocial" value={form.razonSocial} onKeyUp={validacionnombre} onBlur={validacionnombre} onChange={handleChangeValue} item size="small" className={classes.itemTextField} id="outlined-basic" label="" />
                        <p className={leyendanombre}>El nombre solo puede tener letras y espacios</p>
                    </Grid>
                    <Grid item container >
                        <Typography className={classes.Textp} >
                            Correo electrónico *
                        </Typography>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <TextField item onKeyUp={validacioncorreo} onBlur={validacioncorreo} name="correoElectronico" value={form.correoElectronico} onChange={handleChangeValue} type="email" size="small" className={classes.itemTextField} id="outlined-basic" label=""/>
                        <p className={leyendacorreo}>La dirección de correo debe contener @correo.extensión</p>
                    </Grid>
                    <Grid item container >
                        <Typography className={classes.Textp} >
                            Confirmar Correo electrónico *
                        </Typography>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <TextField item value={form.confirmarCorreo} onKeyUp={validarcorreo2} onBlur={validarcorreo2}  name="confirmarCorreo" onChange={handleChangeValue} size="small" className={classes.itemTextField} id="outlined-basic" label="" />
                        <p className={leyendacorreo2}>Los correos no coinciden</p>
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
                        <TextField item size="small" onKeyUp={validaciontelefono} onBlur={validaciontelefono} value={form.telefono} name="telefono" onChange={handleChangeValue} className={classes.itemTextField} id="outlined-basic" />
                        <p className={leyendatelefono}>El telefono debe tener minimo 7 o maximo 10 digitos</p>
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
                                className={classes.itemTextField}
                                onChange={handleChangeValue}
                                endAdornment={
                                    <InputAdornment position="end" className={classes.vista}>
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
                            <p className={leyendapassword2}>Las contraseñas no coinciden</p>
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
                                onKeyUp={validarpassword2} onBlur={validarpassword2}
                                onChange={handleChangeValue}
                                className={classes.itemTextField}
                                endAdornment={
                                    <InputAdornment position="end" className={classes.vista}>
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
                            <p className={leyendapassword2}>Las contraseñas no coinciden</p>
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
                    <Grid id="hola" className={estilocaptcha} container item justifyContent="center" alignItems="center">
              <ReCAPTCHA 
                ref={captcha}
                sitekey={clavecapchat} 
                theme="light" 
                onChange={onChangecapchat} />
            </Grid> 
                    <Grid item container >
                    <Tooltip title="Enviar" arrow>
                        <Button  disabled={!formComplete} className={classes.boton} disableElevation onClick={sendForm} >Enviar</Button>
                    </Tooltip>
                    </Grid>

                </Grid>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6} >                
                <Grid item container>
                <ImagenBottom />
                    <Typography className={classes.text} justifyContent="center">
                        Una vez haya realizado el registro usted podra: cargar / suministrar y / o descargar  información / formularios, visualizar estadísticas y historico de la información suministrada como usuario.
                    </Typography>
                </Grid>
            </Grid>
            <Loader open={openLoading}></Loader>
            <Modal open={open} handleClose={handleClose} Title="Su registro ha sido ¡Exitoso!" textContainer="Al correo diligenciado llegará un e-mail indicando su codigo de registro, que correponde al codigo_observatorio que es necesario suministrar cada vez que se suba información a la plataforma" >

            </Modal>
            <Modal open={openUserExits} handleClose={handleCloseUserExits} Title="El correo registrado ya esta en nuestra base de datos" textContainer="Por favor ingrese con su contraseña, de lo contrario ingrese por el boton “olvido su contraseña” para recuperarla" >
            </Modal>
            <Modal open={openValidation} handleClose={handleCloseUserValidation} Title="Su registro no ha sido exitoso" textContainer="Por favor valide los datos ingresados e intente nuevamente" >
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