import { Grid, makeStyles, Typography,useMediaQuery,Tooltip,Button} from "@material-ui/core";
import React, { useState, useRef, useContext } from 'react';
import * as Values from 'Observatorio/Variables/values';
import App from "Observatorio/img/log.jpg";
import TextField from '@mui/material/TextField';
import ButtonRedWine from "Observatorio/common/buttonredwinestandar";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
const sha256 = require('js-sha256');
import axios from 'axios';
import {Loader} from '../loader/loader'
import {  Navigate } from 'react-router';
import enviroment from '../../../config/enviroment'
import ReCAPTCHA from "react-google-recaptcha"
import { useNavigate } from "react-router-dom";
import useAuth,{AuthContext} from "../../../templates/useAuth";
import {useTranslation} from "react-i18next";
const useStyle = makeStyles({
  boton1: {
    borderRadius: "2vh",
    backgroundColor: "#727070",
    color: Values.TextButton,
    fontFamily: Values.SourceWorksans,
    textTransform: "capitalize",
    transition:"all 0.8s ease-out",
    cursor: "pointer",
    width: "max-content",
    fontSize: "calc(1em + 0.3vh)",
    borderRadius: "2vh",
    fontWeight: "bold",
    "&:hover":{
        backgroundColor: Values.Redwinecolor,
        border:"none",
    }
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

    gridglobal: {
        padding: "0 10vw 0 10vw",
        margin: "2.5vw 0 2vw 0"
    },
    imageRigth: {
        width: "80vh"
    },
    containerForm: {
        backgroundColor: "#f3f3f3",
        borderRadius: "10px 10px 10px 10px",
        padding: "20px"
    },
    itemTextField: {
        backgroundColor: "white",
        width:"100% !important"
    },
    image:{
        width:"100%"
    },

    captcha1:{
      display:"none"
    },

    captcha2:{
      display:"grid"
    },
    vista:{
      width: "6vh !important",
      marginLeft: "0px !important"
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
        width: "max-content",
        fontSize: "calc(1em + 0.3vh)",
        borderRadius: "2vh",
        fontWeight: "bold",
        border: "none",
        "&:hover": {
            backgroundColor: Values.HoverButton,
            border: "none",
        }
    }
});


const ImagenBottom = () => {
    const classes = useStyle();
    const matches = useMediaQuery('(max-width:1545px)');    
    let image = matches ? classes.image : classes.imageRigth
    return (
        <img className={image} src={App}></img>
    )
}



const FormAccess = (props) => {
    const classes = useStyle();
    const history = useNavigate();
    const [t, i18n]= useTranslation("global");
    const clavecapchat = "6LfqtdgfAAAAAPCjDx9BmyhQfhzm0u4raPPXJUZ1"
    const [usuarioValido, cambiarUsuarioValido] = useState(true)
    const  login  = useContext(AuthContext);
    const [form, setForm] = useState({
        user:"",
        clave: "",
        showPassword: false

    })

    const handleClickShowPassword = (event) => {
        setForm({
            ...form,
            showPassword: !form.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChangeValue = (event) => {
        let name = event.target.name
        let value = event.target.value
      
        let newForm = {
            ...form,
            [name]: value
        }
        setForm(newForm)
       // validateForm(newForm)
    }
    
    const [openLoading,setLoading] = useState(false)

    var estilocaptcha = null;

    if(form.clave == "" || form.user == ""){
      estilocaptcha=classes.captcha1
    }else{
      estilocaptcha=classes.captcha2
    }

    const navigate = useNavigate()
    
    
    const sendForm = () => {
      
       if(captcha.current.getValue()){
       // console.log("enviando form")
        let valor = sha256.hmac('prueba',form.clave)
        let body={
            email: form.user,
            infokey: valor
        }
        setLoading(true)
        axios.post(
            `${enviroment.endpoint}/login`, 
             body, 
             {
                 headers: { 
                     'Content-Type' : 'application/json' 
                 }
             }
     ).then(response => {  
         if(response.status == 200 ){
             if(response.data.code == "OK"){
                localStorage.setItem("token",response.data.data.token)
                localStorage.setItem("name",response.data.data.name)
                localStorage.setItem("id",response.data.data.id)
                localStorage.setItem("rol",response.data.data.rol)
                
               // props.setAuth(true)
                login.login()
                history('/observatorio/PlataformaUsuario')
             }else{
                 setLoading(false)
                 alert('Usuario o contraseña incorrecto')
             }

         }else{
            setLoading(false)
            alert('ocurrio un problema externo')
         }  
         
     });
       }else{
       // console.log("El usuario no a aceptado el captcha")
       }
    }

    const captcha = useRef(null);

    const onChangecapchat = () => {
        //console.log('Captcha value:', value);
        if(captcha.current.getValue()){
          cambiarUsuarioValido(false)
        }

    }

    const rutaregistrar = (e) =>{
      
      history('/observatorio/register')
    }

    const rutacontraseña = (e) =>{
      
      history('/observatorio/ForgetPassword')
    }

    return (
      <Grid container direccion="row">
        <Grid container justifyContent="center" alignItems="center"></Grid>
        <Grid item xs={12} sm={5} md={6} lg={6}>
          <ImagenBottom />
        </Grid>
        <Grid item container xs={12} sm={7} md={6} lg={6} alignItems="center">
          <Grid
            direction="row"
            spacing={2}
            item
            container
            className={classes.containerForm}
            xs={12}
            sm={12}
            md={12}
            lg={12}
            alignItems="center"
          >
            <Grid item lg={3} md={3} sm={3} xs={12}>
              <Typography className={classes.Textp}>{t("login.login")}</Typography>
            </Grid>
            <Grid item lg={9} md={9} sm={9} xs={12}>
              <TextField
                name="user"
                item
                size="small"
                value={form.user}
                onChange={handleChangeValue}
                className={classes.itemTextField}                
                id="outlined-basic"
              />
            </Grid>

            <Grid item lg={3} md={3} sm={3} xs={12}>
              <Typography className={classes.Textp}>{t("login.login2")}</Typography>
            </Grid>
            <Grid item lg={9} md={9} sm={9} xs={12}>
              <FormControl
                size="small"
                className={classes.itemTextField}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password"></InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={form.showPassword ? "text" : "password"}
                  value={form.clave}
                  name="clave"                  
                  onChange={handleChangeValue}
                  className={classes.itemTextField}
                  endAdornment={
                    <InputAdornment position="end" id="contraseña" className={classes.vista}>
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
            <Grid id="hola" className={estilocaptcha} container item justifyContent="center" alignItems="center">
              <ReCAPTCHA 
                ref={captcha}
                sitekey={clavecapchat} 
                theme="light" 
                onChange={onChangecapchat} />
            </Grid>
            <Grid item container justifyContent="center" alignItems="center">
              <Tooltip title={t("login.login3")} arrow>
              <button disabled={usuarioValido} onClick={sendForm} className={classes.boton}>
              {t("login.login3")}
              </button>
              </Tooltip>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Typography className={classes.Textp}>
              {t("login.login4")}
              </Typography>
            </Grid>
            <Grid item container justifyContent="center" alignItems="center">
            <Tooltip title={t("login.login5")} arrow>
              <Button className={classes.boton1}
                
                onClick={rutaregistrar}
              >{t("login.login5")}</Button>
            </Tooltip>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Typography className={classes.Textp}>
              {t("login.login6")}
              </Typography>
            </Grid>
            <Grid item container justifyContent="center" alignItems="center">
            <Tooltip title={t("login.login7")} arrow>
            <Button className={classes.boton1}                
                onClick={rutacontraseña}
              >{t("login.login7")}</Button>
            </Tooltip>
            </Grid>
          </Grid>
        </Grid>
        <Loader open={openLoading}></Loader>
      </Grid>
    );
}


const Access = (props) => {
    //console.log("maria",props.setAuth)
    const classes = useStyle();
    const  login  = useContext(AuthContext);
    const navigate = useNavigate()  
    if(login.isAuthenticated){        
      return  <Navigate to="/observatorio/PlataformaUsuario"></Navigate>
    }else{
        return (
            <Grid container justifyContent="center"
                alignItems="center" className={classes.gridglobal}>
                <FormAccess  setAuth ={props.setAuth} />
            </Grid>
        );
    }

}

export default Access
