import { Grid, makeStyles, useMediaQuery } from "@material-ui/core";
import React, { Component } from "react";
import * as Values from 'Variables/values';
import Small from "img/Small.svg";

const useStyle = makeStyles({
      gridglobal:{
        padding: "0 10vw 0 10vw",        
      },
      titleStyle:{
        color: Values.Redwinecolor,
        fontFamily: Values.SourceRoboto,
        fontWeight: "bold",
        fontSize: Values.SizeTitle,
        padding: Values.PaddingTitleText,
      },
      contentrulesp:{
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeText,
        textAlign: "justify",  
        margin:"1em 0 0 0", 
      }, 
      num:{
        backgroundColor: "#4c4c4c",
        borderRadius: "50%",
        textAlign: "center",
        color: Values.TextButton,
        fontFamily: Values.SourceWorksans,
        fontWeight: "bold",
        fontSize: Values.SizeSubtitle,
        width: "3.5rem",
        height: "3.5rem",
        padding: "1vh 2vh",
      },
      numpadding:{
        paddingTop: "6%",
      },
      titleStyle2:{
        color: Values.Redwinecolor,
        fontFamily: Values.SourceRoboto,
        fontWeight: "bold",
        fontSize: Values.SizeSubtitle,
        padding: "0 0 1em 0",
        textAlign: "center",
      },
      textStyle: {
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeText,
        textAlign: "center",
        padding: "0 1vw 0 1vw",
      },
      numeros:{
        height: "100%",
        flexGrow: "1",
        maxWidth: "100%",
        flexBasis:"0",
      }
})


const avaluos = () => {
    const classes = useStyle();
    return(
        <Grid container direction="column" className={classes.gridglobal}>
            <Grid container>
                    <h3 className={classes.titleStyle}>Catastro Multipropósito</h3>
            </Grid>
            <Grid container>
                <p className={classes.contentrulesp}>
                  Para la determinación de Avalúos Catastrales, se hace necesario el calculo del valor comercial de los inmuebles, los cuales se pueden calcular por los siguientes metodos:--
                </p>          
            </Grid>
            <Grid container direction="row" className={classes.numpadding} >
                <Grid item container direction="column" xs justifyContent="center" alignItems="center" className={classes.numeros}>
                    <Grid container justifyContent="center">
                        <h1 className={classes.num}>1</h1>
                    </Grid>
                    <Grid container direction="column" justifyContent="center" alignItems="center">
                        <h1 className={classes.titleStyle2}>Método de Comparacion o de Mercado</h1>
                        <p className={classes.textStyle}>
                        Corresponde al estudio de ofertas o transacciones recientes de bienes similares o comparales al objeto de avaluo
                        </p>
                    </Grid>
                </Grid>
                <Grid item container direction="column" xs justifyContent="center" alignItems="center" className={classes.numeros}>
                    <Grid items container xs justifyContent="center">
                        <h1 className={classes.num}>2</h1>
                    </Grid>
                    <Grid container direction="column" justifyContent="center" alignItems="center">
                        <h1 className={classes.titleStyle2}>Método de Capitalización de rentas o Ingresos</h1>
                        <p className={classes.textStyle}>
                        Es la determinación del valor comercial de un inmueble a partir del análisis de rentas o ingresos del mismo, puede ser del objeto de estudio o de bienes similares
                        </p>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction="column" xs justifyContent="center" alignItems="center" className={classes.numeros, classes.numpadding}>
                    <Grid items container xs justifyContent="center">
                        <h1 className={classes.num}>3</h1>
                    </Grid>
                    <Grid container direction="column" justifyContent="center" alignItems="center">
                        <h1 className={classes.titleStyle2}>Método de Costo de Reposición</h1>
                        <p className={classes.textStyle}>
                        Consiste en establecer el vlor comercial de una construcción a patir de la depreciación de una estimacion del costo de sus materiales
                        </p>
                    </Grid>
            </Grid>
            <Grid container direction="row" className={classes.numpadding} >
                <Grid item container direction="column" xs justifyContent="center" alignItems="center" className={classes.numeros}>
                    <Grid container justifyContent="center">
                        <h1 className={classes.num}>4</h1>
                    </Grid>
                    <Grid container direction="column" justifyContent="center" alignItems="center">
                        <h1 className={classes.titleStyle2}>Método Residual</h1>
                        <p className={classes.textStyle}>
                        Consiste en establecer el valor comercial de un terreno, mediante la estimación del valor total de las ventas de un proyecto de construcción, acorde a la normatividad urbanística vigente y de conformidad con el mercado del bien final vendible.
                        </p>
                    </Grid>
                </Grid>
                <Grid item container direction="column" xs justifyContent="center" alignItems="center" className={classes.numeros}>
                    <Grid items container xs justifyContent="center">
                        <h1 className={classes.num}>5</h1>
                    </Grid>
                    <Grid container direction="column" justifyContent="center" alignItems="center">
                        <h1 className={classes.titleStyle2}>Otros</h1>
                        {/* <p className={classes.textStyle}>
                        Es la determinación del valor comercial de un inmueble a partir del análisis de rentas o ingresos del mismo, puede ser del objeto de estudio o de bienes similares
                        </p> */}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>  
    )
}

export default avaluos;