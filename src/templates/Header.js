import React from 'react';
import {  Grid } from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';
import logoDane from "../img/logo-dane.svg";
import logoObservatorio from "../img/logo-observatorio.svg";



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
