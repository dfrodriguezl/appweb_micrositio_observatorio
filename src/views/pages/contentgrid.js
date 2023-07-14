import { Grid, makeStyles, useMediaQuery,Tooltip, Button } from "@material-ui/core";
import React, { Component} from "react";
//import bloques from "Observatorio/img/img_top_home.jpg";
import bloques from "Observatorio/img/01_home_observatorio.webp";
import frente from "Observatorio/img/city1.gif";
import figure from "Observatorio/img/ventajasobservatorio.jpg";
import QA from "Observatorio/img/home_01_ventajasobs_seguimientoydisposicion.png";
import Conference from "Observatorio/img/home_02_ventajasobs_integracion.png";
import audit from "Observatorio/img/home_03_ventajasobs_comunicacion.png";
import Binary from "Observatorio/img/home_04_ventajasobs_LADM.png";
import lawyer from "Observatorio/img/normatividad.jpg";
import Maintenance from "Observatorio/img/usoobservatorio.jpg";
import ButtonRedWine from "Observatorio/common/buttonredwine";
import * as Values from "Observatorio/Variables/values";
import { useNavigate  } from "react-router-dom";
import {useTranslation} from "react-i18next";

const useStyle = makeStyles({

  boton: {
    padding: "4px 30px",
    backgroundColor: "#B91450",
    color: Values.TextButton,
    fontFamily: Values.SourceRoboto,
    textTransform: "inherit",
    //transition: "all 0.8s ease-out",
    cursor: "pointer",
    //margin: "10% 0 4% 0",
    width: "max-content",
    fontSize: "0.8em",
    borderRadius: "1em",
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
    width: "60%",
    height: "10vh",
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
    width: "60%",
    height: "10vh",
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
    width: "52%",
    height: "9vh",
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
    width: "45%",
    height: "10vh",
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
    padding: "0vw 0 0px 8vh",
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
  marginbutton3: {
    padding: "0em 0em 0 16vw",
  },

  numpadding: {
    paddingTop: "0%",
  },

  numpadding2: {
    paddingTop: "0%",
  },

  numpadding3: {
    paddingTop: "0%",
  },

  numpaddingVentajas: {
    padding: "0% 0% 10% 0%",
  },

  num: {
    backgroundColor: "#821a3f",
    borderRadius: "50%",
    textAlign: "center",
    color: Values.TextButton,
    fontFamily: Values.SourceWorksans,
    fontWeight: "bold",
    fontSize: "calc(1.5em + 1.5vh)",
    width: "3.5rem",
    height: "3.5rem",
    padding: "0vh 0vh",
    margin: "0 0.3em 0 0vw",
  },

  num1: {
    backgroundColor: "#821a3f",
    borderRadius: "50%",
    width: "1.3rem",
    height: "1.3rem",
  },

  gridglobal: {
    padding: "15px 5vw 3vw 5vw",
  },

  buttonsnormativa:{
    paddingLeft: "3vw"
  },

  gridglobalmovil: {
    padding: "0 5vw 3vw 5vw",
  },

  marginbuttom: {
    padding: "5% 0 5% 0",
    backgroundColor: Values.TextButton,
  },

  margintop: {
    padding: "0 5vw 3vw 5vw",
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
    //textAlign: "center",
    //padding: "0 1vw 0 1vw",    
    //paddingLeft:"1vw"
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
    //textAlign: "center",
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
    //width: "100% !important",
    height: "37vh",
    backgroundSize: "80%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${bloques})`,
    backgroundPosition: "right",
    //borderRadius:"1%",
    marginTop: "6vh"
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
    height: "43vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${lawyer})`,
    backgroundSize: "90%",
    backgroundPosition: "center center",
  },

  containerImgNormativa2: {
    width: "100% !important",
    height: "25vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${lawyer})`,
    backgroundSize: "100%",
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
    margin: "0.3em 0 0em 0",
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
    backgroundSize: "27%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Maintenance})`,
    backgroundPositionX: "86%",
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
    fontSize: Values.SizetextcontentGrid,
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

const ajustable = "ajustable"

const Top_content = () => {  
  const [t, i18n]= useTranslation("global");
  const history = useNavigate();
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:769px)");
    var estilo = null;
    {
      matches?estilo=classes.gridglobal:estilo=classes.gridglobalmovil
    }
  const rutabtn = () =>{
      history('/observatorio/Acerca')
  }
  return (
    <Grid container direction="row"  className={estilo}>
      <ImagenMovil/>  
      <Grid item container direction="column" xs justifyContent="center" alignItems="center">
      <Grid container alignItems="center">
        <h3 className={classes.Titleh3+" "+ajustable}>{t("home.titlehome")}</h3>
      </Grid>
        <Grid>
          <p className={classes.Textp+" "+ajustable}>
          {t("home.description")}
          </p>
        </Grid>
        {/* <Grid container>
          <Tooltip title={t("navbar.observatorio")} arrow>
            <Button className={classes.boton+" "+ajustable} onClick={rutabtn} >{t("home.boton")}</Button>
          </Tooltip>
        </Grid> */}
      </Grid>
      <Imagen />
    </Grid>
  );
};

const Center_content = () => {
  const classes = useStyle();
  const [t, i18n]= useTranslation("global");
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
        // justifyContent="center"
        // alignItems="center"
        className={classes.containerTitle}
      >
        <h1 className={classes.titleStyle+" "+ajustable}>{t("home.ventajas")}</h1>
      </Grid>
      <Grid item container direction="row" xs>
        <Grid
          container
          direction="column"
          alignItems="center"
          className={classes.numpadding}
          xs={2}
        >
          <ImagenQA/>
        </Grid>
        <Grid
          container
          direction="column"
          alignItems="center"
          xs={4}
        >
          <Grid container>
            <h1 className={classes.titleStyle2 +" "+ajustable}>{t("home.seguimiento")}</h1>
          </Grid>
          <Grid container>
            <p className={classes.textStyle+" "+ajustable}>{t("home.seguimiento2")}</p>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          alignItems="center"
          className={classes.numpadding2}
          xs={2}
        >
          <ImagenConference/>
        </Grid>
        <Grid
          container
          direction="column"
          alignItems="center"
          xs={4}
        >
          <Grid container>
            <h1 className={classes.titleStyle2+" "+ajustable}>{t("home.integracion")}</h1>
          </Grid>
          <Grid container>
            <p className={classes.textStyle+" "+ajustable}>{t("home.integracion2")}</p>            
          </Grid>
        </Grid>
      </Grid>
      {/* <ImagenCenter /> */}
      <Grid item container direction="row" xs>
        <Grid
          container
          direction="column"
          alignItems="center"
          className={classes.numpadding}
          xs={3}
        >
          <Imagenaudit/>
        </Grid>        
        <Grid
          container
          direction="column"
          alignItems="center"
          xs={3}
        >
          <Grid container>
          <h1 className={classes.titleStyle2+" "+ajustable}>{t("home.comunicacion")}</h1>
          </Grid>
          <Grid container>
          <p className={classes.textStyle+" "+ajustable}>{t("home.comunicacion2")}</p>
          </Grid>
        </Grid>
        
        <Grid
          container
          direction="column"
          alignItems="center"
          className={classes.numpadding3}
          xs={3}
        >
          <ImagenBinary/>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          xs={3}
        >
          <Grid container>
          <h1 className={classes.titleStyle2+" "+ajustable}>LADM</h1>
          </Grid>
          <Grid container>
          <p className={classes.textStyle+" "+ajustable}>{t("home.LADM2")}</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Bottom_content = () => {
  const classes = useStyle();
  const [t, i18n]= useTranslation("global");
  const matches = useMediaQuery("(min-width:769px)");
    var estilo = null;
    var estilo2 = null;
    {
      matches?estilo=classes.gridglobal:estilo=classes.gridglobalmovil
      matches?estilo2=classes.marginbutton2:estilo2=classes.marginbutton3
    }
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={(classes.marginbuttom, estilo)}
    >
      <Grid container direction="row" justifyContent="center">
        <Grid container>
          <h1 className={classes.contentrulesh1+" "+ajustable}>{t("home.normatividad")}</h1>
        </Grid>
        <Grid item container direction="column" xs>
          <Grid container direction="column" justifyContent="initial" alignItems="center">
            <p className={classes.contentrulesp+" "+ajustable}>{t("home.normatividad1")}</p>
            <p className={classes.contentrulesp+" "+ajustable}>{t("home.normatividad2")}</p>
          </Grid>          
        </Grid>
        <Grid item container direction="column" xs={6} className={classes.buttonsnormativa}>          
          <p className={classes.contentrulesp+" "+ajustable}>{t("home.normatividad3")}</p>          
        <Grid container direction="column" className={classes.cuadrobotones}>            
          <Grid direction="row" item container xs className={classes.boton_general} justifyContent="center">
                <Grid container item xs={6}>
                <p className={classes.contentrulesp2+" "+ajustable}>{t("home.ley")}</p>
                </Grid>
                <Grid className={estilo2}>
                <Tooltip title={t("home.ley")} arrow>
                <Button className={classes.boton+" "+ajustable} href="https://funcionpublica.gov.co/eva/gestornormativo/norma.php?i=93970" target="_blank">{t("home.ver")}</Button>
                </Tooltip>                  
                </Grid>
              </Grid>
              <Grid direction="row" item container xs className={classes.boton_general} justifyContent="center">
              <Grid container item xs={6}>
                <p className={classes.contentrulesp2+" "+ajustable}>{t("home.decreto")}</p>
                </Grid>
                <Grid className={estilo2} justifyContent="center">                  
                  <Tooltip title={t("home.decreto")} arrow>
                    <Button className={classes.boton+" "+ajustable} href="https://funcionpublica.gov.co/eva/gestornormativo/norma.php?i=105952" target="_blank">{t("home.ver")}</Button>
                  </Tooltip> 
                </Grid>
              </Grid>
              <Grid direction="row" item container xs className={classes.boton_general} justifyContent="center">
              <Grid container item xs={6}>
                <p className={classes.contentrulesp2+" "+ajustable}>{t("home.conpes")}</p>
                </Grid>
                <Grid className={estilo2}>
                  <Tooltip title={t("home.conpes")} arrow>
                    <Button className={classes.boton+" "+ajustable} href="https://www.igac.gov.co/sites/igac.gov.co/files/normograma/conpes_3958_de_2019.pdf" target="_blank">{t("home.ver")}</Button>
                  </Tooltip>
                </Grid>
              </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Bottom_content_footer = () => {
  const classes = useStyle();
  const [t, i18n]= useTranslation("global");
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
        // justifyContent="center"
        // alignItems="center"
        className={classes.containerTitle}
      >
        <h1 className={classes.titleStyle+" "+ajustable}>
        {t("home.uso")}
        </h1>
      </Grid>
      <Grid item container direction="row" xs>
        <Grid
          container
          direction="column"
          xs={3}
          // justifyContent="flex-start"
          // alignItems="center"
        >
          <Grid container justifyContent="flex-start" alignItems="center">
            <h1 className={classes.num}>1</h1>
            <p className={estilo2+" "+ajustable}>{t("home.inmobiliaria")}</p>
          </Grid>
          <Grid item container direction="column" xs className={classes.puntos}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <h1 className={classes.num1}></h1>
              <p className={classes.textStyle1+" "+ajustable}>{t("home.ofertas")}</p>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <h1 className={classes.num1}></h1>
              <p className={classes.textStyle1+" "+ajustable}>{t("home.transacciones")}</p>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <h1 className={classes.num1}></h1>
              <p className={classes.textStyle1+" "+ajustable}>{t("home.costos")}</p>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <h1 className={classes.num1}></h1>
              <p className={classes.textStyle1+" "+ajustable}>{t("home.avaluos")}</p>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <h1 className={classes.num1}></h1>
              <p className={classes.textStyle1+" "+ajustable}>{t("home.otros")}</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          //justifyContent="flex-start"
          xs={3}
          alignItems="center"
          className={classes.numpaddingVentajas}
        >         
          <h1 className={classes.num}>2</h1>
          <p className={estilo2+" "+ajustable}>{t("home.estadistica")}</p>
        </Grid>
        <Grid
          container
          xs={3}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          className={classes.numpaddingVentajas}
        >
          <h1 className={classes.num}>3</h1>
          <p className={estilo2+" "+ajustable}>{t("home.publicidad")}</p>
        </Grid>
        <Grid
          container
          xs={3}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          className={classes.numpaddingVentajas}
        >
          <h1 className={classes.num}>4</h1>
          <p className={estilo2+" "+ajustable}>{t("home.fuente")}</p>
        </Grid>
      </Grid>
    </Grid>
  );
};

const ContentGrid = () => {
  const classes = useStyle();
  return (
    <Grid container id="target-two">      
      <Top_content />
      <Center_content />
      <Bottom_content />
      <Bottom_content_footer />
    </Grid>
  );
};

export default ContentGrid;
