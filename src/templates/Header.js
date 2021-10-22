import React from 'react';
import Styled from "styled-components";
import { Box, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import {
    makeStyles,
    ThemeProvider,
    createTheme
} from '@material-ui/core/styles';
import { AiOutlineSearch } from "react-icons/ai";
import logoDane from "../img/logo-dane.svg";
import logoObservatorio from "../img/logo-observatorio.svg";
import aumentarFuente from "../img/DANE__Geovisor__icon__fontIncrease.svg";
import disminuirFuente from "../img/DANE__Geovisor__icon__fontDecrease.svg";
import sonido from "../img/DANE__Geovisor__icon__listen.svg";


const useStyle = makeStyles({
    root: {
        height: '50px'
    },
    logo: {
        Width: 140,
        Height: 47,
        marginTop:20
    },
    logoObservatorio:{
        maxWidth:406,
        maxHeight:81,
        marginLeft:30
    },
    backgroundHeader:{
        backgroundColor:"#F3F3F3"
    },
    titleObservatorio:{
        fontSize:25,
        fontWeight:'bold',
        color:"#821A3F",
        marginLeft:50,
        marginTop:10
      },
      subtitleObservatorio:{
        fontSize:25,
        marginLeft:50
      }
    
});


const Header = () => {
    const classes = useStyle();
    return (

        <header>

            <Grid container className={classes.backgroundHeader}>
                <Grid container item xs={6} sm={6} direction="row">
                    <Grid item xs={12} sm={1}>
                        <img className={classes.logoObservatorio}  src={logoObservatorio} />
                    </Grid>
                    <Grid item xs={12} sm={6} direction="column">
                           <div className={classes.titleObservatorio} >
                               Observatorio
                               </div>    
                               <div className={classes.subtitleObservatorio} >Inmobiliario Nacional</div>   
                     </Grid>

                </Grid>
                <Grid container item xs={6} sm={6} justifyContent="flex-end">
                    <Grid item xs={12} sm={3}>
                        <img className={classes.logo} src={logoDane} />
                    </Grid>
                </Grid>
            </Grid>

        </header>

    );
}



export default Header;
