import { Grid, makeStyles, useMediaQuery } from "@material-ui/core";
import React, { Component } from "react";
import * as Values from 'Observatorio/Variables/values';
import Small from "Observatorio/img/Small.svg";
import Transfer from "Observatorio/img/Transfer.svg";
import ImgPng from "Observatorio/img/Captura.svg";
import Business from "Observatorio/img/Business.svg";

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
      listyle:{
        paddingLeft:"0.6em"
      },
      imagen_Business:{    
        width: "100% !important",
        height: "40vh",
        backgroundSize: "85%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${Business})`,       
        backgroundPosition: "center",
         
      },    
      imagen_Business2:{     
         width: "100%",
         height: "50vh",
         backgroundSize: "100%",
         backgroundRepeat: "no-repeat",
         backgroundImage: `url(${Business})`,       
         backgroundPosition: "center center",
         flexBasis: "100% !important",
         maxWidth: "100% !important",
      },
      gridglobal:{
        padding: "0 10vw 3vw 10vw",        
      },
      gridglobalmovil:{
        padding: "0 5vw 3vw 5vw",        
      },
      circule:{
        margin: "0 0.5em 0 0vw",
        maxWidth: "17% !important",
        flexBasis: "8.333333% !important",        
      },
      
      titleStyle:{
        color: Values.Redwinecolor,
        fontFamily: Values.SourceRoboto,
        fontWeight: "bold",
        fontSize: Values.SizeTitle,
        padding: Values.PaddingTitleText,
        textAlign: "center",
      },
      textStyle: {
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeText,
        padding: "0 1vw 0 1vw",
      },
      textStyle2: {
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeText,
      },
      contentrulesp:{
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeText,        
        margin:"1em 0 1em 0", 
      }, 
      contentrulesp2:{
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: Values.SizeText,        
        margin:"1em 0 1em 0", 
        paddingLeft:"1em"
      },
      num: {
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
      margintop: {
        padding: "0 10vw 3vw 10vw",
        backgroundColor: "#f4f4f4",
      },
      margintopmovil: {
        padding: "0 5vw 3vw 5vw",
        backgroundColor: "#f4f4f4",
      },
      imagen_transfer:{    
        width: "100% !important",
        height: "40vh",
        backgroundSize: "85%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${Transfer})`,       
        backgroundPosition: "center",
         
      },   
      imagen_transfer2:{     
        width: "100%",
        height: "50vh",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${Transfer})`,       
        backgroundPosition: "center center",
        flexBasis: "100% !important",
        maxWidth: "100% !important",
     },

     imagen_png:{    
      width: "100% !important",
      height: "95vh",
      backgroundSize: "69%",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${ImgPng})`,       
      backgroundPosition: "center",       
    },   
    imagen_png2:{     
      width: "100%",
      height: "65vh",
      backgroundSize: "102%",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${ImgPng})`,       
      backgroundPosition: "center center",
      flexBasis: "100% !important",
      maxWidth: "100% !important",
   },
   imagen_png3:{    
    width: "100% !important",
    height: "95vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${ImgPng})`,       
    backgroundPosition: "center",       
  },   
     texto:{
      color: Values.Redwinecolor,
      fontFamily: Values.SourceRoboto,
      fontWeight: "bold",
      fontSize: Values.SizeSubtitle,
      padding: "0 0 1em 0",
      textAlign: "center",
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

  const ImagenBusiness = () => {
    const classes = useStyle();
    const matches = useMediaQuery('(min-width:769px)');
    var estilo = null;
    {matches ? estilo=classes.imagen_Business :estilo=classes.imagen_Business2}   
    return(
      <Grid item container xs={4} className={estilo}>   
      </Grid>  
    )  
  }

  const ImagenTransfer = () => {
    const classes = useStyle();
    const matches = useMediaQuery('(min-width:769px)');
    var estilo = null;
    {matches ? estilo=classes.imagen_transfer :estilo=classes.imagen_transfer2}   
    return(
      <Grid item container xs={4} className={estilo}>   
      </Grid>  
    )  
  } 

  const Imagenpng = () => {
    const classes = useStyle();    

  const matches = useMediaQuery("(max-width:769px)");
  const matches2 = useMediaQuery("(min-width:1281px)");  
  
  var estilo = null;
  {
    if (matches2) {
      estilo = classes.imagen_png;
    } else {
      if (matches) {
        estilo = classes.imagen_png2;
      } else {
        estilo = classes.imagen_png3;
      }
    }
  }
  return(
    <Grid item container xs={12} className={estilo}>   
    </Grid>  
  ) 
  } 

const ComparationModels = () =>{
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:769px)");
    var estilo = null;
    {
      matches?estilo=classes.margintop:estilo=classes.margintopmovil
    }
  return (
    <Grid
      container
      className={estilo}
      justifyContent="center"
      alignItems="center"
      id="comparacionModel"
    >
      <Grid container justifyContent="center" alignItems="center">
        <h3 className={classes.titleStyle}>Comparación Modelos Catastrales</h3>
      </Grid>
      <ImagenTransfer />
      <Grid container direction="row">
        <Grid container item xs>
          <Grid container justifyContent="center">
            <p className={classes.texto}>Modelo Catastral Anterior</p>
          </Grid>
          <ol className={classes.textStyle}>
            <li className={classes.listyle}>Esquema Anterior: IGAC - Desentralizacos - Delegados.</li>
            <li className={classes.listyle}>Delegados Disminución del presupuesto a Entidades Centralizadas.</li>
            <li className={classes.listyle}>Asimetria de Información.</li>            
            <li className={classes.listyle}>Rezago en la actualización de la Base Gravable.</li>            
            <li className={classes.listyle}>Disminución en la frecuencia de actualización de Catastros.</li>            
            <li className={classes.listyle}>Percepción negativa por parte de las ET y entidades de orden
            nacional respecto de la actual estrategia catastral, en especial
            sobre el rol del IGAC.</li>            
            <li className={classes.listyle}>Aproximaciones insostenibles del Multipróposito.</li>            
            <li className={classes.listyle}>Desarticulación con Registro.</li>            
            <li className={classes.listyle}>Baja Calidad Servicio al Ciudadano.</li>            
            <li className={classes.listyle}>Baja Capacidad Técnica.</li>            
            <li className={classes.listyle}>Desarticulación con Catastros.</li>            
            <li className={classes.listyle}>Sin Registro de la Informalidad.</li>            
            <li className={classes.listyle}>Metodología de Alto Costo.</li>            
          </ol>
        </Grid>
        <Grid container item xs>
          <Grid container justifyContent="center">
            <p className={classes.texto}>Premisas Catastro Multipróposito</p>
          </Grid>
          <ol className={classes.textStyle}>
            <li className={classes.listyle}>Nuevo esquema de desentralización.</li>            
            <li className={classes.listyle}>Estructura Funcional y operativa colaborativa.</li>            
            <li className={classes.listyle}>Modelo de operación mas eficiente.</li>
            <li className={classes.listyle}>Acciones transformacionales</li>
            <li className={classes.listyle}>Ajustes Normativos</li>
            <li className={classes.listyle}>Cambio de Módelo de Operación</li>
            <li className={classes.listyle}>Apertura Metodológica y Tecnológica</li>
            <li className={classes.listyle}>Simplificación en los Procesos</li>
            <li className={classes.listyle}>Esquemas Sostenibles</li>
            <li className={classes.listyle}>Seguridad Jurídica</li>
            <li className={classes.listyle}>Habilitación de Hestores Catastrales</li>
            <li className={classes.listyle}>Integración Catastro - Registro</li>
            <li className={classes.listyle}>Numero Unico Predial Registral - NUPRE</li>
            <li className={classes.listyle}>Repositorio de datos maestros basados en LADM</li>
            <li className={classes.listyle}>Sistema de Adminsitracion de Tierras - SAT</li>
            <li className={classes.listyle}>Mercado formal de Tierras</li>
            <li className={classes.listyle}>Simplificación de Tramites</li>            
          </ol>
        </Grid>
      </Grid>
      <Grid id="catastroRegulacion" container justifyContent="center" alignItems="center">
        <h3 className={classes.titleStyle}>
          Catastro para la Regularización de la Propiedad
        </h3>
      </Grid>
      <Imagenpng />
      <Grid id="catastroTomaDeDecisiones" container justifyContent="center" alignItems="center">
        <h3 className={classes.titleStyle}>
          Catastro Multipropósito para la Toma de Decisiones
        </h3>
      </Grid>
      <Grid container direction="row">
        <ImagenBusiness />
          <Grid item container xs>
            <p className={classes.contentrulesp}>
              La implementación de la Política de Catastro Multipropósito
              permitira obtener una línea base de información estrátegica del
              territorio, fundamental para la toma de decisiones y el diseño de
              políticas públicas rápidas y efectivas para la reconstrucción del
              tejido social y económico del país.
            </p>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid container item xs={1} className={classes.circule}>
              <h1 className={classes.num}>1</h1>
              </Grid>
              <Grid container item xs>
              <p className={classes.textStyle2}>
                Planificación Territorial: Base fundamental para la formulación de cualquier política y toma de decisiones en el Territorio
              </p>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid container item xs={1} className={classes.circule}>
              <h1 className={classes.num}>2</h1>
              </Grid>
              <Grid container item xs>
              <p className={classes.textStyle2}>
              Resiliencia: Superación ante la adversidad, recosntruccion del Tejido Social, Activación Económica
              </p>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid container item xs={1} className={classes.circule}>
              <h1 className={classes.num}>3</h1>
              </Grid>
              <Grid container item xs>
              <p className={classes.textStyle2}>
              Situaciones de Emergencia: Formulación de políticas públicas rápidas y efectivas para mitigar el riesgo ante contingencias.
              </p>
              </Grid>
            </Grid>
          </Grid>
      </Grid>
      <Grid />
    </Grid>
  );
}

const Catastro = () => {
    const classes = useStyle();
    const matches = useMediaQuery("(min-width:769px)");
    var estilo = null;
    {
      matches?estilo=classes.gridglobal:estilo=classes.gridglobalmovil
    }
    return(
        <Grid container direction="column" className={estilo}>
            <Grid container justifyContent="center" alignItems="center">
                    <h3 className={classes.titleStyle}>Catastro Multipropósito</h3>
            </Grid>
            <Grid container direction="row">
                <Grid item container xs >
                    <p className={classes.contentrulesp}>
                    La Política e implementación del Catastro con enfoque Multipropósito, es uno de los productos transformacionales de mayor prioridad para el Gobierno Nacional, el cual tiene como enfoque la conformación de un Sistema:
                    </p>  
                    <ol className={classes.contentrulesp2}>
                      <li className={classes.listyle}>Integral</li>
                      <li className={classes.listyle}>Completo</li>
                      <li className={classes.listyle}>Actualizado</li>
                      <li className={classes.listyle}>Confiable</li>
                      <li className={classes.listyle}>Digital e</li>
                      <li className={classes.listyle}>Interoberable con otros Sistemas de Información</li>
                    </ol>       
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
                <ol className={classes.contentrulesp2}>
                    <li className={classes.listyle}>Seguridad Jurídica: Integración con la Información de Registro Público</li>
                    <li className={classes.listyle}>Eficiencia del Mercado Inmobiliario</li> 
                    <li className={classes.listyle}>Desarrollo Territorial: Mejor asignación de recursos, identificación de necesidades de grupos poblacionales (educación, acceso a servicios públicos, infraestructura,  regularización de la propiedad, ordenamiento ambiental, social y territorial, entre otros).</li>
                </ol>  
                <p className={classes.contentrulesp}>
                    <strong>El Departamento Administrativo Nacional de Estadística - DANE</strong>, viene trabajando en la política de Catastro Multipropósito y en las recomendaciones del Conpes 4007 de 2020, para el fortalecimiento del Sistema de Administración del Territorio – SAT, el cual utiliza el catastro como herramienta  para el desarrollo sostenible del territorio incorporando las 4 funciones principales de la administración del territorio (tenencia, valor, uso y desarrollo), en lugar de gestionar estas funciones de forma separada, como sucede actualmente en Colombia. 
                </p>  
                <p className={classes.contentrulesp}>
                    Lo anterior contribuirá a que las decisiones sobre el territorio sean informadas y consecuentes con los derechos, restricciones y responsabilidades sobre el mismo, con un enfoque de desarrollo sostenible y tomando en consideración las particularidades y diversidad del territorio colombiano, y por otra, que los servicios relativos al territorio sean eficientes, eficaces y accesibles.
                </p>  
            </Grid>            
        </Grid>  
    )
}

const General = () => {
  const classes = useStyle();
   
  return(
      <Grid container>
        <Catastro/>
        <ComparationModels/>        
      </Grid>
  )
}

export default General;