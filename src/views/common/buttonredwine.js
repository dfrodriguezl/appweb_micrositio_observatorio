import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
boton: {
    padding: "1vh",
    borderRadius: "2vh",
    backgroundColor: "#821a3f",
    color: "white",
    fontWeight: "bold",
    fontFamily: "Work sans",
    textTransform: "capitalize",
    transition:"all 0.8s ease-out",
    cursor: "pointer",
    borderRadius: 3,
    "&:hover":{
        backgroundColor: "#3e071a",
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

