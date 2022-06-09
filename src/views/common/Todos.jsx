import React from "react";
import {
    Grid,
    makeStyles,
    useMediaQuery,
    Card,
    CardContent,
    CardMedia,
    Typography,  
    Modal,
    Box,
    Button,
  } from "@material-ui/core";
import * as Values from "Observatorio/Variables/values";

const useStyle = makeStyles({
    botonchat: {
        borderRadius: "2vh",
        backgroundColor: Values.Redwinecolor,
        color: Values.TextButton,
        fontFamily: Values.SourceWorksans,
        textTransform: "capitalize",
        transition: "all 0.8s ease-out",
        cursor: "pointer",
        margin: "0.3em 0.3em 0 0.3em",
        width: "max-content",
        fontSize: "calc(0.7em + 0.3vh)",
        fontWeight: "bold",
        height: "4vh",
        padding: "0.5em 1em",
        "&:hover": {
          backgroundColor: Values.HoverButton,
          border: "none",
        },
      },
})

const Todos = () => {
    const classes = useStyle();
    return (
        <Grid>
            <Grid container direction="row">
            <Button href="/observatorio/Acerca" className={classes.botonchat}>¿Que es el OIN?</Button>
            <Button href="/observatorio/Catastromultiproposito/Metodosavaluos"  className={classes.botonchat}>Métodos de avalúos</Button>
            <Button href="/observatorio/Comitetecnico" className={classes.botonchat}>Comité Técnico Asesor</Button>
            <Button href="/observatorio/Servicios" className={classes.botonchat}>Servicios OIN</Button>
            <Button href="/observatorio/Servicios/estadisticas/Ceed" className={classes.botonchat}>CEED</Button>
            <Button href="/observatorio/Mapas" className={classes.botonchat}>Geovisor</Button>
            <Button href="/observatorio/Repositorio" className={classes.botonchat}>Repositorio</Button>
            <Button href="/observatorio/Estadisticasexperimentales" className={classes.botonchat}>Estadísticas experimentales</Button>
            <Button href="/observatorio/register" className={classes.botonchat}>Registro usuario</Button>
            <Button href="/observatorio/login" className={classes.botonchat}>Ingreso usuario</Button>
            </Grid>
        </Grid>
    )    
}

export default Todos;