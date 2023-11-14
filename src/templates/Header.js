import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { Button, Grid, InputAdornment } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import enviroment from "../config/enviroment";
import {
    makeStyles
} from '@material-ui/core/styles';
import {
    useMediaQuery,
  } from "@material-ui/core";
import logoDane from "Observatorio/img/logo-dane.svg";
import logoObservatorio from "Observatorio/img/logo-observatorio.svg";
import Styled from "styled-components";
import Navbar from './Navbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useTranslation} from "react-i18next";
import { useNavigate } from "react-router-dom";
import FontSizeChanger from 'react-font-size-changer';
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import TextDecreaseIcon from "@mui/icons-material/TextDecrease";
import TonalityIcon from "@mui/icons-material/Tonality";
import {AuthContext} from "../templates/useAuth"
import styles from "../css/acceso.css";
const useStyle = makeStyles({
    search:{
        top: "2vh !important",
        width:"20vw !important"
    },
    goberment:{
        background: "#0066cd",
        height: "6vh",
        padding: "3px",
    },
    intergoberment:{
        margin: "0rem 12rem",
        height: "6vh",
        padding: "3px",
    },
    search2:{
        top: "2vh !important",
        width:"7vw !important",
        "& .MuiFormLabel-root": {
            top: "-1.2vh"
          }
    },
    texto:{
        display:"none"
    },
    texto1:{
        display:"block"
    },
    root: {
        height: '50px'
    },
    bnt:{
        backgroundColor:"#821a3f",
        minWidth: "4vh",
        color: "white",
        top: "2vh",
        height: "3vh",
        marginLeft: "8px",
        width:"3vw"
    },
    logo: {
        Width: 140,
        Height: 47,
    },
    backgroundHeader: {
        //borderBottom: "1px solid #EEE"
    },
    main: {
        backgroundColor: "white",
        position: "fixed",
        zIndex: 1000,
        top: 0,
        left: 0,
    },
    lenguaje: {
        // backgroundColor: "#821a3f",
        backgroundColor: "white",
        height:"3vh",
        margin:"2vh 0px 0vh 1vh",
        color:"#666",
        fontFamily: "roboto",
        cursor: "pointer",
        border: "1px solid #ccc !important",
        width: "4vh",
        fontSize: "calc(0.4em + 0.9vh)",
        borderRadius:"3px",
        "&:hover": {
            //backgroundColor: "#3e071a",
            border: "1px solid #030303 !important",
          },
        "&.--active": {
            background:'#821a3f',
            color:"white",
            border:"none"
          },
    },
    goberment__item__link:{
        color: "#fff",
        textDecoration: "none",
    },
    ulidioma:{
        listStyleType: "none"
    },      
    liidioma:{
        float: "left",
        textAlign: "center",
    },
    ulgoberment:{
        listStyleType: "none",
        position: "absolute",
        top: "6%",
    },
    ligoberment:{
        float: "left",
        textAlign: "center",
        padding: "0 8px",
    },
    searchinput:{
        height:"3vh !important"
    },
    fontSize: {
        backgroundColor: "#fff",
        height:"3.4vh",
        margin:"2vh 0px 0vh 1vh",
        color:"#666",
        cursor: "pointer",
        width: "3.4vh",
        borderRadius:"100%",
        float: "left",
        border: "1px solid #E6E6E6",
        textAlign: "center",
        fontSize: "calc(0.2em + 0.4vh)",
        WebkitBoxSizing: "border-box",
        "&:hover": {
            backgroundColor: "#821a3f",
            border: "none",
            color: "white"
          },
    },
    acceso: {
        color: "white !important",
        "&:hover": {
            backgroundColor: "#821a3f",
            border: "none",
            color: "white !important"
          },
    },
    
    Header__dateText: {
        fontSize: "0.9em",
        color: "#262626",
        margin: "5px 0",
    },

    header__logos: {
        padding:"0 2vh 0 2vh"
    }
});

const TextLogo = Styled.div`
line-height:1;
`;

const TextLogoTitle = Styled.div`
font-size: 23px;
font-weight: bold;
color: #821A3F;
margin-top: 25px;

@media (max-width: 4000px) {
    font-size:23px !important;
    margin-top: 24px;
 }
 @media (max-width: 768px) {
    font-size:18px !important;
 }

 @media (max-width: 1006px) {
    font-size:18px !important;
 }

`
const TextSubTitle = Styled.div`
font-size:20px;
color: #4C4C4C;
margin-right:20px;

@media (max-width: 4000px){
    font-size:14px !important;
 }
 @media (max-width: 1006px) {
    font-size:13px !important;
    margin-right:0px;

 }

`

const LogoObservatorio = Styled.img`
    height:9vh;
    width:6vh;
    padding:0 0.8vh 0 0.8vh;
    @media (max-width: 698px){
        height:7vh;
        width:5.8vh;
        margin-top:1vh;
        margin-left:0px;
    }
`
const LogoGoberment = Styled.img`
width:9vh;
position: absolute;
top: 6%;
`

const LogoDane = Styled.img`
height:9vh;
width:17vh;
padding:0 0.6vh 0 0;
margin-left:20px;

@media (max-width: 698px){
    height:9vh;
    width:7.5vh;
    margin-top:1vh;
    margin-left:5px;
}
@media (max-width: 912px){
    height:9vh;
    width:17vh;
    margin-top:0vh;
    margin-left:5px;
}
`
const ContainerIcon = Styled.div`
margin-top:10px;
@media (max-width: 4000px) and (min-width: 769px) {
    display:none;
 }
`


var color = 0

function handleClick() {  
    if(color==0){
    let grishtml=document.getElementsByTagName("html")[0]
    grishtml.style.filter=`grayscale(1)`
    color=1
    }else{
    let grishtml=document.getElementsByTagName("html")[0]
    grishtml.style.filter=`grayscale(0)`
    color=0
    }
}
    


const Header = () => {
    const history = useNavigate();
    const classes = useStyle();
    const matches = useMediaQuery("(min-width:527px)");
    const matches2 = useMediaQuery("(max-width:647px)")
    const matches3 = useMediaQuery("(max-width:1402px)")
    const matches4 = useMediaQuery("(max-width:1006px)")   
    var estilo = null;
    var estilo2 = null;
    var estilo3 = null;
    var ubicacion = null;
    var iconosizquierda = null;
    var iconosderecha = null;
    var iconoscentro = null;
    var compon = null;
    {
        
    if(matches){
      ubicacion = "flex-end"  
     // console.log("pp1")    
      iconosizquierda = 4;
      iconosderecha = 4;
      iconoscentro = 4;
    }
    if(matches3){
        iconosizquierda = 3;
        iconosderecha = 5;
        iconoscentro = 4;
    }  
    if(matches4){
        iconosizquierda = 3;
        iconosderecha = 5;
        iconoscentro = 4;
    }  
    if(matches2){
        estilo2=classes.texto
        estilo=classes.texto1
        estilo3=classes.search
        iconosizquierda = 3;
        iconosderecha = 5;  
        iconoscentro = 4;
    }else{
        estilo=classes.texto
        estilo2=classes.texto1
        estilo3=classes.search2  
    }
  }
    const [sideBarOpen, setSideBarOpen] = useState(false)
    
    const ajustable = "ajustable"
    const [ajustableidiomaEn, setajustableidiomaEn] = useState("")
    const [ajustableidiomaEs, setajustableidiomaEs] = useState("--active")
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const semana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    const mesF = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];     
    const monthname = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
    const d = new Date();
    var day = semana[d.getDay()];
    var month = mesF[d.getMonth()];
    const [dia, setdia] = useState(day);
    const [mes, setmes] = useState(month);
    function cambioidioma(e){
        if(e.target.id == "es"){
            setajustableidiomaEs("--active")
            setajustableidiomaEn("")
            day = semana[d.getDay()];
            month = mesF[d.getMonth()];
            setdia(day);
            setmes(month);
        }else{
            setajustableidiomaEs("")
            setajustableidiomaEn("--active")       
            day = weekday[d.getDay()];
            month = monthname[d.getMonth()];
            setdia(day);
            setmes(month);
        }
    } 

    const [t, i18n]= useTranslation("global");

    const handlesearch = (e) =>{        
        document.getElementById("search")
        .addEventListener("keyup", function(e) {            
            if (e.keyCode === 13) {               
                if(e.target.value === ""){
                   // console.log("20/05/2023", "se debe mostrar un error por estar vacio");
                }else{
                    searchresult(e.target.value);
                }
            }
        })     
    }
    const botonhandlesearch = () =>{              
       let valor = document.getElementById("search").value   
                if(valor === ""){
                   // console.log("20/05/2023", "se debe mostrar un error por estar vacio");
                }else{
                    searchresult(valor);
                }    
    }
    const searchresult = (busqueda) => {
        let bus = busqueda
        axios
          .get(`${enviroment.endpoint}/Resultados`, {
            headers: {
              "Content-Type": "application/json",
              Body:bus,
            },
          })
          .then((response) => {
            if (response.status == 200) {          
              
               if (response.data.code == "OK") {

                if(response.data.data.fileph){
                    //localStorage.setItem("searchcobjetcant",response.data.data.fileph.length)
                    localStorage.setItem("searchcobjet",JSON.stringify(response.data.data.fileph))
                    history('/observatorio/Busqueda')
                 }else{

                 }

               } else {
                //setOpen3(true)
               // console.log("20/05/2022",response.data.data.fileph);
             }
            } else {
               // console.log("ocurrio un problema externo");
            }
          });
      };    
    function setOpenSideBar() {
        setSideBarOpen(!sideBarOpen)
    }
    return (
        <header>
            <Grid id="target-two" container className={classes.main}>                 
                <Grid container>
                    <Grid container className={classes.goberment}>
                        <Grid container className={classes.intergoberment}>
                        <Grid container xs={4} >
                            <a href="https://www.dane.gov.co/"> <LogoGoberment className={classes.logo+" "+ajustable} src='https://www.dane.gov.co/files/images/nuevaImg/header_govco.png' /></a>
                        </Grid>
                        <Grid container xs={8} justifyContent='flex-end'>
                        <ul className={classes.ulgoberment}>
                            <li className={classes.ligoberment} title="Transparencia">
                                <a className={classes.goberment__item__link} href="https://www.dane.gov.co/index.php/transparencia" target="_blank">Transparencia</a> 
                            </li>
                            <li className={classes.ligoberment} title="Atención y servicio a la ciudadania">
                                <a className={classes.goberment__item__link} href="https://www.dane.gov.co/index.php/servicios-al-ciudadano" target="_blank">Atención y servicio a la ciudadania</a>
                            </li>
                            <li className={classes.ligoberment} title="Participa">
                                <a className={classes.goberment__item__link} href="https://www.dane.gov.co/index.php/servicios-al-ciudadano/tramites/participacion-ciudadana" target="_blank">Participa</a>
                            </li>
                            <li className={classes.ligoberment} title="Sala de prensa">
                                <a className={classes.goberment__item__link} href="https://www.dane.gov.co/index.php/sala-de-prensa" target="_blank">Sala de prensa</a>
                            </li>
                        </ul>
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid container item direction='row' className={classes.header__logos}> 
                        <Grid container item xs={iconosizquierda}>
                        <a href="https://www.dane.gov.co/"> <LogoDane className={classes.logo+" "+ajustable} src='https://www.dane.gov.co/files/images/nuevaImg/Logo_potencia_de_la_vida.svg' /></a>
                        </Grid>
                        <Grid container item xs={iconoscentro} justifyContent="center">
                            <Grid container xs={5} justifyContent='center'>
                                <TextField
                                    className={estilo3+" "+ajustable}
                                    id="search"
                                    label={t("headersearch.search")}
                                    onClick={handlesearch}                                                 
                                    InputProps={{                            
                                        // endAdornment: (
                                        // <InputAdornment position="end">
                                        //     <Button className={classes.bnt} onClick={botonhandlesearch}><SearchIcon/></Button>
                                        // </InputAdornment>
                                        // ),
                                        className:(classes.searchinput)
                                    }}
                                /> 
                                <Button className={classes.bnt} onClick={botonhandlesearch}><SearchIcon/></Button>
                            </Grid>                       
                            <Grid container xs={7}>
                                <Grid container xs={10}>
                                <FontSizeChanger
                                    className={classes.acceso}
                                    targets={["#target-two .ajustable"]}
                                    options={{
                                        stepSize: 0.5,
                                        range: 100,
                                    }}
                                    customButtons={{
                                        up: <TextIncreaseIcon name="search-plus" />,
                                        down: <TextDecreaseIcon name="search-minus" />,
                                        style: {
                                            backgroundColor: "#fff",
                                            height:"3.4vh",
                                            color: "#666",
                                            width: "3.4vh",
                                            border: "1px solid #E6E6E6",
                                            WebkitBoxSizing: "border-box",
                                            WebkitBorderRadius: '100%',
                                            margin:"2vh 0px 0 1vh",
                                            cursor: "pointer",
                                            fontSize: "1.2em",
                                        },
                                        buttonsMargin: "0px",
                                    }}
                                />
                                <button className={classes.fontSize+" "+ajustable} onClick={handleClick}><TonalityIcon/></button>                        
                                <ul className={classes.ulidioma}>
                                    <li className={classes.liidioma} onClick={cambioidioma}>
                                        <button id='en' Active className={classes.lenguaje+" "+ajustableidiomaEn} onClick={()=> i18n.changeLanguage("en")}>EN</button>   
                                    </li>
                                    <li className={classes.liidioma} onClick={cambioidioma}>                                
                                        <button id='es' className={classes.lenguaje+" "+ajustableidiomaEs} onClick={()=> i18n.changeLanguage("es")}>ES</button>
                                    </li>
                                </ul> 
                                </Grid>    
                                <Grid container xs={10} justifyContent='start'>
                                <p className={classes.Header__dateText} id="fecha">{dia+", "+d.getDate()+" de "+mes+ " de " + d.getFullYear()}</p>
                                </Grid> 
                            </Grid>                             
                        </Grid>                            
                        <Grid container item xs={iconosderecha} justifyContent='flex-end'>
                        <a href="https://www.dane.gov.co/"> <LogoDane className={classes.logo+" "+ajustable} src='https://www.dane.gov.co/files/images/nuevaImg/logo_DANE-70.svg' /></a>                                                    
                        <a href="/observatorio/" className={estilo+" "+ajustable}>
                            <LogoObservatorio className={classes.logoObservatorio} src={logoObservatorio} />
                        </a>
                        <a href="/observatorio/" className={estilo2+" "+ajustable}>
                            <LogoObservatorio className={classes.logoObservatorio} src={logoObservatorio} />
                        </a>
                        <TextLogo className={estilo2+" "+ajustable}>
                            <TextLogoTitle>Observatorio</TextLogoTitle>
                            <TextSubTitle className={classes.subtitleObservatorio} >Inmobiliario Nacional</TextSubTitle>
                        </TextLogo> 
                                       
                        <ContainerIcon item justifyContent="center">
                            {
                                sideBarOpen ?
                                    <IconButton
                                        size="large"
                                        edge="center"
                                        color="inherit"
                                        aria-label="menu"
                                        onClick={setOpenSideBar}

                                    >
                                        <CloseIcon></CloseIcon>
                                    </IconButton>
                                    : <IconButton
                                        size="large"
                                        edge="center"
                                        color="inherit"
                                        aria-label="menu"
                                        onClick={setOpenSideBar}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                            }
                        </ContainerIcon> 
                        </Grid>                            
                    </Grid>    
                </Grid>
                <Grid container item className={classes.backgroundHeader+" "+ajustable}>
                    <Navbar sideBarOpen={sideBarOpen}></Navbar>
                </Grid>
            </Grid>


        </header>

    );
}



export default Header;
