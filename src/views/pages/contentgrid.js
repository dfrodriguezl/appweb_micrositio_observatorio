import { Grid, makeStyles, useMediaQuery,Tooltip, Button } from "@material-ui/core";
import React, { Component } from "react";
import bloques from "Observatorio/img/img_top_home.jpg";
//import bloques from "Observatorio/img/Building.svg";
import frente from "Observatorio/img/city1.gif";
import figure from "Observatorio/img/ventajasobservatorio.jpg";
import QA from "Observatorio/img/relojventajas.jpg";
import Conference from "Observatorio/img/integracion.jpg";
import audit from "Observatorio/img/comunicacion.jpg";
import Binary from "Observatorio/img/LADM1.jpg";
import lawyer from "Observatorio/img/normatividad.jpg";
import Maintenance from "Observatorio/img/usoobservatorio.jpg";
import ButtonRedWine from "Observatorio/common/buttonredwine";
import * as Values from "Observatorio/Variables/values";

const useStyle = makeStyles({

  boton: {
    padding: "0em 1em 0em 1em",
    borderRadius: "2vh",
    backgroundColor: Values.Redwinecolor,
    color: Values.TextButton,
    fontFamily: Values.SourceRoboto,
    textTransform: "inherit",
    transition: "all 0.8s ease-out",
    cursor: "pointer",
    margin: "10% 0 4% 0",
    width: "max-content",
    fontSize: "calc(1em + 0.3vh)",
    borderRadius: "2vh",
    // fontWeight: "bold",
    "&:hover": {
      backgroundColor: Values.HoverButton,
      border: "none",
    },
  },

  cuadrobotones:{
    margin:"0 0 2% 0",
  },

  imagen_QA: {
    width: "25%",
    height: "14vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${QA})`,
    backgroundPosition: "initial",
  },

  imagen_QA2: {
    width: "45%",
    height: "14vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${QA})`,
    backgroundPosition: "initial",
  },

  imagen_Conference: {
    width: "35%",
    height: "14vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Conference})`,
    backgroundPosition: "initial",
  },

  imagen_Conference2: {
    width: "55%",
    height: "14vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Conference})`,
    backgroundPosition: "initial",
  },

  imagen_Audit: {
    width: "26%",
    height: "14vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${audit})`,
    backgroundPosition: "center",
  },

  imagen_Audit2: {
    width: "45%",
    height: "14vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${audit})`,
    backgroundPosition: "center",
  },

  imagen_Binary: {
    width: "25%",
    height: "14vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Binary})`,
    backgroundPosition: "initial",
  },

  imagen_Binary2: {
    width: "45%",
    height: "14vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Binary})`,
    backgroundPosition: "initial",
  },

  puntos: {
    padding: "1.5vw 0 0px 7vh",
  },

  marginbutton: {
    padding: "2em 0em 0 0em",
  },
  marginbutton1: {
    padding: "2em 0em 0 6%",
  },
  marginbutton2: {
    padding: "0em 0em 0 30%",
  },

  numpadding: {
    paddingTop: "0%",
  },

  numpadding2: {
    paddingTop: "12%",
  },

  numpadding3: {
    paddingTop: "4%",
  },

  numpaddingVentajas: {
    padding: "5% 0% 0% 0%",
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

  num1: {
    backgroundColor: "#821a3f",
    borderRadius: "50%",
    width: "1.3rem",
    height: "1.3rem",
  },

  gridglobal: {
    padding: "0 10vw 3vw 10vw",
  },

  gridglobalmovil: {
    padding: "0 5vw 3vw 5vw",
  },

  marginbuttom: {
    padding: "5% 0 5% 0",
    backgroundColor: Values.TextButton,
  },

  margintop: {
    padding: "0 10vw 3vw 10vw",
    backgroundColor: "#f4f4f4",
  },

  margintop1: {
    padding: "0 14.5vw 3vw 14.5vw",
    backgroundColor: "#f4f4f4",
  },

  textStyle: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "center",
    padding: "0 1vw 0 1vw",
  },

  textStyle1: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "center",
    padding: "0 0 0 0.3vw",
  },

  textStyle3: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,    
    padding: "0 1vw 0 1vw",
    width:"60%"
  },

  titleStyle: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontWeight: "bold",
    fontSize: Values.SizeTitle,
    padding: Values.PaddingTitleText,
    textAlign: "center",
  },

  titleStyle2: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontWeight: "bold",
    fontSize: Values.SizeSubtitle,
    padding: "0 0 1em 0",
    textAlign: "center",
  },

  imagen_top: {
    width: "100% !important",
    height: "50vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${bloques})`,
    backgroundPosition: "initial",
    borderRadius:"1%"
  },

  imagen_top2: {
    width: "100%",
    height: "29vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${bloques})`,
    backgroundPosition: "initial",
    flexBasis: "100% !important",
    maxWidth: "100% !important",
    borderRadius:"1%"
  },

  imagen_top3: {
    width: "100%",
    height: "42vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${bloques})`,
    backgroundPosition: "initial",
    borderRadius:"1%"
  },

  Titleh3: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontWeight: "bold",
    fontSize: Values.SizeTitle,
    padding: Values.PaddingTitleText,
    textAlign:"center",
  },

  Textp: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    margin: "1em 1em 0em 0",
    backgroundColor: Values.Colormid,
  },

  containerImg: {
    width: "100% !important",
    height: "65vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${figure})`,
    backgroundSize: "51vh 100%",
    backgroundPosition: "center center",
  },

  containerImg3: {
    width: "100% !important",
    height: "65vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${figure})`,
    backgroundSize: "46vh 100%",
    backgroundPosition: "center center",
  },

  containerImgNormativa: {
    width: "100% !important",
    height: "44vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${lawyer})`,
    backgroundSize: "80%",
    backgroundPosition: "center center",
  },

  containerImgNormativa2: {
    width: "100% !important",
    height: "51vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${lawyer})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "center center",
    flexBasis: "100% !important",
    maxWidth: "100% !important",
  },

  containerImg2: {
    display: "none",
  },

  containerImgNone: {
    backgroundImage: "none",
  },

  containerTitle: {
    minHeight: "13vh",
  },

  contentrulesh1: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeTitle,
    textAlign: "center",
    padding: Values.PaddingTitleText,
  },

  contentrulesp: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    //textAlign: "justify",
    margin: "1em 0 0em 0",
  },

  contentrulesp2: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "justify",
    margin: "0.5em 0 0em 0",
    fontWeight: "bold",
  },

  imagen_uso: {
    backgroundSize: "36%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Maintenance})`,
    backgroundPositionX: "93%",
    backgroundPositionY: "38%",
  },

  imagen_uso2: {
    backgroundSize: "40%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Maintenance})`,
    backgroundPositionX: "100%",
    backgroundPositionY: "15.6vw !important",
  },

  imagen_movil: {
    width: "100% !important",
    height: "28vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${frente})`,
    backgroundPosition: "center",
  },
  imagen_movil2: {
    backgroundImage: "none",
  },
  boton_general: {
    padding: "0.3em 0.2em 0.3em 1em",
    borderRadius: "2vh",
    backgroundColor:"#ffffff",
    fontFamily: Values.SourceRoboto,
    color: "#4C4C4C",
    transition:"all 0.8s ease-out",
    margin: "2% 0 0 0",
    width: "79vh",
    fontSize: "calc(1em + 0.3vh)",
    borderRadius: "2vh",
    fontWeight: "bold",
    border:"none",
    boxShadow: "3px 3px 10px #7b7676",
  },
});

const Imagen = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(max-width:660px)");
  const matches2 = useMediaQuery("(min-width:1281px)");  
  
  var estilo = null;
  {
    if (matches2) {
      estilo = classes.imagen_top;
    } else {
      if (matches) {
        estilo = classes.imagen_top2;
      } else {
        estilo = classes.imagen_top3;
      }
    }
  }
  return (
    <Grid item container direction="column" xs={6} className={estilo}></Grid>
  ); 
};

const ImagenQA = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(max-width:660px)");
  const matches2 = useMediaQuery("(min-width:1281px)");  
  
  var estilo = null;
  {
    if (matches2) {
      estilo = classes.imagen_QA;
    } else {
      if (matches) {
        estilo = classes.imagen_QA2;
      } else {
        estilo = classes.imagen_QA2;
      }
    }
  }
  return (
    <div className={estilo}></div>
  ); 
};

const ImagenConference = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(max-width:660px)");
  const matches2 = useMediaQuery("(min-width:1281px)");  
  
  var estilo = null;
  {
    if (matches2) {
      estilo = classes.imagen_Conference;
    } else {
      if (matches) {
        estilo = classes.imagen_Conference2;
      } else {
        estilo = classes.imagen_Conference2;
      }
    }
  }
  return (
    <div className={estilo}></div>
  ); 
};

const Imagenaudit = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(max-width:660px)");
  const matches2 = useMediaQuery("(min-width:1281px)");  
  
  var estilo = null;
  {
    if (matches2) {
      estilo = classes.imagen_Audit;
    } else {
      if (matches) {
        estilo = classes.imagen_Audit2;
      } else {
        estilo = classes.imagen_Audit2;
      }
    }
  }
  return (
    <div className={estilo}></div>
  ); 
};

const ImagenBinary = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(max-width:660px)");
  const matches2 = useMediaQuery("(min-width:1281px)");  
  
  var estilo = null;
  {
    if (matches2) {
      estilo = classes.imagen_Binary;
    } else {
      if (matches) {
        estilo = classes.imagen_Binary2;
      } else {
        estilo = classes.imagen_Binary2;
      }
    }
  }
  return (
    <div className={estilo}></div>
  ); 
};

const ImagenMovil = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:541px)");  
  
  var estilo = null;
  {
    matches?estilo = classes.imagen_movil2:estilo = classes.imagen_movil
  }
  return (
    <Grid  container direction="column" className={estilo}></Grid>
  ); 
};

const ImagenNormativa = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:660px)");
  var estilo = null;
  {
    matches
      ? (estilo = classes.containerImgNormativa)
      : (estilo = classes.containerImgNormativa2);
  }
  return (
    <Grid item container direction="column" xs={6} className={estilo}></Grid>
  );
};

const ImagenCenter = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:769px)");
  const matches2 = useMediaQuery("(min-width:1295px)")
  var estilo = null;
  {
    console.log("ver",matches, " ", matches2)
    if(matches){
      estilo = classes.containerImg
    }else{      
      if(matches2){
        estilo = classes.containerImg3
      }else{
        estilo = classes.containerImg2
      }
    }
  }
  return <Grid item container direction="column" xs className={estilo}></Grid>;
};

const ImagenBottom = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:769px)");
  var estilo = null;
  {
    matches ? (estilo = classes.imagen_uso) : (estilo = classes.containerImg2);
  }
  return (
    <Grid item container direction="column" xs={4} className={estilo}></Grid>
  );
};

const Top_content = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:769px)");
    var estilo = null;
    {
      matches?estilo=classes.gridglobal:estilo=classes.gridglobalmovil
    }
  return (
    <Grid container direction="row" className={estilo}>
      <ImagenMovil/>
      <Grid container justifyContent="center" alignItems="center">
        <h3 className={classes.Titleh3}>{Values.TitleHomeTop}</h3>
      </Grid>
      <Grid item container direction="column" xs>
        <Grid>
          <p className={classes.Textp}>
          El Observatorio Inmobiliario Nacional es un Sistema de Información, que cuenta con un componente geográfico cuyo objetivo es consolidar los datos provenientes y recopilados por los gestores catastrales en relación al mercado inmobiliario, de fuentes como: ofertas, transacciones, costos de construcción, entre otras, para apoyar y facilitar la toma de decisiones relacionadas al Ordenamiento Territorial.
          </p>
          {/* <p className={classes.Textp}>
            Este Sistema cumple con los estandares establecidos por el Instituto
            Geográfico Agustín Codazzi - IGAC, que es la maxima autoridad
            catastral en la Nación y cuya información esta a disposición del
            público.
          </p> */}
        </Grid>
        <Grid container>
          <Tooltip title="Observatorio" arrow>
            <Button className={classes.boton} href="/Observatorio/Acerca" >Acerca de</Button>
          </Tooltip>
        </Grid>
      </Grid>
      <Imagen />
    </Grid>
  );
};

const Center_content = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:431px)");
  var estilo = null;
  {
    matches ? (estilo = classes.margintop) : (estilo = classes.margintop1);
  }
  return (
    <Grid container className={estilo}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.containerTitle}
      >
        <h1 className={classes.titleStyle}>Ventajas del observatorio</h1>
      </Grid>
      <Grid item container direction="column" xs>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={classes.numpadding}
        >
          <ImagenQA/>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <h1 className={classes.titleStyle2}>Seguimiento y disposición</h1>
          <p className={classes.textStyle}>
            Seguimiento y disposición en el tiempo de ofertas, transacciones, costos de construcción, entre otros.
          </p>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={classes.numpadding2}
        >
          <ImagenConference/>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <h1 className={classes.titleStyle2}>Integración</h1>
          <p className={classes.textStyle}>
            Integración con diversos Sistemas de Información de nivel público y privado.
          </p>
        </Grid>
      </Grid>
      <ImagenCenter />
      <Grid item container direction="column" xs>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={classes.numpadding}
        >
          <Imagenaudit/>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <h1 className={classes.titleStyle2}>Comunicación</h1>
          <p className={classes.textStyle}>
            Comunicación directa y en doble vía con los ciudadanos mediante la puesta en marcha de servicios digitales para asegurar una actualización permanente de la información predial.
          </p>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={classes.numpadding3}
        >
          <ImagenBinary/>
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
            Basado en el modelo estándar LADM - COL para la interoperabilidad de información del Catastro Multipropósito.
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Bottom_content = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:769px)");
    var estilo = null;
    {
      matches?estilo=classes.gridglobal:estilo=classes.gridglobalmovil
    }
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={(classes.marginbuttom, estilo)}
    >
      <Grid container direction="row">
        <Grid container justifyContent="center" alignItems="center">
          <h1 className={classes.contentrulesh1}>Normatividad</h1>
        </Grid>
        <Grid item container direction="column" xs>
          <Grid container direction="column">
            <p className={classes.contentrulesp}>
              Para la disposición de información del mercado inmobiliario, se pone a disposición y funcionamiento el Observatorio Inmobiliario Nacional, que articula e integra diferentes fuentes de información en este campo.
            </p>
            <p className={classes.contentrulesp}>
              Los observatorios inmobiliarios son una práctica ya implementada en Colombia por parte de algunos Catastros descentralizados, como mecanismos de visibilidad de información e insumo para la generación de conocimiento.
            </p>
            <p className={classes.contentrulesp}>              
              El Observatorio Inmobiliario Nacional tiene su fundamento normativo en:
            </p>
          </Grid>
          <Grid container direction="column" className={classes.cuadrobotones}>            
          <Grid direction="row" item container xs className={classes.boton_general} justifyContent="center">
                <Grid container item xs={6}>
                <p className={classes.contentrulesp2}>Ley 1955 de 2019</p>
                </Grid>
                <Grid className={classes.marginbutton2}>
                <Tooltip title="Ley 1955 de 2019" arrow>
                <Button className={classes.boton} href="https://funcionpublica.gov.co/eva/gestornormativo/norma.php?i=93970" target="_blank">Ver</Button>
                </Tooltip>                  
                </Grid>
              </Grid>
              <Grid direction="row" item container xs className={classes.boton_general} justifyContent="center">
              <Grid container item xs={6}>
                <p className={classes.contentrulesp2}>Decreto 148 de 2020</p>
                </Grid>
                <Grid className={classes.marginbutton2} justifyContent="center">                  
                  <Tooltip title="Decreto 148 de 2020" arrow>
                    <Button className={classes.boton} href="https://funcionpublica.gov.co/eva/gestornormativo/norma.php?i=105952" target="_blank">Ver</Button>
                  </Tooltip> 
                </Grid>
              </Grid>
              <Grid direction="row" item container xs className={classes.boton_general} justifyContent="center">
              <Grid container item xs={6}>
                <p className={classes.contentrulesp2}>CONPES 3958 de 2019</p>
                </Grid>
                <Grid className={classes.marginbutton2}>
                  <Tooltip title="CONPES 3958 de 2019" arrow>
                    <Button className={classes.boton} href="https://www.igac.gov.co/sites/igac.gov.co/files/normograma/conpes_3958_de_2019.pdf" target="_blank">Ver</Button>
                  </Tooltip>
                </Grid>
              </Grid>
          </Grid>
        </Grid>
        <ImagenNormativa />
      </Grid>
    </Grid>
  );
};

const Bottom_content_footer = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:1281px)");
  const matches2 = useMediaQuery("(max-width:769px)");
  var estilo = null;
  var estilo2 = null;
  console.log({ matches2 });
  if (matches) {
    estilo = classes.imagen_uso;
    estilo2 = classes.textStyle;
  } else {
    if (matches2) {
      estilo = classes.containerImgNone;
      estilo2 = classes.textStyle3;
    } else {
      estilo = classes.imagen_uso2;
      estilo2 = classes.textStyle;
    }
  }
  return (
    <Grid container className={classes.margintop}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.containerTitle}
      >
        <h1 className={classes.titleStyle}>
          Uso del observatorio inmobiliario nacional
        </h1>
      </Grid>
      <Grid item container direction="column" xs className={estilo}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <h1 className={classes.num}>1</h1>
          <p className={estilo2}>Seguimiento a la dinámica inmobiliaria</p>
          <Grid item container direction="column" xs className={classes.puntos}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <h1 className={classes.num1}></h1>
              <p className={classes.textStyle1}>Ofertas</p>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <h1 className={classes.num1}></h1>
              <p className={classes.textStyle1}>Transacciones</p>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <h1 className={classes.num1}></h1>
              <p className={classes.textStyle1}>Costos de construcción</p>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <h1 className={classes.num1}></h1>
              <p className={classes.textStyle1}>Avalúos</p>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <h1 className={classes.num1}></h1>
              <p className={classes.textStyle1}>Otros</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          className={classes.numpaddingVentajas}
        >
          <h1 className={classes.num}>2</h1>
          <p className={estilo2}>
            Integración información estadística
          </p>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          className={classes.numpaddingVentajas}
        >
          <h1 className={classes.num}>3</h1>
          <p className={estilo2}>Publicidad de datos oficiales</p>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          className={classes.numpaddingVentajas}
        >
          <h1 className={classes.num}>4</h1>
          <p className={estilo2}>Fuente de investigaciones</p>
        </Grid>
      </Grid>
    </Grid>
  );
};

const ContentGrid = () => {
  const classes = useStyle();
  return (
    <Grid container>
      <Top_content />
      <Center_content />
      <Bottom_content />
      <Bottom_content_footer />
    </Grid>
  );
};

export default ContentGrid;
