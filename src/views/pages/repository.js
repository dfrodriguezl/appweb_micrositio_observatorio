import {
  Grid,
  makeStyles,
  useMediaQuery,
  Button,
  Box,
  Tooltip
} from "@material-ui/core";
import React, { Component } from "react";
import * as Values from "Observatorio/Variables/values";
import Meeting from "Observatorio/img/repos.jpg";
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';
import tecnicasvaluatorias from "../../files/Documento_Investistigacion_Tecnicas_Valuatorias.pdf"
import ejemplomercado from "../../files/EJEMPLO_FORMATO_MERCADO_OBSERVATORIO_INMOBILIARIO_NACIONAL.xlsx"
import formatomercado from "../../files/FORMATO_MERCADO_OBSERVATORIO_INMOBILIARIO_NACIONAL.xlsx"
import {useTranslation} from "react-i18next";

const useStyle = makeStyles({
  margintop: {
    padding: "0 0 5% 0",
    backgroundColor: "#f4f4f4",
    
  },
  alink: {
    textDecoration: "none",
    color: Values.TextButton,    
    fontFamily: Values.SourceRoboto,
  },
  containerbarra: {
    margin: "1em 0 0 0",
    backgroundColor: "#F3F3F3",
    padding: "0.7em 0 0.7em 0.7em",
    color: "#585858",
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    fontWeight:"normal",
    textAlign:"center"
  },
  containercontent:{
    
    padding: "0.7em 0 0.7em 0.7em",
    color: "#585858",
    fontWeight:"normal",
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
  },
  listyle: {
    paddingLeft: "0.6em",
  },
  containerTitle: {
    minHeight: "13vh",
  },
  titleStyle: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontWeight: "bold",
    fontSize: Values.SizeTitle,
    padding: Values.PaddingTitleText,
    textAlign: "center",
  },
  marginbutton: {
    padding: "0em 0em 0 0em",
  },
  marginbutton2: {
    padding: "0em 0em 0 11%",
  },
  titleStyle2: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontWeight: "bold",
    fontSize: Values.SizeSubtitle,
    padding: Values.PaddingTitleText,
  },
  gridglobal: {
    padding: "0 10vw 3vw 10vw",
  },
  gridglobalmovil: {
    padding: "0 5vw 3vw 5vw",
  },
  contentrulesp: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    margin: "1em 0 0 0",
  },
  imagen_top: {
    width: "100% !important",
    height: "25vh",
    backgroundSize: "35vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Meeting})`,
    backgroundPosition: "center",
  },
  imagen_top2: {
    width: "100%",
    height: "25vh",
    backgroundSize: "34vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Meeting})`,
    backgroundPosition: "center center",
    flexBasis: "100% !important",
    maxWidth: "100% !important",
  },
  tabla:{
    borderCollapse:"collapse",
    textAlign:"left",
    margin: "1.5em 0 0 0",
  },
  columnatabla:{
    borderBottom: "1px dotted",
    textAlign:"center"
  },
  boton: {
    padding: "0em 0.5em 0em 0.5em",
    borderRadius: "2vh",
    backgroundColor: Values.Redwinecolor,    
    textTransform: "capitalize",
    transition:"all 0.8s ease-out",
    cursor: "pointer",
    width: "max-content",
    fontSize: "calc(0.8em + 0.3vh)",
    borderRadius: "2vh",
    // fontWeight: "bold",
    "&:hover":{
        backgroundColor: Values.HoverButton,
        border:"none",
    }
}
});

const Imagen = () => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:660px)");
  var estilo = null;
  {
    matches ? (estilo = classes.imagen_top) : (estilo = classes.imagen_top2);
  }
  return (
    <Grid item container direction="column" xs={4} className={estilo}></Grid>
  );
};

const Repository = () => {
  const [t, i18n]= useTranslation("global");
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:769px)");  
  const ajustable = "ajustable"
  var estilo = null;
  {
    if (matches) {
      estilo = classes.gridglobal;
    } else {
      estilo = classes.gridglobalmovil;
    }
  }

  return (
    <Grid container direction="column" id="target-two" className={estilo}>
      <Grid container direction="row">
        <Grid container alignItems="center">
          <h3 className={classes.titleStyle+" "+ajustable}>
          {t("repository.repository")}
          </h3>
        </Grid>
        <Grid
          item
          container
          direction="column"
          xs
          className={classes.containerTitle}
        >
          <p className={classes.contentrulesp+" "+ajustable}>
          {t("repository.repository2")} {t("repository.repository3")}
          </p>
        </Grid>
        {/* <Imagen /> */}
      </Grid>
      <table className={classes.tabla}>
        <tr>
          <th className={classes.containerbarra+" "+ajustable}>{t("repository.repository4")}</th>
          <th className={classes.containerbarra+" "+ajustable}>{t("repository.repository5")}</th>
          <th className={classes.containerbarra+" "+ajustable}>{t("repository.repository6")}</th>
          <th className={classes.containerbarra+" "+ajustable}>{t("repository.repository7")}</th>
          <th className={classes.containerbarra+" "+ajustable}>{t("repository.repository8")}</th>
        </tr>
        <tr className={classes.columnatabla}>
          <th className={classes.containercontent+" "+ajustable}>TECNICAS VALUATORIAS.pdf</th>
          <th className={classes.containercontent+" "+ajustable}>V1</th>
          <th className={classes.containercontent+" "+ajustable}>Pdf</th>
          <th className={classes.containercontent+" "+ajustable}>472 KB</th>
          <th className={classes.containercontent}>
            <Tooltip title={t("repository.repository8")} arrow>
            <Button className={classes.boton+" "+ajustable}>
              <a target="_blank" className={classes.alink}
                  href={tecnicasvaluatorias}
                  download
              >{t("repository.repository8")}</a>
              <DownloadForOfflineRoundedIcon style={{ fill: 'white' }}/>
            </Button>
            </Tooltip>
          </th>
        </tr>
        {/* <tr className={classes.columnatabla}>
          <th className={classes.containercontent}>TIPO CONSTRUCTIVAS.docx</th>
          <th className={classes.containercontent}>Tipologías constructivas habituales en Colombia</th>
          <th className={classes.containercontent}><Button className={classes.boton}>
          <a className={classes.alink}
                  href=""
                  download
              >Descargar</a>
            </Button></th>
        </tr> */}
        <tr className={classes.columnatabla}>
          <th className={classes.containercontent+" "+ajustable}>EJEMPLO MERCADO.xlsx</th>
          <th className={classes.containercontent+" "+ajustable}>V1</th>
          <th className={classes.containercontent+" "+ajustable}>Excel</th>
          <th className={classes.containercontent+" "+ajustable}>31 KB</th>
          <th className={classes.containercontent}>
            <Tooltip title={t("repository.repository8")} arrow>
            <Button className={classes.boton+" "+ajustable}>
              <a className={classes.alink}
                  href={ejemplomercado}
                  download
              >{t("repository.repository8")}</a>
              <DownloadForOfflineRoundedIcon style={{ fill: 'white' }}/>
            </Button>
            </Tooltip>
            </th>
        </tr>
        <tr className={classes.columnatabla}>
          <th className={classes.containercontent+" "+ajustable}>FORMATO MERCADO.xlsx</th>
          <th className={classes.containercontent+" "+ajustable}>V1</th>
          <th className={classes.containercontent+" "+ajustable}>Excel</th>
          <th className={classes.containercontent+" "+ajustable}>50 KB</th>
          <th className={classes.containercontent}>
          <Tooltip title={t("repository.repository8")} arrow>
          <Button className={classes.boton+" "+ajustable}>
          <a className={classes.alink}
                  href={formatomercado}
                  download
              >{t("repository.repository8")}</a>
              <DownloadForOfflineRoundedIcon style={{ fill: 'white' }}/>
            </Button>
          </Tooltip>
            </th>
        </tr>
        {/* <tr className={classes.columnatabla}>
          <th className={classes.containercontent}>MANUAL GEOPACKAGE.pdf</th>
          <th className={classes.containercontent}>Manual cargue información Geopackage</th>
          <th className={classes.containercontent}><Button className={classes.boton}><a className={classes.alink}
                  href=""
                  download
                  target="_blank"
              >Descargar</a>
              </Button></th>
        </tr>
        <tr className={classes.columnatabla}>
          <th className={classes.containercontent}>OFERTAS OBSERVATORIO.gpkg</th>
          <th className={classes.containercontent}>Paquete mercado para PH, NPH y predios rurales</th>
          <th className={classes.containercontent}>
            <Button className={classes.boton}>
              <a className={classes.alink}
                  href=""
                  download
              >Descargar</a>
            </Button></th>
        </tr> */}
      </table>
    </Grid>
  );
};

export default Repository;
