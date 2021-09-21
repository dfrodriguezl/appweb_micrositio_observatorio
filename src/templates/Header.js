import React from 'react';
import Styled from "styled-components";
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import logoDane from "../img/DANE__Geovisor__icon__logoDANE__01.svg";
import logoObservatorio from "../img/Logo_Observatorio_inmobiliario_Opcion1.svg";
import aumentarFuente from "../img/DANE__Geovisor__icon__fontIncrease.svg";
import disminuirFuente from "../img/DANE__Geovisor__icon__fontDecrease.svg";
import sonido from "../img/DANE__Geovisor__icon__listen.svg";


const useStyle = makeStyles({
    root: {
        height: '50px'
    },
    logo: {
        maxWidth: 250,
        marginRight: '10px'
    },
    accesibilidad:{
        width: 22,
        height:22,
        marginTop:10,
        marginRight:5,
        borderRadius: '50%',
        border: '1px solid #E6E6E6'     
    },
    TextField:{
        marginTop: 10,
        marginRight:5
       
    }
});


const Header = () => {
    const classes = useStyle();
    return ( 

        <header>
            
            <Grid container>
                <Grid container item sm={4}>
                   
                        <Grid item  sm ={6}>
                            <img className={classes.logo} src= {logoDane} />
                        </Grid>
                        <Grid item sm ={6}>
                            <img className={classes.logo} src= {logoObservatorio} />        
                        </Grid>
                    
                </Grid>
                <Grid container item sm={8} justifyContent = "flex-end">                
                   
                            <TextField className={classes.TextField} id="filled-basic" label="Buscar" variant="filled" type= "text"  />
                            <img className={classes.accesibilidad} src= {aumentarFuente} />
                            <img className={classes.accesibilidad} src= {disminuirFuente} />
                            <img className={classes.accesibilidad} src= {sonido} />
                    
                </Grid>
            </Grid>
            
        </header>

     );
}
 
export default Header;
