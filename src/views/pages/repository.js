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
import Meeting from "Observatorio/img/Personalfiles.svg";
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';

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
    backgroundSize: "55%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Meeting})`,
    backgroundPosition: "center",
  },
  imagen_top2: {
    width: "100%",
    height: "47vh",
    backgroundSize: "100%",
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
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:769px)");
  var estilo = null;
  {
    if (matches) {
      estilo = classes.gridglobal;
    } else {
      estilo = classes.gridglobalmovil;
    }
  }

  return (
    <Grid container direction="column" className={estilo}>
      <Grid container direction="row">
        <Grid container justifyContent="center" alignItems="center">
          <h3 className={classes.titleStyle}>
            Repositorio observatorio inmobiliario nacional
          </h3>
        </Grid>
        <Grid
          item
          container
          direction="column"
          xs
          className={classes.containerTitle}
        >
          <p className={classes.contentrulesp}>
            El repositorio documental del observatorio inmobiliario nacional,
            almacena todos los archivos de descarga (ultimas versiones) de la
            presente herramienta y los pone a disposición de los usuarios.
          </p>
          <p className={classes.contentrulesp}>
            A continuación se listan los archivos, a los cuales se puede acceder
            mediante descarga:
          </p>
        </Grid>
        <Imagen />
      </Grid>
      <table className={classes.tabla}>
        <tr>
          <th className={classes.containerbarra}>Documento</th>
          <th className={classes.containerbarra}>Versión</th>
          <th className={classes.containerbarra}>Formato</th>
          <th className={classes.containerbarra}>Tamaño</th>
          <th className={classes.containerbarra}>Descargar</th>
        </tr>
        <tr className={classes.columnatabla}>
          <th className={classes.containercontent}>TECNICAS VALUATORIAS.pdf</th>
          <th className={classes.containercontent}>V1</th>
          <th className={classes.containercontent}>Pdf</th>
          <th className={classes.containercontent}>472 KB</th>
          <th className={classes.containercontent}>
            <Tooltip title="Descargar" arrow>
            <Button className={classes.boton}>
              <a className={classes.alink}
                  href="https://nowsoft.app/colectora/externo/files_oin/Documento_Investistigacion_Tecnicas_Valuatorias.pdf"
                  download
              >Descargar</a>
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
                  href="https://nowsoft.app/geoportal/descargas/oin/TIPO_CONSTRUCTIVAS.docx"
                  download
              >Descargar</a>
            </Button></th>
        </tr> */}
        <tr className={classes.columnatabla}>
          <th className={classes.containercontent}>EJEMPLO MERCADO.xlsx</th>
          <th className={classes.containercontent}>V1</th>
          <th className={classes.containercontent}>Excel</th>
          <th className={classes.containercontent}>31 KB</th>
          <th className={classes.containercontent}>
            <Tooltip title="Descargar" arrow>
            <Button className={classes.boton}>
              <a className={classes.alink}
                  href="https://nowsoft.app/colectora/externo/files_oin/EJEMPLO_FORMATO_MERCADO_OBSERVATORIO_INMOBILIARIO_NACIONAL.xlsx"
                  download
              >Descargar</a>
              <DownloadForOfflineRoundedIcon style={{ fill: 'white' }}/>
            </Button>
            </Tooltip>
            </th>
        </tr>
        <tr className={classes.columnatabla}>
          <th className={classes.containercontent}>FORMATO MERCADO.xlsx</th>
          <th className={classes.containercontent}>V1</th>
          <th className={classes.containercontent}>Excel</th>
          <th className={classes.containercontent}>50 KB</th>
          <th className={classes.containercontent}>
          <Tooltip title="Descargar" arrow>
          <Button className={classes.boton}>
          <a className={classes.alink}
                  href="https://nowsoft.app/colectora/externo/files_oin/FORMATO_MERCADO_OBSERVATORIO_INMOBILIARIO_NACIONAL.xlsx"
                  download
              >Descargar</a>
              <DownloadForOfflineRoundedIcon style={{ fill: 'white' }}/>
            </Button>
          </Tooltip>
            </th>
        </tr>
        {/* <tr className={classes.columnatabla}>
          <th className={classes.containercontent}>MANUAL GEOPACKAGE.pdf</th>
          <th className={classes.containercontent}>Manual cargue información Geopackage</th>
          <th className={classes.containercontent}><Button className={classes.boton}><a className={classes.alink}
                  href="https://nowsoft.app/geoportal/descargas/oin/INSTRUCTIVO_GEOPACKAGE.pdf"
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
                  href="https://nowsoft.app/geoportal/descargas/oin/OFERTAS_OBSERVATORIO.gpkg"
                  download
              >Descargar</a>
            </Button></th>
        </tr> */}
      </table>
    </Grid>
  );
};

export default Repository;
