import { Grid, makeStyles, useMediaQuery } from "@material-ui/core";
import React, { Component } from "react";
import * as Values from 'Variables/values';
import Small from "img/Small.svg";

const useStyle = makeStyles({
    imagen_top:{    
        width: "100% !important",
        height: "40vh",
        backgroundSize: "85%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${Small})`,       
        backgroundPosition: "center",
         
      },      
      imagen_top2:{     
         width: "100%",
         height: "50vh",
         backgroundSize: "100%",
         backgroundRepeat: "no-repeat",
         backgroundImage: `url(${Small})`,       
         backgroundPosition: "center center",
         flexBasis: "100% !important",
         maxWidth: "100% !important",
      },
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
})

const Imagen = () => {
    const classes = useStyle();
    const matches = useMediaQuery('(min-width:769px)');
    var estilo = null;
    {matches ? estilo=classes.imagen_top :estilo=classes.imagen_top2}   
    return(
      <Grid item container xs={4} className={estilo}>   
      </Grid>  
    )  
  } 

const Catastro = () => {
    const classes = useStyle();
    return(
        <Grid container direction="column" className={classes.gridglobal}>
            <Grid container justifyContent="center"
        alignItems="center">
                    <h3 className={classes.titleStyle}>Catastro Multipropósito</h3>
            </Grid>
            <Grid container direction="row">
                <Grid item container xs >
                    <p className={classes.contentrulesp}>
                    La Política e implementación del Catastro con enfoque Multipropósito, es uno de los productos transformacionales de mayor prioridad para el Gobierno Nacional, el cual tiene como enfoque la conformación de un Sistema:
                    </p>  
                    <p className={classes.contentrulesp}>
                      1. Integral
                      <br/>
                      2. Completo
                      <br/>
                      3. Actualizado
                      <br/>
                      4. Confiable
                      <br/>
                      5. Digital e
                      <br/>
                      6. Interoberable con otros Sistemas de Información
                    </p>       
                    <p className={classes.contentrulesp}>
                      Esta nueva política busca que el catastro trascienda  de una óptica meramente fiscal y sea considerado como un instrumento estratégico para el apoyo en la toma de decisiones en lo concerniente al Ordenamiento Territorial.
                    </p>       
                </Grid>
                <Imagen/> 
            </Grid>
            <Grid container>
                <p className={classes.contentrulesp}>
                  Con la implementación del catastro multipropósito, se contribuirá con:
                </p>  
                <p className={classes.contentrulesp}>
                    1. Seguridad Jurídica: Integración con la Información de Registro Público
                    <br/>
                    2. Eficiencia del Mercado Inmobiliario
                    <br/>
                    3. Desarrollo Territorial: Mejor asignación de recursos, identificación de necesidades de grupos poblacionales (educación, acceso a servicios públicos, infraestructura,  regularización de la propiedad, ordenamiento ambiental, social y territorial, entre otros).
                </p>  
                <p className={classes.contentrulesp}>
                    El Departamento Administrativo Nacional de Estadística - DANE, viene trabajando en la política de Catastro Multipropósito y en las recomendaciones del Conpes 4007 de 2020, para el fortalecimiento del Sistema de Administración del Territorio – SAT, el cual utiliza el catastro como herramienta  para el desarrollo sostenible del territorio incorporando las 4 funciones principales de la administración del territorio (tenencia, valor, uso y desarrollo), en lugar de gestionar estas funciones de forma separada, como sucede actualmente en Colombia. 
                </p>  
                <p className={classes.contentrulesp}>
                    Lo anterior contribuirá a que las decisiones sobre el territorio sean informadas y consecuentes con los derechos, restricciones y responsabilidades sobre el mismo, con un enfoque de desarrollo sostenible y tomando en consideración las particularidades y diversidad del territorio colombiano, y por otra, que los servicios relativos al territorio sean eficientes, eficaces y accesibles.
                </p>  
            </Grid>
        </Grid>  
    )
}

export default Catastro;