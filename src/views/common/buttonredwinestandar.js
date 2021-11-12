import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, makeStyles } from '@material-ui/core';
import * as Values from 'Observatorio/Variables/values';

const useStyle = makeStyles({
  
boton: {
    borderRadius: "2vh",
    backgroundColor: Values.Redwinecolor,
    color: Values.TextButton,
    fontFamily: Values.SourceWorksans,
    textTransform: "capitalize",
    transition:"all 0.8s ease-out",
    cursor: "pointer",
    width: "max-content",
    fontSize: "calc(1em + 0.3vh)",
    borderRadius: "2vh",
    fontWeight: "bold",
    "&:hover":{
        backgroundColor: Values.HoverButton,
        border:"none",
    }
},
});

const ButtonRedWine = (props) => {    
    const classes = useStyle();
    console.log(props)
    if (props.Values == 1) {
        return (   
            <Button className={classes.boton} disableElevation href={props.href} target="_blank">{props.Title}</Button>
            )
    }
    return (   
        <Button className={classes.boton} disableElevation href={props.href}>{props.Title}</Button>
        )
}

export default ButtonRedWine
