import { Grid, makeStyles, Paper } from '@material-ui/core';
import React, { Component } from 'react';
import * as Values from '../../Variables/values';
import triangles from "../../img/triangles.svg";


const useStyle = makeStyles({
    
    gridglobal:{
        padding: "3% !important",
      },
    
    Titleh3:{
        color: Values.TextButton,
        fontFamily: Values.SourceWorksans,
        fontWeight: "bold",
        fontSize: "calc(0.5em + 2.2vh)",
        textAlign: "center",   
        padding: "1em 0 1em 10%",
      },
    
      Textp:{
        color: Values.TextButton,
        fontFamily: Values.SourceRoboto,
        fontWeight: "bold",
        fontSize: "calc(1em + 1.5vh)",
        textAlign: "start",  
        margin: "0 10% 1em 10%",
      },

      paper: {
        height: "30vw",
        width: "25vw",
      },
});

const Cardsmapas = () => {
    const classes = useStyle();
    return (
        <Grid container>
            <Grid container justifyContent="center">
              {[0, 1, 2,3,4,5].map((value) => (
                <Grid item container direction="column" xs key={value} className={classes.gridglobal}>
                  <Paper className={classes.paper}/>
                </Grid>
              ))}
            </Grid>
        </Grid>
      );
}

export default Cardsmapas