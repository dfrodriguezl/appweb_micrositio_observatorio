import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, makeStyles } from '@material-ui/core';
import * as Values from 'Variables/values';

const useStyle = makeStyles({
  
boton: {
    padding: "0 1em 0 1em",
    borderRadius: "2vh",
    backgroundColor: Values.Redwinecolor,
    color: Values.TextButton,
    fontWeight: "bold",
    fontFamily: Values.SourceWorksans,
    textTransform: "capitalize",
    transition:"all 0.8s ease-out",
    cursor: "pointer",
    margin: "3% 0 5% 0",
    width: "max-content",
    fontSize: "calc(1em + 1vh)",
    borderRadius: "2vh",
    "&:hover":{
        backgroundColor: Values.HoverButton,
        border:"none",
    }
},
});

const ButtonRedWine = (props) => {    
    const classes = useStyle();
    return (   
    <Button className={classes.boton} disableElevation href={props.href} target="_blank">{props.Title}</Button>
    )
}

export default ButtonRedWine

