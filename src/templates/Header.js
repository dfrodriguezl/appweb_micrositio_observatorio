import React, { useState, useEffect } from 'react';
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
//import styles from "../views/common/style/estilossearch.css";
const useStyle = makeStyles({
    search:{
        top: "2vh !important",
        width:"43vw !important"
    },
    search2:{
        top: "2vh !important",
        width:"15vw !important"
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
        fontSize:"0.875rem",
        minWidth: "2vh",
        padding: "4px 0px",
    },
    logo: {
        Width: 140,
        Height: 47,
    },
    backgroundHeader: {
        borderBottom: "1px solid #EEE"
    },
    main: {
        backgroundColor: "white",
        position: "fixed",
        zIndex: 1000,
        top: 0,
        left: 0,
    },
    lenguaje: {
        backgroundColor: "#821a3f",
        height:"3vh",
        margin:"4vh 0px 2.5vh 1vh",
        color:"white",
        cursor: "pointer",
        borderStyle: "hidden !important",
        width: "2.5vh",
        fontSize: "calc(0.2em + 0.9vh)",
        "&:hover": {
            backgroundColor: "#3e071a",
            border: "none",
          },
    },
});

const TextLogo = Styled.div`
line-height:1;
`;

const TextLogoTitle = Styled.div`
font-size: 25px;
font-weight: bold;
color: #821A3F;
margin-top: 25px;

@media (max-width: 4000px) and (min-width: 769px) {
    font-size:25px !important;
    margin-top: 15px;
 }
 @media (max-width: 768px) {
    font-size:18px !important;
 }

`
const TextSubTitle = Styled.div`
font-size:20px;
color: #4C4C4C;
margin-right:20px;

@media (max-width: 4000px) and (min-width: 769px) {
    font-size:20px !important;
 }
 @media (max-width: 768px) {
    font-size:13px !important;
    margin-right:0px;

 }

`

const LogoObservatorio = Styled.img`
    height:11vh;
    width:7vh;
    padding:0 0.8vh 0 0.8vh;
    @media (max-width: 698px){
        height:7vh;
        width:5.8vh;
        margin-top:2vh;
        margin-left:0px;
    }
`

const LogoDane = Styled.img`
height:11vh;
width:12vh;
padding:0 0.6vh 0 0;
margin-left:20px;

@media (max-width: 698px){
    height:9vh;
    width:7.5vh;
    margin-top:1vh;
    margin-left:5px;
}
`
const ContainerIcon = Styled.div`
margin-top:10px;
@media (max-width: 4000px) and (min-width: 769px) {
    display:none;
 }
`

const Header = () => {
    const classes = useStyle();
    const matches = useMediaQuery("(min-width:527px)");
    const matches2 = useMediaQuery("(max-width:647px)")
    var estilo = null;
    var estilo2 = null;
    var estilo3 = null;
    var ubicacion = null;
    var compon = null;
    {
    console.log("ver", matches2)
    if(matches){
      ubicacion = "flex-end"      
    }     
    if(matches2){
        estilo2=classes.texto
        estilo=classes.texto1
        estilo3=classes.search
    }else{
        estilo=classes.texto
        estilo2=classes.texto1
        estilo3=classes.search2
    }
  }
    const [sideBarOpen, setSideBarOpen] = useState(false)
    const [t, i18n]= useTranslation("global");
    const handlesearch = (e) =>{        
        document.getElementById("search")
        .addEventListener("keyup", function(e) {            
            if (e.keyCode === 13) {               
                if(e.target.value === ""){
                    console.log("20/05/2023", "se debe mostrar un error por estar vacio");
                }else{
                    searchresult(e.target.value);
                }
            }
        })     
    }
    const botonhandlesearch = () =>{              
       let valor = document.getElementById("search").value      
                if(valor === ""){
                    console.log("20/05/2023", "se debe mostrar un error por estar vacio");
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
                    window.location="/Observatorio/Busqueda"
                 }else{

                 }

               } else {
                //setOpen3(true)
                console.log("20/05/2022",response.data.data.fileph);
             }
            } else {
                console.log("ocurrio un problema externo");
            }
          });
      };    
    function setOpenSideBar() {
        setSideBarOpen(!sideBarOpen)
    }
    return (
        <header>
            <Grid container className={classes.main}>                 
                <Grid container className={classes.backgroundHeader}>
                    <Grid container item direction='row'>
                        <Grid container item xs={2}>
                        <a href="https://www.dane.gov.co/"> <LogoDane className={classes.logo} src={logoDane} /></a> 
                        </Grid> 
                        <Grid container item xs={10} justifyContent={ubicacion}>                            
                        <a href="/observatorio/" className={estilo}>
                            <LogoObservatorio className={classes.logoObservatorio} src={logoObservatorio} />
                        </a>
                        <TextField
                            className={estilo3}
                            id="search"
                            label={t("headersearch.search")}
                            onClick={handlesearch}
                            variant="outlined"                            
                            InputProps={{                            
                                endAdornment: (
                                <InputAdornment position="end">
                                <Button className={classes.bnt} onClick={botonhandlesearch}><SearchIcon/></Button>
                                </InputAdornment>
                            ),
                            }}
                        />
                        <button id='en' Active className={classes.lenguaje} onClick={()=> i18n.changeLanguage("en")}>EN</button>   
                        <button id='es' className={classes.lenguaje} onClick={()=> i18n.changeLanguage("es")}>ES</button>
                        <a href="/observatorio/" className={estilo2}>
                            <LogoObservatorio className={classes.logoObservatorio} src={logoObservatorio} />
                        </a>
                        <TextLogo className={estilo2}>
                            <TextLogoTitle >
                                Observatorio
                            </TextLogoTitle>
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
                <Grid container item className={classes.backgroundHeader}>
                    <Navbar sideBarOpen={sideBarOpen}></Navbar>
                </Grid>
            </Grid>


        </header>

    );
}



export default Header;
