import { Grid, makeStyles } from '@material-ui/core';
import React, { Component } from 'react';
import * as Values from '../../Variables/values';
import triangles from "../../img/triangles.svg";
import CardsMaps from '../common/Cards';


const useStyle = makeStyles({
    
    gridglobal:{
        padding: "0 10% 0 10%",
      },
    
    Titleh3:{
        color: Values.TextButton,
        fontFamily: Values.SourceWorksans,
        fontSize: Values.SizeSubtitle,
        textAlign: "center",   
        padding: "1em 0 0.5em 10%",
      },
    
      Textp:{
        color: Values.TextButton,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeText,
        textAlign: "start",  
        margin: "0 10% 1.5em 10%",
      },

      imagen_top:{
        width: "100%",    
        backgroundRepeat: "no-repeat",
        backgroundImage:`url(${triangles})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",         
      },
});

const Topmaps = () => {
    const classes = useStyle();
    return (
        <Grid container className={classes.imagen_top}>
            <h3 className={classes.Titleh3}>{Values.TitleGeovisores}</h3>
            <p className={classes.Textp}>{Values.TextGeovisor}</p>
        </Grid>
    );
}
const maps = () => {
    const classes = useStyle();
    return (
        <Grid>
            <Topmaps/>
            <CardsMaps/>
        </Grid>
    );
}

export default maps
