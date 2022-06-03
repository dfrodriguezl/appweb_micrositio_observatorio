import React, { useState, useEffect, useMediaQuery } from 'react';
import axios from "axios";
import { Button, Grid, InputAdornment } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import enviroment from "../config/enviroment";
import {
    makeStyles
} from '@material-ui/core/styles';
import logoDane from "Observatorio/img/logo-dane.svg";
import logoObservatorio from "Observatorio/img/logo-observatorio.svg";
import Styled from "styled-components";
import Navbar from './Navbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useTranslation} from "react-i18next";
const useStyle = makeStyles({
    search:{
        margin: "1.5vh 0 0 0 !important",
    },
    root: {
        height: '50px'
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
        margin:"3% 0px 3% 1.5%",
        color:"white",
        cursor: "pointer",
        borderStyle: "hidden !important",
        width: "2vw",
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
    height:80px;
    widht:120px;
    padding:10px;
    @media (max-width: 698px){
        height:60px;
        margin-top:10px;
        margin-left:0px;
    }
`

const LogoDane = Styled.img`
height:80px;
widht:120px;
padding:10px;
margin-left:20px;

@media (max-width: 698px){
    height:50px;
    widht:90px;
    margin-top:15px;
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
                <Grid container item className={classes.backgroundHeader}>
                    <Grid container item xs={3} sm={5} md={6} lg={6} direction="row">
                        <a href="https://www.dane.gov.co/"> <LogoDane className={classes.logo} src={logoDane} /></a>

                    </Grid>                        
                    <Grid container item xs={9} sm={7} md={6} lg={6} justifyContent="flex-end" >  
                    <TextField
                        className={classes.search}
                        id="search"
                        label={t("headersearch.search")}
                        onClick={handlesearch}
                        variant="outlined"
                        InputProps={{                            
                            endAdornment: (
                                <InputAdornment position="end">
                                <SearchIcon/>
                                </InputAdornment>
                            ),
                        }}
                        />  
                        <button id='en' Active className={classes.lenguaje} onClick={()=> i18n.changeLanguage("en")}>EN</button>   
                        <button id='es' className={classes.lenguaje} onClick={()=> i18n.changeLanguage("es")}>ES</button>                                          
                        <a href="/Observatorio/">
                            <LogoObservatorio className={classes.logoObservatorio} src={logoObservatorio} />
                        </a>
                        <TextLogo xs={12} sm={12} >
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
                <Grid container item className={classes.backgroundHeader}>
                    <Navbar sideBarOpen={sideBarOpen}></Navbar>
                </Grid>
            </Grid>


        </header>

    );
}



export default Header;
