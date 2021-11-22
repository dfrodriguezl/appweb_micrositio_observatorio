import React, { useState, useEffect, useMediaQuery } from 'react';
import { Grid } from '@material-ui/core';
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
const useStyle = makeStyles({
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
    }
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
    function setOpenSideBar() {
        setSideBarOpen(!sideBarOpen)
    }
    return (

        <header>
            <Grid container className={classes.main} >
                <Grid container item className={classes.backgroundHeader}>
                    <Grid container item xs={3} sm={5} md={6} lg={6} direction="row">
                        <a href="https://www.dane.gov.co/"> <LogoDane className={classes.logo} src={logoDane} /></a>

                    </Grid>
                    <Grid container item xs={9} sm={7} md={6} lg={6} justifyContent="flex-end" >

                      
                        <a href="/Observatorio">
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
