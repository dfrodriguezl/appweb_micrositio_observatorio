import React, { Component } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import * as Values from 'Observatorio/Variables/values';

const useStyle = makeStyles({
  
itemRedWine: {
    padding: "0.3em 1em 0.3em 1em",
    borderRadius: "2vh",
    backgroundColor: Values.Redwinecolor,
    color: Values.TextButton,
    fontFamily: Values.SourceWorksans,
    textTransform: "capitalize",
    transition:"all 0.8s ease-out",
    cursor: "pointer",
    margin: "10% 0 4% 0",
    width: "max-content",
    fontSize: "calc(1em + 0.3vh)",
    borderRadius: "2vh",
    fontWeight: "bold"
},
});

const ItemRedWine = (props) => {    
    const classes = useStyle();
    console.log(props)
    return(
        <div className={classes.itemRedWine} disableElevation target="_blank">{props.Text}</div>
    )
 
}

export default ItemRedWine
