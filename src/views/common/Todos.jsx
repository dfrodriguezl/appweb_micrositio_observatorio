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
import {  useNavigate } from "react-router-dom";

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
    const history = useNavigate();
    function rutas(idd) {
      history(idd.target.offsetParent.id)
    }
    return (
        <Grid>
            <Grid container direction="row">
            <Button id={'/observatorio/Acerca'} onClick={rutas} className={classes.botonchat}>¿Que es el OIN?</Button>
            <Button id='/observatorio/Catastromultiproposito/Metodosavaluos' onClick={rutas} className={classes.botonchat}>Métodos de avalúos</Button>
            <Button id="/observatorio/Comitetecnico" onClick={rutas} className={classes.botonchat}>Comité Técnico Asesor</Button>
            <Button id="/observatorio/Servicios" onClick={rutas} className={classes.botonchat}>Servicios OIN</Button>
            {/* <Button id="/observatorio/Servicios/estadisticas/Ceed" onClick={rutas} className={classes.botonchat}>CEED</Button> */}
            <Button id="/observatorio/Mapas" onClick={rutas} className={classes.botonchat}>Geovisor</Button>
            <Button id="/observatorio/Repositorio" onClick={rutas} className={classes.botonchat}>Repositorio</Button>
            <Button id="/observatorio/Estadisticasexperimentales" onClick={rutas} className={classes.botonchat}>Estadísticas experimentales</Button>
            <Button id="/observatorio/register" onClick={rutas} className={classes.botonchat}>Registro usuario</Button>
            <Button id="/observatorio/login" onClick={rutas} className={classes.botonchat}>Ingreso usuario</Button>
            </Grid>
        </Grid>
    )    
}

export default Todos;
