import {
  Grid,
  makeStyles,
  useMediaQuery,
  Button,
  CardMedia,
  Tooltip,
} from "@material-ui/core";
import React, { Component } from "react";
import * as Values from "Observatorio/Variables/values";
import Small from "Observatorio/img/catastro_multiproposito.webp";
import QA from "Observatorio/img/catastro_multiproposito_01_seguridad_juridica.png";
import QA1 from "Observatorio/img/catastro_multiproposito_02_eficiencia.png";
import QA2 from "Observatorio/img/catastro_multiproposito_03_desarrollo.png";
import Transfer from "Observatorio/img/03_catastro_multiproposito_comparativo.webp";
import ImgPng from "Observatorio/img/Captura.svg";
import Business from "Observatorio/img/negocios.jpg";
import Hong from "Observatorio/img/1Hong.svg";
import ButtonRedWine from "Observatorio/common/buttonredwine";
import { useTranslation } from "react-i18next";

import word from "Observatorio/img/powerpoint.png";

const useStyle = makeStyles({
  imagen_top: {
    width: "100% !important",
    height: "32vh",
    backgroundSize: "47vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Small})`,
    backgroundPosition: "center",
  },
  cardscatastro: {
    boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    marginRight: "2vw",
    borderRadius: "10px",
    background: "white",
  },
  boton4: {
    padding: "4px 50px",
    borderRadius: "1em",
    backgroundColor: Values.Redwinecolor,
    color: Values.TextButton,
    fontFamily: Values.SourceRoboto,
    textTransform: "capitalize",
    transition: "all 0.8s ease-out",
    cursor: "pointer",
    margin: "2% 0 3% 100%",
    width: "max-content",
    fontSize: "0.8em",
    // fontWeight: "bold",
    "&:hover": {
      backgroundColor: Values.HoverButton,
      border: "none",
    },
  },
  imagen_top2: {
    width: "100%",
    height: "32vh",
    backgroundSize: "47vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Small})`,
    backgroundPosition: "center center",
    flexBasis: "100% !important",
    maxWidth: "100% !important",
  },
  boton: {
    padding: "0em 1em 0em 1em",
    borderRadius: "2vh",
    backgroundColor: "#ffffff",
    fontFamily: Values.SourceRoboto,
    textTransform: "capitalize",
    color: "#4C4C4C",
    transition: "all 0.8s ease-out",
    cursor: "pointer",
    margin: "2% 0 0 0",
    width: "30%",
    fontSize: "calc(1em + 0.3vh)",
    borderRadius: "2vh",
    fontWeight: "bold",
    border: "none",
    boxShadow: "3px 3px 10px #7b7676",

    "&:hover": {
      // backgroundColor: Values.HoverButton,
      border: "none",
      color: Values.TextButton,
    },
  },

  boton1: {
    padding: "0em 1em 0em 1em",
    borderRadius: "2vh",
    backgroundColor: "#ffffff",
    fontFamily: Values.SourceRoboto,
    textTransform: "capitalize",
    color: "#4C4C4C",
    transition: "all 0.8s ease-out",
    cursor: "pointer",
    margin: "2% 0 0 0",
    width: "100%",
    fontSize: "calc(1em + 0.3vh)",
    borderRadius: "2vh",
    fontWeight: "bold",
    border: "none",
    boxShadow: "3px 3px 10px #7b7676",

    "&:hover": {
      // backgroundColor: Values.HoverButton,
      border: "none",
      color: Values.TextButton,
    },
  },
  listyle: {
    paddingLeft: "0.6em",
    paddingRight: "6.6em",
    float: "left",
  },
  listyle1: {
    paddingLeft: "0.4em",
  },
  imagen_Business: {
    width: "100% !important",
    height: "40vh",
    backgroundSize: "50vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Business})`,
    backgroundPosition: "center",
  },
  imagen_Business2: {
    width: "100%",
    height: "40vh",
    backgroundSize: "57vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Business})`,
    backgroundPosition: "center center",
    flexBasis: "100% !important",
    maxWidth: "100% !important",
  },
  gridglobal: {
    padding: "0 5vw 3vw 5vw",
    background: "white"
  },
  gridglobalmovil: {
    padding: "0 5vw 3vw 5vw",
  },

  margboton: {
    margin: "1em 0 0 0",
    borderRadius: "2vh",
    backgroundColor: "#ffffff",
    fontFamily: Values.SourceRoboto,
    color: "#4C4C4C",
    transition: "all 0.8s ease-out",
    margin: "2% 0 0 0",
    width: "78vh",
    fontSize: "calc(1em + 0.3vh)",
    borderRadius: "2vh",
    fontWeight: "bold",
    border: "none",
    boxShadow: "3px 3px 10px #7b7676",
    padding: "0em 1em 0em 1em",
  },
  circule: {
    margin: "0 0.5em 0 0vw",
    maxWidth: "4% !important",
    flexBasis: "8.333333% !important",
  },

  titleStyle: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontWeight: "bold",
    fontSize: Values.SizeTitle,
    padding: "1.5em 0 1.5em 0",
    textAlign: "center",
  },
  textStyle: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    //textAlign: "center",
    //padding: "0 1vw 0 1vw",
    paddingLeft: "1vw",
  },
  textStyle1: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    //padding: "0 1vw 0 1vw",
    marginLeft: "2vw",
    marginBottom: "0.5vw",
  },
  textStyle2: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
  },
  contentrulesp: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    margin: "1em 0 1em 0",
  },
  contentrulesp2: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    margin: "1em 0 1em 0",
    paddingLeft: "1em",
    listStyleType: "disclosure-closed",
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
    padding: "0 5vw 3vw 5vw",
    backgroundColor: "#f4f4f4",
  },
  margintopmovil: {
    padding: "0 5vw 3vw 5vw",
    backgroundColor: "#f4f4f4",
  },
  imagen_transfer: {
    width: "100% !important",
    height: "54vh",
    marginBottom: "0%",
    backgroundSize: "60vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Transfer})`,
    backgroundPosition: "center",
  },
  imagen_transfer2: {
    width: "100%",
    height: "40vh",
    marginBottom: "3%",
    backgroundSize: "60vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Transfer})`,
    backgroundPosition: "bottom",
    flexBasis: "100% !important",
    maxWidth: "100% !important",
  },

  imagen_png: {
    width: "100% !important",
    height: "95vh",
    backgroundSize: "60%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${ImgPng})`,
    backgroundPosition: "center",
  },
  imagen_png2: {
    width: "100%",
    height: "113vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Hong})`,
    backgroundPositionY: "1vh",
  },
  imagen_png4: {
    width: "100%",
    height: "186vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Hong})`,
    backgroundPositionY: "1vh",
  },
  imagen_png3: {
    width: "100% !important",
    height: "100vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${ImgPng})`,
    backgroundPosition: "center",
  },
  texto: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontWeight: "bold",
    fontSize: Values.SizeSubtitle,
    padding: "1em 0em 0em 1em",
    textAlign: "center",
  },

  texto1: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontWeight: "bold",
    fontSize: "calc(0.6em + 1.1vh)",
    textAlign: "center",
    padding: "0.4em 0 0em 0.5em",
  },
  circulemarg: {
    margin: "1vw 0 1vw 0",
  },
  excel: {
    height: "14vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "80%",
    width: "100%",
  },
  excel2: {
    height: "10vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "28%",
  },
  alink: {
    textDecoration: "none",
  },
  contentrulesp3: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: "calc(0.6em + 0.3vh)",
    textAlign: "center",
  },
  imagen_QA: {
    width: "12%",
    height: "12vh",
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
  imagen_QA3: {
    width: "11%",
    height: "11vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${QA1})`,
    backgroundPosition: "initial",
  },

  imagen_QA4: {
    width: "45%",
    height: "14vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${QA1})`,
    backgroundPosition: "initial",
  },
  imagen_QA5: {
    width: "5%",
    height: "10vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${QA2})`,
    backgroundPosition: "initial",
  },

  imagen_QA6: {
    width: "45%",
    height: "14vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${QA2})`,
    backgroundPosition: "initial",
  },
  titleStyle2: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontWeight: "bold",
    fontSize: Values.SizeSubtitle,
    padding: "0 0 1em 0",
    textAlign: "center",
  },
  iconocatastro: {
    display: "flex",
  },
});

const Imagen = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:769px)");
  var estilo = null;
  {
    matches ? (estilo = classes.imagen_top) : (estilo = classes.imagen_top2);
  }
  return (
    <Grid
      item
      container
      justifyContent="center"
      alignItems="center"
      xs={12}
      className={estilo}
    ></Grid>
  );
};

const ImagenBusiness = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:769px)");
  var estilo = null;
  {
    matches
      ? (estilo = classes.imagen_Business)
      : (estilo = classes.imagen_Business2);
  }
  return <Grid item container xs={4} className={estilo}></Grid>;
};

const ImagenTransfer = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:769px)");
  var estilo = null;
  {
    matches
      ? (estilo = classes.imagen_transfer)
      : (estilo = classes.imagen_transfer2);
  }
  return <Grid item container xs={4} className={estilo}></Grid>;
};

const Imagenpng = () => {
  const classes = useStyle();

  const matches = useMediaQuery("(max-width:769px)");
  const matches1 = useMediaQuery("(max-width:541px)");
  const matches2 = useMediaQuery("(min-width:1281px)");

  var estilo = null;
  {
    if (matches2) {
      estilo = classes.imagen_png;
    } else {
      if (matches1) {
        estilo = classes.imagen_png2;
      } else {
        if (matches) {
          estilo = classes.imagen_png4;
        } else {
          estilo = classes.imagen_png3;
        }
      }
    }
  }
  return <Grid item container xs={12} className={estilo}></Grid>;
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
  return <div className={estilo}></div>;
};

const ImagenQA1 = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(max-width:660px)");
  const matches2 = useMediaQuery("(min-width:1281px)");

  var estilo = null;
  {
    if (matches2) {
      estilo = classes.imagen_QA3;
    } else {
      if (matches) {
        estilo = classes.imagen_QA4;
      } else {
        estilo = classes.imagen_QA4;
      }
    }
  }
  return <div className={estilo}></div>;
};

const ImagenQA2 = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(max-width:660px)");
  const matches2 = useMediaQuery("(min-width:1281px)");

  var estilo = null;
  {
    if (matches2) {
      estilo = classes.imagen_QA5;
    } else {
      if (matches) {
        estilo = classes.imagen_QA6;
      } else {
        estilo = classes.imagen_QA6;
      }
    }
  }
  return <div className={estilo}></div>;
};

const ajustable = "ajustable";

const Tomadecisiones = () => {
  const classes = useStyle();
  const [t, i18n] = useTranslation("global");
  const matches = useMediaQuery("(min-width:769px)");
  var estilo = null;
  {
    matches
      ? (estilo = classes.gridglobal)
      : (estilo = classes.gridglobalmovil);
  }
  return (
    <Grid container className={estilo}>
      <Grid
        id="catastroTomaDeDecisiones"
        container
        // justifyContent="center"
        // alignItems="center"
      >
        <h3 className={classes.titleStyle + " " + ajustable}>
          {t("cadastre.multipurpose")}
        </h3>
      </Grid>
      <Grid container direction="row">
        <Grid item container xs>
          <p className={classes.contentrulesp + " " + ajustable}>
            {t("cadastre.multipurpose2")}
          </p>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            className={classes.circulemarg}
          >
            <Grid container item xs={1} className={classes.circule}>
              <h1 className={classes.num}>1</h1>
            </Grid>
            <Grid container item xs>
              <p className={classes.textStyle2 + " " + ajustable}>
                {t("cadastre.multipurpose3")}
              </p>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            className={classes.circulemarg}
          >
            <Grid container item xs={1} className={classes.circule}>
              <h1 className={classes.num}>2</h1>
            </Grid>
            <Grid container item xs>
              <p className={classes.textStyle2 + " " + ajustable}>
                {t("cadastre.multipurpose4")}
              </p>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            className={classes.circulemarg}
          >
            <Grid container item xs={1} className={classes.circule}>
              <h1 className={classes.num}>3</h1>
            </Grid>
            <Grid container item xs>
              <p className={classes.textStyle2 + " " + ajustable}>
                {t("cadastre.multipurpose5")}
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

const ImgTomadecisiones = () => {
  const classes = useStyle();
  const [t, i18n] = useTranslation("global");
  const matches = useMediaQuery("(min-width:769px)");
  var estilo = null;
  {
    matches ? (estilo = classes.margintop) : (estilo = classes.margintopmovil);
  }
  return(
    <Grid container className={estilo}>      
      <Grid
        id="catastroRegulacion"
        container
        // justifyContent="center"
        // alignItems="center"
      >
        <h3 className={classes.titleStyle + " " + ajustable}>
          {t("cadastre.property")}
        </h3>
      </Grid>
      <Imagenpng />
    </Grid>
  )
}

const ComparationModels = () => {
  const classes = useStyle();
  const [t, i18n] = useTranslation("global");
  const matches = useMediaQuery("(min-width:769px)");
  var estilo = null;
  {
    matches ? (estilo = classes.margintop) : (estilo = classes.margintopmovil);
  }
  return (
    <Grid
      container
      className={estilo}
      justifyContent="center"
      alignItems="center"
      id="comparacionModel"
    >
      <Grid container>
        <h3 className={classes.titleStyle + " " + ajustable}>
          {t("cadastre.comparison")}
        </h3>
      </Grid>
      <Grid container direction="row">
        <Grid container item xs className={classes.cardscatastro}>
          <Grid container>
            <p className={classes.texto + " " + ajustable}>
              {t("cadastre.comparison2")}
            </p>
          </Grid>
          <ol className={classes.textStyle1}>
            <li className={classes.listyle1 + " " + ajustable}>
              {t("cadastre.comparison3")}
            </li>
            <li className={classes.listyle1 + " " + ajustable}>
              {t("cadastre.comparison4")}
            </li>
            <li className={classes.listyle1 + " " + ajustable}>
              {t("cadastre.comparison5")}
            </li>
            <li className={classes.listyle1 + " " + ajustable}>
              {t("cadastre.comparison6")}
            </li>
            <li className={classes.listyle1 + " " + ajustable}>
              {t("cadastre.comparison7")}
            </li>
            <li className={classes.listyle1 + " " + ajustable}>
              {t("cadastre.comparison8")}
            </li>
            <li className={classes.listyle1 + " " + ajustable}>
              {t("cadastre.comparison9")}
            </li>
            <li className={classes.listyle1 + " " + ajustable}>
              {t("cadastre.comparison10")}
            </li>
            <li className={classes.listyle1 + " " + ajustable}>
              {t("cadastre.comparison11")}
            </li>
            <li className={classes.listyle1 + " " + ajustable}>
              {t("cadastre.comparison12")}
            </li>
            <li className={classes.listyle1 + " " + ajustable}>
              {t("cadastre.comparison13")}
            </li>
            <li className={classes.listyle1 + " " + ajustable}>
              {t("cadastre.comparison14")}
            </li>
            <li className={classes.listyle1 + " " + ajustable}>
              {t("cadastre.comparison15")}
            </li>
          </ol>
        </Grid>
        <Grid container item xs className={classes.cardscatastro}>
          <Grid container>
            <p className={classes.texto + " " + ajustable}>
              {t("cadastre.comparison16")}
            </p>
          </Grid>
          <ol className={classes.textStyle1}>
            <li className={classes.listyle1 + " " + ajustable}>
              {t("cadastre.comparison17")}
            </li>
            <li className={classes.listyle1 + " " + ajustable}>
              {t("cadastre.comparison18")}
            </li>
            <li className={classes.listyle1 + " " + ajustable}>
              {t("cadastre.comparison19")}
            </li>
            <li className={classes.listyle1 + " " + ajustable}>
              {t("cadastre.comparison20")}
            </li>
            <li className={classes.listyle1 + " " + ajustable}>
              {t("cadastre.comparison21")}
            </li>
            <li className={classes.listyle1 + " " + ajustable}>
              {t("cadastre.comparison22")}
            </li>
            <li className={classes.listyle1 + " " + ajustable}>
              {t("cadastre.comparison23")}
            </li>
            <li className={classes.listyle1 + " " + ajustable}>
              {t("cadastre.comparison24")}
            </li>
            <li className={classes.listyle1 + " " + ajustable}>
              {t("cadastre.comparison25")}
            </li>
            <li className={classes.listyle1 + " " + ajustable}>
              {t("cadastre.comparison26")}
            </li>
            <li className={classes.listyle1 + " " + ajustable}>
              {t("cadastre.comparison27")}
            </li>
            <li className={classes.listyle1 + " " + ajustable}>
              {t("cadastre.comparison28")}
            </li>
            <li className={classes.listyle1 + " " + ajustable}>
              {t("cadastre.comparison29")}
            </li>
            <li className={classes.listyle1 + " " + ajustable}>
              {t("cadastre.comparison30")}
            </li>
            <li className={classes.listyle1 + " " + ajustable}>
              {t("cadastre.comparison31")}
            </li>
            <li className={classes.listyle1 + " " + ajustable}>
              {t("cadastre.comparison32")}
            </li>
            <li className={classes.listyle1 + " " + ajustable}>
              {t("cadastre.comparison33")}
            </li>
          </ol>
        </Grid>
        <ImagenTransfer />
      </Grid>
      <Grid />
    </Grid>
  );
};

const Catastro = () => {
  const classes = useStyle();
  const [t, i18n] = useTranslation("global");
  const matches = useMediaQuery("(min-width:769px)");
  var estilo = null;
  {
    matches
      ? (estilo = classes.gridglobal)
      : (estilo = classes.gridglobalmovil);
  }

  var estilo3 = null;
  var estilo2 = null;
  var estilo4 = null;
  {
    if (matches) {
      estilo4 = classes.boton;
      estilo2 = classes.excel;
    } else {
      estilo2 = classes.excel2;
      estilo3 = classes.mediawidth;
      estilo4 = classes.boton1;
    }
  }
  return (
    <Grid container direction="column" className={estilo}>
      <Grid container>
        <h3 className={classes.titleStyle + " " + ajustable}>
          {t("cadastre.cadastre")}
        </h3>
        <Imagen />
      </Grid>
      <Grid container direction="row">
        <Grid item container xs>
          <p className={classes.contentrulesp + " " + ajustable}>
            {t("cadastre.cadastre2")}
          </p>
          <ol className={classes.contentrulesp2}>
            <li className={classes.listyle + " " + ajustable}>
              {t("cadastre.cadastre3")}
            </li>
            <li className={classes.listyle + " " + ajustable}>
              {t("cadastre.cadastre4")}
            </li>
            <li className={classes.listyle + " " + ajustable}>
              {t("cadastre.cadastre5")}
            </li>
            <li className={classes.listyle + " " + ajustable}>
              {t("cadastre.cadastre6")}
            </li>
            <li className={classes.listyle + " " + ajustable}>
              {t("cadastre.cadastre7")}
            </li>
            <li className={classes.listyle + " " + ajustable}>
              {t("cadastre.cadastre8")}
            </li>
          </ol>
          <p className={classes.contentrulesp + " " + ajustable}>
            {t("cadastre.cadastre9")} {t("cadastre.cadastre10")}
          </p>
        </Grid>
      </Grid>
      <Grid container>
        {/* <ol className={classes.contentrulesp2}>
                    <li className={classes.listyle+" "+ajustable}>{t("cadastre.cadastre11")}</li>
                    <li className={classes.listyle+" "+ajustable}>{t("cadastre.cadastre12")}</li> 
                    <li className={classes.listyle+" "+ajustable}>{t("cadastre.cadastre13")}</li>
                </ol>   */}
        <Grid container xs={6}>
          <ImagenQA />
          <Grid
            className={classes.iconocatastro}
            justifyContent="center"
            alignItems="center"
          >
            <p className={classes.textStyle + " " + ajustable}>
              {"1. " + t("cadastre.cadastre11")}
            </p>
          </Grid>
        </Grid>
        <Grid container xs={6}>
          <ImagenQA1 />
          <Grid
            className={classes.iconocatastro}
            justifyContent="center"
            alignItems="center"
          >
            <p className={classes.textStyle + " " + ajustable}>
              {"1.2. " + t("cadastre.cadastre12")}
            </p>
          </Grid>
        </Grid>
        <Grid container xs={12}>
          <ImagenQA2 />
          <Grid
            className={classes.iconocatastro}
            direction="column"
            justifyContent="center"
          >
            <p className={classes.textStyle + " " + ajustable}>
              {"1.3. " + t("cadastre.cadastre13")}
            </p>
            <p className={classes.textStyle + " " + ajustable}>
              {"2. " + t("cadastre.cadestreadicional")}
            </p>
          </Grid>
        </Grid>
        <p className={classes.contentrulesp + " " + ajustable}>
          <strong>{t("cadastre.cadastre14")}</strong>
          {t("cadastre.cadastre15")}
        </p>
        <p className={classes.contentrulesp + " " + ajustable}>
          {t("cadastre.cadastre16")}
        </p>

        {/* <button className={estilo4}>
        <a className={classes.alink} href="" download>
          <Grid container direction="row">
                                <Grid item xs={4} direction="column" container  className={estilo3}>
                                  <CardMedia className={estilo2} image={word} />
                                </Grid>
                                <Grid item xs container direction="column" justifyContent="center">
                                  <p className={classes.contentrulesp3}><strong>Nombre: Catastro Multipropósito</strong></p>
                                  <p className={classes.contentrulesp3}>9.936 KB   |   01/10/2021</p>
                                  <p className={classes.contentrulesp3}><strong>Descripción: </strong>Presentación política de Catastro multipropósito</p>
                                </Grid>
            </Grid>
          </a>
        </button> */}
        <p className={classes.contentrulesp + " " + ajustable}>
          {t("cadastre.cadastre17")}
        </p>
        <Grid
          container
          direction="row"
          className={classes.margboton}
          justifyContent="center"
        >
          <Grid container item xs>
            <p className={classes.texto1 + " " + ajustable}>
              {t("cadastre.conpes")}
            </p>
          </Grid>
          <Grid Grid container item xs={6} justifyContent="flex-end">
            <Tooltip title={t("cadastre.conpes")} arrow>
              <Button
                className={classes.boton4 + " " + ajustable}
                href="https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/4007.pdf"
                target="_blank"
              >
                {t("cadastre.see")}
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};


const General = () => {
  const classes = useStyle();

  return (
    <Grid container id="target-two">
      <Catastro />      
      <ComparationModels />
      <Tomadecisiones/>
      <ImgTomadecisiones/>
    </Grid>
  );
};

export default General;
