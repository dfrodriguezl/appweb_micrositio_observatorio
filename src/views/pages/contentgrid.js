import { Grid, makeStyles, useMediaQuery } from "@material-ui/core";
import React, { Component } from "react";
import bloques from "img/Building.svg";
import figure from "img/Career.svg";
import lawyer from "img/Lawyer.svg";
import Maintenance from "img/Maintenance.svg";
import ButtonRedWine from "common/buttonredwine";
import * as Values from 'Variables/values';

const useStyle = makeStyles({
  
marginbutton:{
  padding: "0 2em 0 3em",
},

numpadding:{
  paddingTop: "6%",
},

numpaddingVentajas:{
  padding: "5% 0% 0% 10%",
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

  gridglobal:{
    padding: "0 10vw 0 10vw",    
  },
  
  marginbuttom:{
    padding: "5% 0 5% 0",
    backgroundColor:Values.TextButton,
  },

  margintop:{
    padding: "0 0 5% 0",
    backgroundColor:"#f4f4f4",
  },

  textStyle: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "center",
    padding: "0 1vw 0 1vw",
  },

  titleStyle:{
    color: Values.Redwinecolor,
    fontFamily: Values.SourceWorksans,
    fontWeight: "bold",
    fontSize: Values.SizeSubtitle,
    padding: "2em 0 0.5em 0",
  },

  titleStyle2:{
    color: Values.Redwinecolor,
    fontFamily: Values.SourceWorksans,
    fontWeight: "bold",
    fontSize: Values.SizeSubtitle,
    padding: "0 0 1em 0",
  },

  imagen_top:{    
       width: "100% !important",
        height: "66vh",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${bloques})`,       
        backgroundPosition: "center center",
        margin: "0 0 5.8% 0",
        
  },

  imagen_top2:{     
        width: "100%",
        height: "66vh",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${bloques})`,       
        backgroundPosition: "center center",
        flexBasis: "100% !important",
        maxWidth: "100% !important",
  },

  Titleh3:{
    color: Values.Redwinecolor,
    fontFamily: Values.SourceWorksans,
    fontWeight: "bold",
    fontSize: Values.SizeTitle,  
    padding: "2em 0 1em 0",
  },

  Textp:{
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText, 
    margin: "1em 0 1em 0", 
    backgroundColor: Values.Colormid,
  },

   containerImg:{
     width: "100% !important",
     height: "51vh",
     backgroundRepeat: "no-repeat",
     backgroundImage: `url(${figure})`,
     backgroundSize: "100% 100%",
     backgroundPosition: "center center",
  },

  containerImgNormativa:{
    width: "100% !important",
    height: "51vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${lawyer})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "center center",
 },

 containerImgNormativa2:{
  width: "100% !important",
  height: "51vh",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${lawyer})`,
  backgroundSize: "100% 100%",
  backgroundPosition: "center center",
  flexBasis: "100% !important",
  maxWidth: "100% !important",
},

  containerImg2:{
    display:"none",
 },

  containerTitle:{
    minHeight: "13vh"
  },

  contentrulesh1:{
    color: Values.Redwinecolor,
    fontFamily: Values.SourceWorksans,
    fontSize: Values.SizeTitle,
    textAlign: "center", 
    padding: "1em 0 1em 0",
},

contentrulesp:{
  color: Values.TextParagraph,
  fontFamily: Values.SourceRoboto,
  fontSize: Values.SizeText,
  textAlign: "justify",  
  padding: "1em 10vw 1em 10vw", 
}, 

imagen_uso:{    
  width: "100% !important",
   height: "58vh",
   backgroundSize: "100%",
   backgroundRepeat: "no-repeat",
   backgroundImage: `url(${Maintenance})`,       
   backgroundPosition: "center center",
   margin: "0 0 5.8% 0",
   
},

});

const Imagen = () => {
  const classes = useStyle();
  const matches = useMediaQuery('(min-width:660px)');
  var estilo = null;
  {matches ? estilo=classes.imagen_top :estilo=classes.imagen_top2}   
  return(
    <Grid item container direction="column" xs={8} className={estilo}>   
    </Grid>  
  )

} 

const ImagenNormativa = () => {
  const classes = useStyle();
  const matches = useMediaQuery('(min-width:660px)');
  var estilo = null;
  {matches ? estilo=classes.containerImgNormativa:estilo=classes.containerImgNormativa}   
  return(
    <Grid item container direction="column" className={estilo}>   
    </Grid>  
  )

} 

const ImagenCenter = () => {
  const classes = useStyle();
  const matches = useMediaQuery('(min-width:769px)');
  var estilo = null;
  {matches ? estilo=classes.containerImg:estilo=classes.containerImg2}   
  return(
    <Grid item container direction="column" xs className={estilo}></Grid>
    
  )
} 

const ImagenBottom = () => {
  const classes = useStyle();
  const matches = useMediaQuery('(min-width:769px)');
  var estilo = null;
  {matches ? estilo=classes.imagen_uso:estilo=classes.containerImg2}   
  return(
    <Grid item container direction="column" xs className={estilo}></Grid>
    
  )
} 

const Top_content = () => {
  const classes = useStyle();
  return(
    <Grid
    container
    direction="row"    
    justifyContent="center"
    alignItems="center">
      <Grid container>
      <h3 className={classes.Titleh3}>{Values.TitleHomeTop}</h3>
      </Grid>
    <Grid item container direction="column" xs>    
    <Grid>
    <p className={classes.Textp}>{Values.TextHomeTop}</p>
    </Grid>
    <Grid container justifyContent="center"
    alignItems="center">
    <ButtonRedWine Title="Acerca de" href="/About"/>
    </Grid>
    </Grid>  
    <Imagen/>
  </Grid>
  
  );
  };

const Center_content = () => {
    const classes = useStyle();
    return (
    <Grid container className={classes.margintop}>
      <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={classes.containerTitle}
        >
          <h1 className={classes.titleStyle}>Ventajas del Observatorio</h1>
      </Grid>
      <Grid item container direction="column" xs>
      <Grid          
          container
          direction="column"          
          justifyContent="center"
          alignItems="center"
          className={classes.numpadding}
        >
          <h1 className={classes.num}>1</h1>
        </Grid>
        <Grid          
          container
          direction="column"          
          justifyContent="center"
          alignItems="center"
        >
          <h1 className={classes.titleStyle2}>Seguimiento</h1>
          <p className={classes.textStyle}>Seguimiento proactivo de transacciones y cambios en el tiempo.</p>
        </Grid>
        <Grid          
          container
          direction="column"          
          justifyContent="center"
          alignItems="center"
          className={classes.numpadding}
        >
          <h1 className={classes.num}>3</h1>
        </Grid>
        <Grid
          item
          xs
          container
          direction="column"
          justifyContent="center"
          alignItems="center"         
        >
          <h1 className={classes.titleStyle2}>Comunicación</h1>
          <p className={classes.textStyle}>
            Comunicación directa y en doble via con los ciudadanos mediante
            servicios digitales para segurar una actualización permanente.
          </p>
        </Grid>
      </Grid>
      <ImagenCenter/>
      <Grid item container direction="column" xs>
      <Grid          
          container
          direction="column"          
          justifyContent="center"
          alignItems="center"
          className={classes.numpadding}
        >
          <h1 className={classes.num}>2</h1>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <h1 className={classes.titleStyle2}>Integración</h1>
          <p className={classes.textStyle}>
            Integración con diversas fuentes de información públicas y privadas
            relativas a la planificación, el uso, las restricciones y los
            servicios públicos.
          </p>
        </Grid>
        <Grid          
          container
          direction="column"          
          justifyContent="center"
          alignItems="center"
          className={classes.numpadding}
        >
          <h1 className={classes.num}>4</h1>
        </Grid>
        <Grid
          item
          xs
          container
          direction="column"     
          justifyContent="center"
          alignItems="center"     
        >
          <h1 className={classes.titleStyle2}>LADM</h1>
          <p className={classes.textStyle}>
            Basado en información catastral multipropósito compatible con el
            estandar LADM
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Bottom_content = () => {
  const classes = useStyle();
  return(
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={classes.marginbuttom}
    >
      <h1 className={classes.contentrulesh1}>Normatividad</h1>
      <ImagenNormativa/>
      <p className={classes.contentrulesp}>
        Los observatorios inmobiliarios son una práctica ya implementada en
        Colombia por parte de algunos Catastros que lo han venido impulsando como
        mecanismo de visibilidad de información, captura de datos de diferentes
        fuentes e insumo para la generación de nueva información resultante de su
        análisis.
      </p>
      <Grid>
      <Grid container direction="row" justifyContent="center"
      alignItems="center">
      <Grid className={classes.marginbutton}>
      <ButtonRedWine Title="LEY 1955 DE 2019"
        href="https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%20148%20DEL%2004%20DE%20FEBRERO%20DE%202020.pdf"
        Values="1"/>
      </Grid>
      <Grid className={classes.marginbutton}>
      <ButtonRedWine Title="LEY 1955 DE 2019"
        href="https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%20148%20DEL%2004%20DE%20FEBRERO%20DE%202020.pdf"
        Values="1"/>
      </Grid>
      </Grid>
      <Grid container justifyContent="center"
      alignItems="center">
      <ButtonRedWine Title="DECRETO 148 DE 2020"
        href="https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%20148%20DEL%2004%20DE%20FEBRERO%20DE%202020.pdf"
        Values="1"/>
      </Grid>
      </Grid>
    </Grid>
  );
}

const Bottom_content_footer = () =>{
  const classes = useStyle();
  return(
    <Grid container className={classes.margintop}>
      <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={classes.containerTitle}
        >
          <h1 className={classes.titleStyle}>Ventajas del Observatorio</h1>
      </Grid>
      <Grid item container direction="column" xs>
      <Grid          
          container
          direction="row"          
          justifyContent="flex-start"
          alignItems="center"
          className={classes.numpaddingVentajas}
        >
          <h1 className={classes.num}>1</h1>
          <p className={classes.textStyle}>Calculo de avaluos</p>
        </Grid>
        <Grid          
          container
          direction="row"          
          justifyContent="flex-start"
          alignItems="center"
          className={classes.numpaddingVentajas}
        >
          <h1 className={classes.num}>2</h1>
          <p className={classes.textStyle}>Registro de ofertas inmobiliarias</p>
        </Grid>
        <Grid          
          container
          direction="row"          
          justifyContent="flex-start"
          alignItems="center"
          className={classes.numpaddingVentajas}
        >
          <h1 className={classes.num}>3</h1>
          <p className={classes.textStyle}>Seguimiento dinamica inmobiliaria</p>
        </Grid>
        <Grid          
          container
          direction="row"          
          justifyContent="flex-start"
          alignItems="center"
          className={classes.numpaddingVentajas}
        >
          <h1 className={classes.num}>4</h1>
          <p className={classes.textStyle}>Integración información estadística</p>
        </Grid>
        <Grid          
          container
          direction="row"          
          justifyContent="flex-start"
          alignItems="center"
          className={classes.numpaddingVentajas}
        >
          <h1 className={classes.num}>5</h1>
          <p className={classes.textStyle}>Publicidad de datos oficiales</p>
        </Grid>
        <Grid          
          container
          direction="row"          
          justifyContent="flex-start"
          alignItems="center"
          className={classes.numpaddingVentajas}
        >
          <h1 className={classes.num}>6</h1>
          <p className={classes.textStyle}>Fuente de investigación</p>
        </Grid>
      </Grid>
      <ImagenBottom/>
    </Grid>
  )
}

const ContentGrid = () =>{
  const classes = useStyle(); 
  return(
    <Grid container className={classes.gridglobal}
    justifyContent="center"
    alignItems="center">
      <Top_content/>
      <Center_content/>
      <Bottom_content/>
      <Bottom_content_footer/>
    </Grid>
  );
} 

export default ContentGrid;