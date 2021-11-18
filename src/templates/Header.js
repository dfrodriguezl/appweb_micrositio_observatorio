import React from 'react';
import { Grid } from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';
import logoDane from "Observatorio/img/logo-dane.svg";
import logoObservatorio from "Observatorio/img/logo-observatorio.svg";
import Styled from "styled-components";
import Navbar from './Navbar';

const useStyle = makeStyles({
    root: {
        height: '50px'
    },
    logo: {
        Width: 140,
        Height: 47,
    },
    backgroundHeader: {
        backgroundColor: "#F3F3F3",
        position: "fixed",
        zIndex: 1000,
        top: 0,
        left: 0
    }
});

const TextLogo = Styled.div`

`;

const TextLogoTitle = Styled.div`
font-size: 25px;
font-weight: bold;
color: #821A3F;
margin-top: 10px;

@media (max-width: 4000px) and (min-width: 769px) {
    font-size:25px !important;
 }
 @media (max-width: 768px) {
    font-size:20px !important;
 }

`
const TextSubTitle = Styled.div`
font-size:20px;
color: #4C4C4C;

@media (max-width: 4000px) and (min-width: 769px) {
    font-size:20px !important;
 }
 @media (max-width: 768px) {
    font-size:15px !important;
 }

`

const LogoObservatorio = Styled.img`
    height:80px;
    widht:120px;
    padding:10px;
    margin-left:20px;

    @media (max-width: 698px){
        height:60px;
        widht:100px;
        margin-top:10px;
        margin-left:20px;
    }
`

const LogoDane = Styled.img`
height:80px;
widht:120px;
padding:10px;
margin-left:20px;

@media (max-width: 698px){
    height:60px;
    widht:90px;
    margin-top:10px;
    margin-left:20px;
}
`

const Header = () => {
    const classes = useStyle();
    return (

        <header>
            <Grid container className={classes.backgroundHeader}>
                <Grid container item xs={7} sm={7} md={6} lg={6} direction="row">
                    <a href="/Observatorio">
                        <LogoObservatorio className={classes.logoObservatorio} src={logoObservatorio} />
                    </a>
                    <TextLogo xs={12} sm={12} >
                        <TextLogoTitle >
                            Observatorio
                        </TextLogoTitle>
                        <TextSubTitle className={classes.subtitleObservatorio} >Inmobiliario Nacional</TextSubTitle>
                    </TextLogo>


                </Grid>
                <Grid container item xs={5} sm={5} md={6} lg={6} justifyContent="flex-end" >
                    <a href="https://www.dane.gov.co/"> <LogoDane className={classes.logo} src={logoDane} /></a>
                </Grid>
                <Navbar></Navbar>
            </Grid>
        </header>

    );
}



export default Header;
