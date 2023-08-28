import axios from "axios";
import styles from "./style/estilos.css";
import moment from "moment";
import { markersData } from "./prueba.js";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import UpdateSharpIcon from "@mui/icons-material/UpdateSharp";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";
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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  InputAdornment,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import Map from "devextreme-react/map";
import {
  Chart,
  CommonSeriesSettings,
  SeriesTemplate,
  Format,
  Font,
} from "devextreme-react/chart";
import PieChart, {
  Series,
  Label,
  Legend,
  Size,
  Export,
  Tooltip,
  Title,
} from "devextreme-react/pie-chart";
import React, { Component, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Values from "Observatorio/Variables/values";
import Projections from "Observatorio/img/user.jpg";
import Data from "Observatorio/img/user2.jpg";
import Excel from "Observatorio/img/Excel1.png";
import Excel2 from "Observatorio/img/Excel2.png";
import ejemplomercado from "../../files/EJEMPLO_FORMATO_MERCADO_OBSERVATORIO_INMOBILIARIO_NACIONAL.xlsx";
import formatomercado from "../../files/FORMATO_MERCADO_OBSERVATORIO_INMOBILIARIO_NACIONAL.xlsx";
import pdf from "Observatorio/img/PDF1.png";
import geograph from "Observatorio/img/Address-pana1.png";
import geograph2 from "Observatorio/img/Address-pana2.png";
import anotation from "Observatorio/img/anotacion.jpg";
import forgot from "Observatorio/img/forgot.jpg";
import choose from "Observatorio/img/Choose-rafiki.svg";
import Broken from "Observatorio/img/Broken.svg";
import Powerful from "Observatorio/img/Powerful.svg";
import Personal from "Observatorio/img/repo.jpg";
const Dash = require("Observatorio/common/datosdashboard.js");
const Dashexcel = require("Observatorio/common/datafileexcel.js");
const Dashexcelnotariado = require("Observatorio/common/datafileexcelnotariado.js");
const DashBar = require("Observatorio/common/dashboardbar.js");
import { Loader } from "../pages/loader/loader";
import enviroment from "../../config/enviroment";
let respuesta = "";
import MapDash from "./dashMap.js";
import MapNotariado from "./coordenadanotariadomap.js";
import DataGrid, {
  Column,
  Paging,
  Button,
  FilterRow,
  Selection,filtro
} from "devextreme-react/data-grid";
import datafileregistrer from "./datarepository.js";
import databigsource from "./databig.js";
import ExportExcel from "react-export-excel-fixed-xlsx";

const ExcelFile = ExportExcel.ExcelFile;
const ExcelSheet = ExportExcel.ExcelSheet;
const ExcelColumn = ExportExcel.ExcelColumn;
const markerUrl =
  "https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png";

const useStyle = makeStyles({
  pagination: {
    display: "flex",
    marginTop: "1em",
  },

  tabledata: {
    "&:focus-visible": {
      outline: "-webkit-focus-ring-color auto 0px !important",
    },
  },

  buttondownload: {
    color: "#F3F3F3 !important",
    width: "max-content",
    cursor: "pointer !important",
    padding: "0.1em 0.5em 0.1em 0.5em",
    fontSize: "calc(1em + 0.3vh)",
    transition: "all 0.8s ease-out",
    fontFamily: "Roboto",
    borderRadius: "2vh",
    textTransform: "capitalize",
    backgroundColor: "#821a3f",
    textDecoration: "none !important",
  },
  itemTextField1: {
    backgroundColor: "white",
    width: "38%",
  },

  itemTextFieldceed: {
    backgroundColor: "white",
    width: "100% !important",
    borderRadius: "4px",
  },

  searchtextfiel: {
    backgroundColor: "white",
    border: "1px solid #93929257",
    width: "15.7em !important",
    "&:focus-visible": {
      outline: "-webkit-focus-ring-color auto 0px !important",
    },
  },

  searchButton: {
    width: "0.9em",
    height: "1.6em",
    border: "1px solid #00B4CC00",
    background: "#00B4CC00",
    textAlign: "center",
    color: "#000",
    borderRadius: "0 5px 5px 0",
    cursor: "pointer",
    fontSize: "29px",
  },

  gridupdateexcel: {
    margin: "0 0 0 5vw",
  },

  searchcontainer: {
    borderRadius: "4px",
    border: "1px solid #6464644f",
    width: "15em !important",
    marginLeft: "1em",
    height: "3em",
  },

  itemTextFieldceedtext: {
    paddingLeft: "1.5vh !important",
    textAlign: "initial",
  },

  itemTextFieldceedcontainer: {
    margin: "0.5em 0px 0.5em 0",
  },

  gridstyletable: {
    display: "block",
    //border: "1px solid #000000",
    marginTop: "1em",
  },

  gridstyletablealto: {
    maxHeight: "150vh",
  },

  gridstyle: {
    display: "block",
    padding: "0em 0.8em 0em 0.8em",
  },

  gridstyle2: {
    display: "none !important",
  },

  gridtablecolumndescrip: {
    minWidth: "52em !important",
    textAlign:"justify"
  },

  gridtablecolumndireccioninmu: {    
    minWidth: "250px !important",
  },

  gridtablecolumnvalor: {    
    minWidth: "250px !important",
  },

  itemTextField: {
    backgroundColor: "white",
    width: "20%",
    margin: "0em 0.5em 0.5em 0.5em",
  },
  tamaño: {
    width: "100%",
  },
  datarepository: {
    margin: "13px 10px 0px 10px",
    color: "#000000",
    backgroundColor: "#ffffff",
    lineHeight: "inherit",
  },
  botonmodalinput: {
    display: "none",
  },
  borderspan: {
    width: "50%",
    border: "1px solid #0a0909",
    margin: "0 0 0 2%",
    borderRadius: "2vh",
    padding: "1.5% 0 0 0",
    textAlign: "center",
    color: "#4C4C4C",
    fontFamily: Values.SourceWorksans,
    fontSize: "calc(0.7em + 0.3vh)",
    fontWeight: "bold",
  },

  botonmodalcargar: {
    borderRadius: "2vh",
    backgroundColor: Values.Redwinecolor,
    color: Values.TextButton,
    fontFamily: Values.SourceWorksans,
    textTransform: "capitalize",
    transition: "all 0.8s ease-out",
    cursor: "pointer",
    marginTop: "4px",
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

  botonmodal: {
    borderRadius: "2vh",
    backgroundColor: Values.Redwinecolor,
    color: Values.TextButton,
    fontFamily: Values.SourceWorksans,
    textTransform: "capitalize",
    transition: "all 0.8s ease-out",
    cursor: "pointer",
    marginTop: "4px",
    width: "max-content",
    fontSize: "calc(0.7em + 0.3vh)",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: Values.HoverButton,
      border: "none",
    },
  },
  botonmodal11: {
    borderRadius: "2vh",
    backgroundColor: Values.Redwinecolor,
    color: Values.TextButton,
    fontFamily: Values.SourceWorksans,
    textTransform: "capitalize",
    transition: "all 0.8s ease-out",
    cursor: "pointer",
    marginTop: "4px",
    width: "12em",
    fontSize: "calc(0.7em + 0.3vh)",
    borderRadius: "2vh",
    fontWeight: "bold",
    float: "right",
    textAlign: "center",
    border: "none",
    padding: "1vh 1vh 1vh 1vh",
  },
  botonmodal1: {
    borderRadius: "2vh",
    backgroundColor: Values.Redwinecolor,
    color: Values.TextButton,
    fontFamily: Values.SourceWorksans,
    textTransform: "capitalize",
    transition: "all 0.8s ease-out",
    cursor: "pointer",
    marginTop: "4px",
    width: "7em",
    fontSize: "calc(0.7em + 0.3vh)",
    borderRadius: "2vh",
    fontWeight: "bold",
    float: "right",
    textAlign: "center",
    border: "none",
    padding: "1vh 1vh 1vh 1vh",
  },
  centerButton: {
    justifyContent: "center",
    padding: "0 0 0 0 !important",
  },
  modalstyle: {
    position: "absolute",
    top: "50%",
    borderRadius: "2vh",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    backgroundColor: "#F3F3F3",
    border: "1px #000",
    boxShadow: "24px",
  },
  botonpass: {
    padding: "0.5em 0.5em 0.5em 0.5em",
    borderRadius: "2vh",
    backgroundColor: Values.Redwinecolor,
    color: Values.TextButton,
    fontFamily: Values.SourceRoboto,
    textTransform: "capitalize",
    transition: "all 0.8s ease-out",
    cursor: "pointer",
    width: "max-content",
    fontSize: "calc(1em + 0.3vh)",
    borderRadius: "2vh",
    textDecoration: "none",
    border: "none",
    // fontWeight: "bold",
    "&:hover": {
      backgroundColor: Values.HoverButton,
      border: "none",
    },
  },

  updatebutton: {
    padding: "0.5vw 0.5vw 0.5vw 0.5vw",
    borderRadius: "1vh",
    backgroundColor: Values.Redwinecolor,
    color: Values.TextButton,
    margin: "0 1vw 0 0",
    fontFamily: Values.SourceRoboto,
    textTransform: "capitalize",
    transition: "all 0.8s ease-out",
    cursor: "pointer",
    width: "max-content",
    fontSize: "calc(0.8em + 0.3vh)",
    borderRadius: "2vh",
    textDecoration: "none",
    border: "none",
    // fontWeight: "bold",
    "&:hover": {
      backgroundColor: Values.HoverButton,
      border: "none",
    },
  },

  paddingmodal: {
    padding: "0 0 0 1em",
  },
  paddingmodal1: {
    padding: "0 0 0.5em 1em",
  },

  centerText: {
    textAlign: "center",
    // padding: "3vh 0 0 0",
  },

  contentcar: {
    paddingBottom: "0 !important",
  },

  Titleh: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontWeight: "bold",
    fontSize: "calc(1em + 1.5vh)",
    textAlign: "center",

    // margin: "2% 0 1% 0",
  },

  Titleh3: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontWeight: "bold",
    fontSize: "calc(1em + 1.5vh)",
    textAlign: "left",
  },

  Titleh4: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontWeight: "bold",
    fontSize: "calc(1em + 1.5vh)",
    //textAlign: "left",
    //padding:"0 0 0 6em"
  },

  Titleh11: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontWeight: "bold",
    fontSize: "calc(1em + 0.9vh)",
    //textAlign: "left",
    //padding:"0 0 0 7em"
  },

  Titleh12: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontWeight: "bold",
    fontSize: "calc(1em + 0.9vh)",
    textAlign: "left",
    padding: "0 0.2em 0 0.2em",
  },

  marginout: {
    margin: "0 0 0.5vw 0",
  },

  contentrulesp31: {
    fontSize: "calc(0.9em + 1.2vh)",
    fontFamily: Values.SourceRoboto,
    color: Values.TextParagraph,
    fontWeight: "bold",
  },

  contentrulesp2: {
    fontSize: "calc(0.8em + 0.9vh)",
    fontFamily: Values.SourceRoboto,
    color: Values.TextParagraph,
  },

  contentrulesp3: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: "calc(0.5em + 0.4vh)",
    textAlign: "center",
  },

  Textp: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "start",
    width: "90%",
    padding: "0 0 1em 0",
  },

  Textpmodal: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "center",
    width: "90%",
    padding: "0 0 1em 0",
  },

  Textpmodal1: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "center",
    width: "100%",
    padding: "1em 0 1em 0",
  },

  Textpass: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "center",
    width: "90%",
    padding: "0 0 1em 0",
  },

  Textp_1: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    //textAlign: "start",
    //width: "90%",
    padding: "1em 1em",
  },

  Textp_10: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "center",
    //width: "90%",
    padding: "1em 1em",
  },

  Textp_2: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "start",
    width: "90%",
    padding: "1em 0 0.5em 10em",
    fontStyle: "italic",
  },

  Textp1: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "start",
    width: "90%",
    padding: "1em 0 1em 0",
  },

  root: {
    width: "100%",
    borderRadius: "1em",
    boxShadow: "3px 3px 10px #7b7676",
  },
  root1: {
    width: "74%",
    borderRadius: "1em",
    boxShadow: "3px 3px 10px #7b7676",
    padding: "1em",
    margin: "0 0 2em 12.5em",
    backgroundColor: "#E5E5E5",
  },

  rootpassword: {
    width: "80%",
    borderRadius: "1em",
    boxShadow: "3px 3px 10px #7b7676",
    padding: "1em",
    margin: "0 0 2em 1.5em",
    backgroundColor: "#E5E5E5",
  },

  rootno: {
    width: "91%",
    borderRadius: "1em",
    boxShadow: "3px 3px 10px #7b7676",
    padding: "1em",
    margin: "0 0 2em 2.5em",
    backgroundColor: "#E5E5E5",
  },

  rootno1: {
    width: "91%",
    borderRadius: "1em",
    boxShadow: "3px 3px 10px #7b7676",
    padding: "1em",
    margin: "0 0 2em 1em",
    backgroundColor: "#E5E5E5",
  },

  root5: {
    width: "100%",
    borderRadius: "1em",
    boxShadow: "3px 3px 10px #7b7676",
    padding: "1em",
    backgroundColor: "#ffffff",
    marginTop: "-1vw",
  },

  root2: {
    borderRadius: "1em",
    boxShadow: "3px 3px 10px #7b7676",
    padding: "1em",
    marginBottom: "2em",
    backgroundColor: "#ffffff",
  },

  root3: {
    width: "90%",
    borderRadius: "1em",
    border: "1px solid",
    backgroundColor: "#ffffff",
  },

  root4: {
    width: "100%",
    borderRadius: "1em",
    padding: "1em",
    backgroundColor: "#E5E5E5",
    margin: "2em 0 0 -0.6em",
  },

  rootmap: {
    width: "100%",
    borderRadius: "0.5em",
    padding: "0.5em",
    backgroundColor: "#E5E5E5",
    margin: "0.5em 0 0 0em",
  },

  rootcolor: {
    backgroundColor: "#E5E5E5",
  },

  excel: {
    height: "14vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "60%",
    width: "100%",
  },
  excel2: {
    height: "10vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "27%",
  },

  excel3: {
    height: "16vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "64%",
  },

  media: {
    height: "30vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "60%",
    backgroundPosition: "center center",
  },

  mediamodal: {
    height: "22vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "90%",
    backgroundPosition: "center center",
  },

  media1: {
    height: "30vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "37vh",
    backgroundPosition: "center",
  },

  media2: {
    height: "27vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "43%",
  },

  mediawidth: {
    maxWidth: "100% !important",
    flexBasis: "100% !important",
  },

  media3: {
    height: "47vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "65vh",
    backgroundPosition: "center",
  },

  media4: {
    height: "25vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "40vh",
    backgroundPosition: "center",
  },

  gridglobal: {
    padding: "0 10% 0 10%",
  },

  cardglobal: {
    padding: "0% 0% 1.5% 0%",
    backgroundColor: "white",
  },
  marginbutton2: {
    marginTop: "-2vw",
  },
  cardglobal2: {
    padding: "0% 0% 0% 0%",
    backgroundColor: "white",
  },
  margincard: {
    margin: "0 2vw 0 0",
    maxWidth: "100% !important",
    flexBasis: "100% !important",
  },
  margincard1: {
    margin: "0 3vw 0 0",
  },
  alink: {
    textDecoration: "none",
  },
  contentnum: {
    fontFamily: Values.SourceRoboto,
    fontSize: "calc(1em + 1.5vh)",
    fontWeight: "bold",
    color: Values.Redwinecolor,
  },
  boton: {
    padding: "0.3em 1em 0.3em 1em",
    borderRadius: "2vh",
    backgroundColor: "#ffffff",
    fontFamily: Values.SourceRoboto,
    textTransform: "capitalize",
    color: "#4C4C4C",
    transition: "all 0.8s ease-out",
    cursor: "pointer",
    margin: "10% 0 4% 0",
    width: "98%",
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

  padingmap: {
    padding: "0 0 0 0",
  },

  pading: {
    padding: "0 0 0 0",
  },
  pading2: {
    padding: "3vw 1vw 0 1vw",
  },
});
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  boxShadow: 2,
  borderRadius: "10px",
  padding: "20px",
  p: 4,
};

const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  boxShadow: 2,
  borderRadius: "10px",
  padding: "20px",
  p: 4,
};

const style3 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "62%",
  bgcolor: "background.paper",
  boxShadow: 2,
  borderRadius: "10px",
  padding: "20px",
  p: 4,
};

const Cardsmapas = () => {
  const history = useNavigate();
  const rutapasschange = (e) => {
    history("/observatorio/ChangePassword");
  };  
  const [statistics, setstatistics] = useState({});
  const [allpage, setallPage] = useState();
  const [fileregistrerph, setfileregistrerph] = useState([]);
  const [filebig, setfilebig] = useState([]);
  const [fileregistrernph, setfileregistrernph] = useState([]);
  const [fileregistrerrural, setfileregistrerrural] = useState([]);
  const [ph_venta_arriendo, setph_venta_arriendo] = useState({});
  const [nph_venta_arriendo, setnph_venta_arriendo] = useState({});
  const [rural_venta_arriendo, setrural_venta_arriendo] = useState({});
  const [ph_destinacion_economica, setph_destinacion_economica] = useState({});
  const [nph_destinacion_economica, setnph_destinacion_economica] = useState(
    {}
  );
  const [rural_destinacion_economica, setrural_destinacion_economica] =
    useState({});
  const [locationph, setlocationph] = useState({});
  const [locationnph, setlocationnph] = useState({});
  const [locationrural, setlocationrural] = useState({});
  const [openLoading, setLoading] = useState(false);
  let suma = 0;
  const [limitselect, setLimitselect] = useState(10);
  const [filtro, setfiltro] = useState("");
  const [excelnotariado, setexcelnotariado] = useState([]);

  const loadStatistics = () => {
    let token = localStorage.getItem("token");
    axios
      .get(`${enviroment.endpoint}/PlataformaUsuario/statistics`, {
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      })
      .then((response) => {
        if (response.status == 200) {
          if (
            response.data.data.cantidadnph == "0" &&
            response.data.data.cantidadph == "0" &&
            response.data.data.cantidadrural == "0"
          ) {
            setOpen3(true);
          }
          if (response.data.code == "OK") {
            setstatistics(response.data.data);
          } else {
            //setOpen3(true)
            alert("ocurrio un problema Error!..1");
          }
        } else {
          alert("ocurrio un problema externo");
        }
      });
  };

  const loadFileRegistrer = () => {
    let token = localStorage.getItem("token");
    axios
      .get(`${enviroment.endpoint}/PlataformaUsuario/fileregistrer`, {
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      })
      .then((response) => {
        if (response.status == 200) {
          if (response.data.code == "OK") {
            //console.log("EY!",response.data.data);
            setfileregistrerph(response.data.data.fileph);
            setfileregistrernph(response.data.data.filenph);
            setfileregistrerrural(response.data.data.filerural);
          } else {
            //alert("ocurrio un problema Error!..12");
          }
        } else {
          alert("ocurrio un problema externo");
        }
      });
  };

  const loadStatisticsventaarrendoph = () => {
    let token = localStorage.getItem("token");
    axios
      .get(`${enviroment.endpoint}/PlataformaUsuario/graphis`, {
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      })
      .then((response) => {
        if (response.status == 200) {
          if (response.data.code == "OK") {
            setph_venta_arriendo(response.data.data.cantidadph_arrendo_ventaph);
            setnph_venta_arriendo(
              response.data.data.cantidadph_arrendo_ventanph
            );
            setrural_venta_arriendo(
              response.data.data.cantidadph_arrendo_ventarural
            );
            setph_destinacion_economica(
              response.data.data.cantidad_destinacion_economica_ph
            );
            setnph_destinacion_economica(
              response.data.data.cantidad_destinacion_economica_nph
            );
            setrural_destinacion_economica(
              response.data.data.cantidad_destinacion_economica_rural
            );
          } else {
           // console.log("ocurrio un problema Error!..2");
          }
        } else {
          alert("ocurrio un problema externo");
        }
      });
  };

  const [page, setPage] = useState(1);

  const [coordenada, setCoordenada] = useState([]);

  const handleChangepage = (e) => {
    setPage(parseInt(e.target.innerText));
    let valor = document.getElementById("search1").value;
    valor === ""
      ? loadFileBig(parseInt(e.target.innerText))
      : loadFileBigsearch(parseInt(e.target.innerText), valor);
  };
  let dataLocationNotariado = [];
  const onSelectAllClick = (event) => {
    if (event.target.checked == true) {
      let coordenadas = event.target.value.split(",");
     // console.log("verificando descripcion", coordenadas)
      coordenada.push(coordenadas[0], coordenadas[1], coordenadas[2]);
      setCoordenada(Object.values(coordenada));
    } else {
      let filternotariado = event.target.value.split(",");
     // console.log("borrar la coordenada del array", coordenada);
      const borrarlat = filternotariado[0] + "";
      const borrarlong = filternotariado[1] + "";
      const descripcionborrar = filternotariado[2] + "";
     // console.log("borrar la coordenada del array",typeof borrarlat,typeof borrarlong,typeof descripcionborrar);
      let coordenadaborrada = coordenada.filter(
        (item) => item !== filternotariado[0] && item !== filternotariado[1] && item !== filternotariado[2]
      );
      setCoordenada(Object.values(coordenadaborrada));
     // console.log("borrar la coordenada del array1", coordenadaborrada);
    }
    //setChecked();
  };

  dataLocationNotariado = MapNotariado.markersDataNotariado(coordenada);
  const botonhandlesearch1 = () => {
    let valor = document.getElementById("search1").value;
   // console.log("camila verificar", document.getElementById("search1"), valor);
    if (valor === "") {
      //loadFileBig(page)
     // console.log("20/05/2023", "se debe mostrar un error por estar vacio1");
    } else {
      //document.getElementsByClassName("notariadocheck").checked
      loadFileBigsearch(page, valor);
    }
    //document.getElementById("search1").value=""
  };

   const handlemodaldownloadexcel = () =>{
    let valor = document.getElementById("search1").value;
    
    if(valor == ""){
      setfiltro("")
      loadFileBigexcel();
    }else{      
      setfiltro("con referencia a la busqueda: "+valor)
      loadFileBigexcelsearch(valor);
    }
  }

  const loadFileBigsearch = (page1, busqueda) => {
    let token = localStorage.getItem("token");
    setLoading(true);
    axios
      .get(
        `${enviroment.endpoint}/PlataformaUsuario/filebigsearch?page=${
          page1 - 1
        }&size=${limitselect}&busqueda=${busqueda}`,
        {
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        }
      )
      .then((response) => {
        if (response.status == 200) {
          if (response.data.code == "OK") {
            setallPage(response.data.data.paginasall);
            setfilebig(response.data.data.filebigdata);
            setLoading(false);
          } else {
            alert("ocurrio un problema Error!..12");
            setLoading(false);
          }
        } else {
          alert("ocurrio un problema externo");
        }
      });
  };

  const loadFileBig = (page1) => {
    let token = localStorage.getItem("token");
    setLoading(true);
    axios
      .get(
        `${enviroment.endpoint}/PlataformaUsuario/filebig?page=${
          page1 - 1
        }&size=${limitselect}`,
        {
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        }
      )
      .then((response) => {
        if (response.status == 200) {
          if (response.data.code == "OK") {
            setallPage(response.data.data.paginasall);
            setfilebig(response.data.data.filebigdata);
            setLoading(false);
          } else {
            //alert("ocurrio un problema Error!..12");
          }
        } else {
          alert("ocurrio un problema externo");
        }
      });
  };

  const loadFileBigexcel = () => {
    let token = localStorage.getItem("token");
    setLoading(true);
    axios
      .get(
        `${enviroment.endpoint}/PlataformaUsuario/filebigexcel`,
        {
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        }
      )
      .then((response) => {
        if (response.status == 200) {
          if (response.data.code == "OK") {
           // console.log("prueba10", )
            typeof response.data.data.filebigdataexcel == "number"
              ? setexcelnotariado(Dashexcelnotariado.dashBoardExcelnNotariado)
              : setexcelnotariado(response.data.data.filebigdataexcel);
              setLoading(false);
              setOpen6(true);
          } else {
            alert("ocurrio un problema Error Excel!..12");
          }
        } else {
          alert("ocurrio un problema externo");
        }
      });
  };

  const loadFileBigexcelsearch = (busqueda) => {
    let token = localStorage.getItem("token");
    let valor = document.getElementById("search1").value;
   // console.log("variable3", busqueda)
   // console.log("variable30", valor)
    setLoading(true);
    axios
      .get(
        `${enviroment.endpoint}/PlataformaUsuario/filebigexcelsearch?busqueda=${busqueda}`,
        {
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        }
      )
      .then((response) => {
        if (response.status == 200) {
          if (response.data.code == "OK") {
           // console.log("prueba10", response.data.data.filebigdataexcelsearch)
            typeof response.data.data.filebigdataexcelsearch == "number"
              ? setexcelnotariado(Dashexcelnotariado.dashBoardExcelnNotariado)
              : setexcelnotariado(response.data.data.filebigdataexcelsearch);
              setLoading(false);
              setOpen6(true);
          } else {
            alert("ocurrio un problema Error Excel!..13");
          }
        } else {
          alert("ocurrio un problema externo");
        }
      });
  };

  const [open3, setOpen3] = useState(false);
  const handleClose3 = () => setOpen3(false);

  const [open4, setOpen4] = useState(false);
  const handleClose4 = () => setOpen3(false);

  const [open5, setOpen5] = useState(false);
  const handleClose5 = () => setOpen3(false);

  const [open6, setOpen6] = useState(false);
  const handleClose6 = () => setOpen6(false);

  const [open7, setOpen7] = useState(false);
  const handleClose7 = () => setOpen7(false);

  let rol = localStorage.getItem("rol");
  const [registreph, setregistreph] = useState([]);
  const [registrenph, setregistrenph] = useState([]);
  const [registrerural, setregistrerural] = useState([]);
  const [fecha_ini, setfecha_ini]=useState();
  const [fecha_fi, setfecha_fin]=useState();
  const [allceed, setallceed] = useState([])

  const locationUser = () => {
    let token = localStorage.getItem("token");
    axios
      .get(`${enviroment.endpoint}/PlataformaUsuario/location`, {
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      })
      .then((response) => {
        if (response.status == 200) {
         // console.log("24/10/2022", response.data.data);
          if (response.data.code == "OK") {
           // console.log("24/10/2023", response.data.data.locationph);
            setlocationph(response.data.data.locationph);
            setlocationnph(response.data.data.locationnph);
            setlocationrural(response.data.data.locationrural);
          } else {
            setOpen3(true);
          }
        } else {
          alert("ocurrio un problema externo");
        }
      });
  };
  const handleUpdatepage = () => {
    loadFileBig(page);
  };
  function downloadallfileceed (data) { 
    window.open(data, 'Download');     
  }

  const fechaceed = (e) =>{    
    let fecha_inicio =e.target.value;
    setfecha_ini(fecha_inicio)
  }

  const fechaceed2 = (e) =>{    
    let fecha_fin = e.target.value;
    setfecha_fin(fecha_fin)
  }


  const offerdata = () => {
    let token = localStorage.getItem("token");
    axios
      .get(`${enviroment.endpoint}/PlataformaUsuario/offerdata`, {
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      })
      .then((response) => {
        if (response.status == 200) {
          if (response.data.code == "OK") {
            setregistreph(response.data.data.fileph);
            setregistrenph(response.data.data.filenph);
            setregistrerural(response.data.data.filerural);
          } else {
           // console.log("sin descargar");
          }
        } else {
          setLoading(false);
          alert("ocurrio un problema externo");
        }
      });
  };

  
  const ceeddownloaduser = () => {
    let token = localStorage.getItem("token");
    let nombre = document.getElementById("nombre").value;
    let cargo = document.getElementById("cargo").value;
    let dependencia = document.getElementById("dependencia").value;
    let motivo = document.getElementById("motivo").value;
     let body={
      nombre: nombre,
      cargo: cargo,
      dependencia: dependencia,
      fecha_inicio: fecha_ini,
      fecha_fin: fecha_fi,
      motivo: motivo
     }
     setLoading(true)
     axios.post(
         `${enviroment.endpoint}/PlataformaUsuario/ceeddownload`, 
          body, 
          {
              headers: { 
                  'Content-Type' : 'application/json',
                  token: token,
              }
          }
  ).then(response => {  
      if(response.status == 200 ){
          if(response.data.code == "OK"){
            if(response.data.data.length>1){
              setallceed(response.data.data)
              setOpen7(true)
              setLoading(false)
            }else{
              downloadallfileceed(response.data.data[0].url) 
            }
            setLoading(false)
          }else{
              setLoading(false)
              alert('Usuario o contraseña incorrecto')
          }

      }else{
         setLoading(false)
         alert('ocurrio un problema externo')
      }  
      
  });
 }


  suma =
    parseInt(statistics.cantidadph) +
    parseInt(statistics.cantidadnph) +
    parseInt(statistics.cantidadrural);

  useEffect(() => {
    loadStatistics();
    loadStatisticsventaarrendoph();
    locationUser();
    loadFileRegistrer();
    offerdata();
    rol == 1?loadFileBig(page):null;
  }, []);

 // console.log("allceed", allceed)

  let dataSourceGeneral = Dash.dashBoardCake(statistics);
  let dataSourcePh = Dash.dashBoardCakePh(ph_venta_arriendo);
  let dataSourceNph = Dash.dashBoardCakeNph(nph_venta_arriendo);
  let dataSourceRural = Dash.dashBoardCakeRural(rural_venta_arriendo);
  let dataDestinacionPh = DashBar.dashBoardDestinacionPH(
    ph_destinacion_economica
  );

  let dataDestinacionNph = DashBar.dashBoardDestinacionNPH(
    nph_destinacion_economica
  );

  let dataDestinacionRural = DashBar.dashBoardDestinacionRural(
    rural_destinacion_economica
  );
  let dataSourceFileph = datafileregistrer.fileregistrer(fileregistrerph);
  // let dataSourceFilenph = datafileregistrer.fileregistrer(fileregistrernph);
  // let dataSourceFilerural = datafileregistrer.fileregistrer(fileregistrerrural); //UNIR LOS 3 ARREGLOS EN UNO SOLO, POR SI ALGUNO DE ELLOS NO TIENE INFORMACION SALDRA ALGUNO DE LOS 3

  let dataSourceBig = databigsource.fileregistrerbig(filebig);
  
  const [estadomap, setestadomap] = useState("");
  const [estadomapdestino, setestadomapdestino] = useState("");
  const [estadoofer, setestadoofer] = useState("Ph");
  const [deletvalue, setdeletvalue] = useState();
  const [deletvaluefecha, setdeletvaluefecha] = useState();
  const [estadom, setestadom] = useState(false);
  const [estadodestino, setestadestino] = useState(false);
  const [excelph, setexcelph] = useState([]);
  const [excelnph, setexcelnph] = useState([]);
  const [excelrural, setexcelrural] = useState([]);

  const handleChangeValue = (e) => {
    setestadomap(e.target.value);
    setestadom(true);
  };

  const handleChangeValue2 = (e) => {
    setestadomapdestino(e.target.value);
    setestadestino(true);
  };

  const handleChangeValue1 = (e) => {
    setestadoofer(e.target.value);
  };

  const handleChangeValueDelet = (e) => {
    setdeletvalue(e.row.values[2]);
    setdeletvaluefecha(e.row.values[6]);
    setOpen5(true);
  };

  let dataLocationPh = [];
  let dataLocationPhdestino = [];
  let dataSourceRegistrer = [];

  switch (estadoofer) {
    case "Ph":
      dataSourceRegistrer = datafileregistrer.fileregistrerrowph(registreph);
      break;
    case "Nph":
      dataSourceRegistrer = datafileregistrer.fileregistrerrownph(registrenph);
      break;
    case "Rural":
      dataSourceRegistrer =
        datafileregistrer.fileregistrerrowrural(registrerural);
      break;
    default:
      dataSourceRegistrer = datafileregistrer.fileregistrerrowph(registreph);
  }

  switch (estadomap) {
    case "Ph":
      dataLocationPh = MapDash.markersDataPh(locationph);
      break;
    case "Nph":
      dataLocationPh = MapDash.markersDataPh(locationnph);
      break;
    case "Rural":
      dataLocationPh = MapDash.markersDataPh(locationrural);
      break;
    default:
      dataLocationPh = MapDash.markersDataPh(locationph);
  }

  switch (estadomapdestino) {
    case "Acuicola":
      dataLocationPhdestino = dataLocationPh.filter((element, index) => {
        return element.prueba == "Acuicola";
      });
      break;
    case "Agricola":
      dataLocationPhdestino = dataLocationPh.filter((element, index) => {
        return element.prueba == "Agricola";
      });
      break;
    case "Agroindustrial":
      dataLocationPhdestino = dataLocationPh.filter((element, index) => {
        return element.prueba == "Agroindustrial";
      });
      break;
    case "Agropecuario":
      dataLocationPhdestino = dataLocationPh.filter((element, index) => {
        return element.prueba == "Agropecuario";
      });
      break;
    case "Agroforestal":
      dataLocationPhdestino = dataLocationPh.filter((element, index) => {
        return element.prueba == "Agroforestal";
      });
      break;
    case "Comercial":
      dataLocationPhdestino = dataLocationPh.filter((element, index) => {
        return element.prueba == "Comercial";
      });
      break;
    case "Cultural":
      dataLocationPhdestino = dataLocationPh.filter((element, index) => {
        return element.prueba == "Cultural";
      });
      break;
    case "Educativo":
      dataLocationPhdestino = dataLocationPh.filter((element, index) => {
        return element.prueba == "Educativo";
      });
      break;
    case "Forestal":
      dataLocationPhdestino = dataLocationPh.filter((element, index) => {
        return element.prueba == "Forestal";
      });
      break;
    case "Habitacional":
      dataLocationPhdestino = dataLocationPh.filter((element, index) => {
        return element.prueba == "Habitacional";
      });
      break;
    case "Industrial":
      dataLocationPhdestino = dataLocationPh.filter((element, index) => {
        return element.prueba == "Industrial";
      });
      break;
    case "Infraestructura Asociada Produccion Agropecuaria":
      dataLocationPhdestino = dataLocationPh.filter((element, index) => {
        return (
          element.prueba == "Infraestructura_Asociada_Produccion_Agropecuaria"
        );
      });
      break;
    case "Infraestructura Hidraulica":
      dataLocationPhdestino = dataLocationPh.filter((element, index) => {
        return element.prueba == "Infraestructura_Hidraulica";
      });
    case "Infraestructura Saneamiento Basico":
      dataLocationPhdestino = dataLocationPh.filter((element, index) => {
        return element.prueba == "Infraestructura_Saneamiento_Basico";
      });
      break;
    case "Infraestructura Seguridad":
      dataLocationPhdestino = dataLocationPh.filter((element, index) => {
        return element.prueba == "Infraestructura_Seguridad";
      });
      break;
    case "Infraestructura Transporte":
      dataLocationPhdestino = dataLocationPh.filter((element, index) => {
        return element.prueba == "Infraestructura_Transporte";
      });
      break;
    case "Institucional":
      dataLocationPhdestino = dataLocationPh.filter((element, index) => {
        return element.prueba == "Institucional";
      });
      break;
    case "Mineria Hidrocarburos":
      dataLocationPhdestino = dataLocationPh.filter((element, index) => {
        return element.prueba == "Mineria_Hidrocarburos";
      });
      break;
    case "Lote Urbanizable No Urbanizado":
      dataLocationPhdestino = dataLocationPh.filter((element, index) => {
        return element.prueba == "Lote_Urbanizable_No_Urbanizado";
      });
      break;
    case "Lote Urbanizado No Construido":
      dataLocationPhdestino = dataLocationPh.filter((element, index) => {
        return element.prueba == "Lote_Urbanizado_No_Construido";
      });
      break;
    case "Lote No Urbanizable":
      dataLocationPhdestino = dataLocationPh.filter((element, index) => {
        return element.prueba == "Lote_No_Urbanizable";
      });
      break;
    case "Precuario":
      dataLocationPhdestino = dataLocationPh.filter((element, index) => {
        return element.prueba == "Precuario";
      });
      break;
    case "Recreacional":
      dataLocationPhdestino = dataLocationPh.filter((element, index) => {
        return element.prueba == "Recreacional";
      });
      break;
    case "Religioso":
      dataLocationPhdestino = dataLocationPh.filter((element, index) => {
        return element.prueba == "Religioso";
      });
      break;
    case "Salubridad":
      dataLocationPhdestino = dataLocationPh.filter((element, index) => {
        return element.prueba == "Salubridad";
      });
      break;
    case "Servicios Funerarios":
      dataLocationPhdestino = dataLocationPh.filter((element, index) => {
        return element.prueba == "Servicios_Funerarios";
      });
      break;
    case "Uso Publico":
      dataLocationPhdestino = dataLocationPh.filter((element, index) => {
        return element.prueba == "Uso_Publico";
      });
      break;
  }

  const classes = useStyle();
  const matches = useMediaQuery("(max-width:769px)");
  const matches2 = useMediaQuery("(min-width:1281px)");

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClose1 = () => setOpen1(false);
  const handleClose2 = () => setOpen2(false);

  const upload = () => {
    document.getElementById("file").files[0];
    let token = localStorage.getItem("token");
    const archivos = document.getElementById("file").files;
    const data = new FormData();

    data.append("archivo", archivos[0]);
    setLoading(true);
    setOpen(false);
    axios
      .post(`${enviroment.endpoint}/PlataformaUsuario/upload`, data, {
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      })
      .then((response) => {
        if (response.status == 200) {
          respuesta = response.data.code;
          if (response.data.code == "OK") {
            loadStatistics();
            loadStatisticsventaarrendoph();
            locationUser();
            loadFileRegistrer();
            offerdata();
            setLoading(false);
            setOpen1(true);
          } else {
            setLoading(false);
            setOpen2(true);
            setOpen1(false);
            //alert("Usuario o contraseña incorrecto");
          }
        } else {
          setLoading(false);
          alert("ocurrio un problema externo");
        }
      });
  };

  const download = (e) => {
    let token = localStorage.getItem("token");
    let data = e.row.values[2];
    setLoading(true);
    axios
      .get(`${enviroment.endpoint}/PlataformaUsuario/download`, {
        headers: {
          "Content-Type": "application/json",
          data: data,
          token: token,
        },
      })
      .then((response) => {
        if (response.status == 200) {
          if (response.data.code == "OK") {
            typeof response.data.data.fileph == "number"
              ? setexcelph(Dashexcel.dashBoardExcelPH)
              : setexcelph(response.data.data.fileph);
            typeof response.data.data.filenph == "number"
              ? setexcelnph(Dashexcel.dashBoardExcelnNPH)
              : setexcelnph(response.data.data.filenph);
            typeof response.data.data.filerural == "number"
              ? setexcelrural(Dashexcel.dashBoardExcelRural)
              : setexcelrural(response.data.data.filerural);
            setLoading(false);
            setOpen4(true);
          } else {
            setLoading(false);
           // console.log("sin descargar");
          }
        } else {
          setLoading(false);
          alert("ocurrio un problema externo");
        }
      });
  };

  const delet = () => {
    let token = localStorage.getItem("token");
    let data = deletvalue;
    let tabla = estadoofer;
    let fecha = deletvaluefecha;
    let body = {
      datos: data,
      table: tabla,
      fecha: fecha,
    };
    setLoading(true);
    setOpen5(false);
    axios
      .post(`${enviroment.endpoint}/PlataformaUsuario/deletregistre`, body, {
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      })
      .then((response) => {
        if (response.status == 200) {
          if (response.data.code == "OK") {
            offerdata();
            loadStatistics();
            loadStatisticsventaarrendoph();
            locationUser();
            loadFileRegistrer();
            setLoading(false);
          } else {
            alert("Usuario o contraseña incorrecto");
          }
        } else {
          setLoading(false);
          alert("ocurrio un problema externo");
        }
      });
  };

  var estilo = null;
  var estilo2 = null;
  var estilo3 = null;
  var sizegrafico = null;
  var sizegrafico2 = null;
  var direccion = null;
  var pading = null;
  var title_ = null;
  var numero = null;
  var root = null;
  var estilo4 = null;
  var estilo5 = null;
  var prueba = null;
  var gridstyl = null;
  {
    if (rol <= 1) {
     // console.log("rol1", rol);
      gridstyl = classes.gridstyle;
    } else {
      gridstyl = classes.gridstyle2;
     // console.log("rol2", rol);
    }
    if (matches2) {
      estilo = classes.media;
      estilo4 = classes.media1;
      estilo2 = classes.excel;
      estilo5 = style;
      direccion = "row";
      sizegrafico = 580;
      sizegrafico2 = 450;
      prueba = 1250;
      pading = classes.pading;
      title_ = "row";
      numero = 4;
      root = classes.root1;
    } else {
      if (matches) {
        estilo = classes.media2;
        estilo3 = classes.mediawidth;
        estilo2 = classes.excel2;
        sizegrafico = 300;
        sizegrafico2 = 250;
        prueba = 300;
        direccion = "column";
        pading = classes.pading2;
        title_ = "column";
        root = classes.rootno1;
        estilo4 = classes.media4;
        estilo5 = style2;
      } else {
        estilo = classes.media3;
        sizegrafico = 450;
        sizegrafico2 = 350;
        prueba = 600;
        title_ = "column";
        pading = classes.pading2;
        root = classes.rootno;
        estilo4 = classes.media3;
        estilo2 = classes.excel3;
        estilo5 = style3;
      }
    }
  }

  let selectedlocation;
  if (estadom == false && estadodestino == false) {
    selectedlocation = dataLocationPh;
  } else {
    if (estadom == true && estadodestino == false) {
      selectedlocation = dataLocationPh;
    } else {
      if (estadom == false && estadodestino == true) {
        selectedlocation = dataLocationPhdestino;
      } else {
        if (estadom == true && estadodestino == true) {
          selectedlocation = dataLocationPhdestino;
        }
      }
    }
  }
  const ajustable = "ajustable";
  return (
    <Grid container id="target-two">
      <Grid container>
        <Grid
          container
          direction="column"
          key={1}
          className={classes.cardglobal}
        >
          <Card className={classes.root}>
            <CardContent className={classes.cardglobal2}>
              <Grid container direction="column">
                <Grid container direction={direccion} className={pading}>
                  <Grid
                    container
                    item
                    xs
                    justifyContent="center"
                    alignItems="center"
                  >
                    <p className={classes.Titleh3 + " " + ajustable}>
                      Estadísticas
                    </p>
                  </Grid>
                  <Grid
                    container
                    direction="column"
                    item
                    xs
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid
                      container
                      direction="row"
                      className={classes.marginout}
                    >
                      <Grid
                        container
                        item
                        xs={8}
                        className={classes.margincard1}
                        alignItems="center"
                      >
                        <p
                          className={classes.contentrulesp31 + " " + ajustable}
                        >
                          Total Ofertas
                        </p>
                      </Grid>
                      <Grid
                        container
                        item
                        xs
                        justifyContent="center"
                        alignItems="center"
                        className={classes.root3}
                      >
                        <p className={classes.contentnum + " " + ajustable}>
                          {suma}
                        </p>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      direction="row"
                      className={classes.marginout}
                    >
                      <Grid
                        container
                        item
                        xs={8}
                        className={classes.margincard1}
                        alignItems="center"
                      >
                        <p className={classes.contentrulesp2 + " " + ajustable}>
                          Cantidad de ofertas PH
                        </p>
                      </Grid>
                      <Grid
                        container
                        item
                        xs
                        justifyContent="center"
                        alignItems="center"
                        className={classes.root3}
                      >
                        <p className={classes.contentnum + " " + ajustable}>
                          {statistics.cantidadph}
                        </p>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      direction="row"
                      className={classes.marginout}
                    >
                      <Grid
                        container
                        item
                        xs={8}
                        className={classes.margincard1}
                        alignItems="center"
                      >
                        <p className={classes.contentrulesp2 + " " + ajustable}>
                          Cantidad de ofertas NPH
                        </p>
                      </Grid>
                      <Grid
                        container
                        item
                        xs
                        justifyContent="center"
                        alignItems="center"
                        className={classes.root3}
                      >
                        <p className={classes.contentnum + " " + ajustable}>
                          {statistics.cantidadnph}
                        </p>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      direction="row"
                      className={classes.marginout}
                    >
                      <Grid
                        container
                        item
                        xs={8}
                        className={classes.margincard1}
                        alignItems="center"
                      >
                        <p className={classes.contentrulesp2 + " " + ajustable}>
                          Cantidad de ofertas Rurales
                        </p>
                      </Grid>
                      <Grid
                        container
                        item
                        xs
                        justifyContent="center"
                        alignItems="center"
                        className={classes.root3}
                      >
                        <p className={classes.contentnum + " " + ajustable}>
                          {statistics.cantidadrural}
                        </p>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={numero} direction="column" container>
                    <CardMedia className={estilo} image={Projections} />
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs
                  container
                  direction="column"
                  justifyContent="center"
                >
                  <CardContent className={classes.centerText}>
                    <Grid
                      container
                      direction="row"
                      item
                      xs
                      className={classes.root4}
                      justifyContent="center"
                    >
                      <Grid className={classes.root2} item xs>
                        <Grid container item xs direction={title_}>
                          <Grid
                            container
                            item
                            xs
                            justifyContent="center"
                            alignItems="center"
                          >
                            <p className={classes.Titleh + " " + ajustable}>
                              Distribución por tipo de oferta
                            </p>
                          </Grid>
                          <Grid
                            container
                            item
                            xs
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            className={ajustable}
                          >
                            <PieChart
                              id="pie"
                              dataSource={dataSourceGeneral}
                              palette="Material"
                            >
                              <Title text={"General"}>
                                <Font
                                  color="#821a3f"
                                  family="Roboto"
                                  size={25}
                                  weight="bold"
                                />
                              </Title>
                              <Series
                                argumentField="country"
                                valueField="medals"
                              />
                              <Tooltip
                                enabled={true}
                                contentTemplate={customizeText}
                                color="#821a3f"
                              >
                                <Font size={18} color="white" />
                              </Tooltip>
                              <Size width={sizegrafico} />
                              <Export enabled={true} />
                            </PieChart>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          xs
                          direction={title_}
                          className={ajustable}
                        >
                          <Grid
                            container
                            item
                            xs
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                          >
                            <PieChart
                              id="pie1"
                              dataSource={dataSourcePh}
                              palette="Material"
                            >
                              <Title text={"PH"}>
                                <Font
                                  color="#821a3f"
                                  family="Roboto"
                                  size={25}
                                  weight="bold"
                                />
                              </Title>
                              <Series
                                argumentField="country"
                                valueField="medals"
                              />
                              <Tooltip
                                enabled={true}
                                contentTemplate={customizeText}
                                color="#821a3f"
                              >
                                <Font size={18} color="white" />
                              </Tooltip>
                              <Size width={sizegrafico2} />
                              <Export enabled={true} />
                            </PieChart>
                          </Grid>
                          <Grid
                            container
                            item
                            xs
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                          >
                            <PieChart
                              id="pie2"
                              dataSource={dataSourceNph}
                              palette="Material"
                            >
                              <Title text={"NPH"}>
                                <Font
                                  color="#821a3f"
                                  family="Roboto"
                                  size={25}
                                  weight="bold"
                                />
                              </Title>
                              <Series
                                argumentField="country"
                                valueField="medals"
                              />
                              <Tooltip
                                enabled={true}
                                contentTemplate={customizeText}
                                color="#821a3f"
                              >
                                <Font size={18} color="white" />
                              </Tooltip>
                              <Size width={sizegrafico2} />
                              <Export enabled={true} />
                            </PieChart>
                          </Grid>
                          <Grid
                            container
                            item
                            xs
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                          >
                            <PieChart
                              id="pie3"
                              dataSource={dataSourceRural}
                              palette="Material"
                            >
                              <Title text={"Rural"}>
                                <Font
                                  color="#821a3f"
                                  family="Roboto"
                                  size={25}
                                  weight="bold"
                                />
                              </Title>
                              <Series
                                argumentField="country"
                                valueField="medals"
                              />
                              <Tooltip
                                enabled={true}
                                contentTemplate={customizeText}
                                color="#821a3f"
                              >
                                <Font size={18} color="white" />
                              </Tooltip>
                              <Size width={sizegrafico2} />
                              <Export enabled={true} />
                            </PieChart>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        direction="column"
                        item
                        xs={12}
                        className={classes.root5 + " " + ajustable}
                      >
                        <p className={classes.Titleh}>
                          Distribución por destinación económica
                        </p>
                        <Grid
                          direction="row"
                          item
                          container
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Chart
                            id="chart"
                            dataSource={dataDestinacionPh}
                            palette="Soft"
                          >
                            <Title text={"PH"}>
                              <Font
                                color="#821a3f"
                                family="Roboto"
                                size={25}
                                weight="bold"
                              />
                            </Title>
                            <CommonSeriesSettings
                              valueField="mass"
                              argumentField="id"
                              type="bar"
                              ignoreEmptyPoints={true}
                            >
                              <Label visible={true}>
                                <Format type="fixedPoint" precision={0} />
                              </Label>
                            </CommonSeriesSettings>
                            <SeriesTemplate
                              argumentField="id"
                              nameField="name"
                            />
                            <Legend
                              visible={true}
                              verticalAlignment="top"
                              horizontalAlignment="center"
                              itemTextPosition="right"
                              width={18}
                            />
                            <Tooltip
                              enabled={true}
                              color="#821a3f"
                              customizeTooltip={customizeTooltip}
                            >
                              <Font size={18} color="white" />
                            </Tooltip>
                            <Size width={prueba} />
                            <Export enabled={true} />
                          </Chart>

                          {/* <Grid
                            item
                            xs={4}
                            direction="column"
                            container
                            justifyContent="center"
                            className={estilo3}
                          >
                            <CardMedia className={estilo} image={Growth} />
                          </Grid>
                          <Grid
                            className={classes.marginbutton2}
                            container
                            justifyContent="center"
                            item
                            xs
                          >
                            No hay estadísticas para mostrar
                          </Grid> */}
                        </Grid>
                        <Grid
                          direction="row"
                          item
                          container
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Chart
                            id="chart"
                            dataSource={dataDestinacionNph}
                            palette="Soft"
                          >
                            <Title text={"NPH"}>
                              <Font
                                color="#821a3f"
                                family="Roboto"
                                size={25}
                                weight="bold"
                              />
                            </Title>
                            <CommonSeriesSettings
                              valueField="mass"
                              argumentField="id"
                              type="bar"
                              ignoreEmptyPoints={true}
                            >
                              <Label visible={true}>
                                <Format type="fixedPoint" precision={0} />
                              </Label>
                            </CommonSeriesSettings>
                            <SeriesTemplate nameField="name" />
                            <Legend
                              visible={true}
                              verticalAlignment="top"
                              horizontalAlignment="center"
                              itemTextPosition="right"
                              width={18}
                            />
                            <Tooltip
                              enabled={true}
                              color="#821a3f"
                              customizeTooltip={customizeTooltip}
                            >
                              <Font size={18} color="white" />
                            </Tooltip>
                            <Size width={prueba} />
                            <Export enabled={true} />
                          </Chart>
                        </Grid>
                        <Grid
                          direction="row"
                          item
                          container
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Chart
                            id="chart"
                            dataSource={dataDestinacionRural}
                            palette="Soft"
                          >
                            <Title text={"RURAL"}>
                              <Font
                                color="#821a3f"
                                family="Roboto"
                                size={25}
                                weight="bold"
                              />
                            </Title>
                            <CommonSeriesSettings
                              valueField="mass"
                              argumentField="id"
                              type="bar"
                              ignoreEmptyPoints={true}
                            >
                              <Label visible={true}>
                                <Format type="fixedPoint" precision={0} />
                              </Label>
                            </CommonSeriesSettings>
                            <SeriesTemplate nameField="name" />
                            <Legend
                              visible={true}
                              verticalAlignment="top"
                              horizontalAlignment="center"
                              itemTextPosition="right"
                              width={18}
                            />
                            <Tooltip
                              enabled={true}
                              color="#821a3f"
                              customizeTooltip={customizeTooltip}
                            >
                              <Font size={18} color="white" />
                            </Tooltip>
                            <Size width={prueba} />
                            <Export enabled={true} />
                          </Chart>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          container
          direction="column"
          key={5}
          className={classes.cardglobal}
        >
          <Card className={classes.root}>
            <CardContent className={classes.cardglobal2}>
              <Grid container direction="row" item xs>
                <Grid item xs container direction="column">
                  <CardContent className={classes.centerText}>
                    <Grid direction="row" container justifyContent="center">
                      <p className={classes.Titleh4 + " " + ajustable}>Visor Geográfico</p>
                    </Grid>
                    <Grid>
                      <Typography className={classes.Textp_1 + " " + ajustable}>
                        En la siguiente herramienta se podrá visualizar la
                        ubicación geográfica de las ofertas, asi mismo, se
                        podrán realizar filtros por el tipo de ofertas y/o
                        destino economico.
                      </Typography>
                    </Grid>
                    <Grid
                      direction="row"
                      container
                      alignItems="center"
                      justifyContent="center"
                    >
                      <p className={classes.Titleh11 + " " + ajustable}>
                        Total de Ofertas:
                      </p>
                      <p className={classes.Titleh12 + " " + ajustable}>
                        {suma}
                      </p>
                      <Box className={classes.itemTextField}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label-">
                            Tipo de Oferta
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            onChange={handleChangeValue}
                            name="tipoUsuario"
                            //value={estadomap}
                          >
                            <MenuItem value="Ph">PH</MenuItem>
                            <MenuItem value="Nph">NPH</MenuItem>
                            <MenuItem value="Rural">RURAL</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                      <Box className={classes.itemTextField}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Destino Económico
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-labe"
                            id="demo-simple-selec"
                            label="Age"
                            onChange={handleChangeValue2}
                            name="tipoUsuario1"
                            //value={estadomapdestino}
                          >
                            <MenuItem value="Acuicola">Acuicola</MenuItem>
                            <MenuItem value="Agricola">Agricola</MenuItem>
                            <MenuItem value="Agroindustrial">
                              Agroindustrial
                            </MenuItem>
                            <MenuItem value="Agropecuario">
                              Agropecuario
                            </MenuItem>
                            <MenuItem value="Agroforestal">
                              Agroforestal
                            </MenuItem>
                            <MenuItem value="Comercial">Comercial</MenuItem>
                            <MenuItem value="Cultural">Cultural</MenuItem>
                            <MenuItem value="Educativo">Educativo</MenuItem>
                            <MenuItem value="Forestal">Forestal</MenuItem>
                            <MenuItem value="Habitacional">
                              Habitacional
                            </MenuItem>
                            <MenuItem value="Industrial">Industrial</MenuItem>
                            <MenuItem value="Infraestructura Asociada Produccion Agropecuaria">
                              Infraestructura Asociada Produccion Agropecuaria
                            </MenuItem>
                            <MenuItem value="Infraestructura Hidraulica">
                              Infraestructura Hidraulica
                            </MenuItem>
                            <MenuItem value="Infraestructura Saneamiento Basico">
                              Infraestructura Saneamiento Basico
                            </MenuItem>
                            <MenuItem value="Infraestructura Seguridad">
                              Infraestructura Seguridad
                            </MenuItem>
                            <MenuItem value="Infraestructura Transporte">
                              Infraestructura Transporte
                            </MenuItem>
                            <MenuItem value="Institucional">
                              Institucional
                            </MenuItem>
                            <MenuItem value="Mineria Hidrocarburos">
                              Mineria Hidrocarburos
                            </MenuItem>
                            <MenuItem value="Lote Urbanizable No Urbanizado">
                              Lote Urbanizable No Urbanizado
                            </MenuItem>
                            <MenuItem value="Lote Urbanizado No Construido">
                              Lote Urbanizado No Construido
                            </MenuItem>
                            <MenuItem value="Lote No Urbanizable">
                              Lote No Urbanizable
                            </MenuItem>
                            <MenuItem value="Precuario">Precuario</MenuItem>
                            <MenuItem value="Recreacional">
                              Recreacional
                            </MenuItem>
                            <MenuItem value="Religioso">Religioso</MenuItem>
                            <MenuItem value="Salubridad">Salubridad</MenuItem>
                            <MenuItem value="Servicios Funerarios">
                              Servicios Funerarios
                            </MenuItem>
                            <MenuItem value="Uso Publico">Uso Publico</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid container direction={direccion} className={pading}>
                      <Grid
                        container
                        item
                        xs
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        className={classes.rootmap}
                      >
                        {/* <Grid 
                          container
                          className={classes.rootpassword}
                          justifyContent="center"
                        > */}
                        <div className={classes.tamaño}>
                          <Map
                            defaultZoom={11}
                            height={440}
                            width="100%"
                            controls={true}
                            //markerIconSrc={markerUrl}
                            markers={selectedlocation}
                            provider="bing"
                          ></Map>
                        </div>
                        {/* </Grid> */}
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          container
          direction="column"
          key={2}
          className={classes.cardglobal}
        >
          <Card className={classes.root}>
            <CardContent className={classes.cardglobal2}>
              <Grid container direction="row" item xs>
                <Grid item xs container direction="column">
                  <CardContent className={classes.centerText}>
                    <Grid container direction={direccion} className={pading}>
                      <Grid item xs={numero} direction="column" container>
                        <CardMedia className={estilo4} image={Data} />
                      </Grid>
                      <Grid
                        container
                        item
                        xs
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start"
                      >
                        <Typography
                          className={classes.Textp1 + " " + ajustable}
                        >
                          En esta sección podrá descargar el formato que
                          contiene la estructura de mercado para PH, NPH y
                          predios Rurales (el formato incluye especificaciones,
                          descripcion de atributos y dominios en los casos que
                          hay lugar), ejemplo de diligenciamiento del respectivo
                          formato en base de datos y capas geográficas.
                        </Typography>
                        <Typography className={classes.Textp + " " + ajustable}>
                          Asi mismo esta habilitada la carga de información por
                          cualquiera de los dos métodos utilizados
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Grid container direction="column" item xs>
                    <Grid container direction="column" item xs className={root}>
                      <p className={classes.Titleh3 + " " + ajustable}>
                        Archivos para descarga
                      </p>
                      <Grid
                        direction="row"
                        item
                        container
                        xs
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Grid
                          className={classes.marginbutton2}
                          item
                          container
                          justifyContent="center"
                          alignItems="center"
                          xs={6}
                        >
                          <button className={classes.boton}>
                            <a
                              className={classes.alink}
                              href={ejemplomercado}
                              download
                            >
                              <Grid container direction="row">
                                <Grid
                                  item
                                  xs={4}
                                  direction="column"
                                  container
                                  className={estilo3}
                                >
                                  <CardMedia
                                    className={estilo2}
                                    image={Excel}
                                  />
                                </Grid>
                                <Grid
                                  item
                                  xs
                                  container
                                  direction="column"
                                  justifyContent="center"
                                >
                                  <p
                                    className={
                                      classes.contentrulesp3 + " " + ajustable
                                    }
                                  >
                                    <strong>Nombre: EJEMPLO MERCADO</strong>
                                  </p>
                                  <p
                                    className={
                                      classes.contentrulesp3 + " " + ajustable
                                    }
                                  >
                                    36 KB | 02/12/2021
                                  </p>
                                  <p
                                    className={
                                      classes.contentrulesp3 + " " + ajustable
                                    }
                                  >
                                    <strong>Descripción: </strong>Ejemplo de
                                    mercado según formato establecido
                                  </p>
                                </Grid>
                              </Grid>
                            </a>
                          </button>
                        </Grid>
                        <Grid
                          className={classes.marginbutton2}
                          item
                          container
                          justifyContent="center"
                          alignItems="center"
                          xs={6}
                        >
                          <button className={classes.boton}>
                            <a
                              className={classes.alink}
                              href={formatomercado}
                              download
                            >
                              <Grid container direction="row">
                                <Grid
                                  item
                                  xs={4}
                                  direction="column"
                                  container
                                  className={estilo3}
                                >
                                  <CardMedia
                                    className={estilo2}
                                    image={Excel}
                                  />
                                </Grid>
                                <Grid
                                  item
                                  xs
                                  container
                                  direction="column"
                                  justifyContent="center"
                                >
                                  <p
                                    className={
                                      classes.contentrulesp3 + " " + ajustable
                                    }
                                  >
                                    <strong>Nombre: FORMATO MERCADO</strong>
                                  </p>
                                  <p
                                    className={
                                      classes.contentrulesp3 + " " + ajustable
                                    }
                                  >
                                    50 KB | 02/12/2021
                                  </p>
                                  <p
                                    className={
                                      classes.contentrulesp3 + " " + ajustable
                                    }
                                  >
                                    <strong>Descripción: </strong>Formato
                                    mercado para PH, NPH y predios rurales
                                  </p>
                                </Grid>
                              </Grid>
                            </a>
                          </button>
                        </Grid>
                        {/* <Grid
                          className={classes.marginbutton2}
                          item
                          container
                          justifyContent="center"
                          alignItems="center"
                          xs={6}
                        >
                          <button className={classes.boton}>
                            <a
                              className={classes.alink}
                              href=""
                              download
                              target="_blank"
                            >
                              <Grid container direction="row">
                                <Grid
                                  item
                                  xs={4}
                                  direction="column"
                                  container
                                  className={estilo3}
                                >
                                  <CardMedia className={estilo2} image={pdf} />
                                </Grid>
                                <Grid
                                  item
                                  xs
                                  container
                                  direction="column"
                                  justifyContent="center"
                                >
                                  <p className={classes.contentrulesp3}>
                                    <strong>Nombre: MANUAL GEOPACKAGE</strong>
                                  </p>
                                  <p className={classes.contentrulesp3}>
                                    541 KB | 09/12/2021
                                  </p>
                                  <p className={classes.contentrulesp3}>
                                    <strong>Descripción: </strong>Manual cargue
                                    informacion Geopackage
                                  </p>
                                </Grid>
                              </Grid>
                            </a>
                          </button>
                        </Grid>
                        <Grid
                          className={classes.marginbutton2}
                          item
                          container
                          justifyContent="center"
                          alignItems="center"
                          xs={6}
                        >
                          <button className={classes.boton}>
                            <a
                              className={classes.alink}
                              href=""
                              download
                            >
                              <Grid container direction="row">
                                <Grid
                                  item
                                  xs={4}
                                  direction="column"
                                  container
                                  className={estilo3}
                                >
                                  <CardMedia
                                    className={estilo2}
                                    image={geograph}
                                  />
                                </Grid>
                                <Grid
                                  item
                                  xs
                                  container
                                  direction="column"
                                  justifyContent="center"
                                >
                                  <p className={classes.contentrulesp3}>
                                    <strong>Nombre:</strong>
                                    OFERTAS OBSERVATORIO
                                  </p>
                                  <p className={classes.contentrulesp3}>
                                    160 KB | 09/12/2021
                                  </p>
                                  <p className={classes.contentrulesp3}>
                                    <strong>Descripción: </strong>Paquete
                                    mercado para PH, NPH y predios rurales
                                  </p>
                                </Grid>
                              </Grid>
                            </a>
                          </button>
                        </Grid> */}
                      </Grid>
                    </Grid>
                    <Grid container direction="column" item xs className={root}>
                      <p className={classes.Titleh3 + " " + ajustable}>
                        Links para carga
                      </p>
                      <Grid
                        direction="row"
                        item
                        container
                        xs
                        justifyContent="flex-start"
                        alignItems="center"
                      >
                        <Grid
                          className={classes.marginbutton2}
                          item
                          container
                          justifyContent="center"
                          alignItems="center"
                          xs={6}
                        >
                          <button
                            className={classes.boton}
                            onClick={handleOpen}
                          >
                            <Grid container direction="row">
                              <Grid
                                item
                                xs={4}
                                direction="column"
                                container
                                className={estilo3}
                              >
                                <CardMedia className={estilo2} image={Excel2} />
                              </Grid>
                              <Grid
                                item
                                xs
                                container
                                direction="column"
                                justifyContent="center"
                              >
                                <p
                                  className={
                                    classes.contentrulesp3 + " " + ajustable
                                  }
                                >
                                  <strong>CARGA MERCADO</strong>
                                </p>
                                <p
                                  className={
                                    classes.contentrulesp3 + " " + ajustable
                                  }
                                >
                                  Formato: Excel
                                </p>
                              </Grid>
                            </Grid>
                          </button>
                        </Grid>
                        {/* <Grid
                          className={classes.marginbutton2}
                          item
                          container
                          justifyContent="center"
                          alignItems="center"
                          xs={6}
                        >
                          <button className={classes.boton}>
                            <Grid container direction="row">
                              <Grid
                                item
                                xs={4}
                                direction="column"
                                container
                                className={estilo3}
                              >
                                <CardMedia
                                  className={estilo2}
                                  image={geograph2}
                                />
                              </Grid>
                              <Grid
                                item
                                xs
                                container
                                direction="column"
                                justifyContent="center"
                              >
                                <p className={classes.contentrulesp3}>
                                  <strong>CARGA CAPAS GEOGRÁFICAS</strong>
                                </p>
                                <p className={classes.contentrulesp3}>
                                  Formato: Gpkg
                                </p>
                              </Grid>
                            </Grid>
                          </button>
                        </Grid> */}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          container
          direction="column"
          key={12}
          className={classes.cardglobal}
        >
          <Card className={classes.root}>
            <CardContent className={classes.cardglobal2}>
              <Grid container className={ajustable} direction="row" item xs>
                <Grid item xs container direction="column">
                  <CardContent className={classes.centerText}>
                    <p className={classes.Titleh}>
                      Repositorio documental - Usuario
                    </p>
                    <Grid container direction={direccion} className={pading}>
                      <Grid item xs={numero} direction="column" container>
                        <CardMedia className={estilo4} image={Personal} />
                      </Grid>
                      <Grid
                        container
                        item
                        xs
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start"
                      >
                        <Typography
                          className={classes.Textp1 + " " + ajustable}
                        >
                          En esta sección podrá visualizar los archivos cargados
                          al observatorio inmobiliario nacional, por fecha y
                          tipo.
                        </Typography>
                        <Typography className={classes.Textp + " " + ajustable}>
                          Como usuario que provee la informacion por la cual se
                          alimenta el micrositio, ademas de cargar, podrá
                          descargar y eliminar archivos.
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Grid container direction="column" item xs >
                    <DataGrid
                      className={classes.datarepository}
                      id="gridContainer"
                      dataSource={dataSourceFileph}
                      keyExpr="ID"
                      allowColumnReordering={true}
                      showBorders={true}
                      showColumnLines={true}
                      showRowLines={true}
                      rowAlternationEnabled={false}
                    >
                      <Paging defaultPageSize={10} />
                      <Column
                        dataField="Prefix"
                        caption="Nombre del archivo"
                        alignment="center"
                      />
                      <Column
                        dataField="FirstName"
                        caption="Tipo de documento"
                        alignment="center"
                      />
                      <Column
                        dataField="BirthDate"
                        caption="Fecha"
                        width={125}
                        dataType="date"
                        alignment="center"
                      />
                      <Column
                        type="buttons"
                        dataField="Generar"
                        caption="Generar"
                        alignment="center"
                        width={150}
                      >
                        <Button
                          text="descarga"
                          cssClass={classes.buttondownload}
                          onClick={download}
                          value={dataSourceFileph.fecha}
                        />
                      </Column>
                    </DataGrid>
                  </Grid>
                  <Box className={classes.itemTextField}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label-">
                        Tipo de Oferta
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        onChange={handleChangeValue1}
                        name="tipooferta"
                        value={estadoofer}
                      >
                        <MenuItem value="Ph">PH</MenuItem>
                        <MenuItem value="Nph">NPH</MenuItem>
                        <MenuItem value="Rural">RURAL</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Grid container direction="column" item xs>
                    <DataGrid
                      className={classes.datarepository}
                      id="gridContainer"
                      dataSource={dataSourceRegistrer}
                      keyExpr="ID"
                      allowColumnReordering={true}
                      showBorders={true}
                      showColumnLines={true}
                      showRowLines={true}
                      rowAlternationEnabled={false}
                    >
                      <Paging defaultPageSize={10} />
                      <Column
                        dataField="FirstName"
                        caption="Predial Antiguo"
                        alignment="center"
                        width={245}
                      />
                      <Column
                        dataField="Prefix"
                        caption="Predial Nuevo"
                        alignment="center"
                        width={250}
                      />
                      <Column
                        dataField="Matricula_inmobiliaria"
                        caption="Matricula"
                        alignment="center"
                        width={240}
                      />
                      <Column
                        dataField="Tipo_oferta"
                        caption="Tipo oferta"
                        alignment="center"
                        width={100}
                      />
                      <Column
                        dataField="Departamento"
                        caption="Departamento"
                        alignment="center"
                        width={165}
                      />
                      <Column
                        dataField="Municipio"
                        caption="Municipio"
                        width={170}
                        dataType="date"
                        alignment="center"
                      />
                      <Column
                        dataField="BirthDate"
                        caption="Fecha"
                        width={130}
                        dataType="date"
                        alignment="center"
                      />
                      <Column
                        type="buttons"
                        dataField="Eliminar"
                        caption="Eliminar"
                        alignment="center"
                        width={160}
                      >
                        <Button
                          text="Eliminar"
                          cssClass={classes.buttondownload}
                          onClick={handleChangeValueDelet}
                          value={dataSourceRegistrer.Matricula_inmobiliaria}
                        />
                      </Column>
                    </DataGrid>
                  </Grid>
                </Grid>
                <Grid className={gridstyl} item xs container direction="column">
                  {/* bigdata */}
                  <Grid direction="row" container justifyContent="center">
                      <p className={classes.Titleh4 + " " + ajustable}>
                        Datos Mercado Inmobiliario
                      </p>
                    </Grid>
                  <Grid container direction="row">
                    <Grid container xs={2} className={classes.searchcontainer}>
                      <input
                        //className={estilo3+" "+ajustable}
                        id="search1"
                        type="text"
                        label="buscar"
                        variant="outlined"
                        className={classes.searchtextfiel}
                      />
                      <button
                        className={classes.searchButton}
                        onClick={botonhandlesearch1}
                      >
                        <SearchIcon />
                      </button>
                    </Grid>
                    <Grid
                      className={classes.gridupdateexcel}
                      xs={9}
                      container
                      justifyContent="flex-end"
                      alignItems="center"
                    >  
                      <button onClick={handlemodaldownloadexcel} className={classes.updatebutton}>
                          Descargar Excel
                        </button>                                          
                      <button onClick={handleUpdatepage} className={classes.updatebutton}>
                            Actualizar Tabla
                          </button>
                    </Grid>
                  </Grid>
                  {/* <Typography>Page: {page}</Typography> */}
                  <Grid container className={classes.gridstyletable}>
                    <TableContainer
                      className={classes.gridstyletablealto}
                      component={Paper}
                    >
                      <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
                        <TableHead>
                          <TableRow>
                            <TableCell align="center">Seleccionar</TableCell>
                            <TableCell align="center">
                              Fecha Publicación
                            </TableCell>
                            <TableCell align="center">Departamento</TableCell>
                            <TableCell align="center">Municipio</TableCell>
                            <TableCell align="center">
                              Dirección Inmueble
                            </TableCell>
                            <TableCell
                              //className={classes.gridtablecolumndescrip}
                              align="center"
                            >
                              Descripción
                            </TableCell>
                            <TableCell
                              className={classes.gridtablecolumnvalor}
                              align="center"
                            >
                              Precio
                            </TableCell>
                            <TableCell align="center">Latitud</TableCell>
                            <TableCell align="center">Longitud</TableCell>
                            <TableCell align="center">Área Total</TableCell>
                            <TableCell align="center">Estrato</TableCell>
                            <TableCell align="center">Titulo</TableCell>
                            <TableCell align="center">Habitaciones</TableCell>
                            <TableCell align="center">Baños</TableCell>
                            <TableCell align="center">
                              Área Construida
                            </TableCell>
                            <TableCell align="center">Barrio</TableCell>
                            <TableCell align="center">Antigüedad</TableCell>
                            <TableCell align="center">Garages</TableCell>
                            <TableCell align="center">N° Pisos</TableCell>
                            <TableCell align="center">Sitio Web</TableCell>
                            <TableCell align="center">Fecha Scraping</TableCell>
                            <TableCell align="center">Zona</TableCell>
                            <TableCell align="center">Contacto</TableCell>
                            {/* <TableCell className={classes.gridtablecolumnvalor} align="center">Valor Admin</TableCell> */}
                            <TableCell align="center">
                              Dirección Inmobiliaria
                            </TableCell>
                            <TableCell align="center">Subtitulo</TableCell>
                            <TableCell
                              //className={classes.gridtablecolumndescrip}
                              align="center"
                            >
                              Detalles Inmuebles
                            </TableCell>
                            <TableCell align="center">Url</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {dataSourceBig.map((row) => (
                            <TableRow
                              key={row.ID}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell align="center">
                                <Checkbox
                                  value={[row.latitud, row.longitud, row.descripcion]}
                                  className="notariadocheck"
                                  //id={row.latitud}
                                  // color="primary"
                                  // indeterminate={
                                  //   numSelected > 0 && numSelected < rowCount
                                  // }
                                  //checked={rowCount > 0 && numSelected === rowCount}
                                  onChange={onSelectAllClick}
                                  // inputProps={{
                                  //   "aria-label": "select all desserts",
                                  // }}
                                />
                              </TableCell>
                              <TableCell align="center">
                                {row.fecha_publicacion}
                              </TableCell>
                              <TableCell align="center">
                                {row.departamento}
                              </TableCell>
                              <TableCell align="center">
                                {row.municipio}
                              </TableCell>
                              <TableCell className={classes.gridtablecolumndireccioninmu} align="center">
                                {row.direccion_inmueble}
                              </TableCell>
                              <TableCell
                                className={classes.gridtablecolumndescrip}
                                align="center"
                              >
                                {row.descripcion}
                              </TableCell>
                              <TableCell
                                className={classes.gridtablecolumnvalor}
                                align="center"
                              >
                                {row.precio}
                              </TableCell>
                              <TableCell align="center">
                                {row.latitud}
                              </TableCell>
                              <TableCell align="center">
                                {row.longitud}
                              </TableCell>
                              <TableCell align="center">
                                {row.area_total}
                              </TableCell>
                              <TableCell align="center">
                                {row.estrato}
                              </TableCell>
                              <TableCell align="center">{row.titulo}</TableCell>
                              <TableCell align="center">
                                {row.habitaciones}
                              </TableCell>
                              <TableCell align="center">{row.baños}</TableCell>
                              <TableCell align="center">
                                {row.area_construida}
                              </TableCell>
                              <TableCell align="center">{row.barrio}</TableCell>
                              <TableCell align="center">
                                {row.antigüedad}
                              </TableCell>
                              <TableCell align="center">
                                {row.garages}
                              </TableCell>
                              <TableCell align="center">
                                {row.no_piso}
                              </TableCell>
                              <TableCell align="center">
                                {row.sitio_web}
                              </TableCell>
                              <TableCell align="center" className={classes.gridtablecolumndireccioninmu}>
                                {moment(row.fecha_scraping)
                                  .utc()
                                  .format("YYYY-MM-DD")}
                              </TableCell>
                              <TableCell align="center">{row.zona}</TableCell>
                              <TableCell align="center">
                                {row.contacto}
                              </TableCell>
                              {/* <TableCell className={classes.gridtablecolumnvalor} align="center">
                              {row.valor_admin}
                            </TableCell> */}
                              <TableCell align="center">
                                {row.direccion_inmobiliaria}
                              </TableCell>
                              <TableCell align="center">
                                {row.subtitulo}
                              </TableCell>
                              <TableCell
                                className={classes.gridtablecolumndescrip}
                                align="center"
                              >
                                {row.detalles_inmuebles}
                              </TableCell>
                              <TableCell align="center">
                                <a href={row.url} target="_blank">
                                  {row.url}
                                </a>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <Grid
                      className={classes.pagination}
                      justifyContent="flex-end"
                      alignItems="center"
                    >
                      <Pagination
                        count={Math.ceil(allpage)}
                        page={page}
                        onChange={handleChangepage}
                        hidePrevButton
                        hideNextButton
                      />
                    </Grid>
                  </Grid>
                  <Grid container className={gridstyl}>
                    <Grid direction="row" container justifyContent="center">
                      <p className={classes.Titleh4 + " " + ajustable}>
                        Visor Mercado Inmobiliario
                      </p>
                    </Grid>

                    <Grid>
                      <Typography
                        className={classes.Textp_10 + " " + ajustable}
                      >
                        En la siguiente herramienta se podrá visualizar las
                        ubicación geográfica de las ofertas seleccionadas.
                      </Typography>
                    </Grid>
                    <Grid
                      id="mapa2"
                      container
                      direction={direccion}
                      className={classes.padingmap}
                    >
                      <Grid
                        container
                        item
                        xs
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        className={classes.rootmap}
                      >
                        {/* <Grid
                          container
                          className={classes.rootpassword}
                          justifyContent="center"
                        > */}
                        <div className={classes.tamaño}>
                          <Map
                            defaultZoom={11}
                            height={440}
                            width="100%"
                            controls={true}
                            //markerIconSrc={markerUrl}
                            markers={dataLocationNotariado}
                            provider="bing"
                          ></Map>
                        </div>
                        {/* </Grid> */}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        {/* Censo de Edificaciones (CEED) */}
        <Grid
          container
          direction="column"
          key={4}
          className={classes.cardglobal}
        >
          <Card className={classes.root}>
            <CardContent className={classes.cardglobal2}>
              <Grid container direction="row" item xs>
                <Grid item xs container direction="column">
                  <CardContent className={classes.centerText}>
                    <p className={classes.Titleh}>
                      Censo de Edificaciones (CEED)
                    </p>
                    <Grid
                      container
                      item
                      xs
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography className={classes.Textp1 + " " + ajustable}>
                        El Censo de Edificaciones (CEED), realizado por el
                        Departamento Nacional de Estadistica - DANE, busca
                        determinar el estado de la actividad edificadora,
                        caracterizándola por los estados de obra (en proceso,
                        paralizada y culminada).
                      </Typography>
                      <Typography className={classes.Textp1 + " " + ajustable}>
                        Con el diligenciamiento del siguiente formulario, el
                        DANE suministrara la información requerida al correo
                        registrado, en cumplimiento al Artículo 2.2.2.2.26.
                        Obligación de suministro de información la gestión
                        catastral, en su numeral 4 que menciona:
                      </Typography>
                      <Typography className={classes.Textp1 + " " + ajustable}>
                        "EL DANE deberá suministrar al Gestor Catastral el
                        Cesnso de Edificaciones CEED a nivel de manzana. Lo
                        anterior en el marco de la reserva estadística contenida
                        en el artículo 5° de la Ley 79 de 1993"
                      </Typography>
                    </Grid>
                    <Grid container direction={direccion} className={pading}>
                      <Grid item xs={numero} direction="column" container>
                        <CardMedia className={estilo} image={anotation} />
                      </Grid>
                      <Grid
                        container
                        item
                        xs
                        direction="column"
                        className={classes.rootpassword}
                      >
                        <Grid
                          container
                          alignItems="center"
                          className={classes.itemTextFieldceedcontainer}
                        >
                          <Grid direction="column" item xs={3}>
                            <Typography
                              className={classes.itemTextFieldceedtext}
                            >
                              Nombre *
                            </Typography>
                          </Grid>
                          <Grid direction="column" item xs>
                            <TextField
                              className={classes.itemTextFieldceed}
                              id="nombre"
                            ></TextField>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          alignItems="center"
                          className={classes.itemTextFieldceedcontainer}
                        >
                          <Grid direction="column" item xs={3}>
                            <Typography
                              className={classes.itemTextFieldceedtext}
                            >
                              Cargo *
                            </Typography>
                          </Grid>
                          <Grid direction="column" item xs>
                            <TextField
                              className={classes.itemTextFieldceed}
                              id="cargo"
                            ></TextField>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          alignItems="center"
                          className={classes.itemTextFieldceedcontainer}
                        >
                          <Grid direction="column" item xs={3}>
                            <Typography
                              className={classes.itemTextFieldceedtext}
                            >
                              Dependencia *
                            </Typography>
                          </Grid>
                          <Grid direction="column" item xs>
                            <TextField
                              className={classes.itemTextFieldceed}
                              id="dependencia"
                            ></TextField>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          alignItems="center"
                          className={classes.itemTextFieldceedcontainer}
                        >
                          <Grid direction="column" item xs={3}>
                            <Typography
                              className={classes.itemTextFieldceedtext}
                            >
                              Temporalidad *
                            </Typography>
                          </Grid>
                          <Grid direction="column" item xs>
                            <Box className={classes.itemTextFieldceed}>
                              <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label-">
                                  De
                                </InputLabel>
                                <Select
                                  labelId="demo-simple-select-labelceed"
                                  id="demo-simple-selectceed1"
                                  label="Age"
                                  onChange={fechaceed}
                                  name="tipoUsuario11"
                                >
                                  <MenuItem value="2019">2019</MenuItem>
                                  <MenuItem value="2020">2020</MenuItem>
                                  <MenuItem value="2021">2021</MenuItem>
                                  <MenuItem value="2022">2022</MenuItem>
                                </Select>
                              </FormControl>
                            </Box>
                          </Grid>
                          <Grid direction="column" item xs>
                            <Box className={classes.itemTextFieldceed}>
                              <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label-">
                                  Hasta
                                </InputLabel>
                                <Select
                                  labelId="demo-simple-select-labelceed"
                                  id="demo-simple-selectceed2"
                                  label="Age"
                                  onChange={fechaceed2}
                                  name="tipoUsuario21"
                                >
                                  <MenuItem value="2019">2019</MenuItem>
                                  <MenuItem value="2020">2020</MenuItem>
                                  <MenuItem value="2021">2021</MenuItem>
                                  <MenuItem value="2022">2022</MenuItem>
                                </Select>
                              </FormControl>
                            </Box>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          alignItems="center"
                          className={classes.itemTextFieldceedcontainer}
                        >
                          <Grid direction="column" item xs={3}>
                            <Typography
                              className={classes.itemTextFieldceedtext}
                            >
                              Objetivo de uso de la información
                            </Typography>
                          </Grid>
                          <Grid direction="column" item xs>
                            <TextField
                              id="motivo"
                              className={classes.itemTextFieldceed}
                              placeholder=""
                            ></TextField>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          alignItems="center"
                          className={classes.itemTextFieldceedcontainer}
                        >
                          <Typography className={classes.itemTextFieldceedtext}>
                            * campo obligatorio
                          </Typography>
                        </Grid>
                        <Grid
                          container
                          alignItems="center"
                          className={classes.itemTextFieldceedtext}
                        >
                          <a
                            onClick={ceeddownloaduser}
                            className={classes.botonpass}
                          >
                            Descargar
                          </a>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          container
          direction="column"
          key={3}
          className={classes.cardglobal}
        >
          <Card className={classes.root}>
            <CardContent className={classes.cardglobal2}>
              <Grid container direction="row" item xs>
                <Grid item xs container direction="column">
                  <CardContent className={classes.centerText}>
                    <Grid container direction={direccion} className={pading}>
                      <Grid item xs={numero} direction="column" container>
                        <CardMedia className={estilo} image={forgot} />
                      </Grid>
                      <Grid
                        container
                        item
                        xs
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Grid
                          container
                          className={classes.rootpassword + " " + ajustable}
                          justifyContent="center"
                        >
                          <Typography className={classes.Textpass}>
                            En el siguiente link podra modificar la contraseña.
                          </Typography>
                          <Typography className={classes.Textpass}>
                            Recuerde que debe tener por lo menos 8 caracteres
                          </Typography>
                          <a
                            onClick={rutapasschange}
                            className={classes.botonpass}
                          >
                            Cambiar Contraseña
                          </a>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <form action="/files" method="post" encType="multipart/form-data">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={estilo5}>
            <Grid direction="row" container justifyContent="center">
              <Grid item xs={4} direction="column" container>
                <CardMedia className={classes.mediamodal} image={choose} />
              </Grid>
              <Grid
                item
                xs={8}
                direction="column"
                container
                justifyContent="center"
                alignItems="center"
              >
                {/* <Typography
                  className={classes.Titlep}
                  id="modal-modal-title"
                  variant="h6"
                  component="h2">
                  Text in a modal
                </Typography> */}
                <Typography
                  className={classes.Textpmodal + " " + ajustable}
                  id="modal-modal-description"
                >
                  En el siguiente boton, seleccione el archivo que desea cargar
                  al observatorio inmobiliario nacional
                </Typography>
              </Grid>
              <input
                className={classes.botonmodalinput}
                // onClick={}
                type="file"
                id="file"
                name="avatar"
                accept="xlsx/gpkg"
                onClick={traer}
              />
              <label
                for="file"
                id="nombre"
                className={classes.botonmodalcargar + " " + ajustable}
              >
                Seleccionar Archivo
              </label>
              <span className={classes.borderspan} id="nombre1"></span>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignContent="center"
              >
                <Typography
                  className={classes.Textpmodal1 + " " + ajustable}
                  id="modal-modal-descriptio"
                >
                  ¿Desea continuar con la carga?
                </Typography>
                <Grid container direction="row">
                  <Grid
                    justifyContent="center"
                    alignContent="center"
                    container
                    item
                    xs={6}
                  >
                    <input
                      className={classes.botonmodal1}
                      onClick={upload}
                      type="submit"
                      value="Si"
                    />
                  </Grid>
                  <Grid
                    justifyContent="center"
                    alignContent="center"
                    container
                    item
                    xs={6}
                  >
                    <input
                      className={classes.botonmodal1}
                      onClick={cerrar}
                      type="submit"
                      value="No"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </form>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={estilo5}>
          <Grid direction="row" container>
            <Grid
              item
              xs={8}
              direction="column"
              container
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                className={classes.Textpmodal}
                id="modal-modal-description"
              >
                La carga fue exitosa
              </Typography>
              <Typography
                className={classes.Textpmodal}
                id="modal-modal-descripti"
              >
                ¡Gracias!
              </Typography>
            </Grid>
            <Grid item xs={4} direction="column" container>
              <CardMedia className={classes.mediamodal} image={Powerful} />
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={estilo5}>
          <Grid direction="row" container>
            <Grid
              item
              xs={8}
              direction="column"
              container
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                className={classes.Textpmodal}
                id="modal-modal-description"
              >
                {respuesta}
              </Typography>
              <Typography
                className={classes.Textpmodal + " " + ajustable}
                id="modal-modal-descripti"
              >
                Favor revisar el tipo de atributo diligenciado y vuelga a
                intentar
              </Typography>
              <Typography
                className={classes.Textpmodal}
                id="modal-modal-descripti"
              >
                ¡Gracias!
              </Typography>
            </Grid>
            <Grid item xs={4} direction="column" container>
              <CardMedia className={classes.mediamodal} image={Broken} />
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Modal
        open={open3}
        onClose={handleClose3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={estilo5}>
          <Grid direction="row" container>
            <Grid
              item
              xs={8}
              direction="column"
              container
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                className={classes.Textpmodal + " " + ajustable}
                id="modal-modal-description"
              >
                No tiene datos para mostrar
              </Typography>
              <Typography
                className={classes.Textpmodal}
                id="modal-modal-descripti"
              >
                ¡Gracias!
              </Typography>
            </Grid>
            <Grid item xs={4} direction="column" container>
              <CardMedia className={classes.mediamodal} image={Powerful} />
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Modal
        open={open4}
        onClose={handleClose4}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={estilo5}>
          <Grid direction="row" container justifyContent="center">
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignContent="center"
            >
              <Typography
                className={classes.Textpmodal1 + " " + ajustable}
                id="modal-modal-descriptio2"
              >
                ¿Desea continuar con la descarga?
              </Typography>
              <Grid container direction="row">
                <Grid
                  justifyContent="center"
                  alignContent="center"
                  container
                  item
                  xs={6}
                >
                  <ExcelFile
                    element={
                      <button className={classes.botonmodal1} onClick={cerrar1}>
                        Si
                      </button>
                    }
                    filename="Excel Oferta"
                  >
                    <ExcelSheet data={excelph} name="PH">
                      <ExcelColumn label="ID_OFERTA_PH" value="id_oferta_ph" />
                      <ExcelColumn
                        label="NUMERO_PREDIAL_ANTIGUO"
                        value="numero_predial_antiguo"
                      />
                      <ExcelColumn
                        label="NUMERO_PREDIAL_NUEVO"
                        value="numero_predial_nuevo"
                      />
                      <ExcelColumn
                        label="MATRICULA_INMOBILIARIA"
                        value="matricula_inmobiliaria"
                      />
                      <ExcelColumn label="TIPO_OFERTA" value="tipo_oferta" />
                      <ExcelColumn label="DEPARTAMENTO" value="departamento" />
                      <ExcelColumn label="MUNICIPIO" value="municipio" />
                      <ExcelColumn
                        label="NOMBRE_BARRIO"
                        value="nombre_barrio"
                      />
                      <ExcelColumn label="ESTRATO" value="estrato" />
                      <ExcelColumn label="DIRECCION" value="direccion" />
                      <ExcelColumn
                        label="VALOR_ARRIENDO"
                        value="valor_arriendo"
                      />
                      <ExcelColumn
                        label="VALOR_ADMINISTRACION"
                        value="valor_administracion"
                      />
                      <ExcelColumn
                        label="VALOR_OFERTA_VENTA"
                        value="valor_oferta_venta"
                      />
                      <ExcelColumn
                        label="PORCENTAJE_DE_NEGOCIACION"
                        value="porcentaje_de_negociacion"
                      />
                      <ExcelColumn
                        label="VALOR_OFERTA_NEGOCIADO"
                        value="valor_oferta_negociado"
                      />
                      <ExcelColumn
                        label="ANIO_CONSTRUCCION"
                        value="anio_construccion"
                      />
                      <ExcelColumn
                        label="ALTURA_EDIFICIO"
                        value="altura_edificio"
                      />
                      <ExcelColumn label="No_PISO" value="no_piso" />
                      <ExcelColumn
                        label="AREA_CONSTRUIDA_m2"
                        value="area_construida"
                      />
                      <ExcelColumn
                        label="AREA_PRIVADA_m2"
                        value="area_privada"
                      />
                      <ExcelColumn label="No_GARAJES" value="no_garajes" />
                      <ExcelColumn label="No_DEPOSITOS" value="no_depositos" />
                      <ExcelColumn
                        label="VR_TOTAL_TERRAZA_BALCON_O_PATIO"
                        value="vr_total_terraza"
                      />
                      <ExcelColumn label="VALOR_GARAJES" value="vr_garajes" />
                      <ExcelColumn
                        label="VALOR_DEPOSITOS"
                        value="vr_depositos"
                      />
                      <ExcelColumn
                        label="OBSERVACIONES"
                        value="observaciones"
                      />
                      <ExcelColumn label="LATITUD" value="latitud" />
                      <ExcelColumn label="LONGITUD" value="longitud" />
                      <ExcelColumn label="CONSERVACION" value="conservacion" />
                      <ExcelColumn
                        label="FECHA_CAPTURA_OFERTA"
                        value="fecha_captura_oferta"
                      />
                      <ExcelColumn
                        label="TIEMPO_OFERTA_MERCADO"
                        value="tiempo_oferta_mercado"
                      />
                      <ExcelColumn
                        label="NUMERO_CONTACTO_OFERENTE"
                        value="numero_contacto_oferente"
                      />
                      <ExcelColumn
                        label="NOMBRE_OFERENTE"
                        value="nombre_oferente"
                      />
                      <ExcelColumn label="COEFICIENTE" value="coeficiente" />
                      <ExcelColumn
                        label="AVALUO_CATASTRAL"
                        value="avaluo_catastral"
                      />
                      <ExcelColumn
                        label="DESTINACION_ECONOMICA"
                        value="destinacion_economica"
                      />
                      <ExcelColumn label="DERECHO_TIPO" value="derecho_tipo" />
                      <ExcelColumn
                        label="TIPO_TIPOLOGIA"
                        value="tipo_tipologia"
                      />
                    </ExcelSheet>
                    <ExcelSheet data={excelnph} name="NPH">
                      <ExcelColumn
                        label="ID_OFERTA_NPH"
                        value="id_oferta_nph"
                      />
                      <ExcelColumn
                        label="NUMERO_PREDIAL_ANTIGUO"
                        value="numero_predial_antiguo"
                      />
                      <ExcelColumn
                        label="NUMERO_PREDIAL_NUEVO"
                        value="numero_predial_nuevo"
                      />
                      <ExcelColumn
                        label="MATRICULA_INMOBILIARIA"
                        value="matricula_inmobiliaria"
                      />
                      <ExcelColumn label="TIPO_OFERTA" value="tipo_oferta" />
                      <ExcelColumn label="DEPARTAMENTO" value="departamento" />
                      <ExcelColumn label="MUNICIPIO" value="municipio" />
                      <ExcelColumn
                        label="NOMBRE_BARRIO"
                        value="nombre_barrio"
                      />
                      <ExcelColumn label="ESTRATO" value="estrato" />
                      <ExcelColumn label="DIRECCION" value="direccion" />
                      <ExcelColumn
                        label="VALOR_ARRIENDO"
                        value="valor_arriendo"
                      />
                      <ExcelColumn
                        label="VALOR_DE_LA_OFERTA"
                        value="valor_de_la_oferta"
                      />
                      <ExcelColumn
                        label="PORCENTAJE_DE_NEGOCIACION"
                        value="porcentaje_de_negociacion"
                      />
                      <ExcelColumn
                        label="VALOR_OFERTA_NEGOCIADO"
                        value="valor_oferta_negociado"
                      />
                      <ExcelColumn
                        label="ANIO_CONSTRUCCION"
                        value="anio_construccion"
                      />
                      <ExcelColumn label="AREA_TERRENO" value="area_terreno" />
                      <ExcelColumn
                        label="AREA_CONSTRUCCION"
                        value="area_construccion"
                      />
                      <ExcelColumn
                        label="VR_M2_CONST"
                        value="vr_m2_construccion"
                      />
                      <ExcelColumn
                        label="VR_M2_TERRENO"
                        value="vr_m2_terreno"
                      />
                      <ExcelColumn
                        label="OBSERVACIONES"
                        value="observaciones"
                      />
                      <ExcelColumn label="LATITUD" value="latitud" />
                      <ExcelColumn label="LONGITUD" value="longitud" />
                      <ExcelColumn label="CONSERVACION" value="conservacion" />
                      <ExcelColumn
                        label="FECHA_APERTURA_OFERTA"
                        value="fecha_captura_oferta"
                      />
                      <ExcelColumn
                        label="TIEMPO_OFERTA_MERCADO"
                        value="tiempo_oferta_mercado"
                      />
                      <ExcelColumn
                        label="NUMERO_CONTACTO_OFERENTE"
                        value="numero_contacto_oferente"
                      />
                      <ExcelColumn
                        label="NOMBRE_OFERENTE"
                        value="nombre_oferente"
                      />
                      <ExcelColumn
                        label="AVALUO_CATASTRAL"
                        value="avaluo_catastral"
                      />
                      <ExcelColumn
                        label="DESTINACION_ECONOMICA"
                        value="destinacion_economica"
                      />
                      <ExcelColumn label="DERECHO_TIPO" value="derecho_tipo" />
                      <ExcelColumn
                        label="TIPO_TIPOLOGIA"
                        value="tipo_tipologia"
                      />
                    </ExcelSheet>
                    <ExcelSheet data={excelrural} name="RURAL">
                      <ExcelColumn
                        label="ID_OFERTA_RURAL"
                        value="id_oferta_rural"
                      />
                      <ExcelColumn
                        label="NUMERO_PREDIAL_ANTIGUO"
                        value="numero_predial_antiguo"
                      />
                      <ExcelColumn
                        label="NUMERO_PREDIAL_NUEVO"
                        value="numero_predial_nuevo"
                      />
                      <ExcelColumn
                        label="MATRICULA_INMOBILIARIA"
                        value="matricula_inmobiliaria"
                      />
                      <ExcelColumn label="TIPO_OFERTA" value="tipo_oferta" />
                      <ExcelColumn label="DEPARTAMENTO" value="departamento" />
                      <ExcelColumn label="MUNICIPIO" value="municipio" />
                      <ExcelColumn
                        label="NOMBRE_VEREDA"
                        value="nombre_vereda"
                      />
                      <ExcelColumn label="ESTRATO" value="estrato" />
                      <ExcelColumn label="TIPO_INMUEBLES" value="direccion" />
                      <ExcelColumn label="DIRECCION" value="valor_arriendo" />
                      <ExcelColumn
                        label="VALOR_ARRIENDO"
                        value="valor_administracion"
                      />
                      <ExcelColumn
                        label="VALOR_DE_LA_OFERTA"
                        value="valor_oferta_venta"
                      />
                      <ExcelColumn
                        label="PORCENTAJE_DE_NEGOCIACION"
                        value="porcentaje_de_negociacion"
                      />
                      <ExcelColumn
                        label="VALOR_OFERTA_NEGOCIADO"
                        value="valor_oferta_negociado"
                      />
                      <ExcelColumn
                        label="ANIO_CONSTRUCCION"
                        value="anio_construccion"
                      />
                      <ExcelColumn label="AREA_TERRENO" value="area_terreno" />
                      <ExcelColumn
                        label="AREA_CONSTRUCCION"
                        value="area_construccion"
                      />
                      <ExcelColumn
                        label="VR_M2_CONST"
                        value="vr_m2_construccion"
                      />
                      <ExcelColumn
                        label="VR_Ha_TERRENO"
                        value="vr_ha_terreno"
                      />
                      <ExcelColumn
                        label="OBSERVACIONES"
                        value="observaciones"
                      />
                      <ExcelColumn label="LATITUD" value="latitud" />
                      <ExcelColumn label="LONGITUD" value="longitud" />
                      <ExcelColumn label="CONSERVACION" value="conservacion" />
                      <ExcelColumn
                        label="FECHA_CAPTURA_OFERTA"
                        value="fecha_captura_oferta"
                      />
                      <ExcelColumn
                        label="TIEMPO_OFERTA_MERCADO"
                        value="tiempo_oferta_mercado"
                      />
                      <ExcelColumn
                        label="NUMERO_CONTACTO_OFERENTE"
                        value="numero_contacto_oferente"
                      />
                      <ExcelColumn
                        label="NOMBRE_OFERENTE"
                        value="nombre_oferente"
                      />
                      <ExcelColumn
                        label="AVALUO_CATASTRAL"
                        value="avaluo_catastral"
                      />
                      <ExcelColumn
                        label="DESTINACION_ECONOMICA"
                        value="destinacion_economica"
                      />
                      <ExcelColumn label="DERECHO_TIPO" value="derecho_tipo" />
                      <ExcelColumn
                        label="TIPO_TIPOLOGIA"
                        value="tipo_tipologia"
                      />
                      <ExcelColumn
                        label="TIPO_CULTIVOS"
                        value="tipo_cultivos"
                      />
                      <ExcelColumn
                        label="CONSTRUCCIONES_ANEXAS"
                        value="construcciones_anexas"
                      />
                    </ExcelSheet>
                  </ExcelFile>
                </Grid>
                <Grid
                  justifyContent="center"
                  alignContent="center"
                  container
                  item
                  xs={6}
                >
                  <input
                    className={classes.botonmodal1}
                    onClick={cerrar1}
                    type="submit"
                    value="No"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Modal
        open={open6}
        onClose={handleClose6}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={estilo5}>
          <Grid direction="row" container justifyContent="center">
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignContent="center"
            >
              <Typography
                className={classes.Textpmodal1 + " " + ajustable}
                id="modal-modal-descriptio2"
              >                
                {`Se descargaran 5.000 registros del mercado inmobiliario en un libro de excel ${filtro} ¿Desea continuar con la descarga?`}
              </Typography>
              <Grid container direction="row">
                <Grid
                  justifyContent="center"
                  alignContent="center"
                  container
                  item
                  xs={6}
                >
                  <ExcelFile
                    element={
                      <button className={classes.botonmodal1} onClick={cerrar3}>
                        Si
                      </button>
                    }
                    filename="Excel Mercado Inmobiliario"
                  >                    
                    <ExcelSheet data={excelnotariado} name="excel mercador">
                          <ExcelColumn
                            label="Fecha Publicación"
                            value="fecha_publicacion"
                          />
                          <ExcelColumn
                            label="Departamento"
                            value="departamento"
                          />
                          <ExcelColumn
                            label="Municipio"
                            value="municipio"
                          />
                          <ExcelColumn
                            label="Direccion Inmueble"
                            value="direccion_inmueble"
                          />
                          <ExcelColumn
                            label="Descripción"
                            value="descripcion"
                          />
                          <ExcelColumn
                            label="Precio"
                            value="precio"
                          />
                          <ExcelColumn 
                            label="Latitud" 
                            value="latitud" 
                          />
                          <ExcelColumn
                            label="Longitud"
                            value="longitud"
                          />
                          <ExcelColumn 
                            label="Área Total" 
                            value="area_total" 
                          />
                          <ExcelColumn 
                            label="Estrato" 
                            value="estrato" 
                          />
                          <ExcelColumn
                            label="Titulo"
                            value="titulo"
                          />
                          <ExcelColumn
                            label="Habitaciones"
                            value="habitaciones"
                          />
                          <ExcelColumn
                            label="Baños"
                            value="baños"
                          />
                          <ExcelColumn
                            label="Área Construida"
                            value="area_construida"
                          />
                          <ExcelColumn
                            label="Barrio"
                            value="barrio"
                          />
                          <ExcelColumn
                            label="Antigüedad"
                            value="antigüedad"
                          />
                          <ExcelColumn
                            label="Garages"
                            value="garages"
                          />
                          <ExcelColumn 
                            label="No Pisos" 
                            value="no_piso" 
                          />
                          <ExcelColumn
                            label="Sitio Web"
                            value="sitio_web"
                          />
                          <ExcelColumn
                            label="Fecha Scraping"
                            value="fecha_scraping"
                          />
                          <ExcelColumn 
                            label="Zona" 
                            value="zona" 
                          />
                          <ExcelColumn
                            label="Contacto"
                            value="contacto"
                          />
                          <ExcelColumn
                            label="Dirección Inmobiliriaira"
                            value="direccion_inmobiliaria"
                          />
                          <ExcelColumn
                            label="Subtitulo"
                            value="subtitulo"
                          />
                          <ExcelColumn
                            label="Detalles Inmuebles"
                            value="detalles_inmuebles"
                          />
                          <ExcelColumn
                            label="Url"
                            value="url"
                          />
                        </ExcelSheet>
                  </ExcelFile>
                </Grid>
                <Grid
                  justifyContent="center"
                  alignContent="center"
                  container
                  item
                  xs={6}
                >
                  <input
                    className={classes.botonmodal1}
                    onClick={cerrar3}
                    type="submit"
                    value="No"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Modal
        open={open5}
        onClose={handleClose5}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={estilo5}>
          <Grid direction="row" container justifyContent="center">
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignContent="center"
            >
              <Typography
                className={classes.Textpmodal1 + " " + ajustable}
                id="modal-modal-descriptio1"
              >
                ¿Desea continuar eliminando el registro?
              </Typography>
              <Grid container direction="row">
                <Grid
                  justifyContent="center"
                  alignContent="center"
                  container
                  item
                  xs={6}
                >
                  <input
                    className={classes.botonmodal1}
                    onClick={delet}
                    type="submit"
                    value="Si"
                  />
                </Grid>
                <Grid
                  justifyContent="center"
                  alignContent="center"
                  container
                  item
                  xs={6}
                >
                  <input
                    className={classes.botonmodal1}
                    onClick={cerrar2}
                    type="submit"
                    value="No"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Modal
        open={open7}
        onClose={handleClose7}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={estilo5}>
          <Grid direction="row" container justifyContent="center">
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignContent="center"
            >
              <Typography
                className={classes.Textpmodal1 + " " + ajustable}
                id="modal-modal-descriptio2"
              >                
                {`Se generan los diferentes archivos que solicito para su descarga, los cuales estan en los botones que se muestran acontinuación.`}
              </Typography>
              <Grid container direction="row">
                <Grid
                  justifyContent="center"
                  alignContent="center"
                  container
                  direction="column"
                  item
                  xs={6}
                >{allceed.map((row) => (   
                    <a
                      className={classes.alink + " " + classes.botonmodal11}
                      download
                      value="Descargar"
                      href={row.url}
                    >
                    Descargar {row.fecha}.xlsx</a>
                ))}
                  
                </Grid>
                <Grid
                  justifyContent="center"
                  alignContent="center"
                  container
                  item
                  xs={6}
                >
                  <input
                    className={classes.botonmodal1}
                    onClick={cerrar4}
                    type="submit"
                    value="Cerrar"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Loader open={openLoading}></Loader>
    </Grid>
  );
  function cerrar() {
    setOpen(false);
  }
  function cerrar1() {
    setOpen4(false);
  }
  function cerrar2() {
    setOpen5(false);
  }
  function cerrar3() {
    setOpen6(false);
  }

  function cerrar4() {
    setOpen7(false);
  }
};

function traer() {
  var archivo = document.querySelector("#file");
  if (archivo != null) {
    archivo.addEventListener("change", () => {
      document.querySelector("#nombre1").innerText = archivo.files[0].name;
    });
  }
}

function customizeText(arg) {
  return `${arg.valueText} (${arg.percentText})`;
}

// function renderGridCell(data) {
//   return (
//     <a
//       className="buttondownload"
//       href=""
//       download
//     >
//       Descargar
//     </a>
//   );
// }

function customizeTooltip(arg) {
  return {
    text: `${arg.seriesName} - ${arg.valueText}`,
  };
}

export default Cardsmapas;
