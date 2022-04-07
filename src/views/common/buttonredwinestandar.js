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

boton1: {
    borderRadius: "2vh",
    backgroundColor: "#B4094E",
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

  boton2: {
    borderRadius: "2vh",
    backgroundColor: "#df396b",
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
    if (props.Values == 1) {
        return (   
            <Button className={classes.boton} disableElevation href={props.href} target="_blank">{props.Title}</Button>
            )
    }
    if (props.Values == 5) {
        return (
          <Button
            className={classes.boton1}
            disableElevation
            href={props.href}
          >
            {props.Title}
          </Button>
        );
      }

      if (props.Values == 6) {
        return (
          <Button
            className={classes.boton2}
            disableElevation
            href={props.href}
          >
            {props.Title}
          </Button>
        );
      }
    return (   
        <Button className={classes.boton} disableElevation href={props.href}>{props.Title}</Button>
        )
}

export default ButtonRedWine
