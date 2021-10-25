import React from 'react';
import {  Grid } from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';
import logoDane from "../img/logo-dane.svg";
import logoObservatorio from "../img/logo-observatorio.svg";
import Styled from "styled-components";


const useStyle = makeStyles({
    root: {
        height: '50px'
    },
    logo: {
        Width: 140,
        Height: 47,
        marginTop:20,
        marginBottom:10,
        marginRight:5
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

const TextLogo = Styled.div`
@media (max-width: 1300px) and (min-width: 769px) {
    font-size:15px !important;
 }
`;
const Header = () => {
    const classes = useStyle();
    return (

        <header>
            <Grid container className={classes.backgroundHeader}>
                <Grid container item xs={7} sm={7} md={6} lg={6} direction="row">
                        <img className={classes.logoObservatorio}  src={logoObservatorio} />
                    <TextLogo>
                    <div className={classes.titleObservatorio} >
                               Observatorio
                               </div>    
                               <div className={classes.subtitleObservatorio} >Inmobiliario Nacional</div> 
                    </TextLogo>


                </Grid>
                <Grid container item xs={4} sm={4} md={6} lg={6} justifyContent="flex-end">
                        <img className={classes.logo} src={logoDane} />
                </Grid>
            </Grid>
        </header>

    );
}



export default Header;
