import axios from "axios";
import styles from "./style/estilos.css";
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
} from "@material-ui/core";
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
  Font
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
import pdf from "Observatorio/img/PDF1.png";
import geograph from "Observatorio/img/Address-pana1.png";
import geograph2 from "Observatorio/img/Address-pana2.png";
import forgot from "Observatorio/img/forgot.jpg";
import choose from "Observatorio/img/Choose-rafiki.svg";
import Broken from "Observatorio/img/Broken.svg";
import Powerful from "Observatorio/img/Powerful.svg";
import Personal from "Observatorio/img/repo.jpg";
const Dash = require("Observatorio/common/datosdashboard.js");
const DashBar = require("Observatorio/common/dashboardbar.js");
import { Loader } from "../pages/loader/loader";
import enviroment from "../../config/enviroment";
let respuesta = "";
import MapDash from "./dashMap.js";
import DataGrid, {
  Column,
  Paging,Button,
} from "devextreme-react/data-grid";
import datafileregistrer from "./datarepository.js";
import ExportExcel from "react-export-excel-fixed-xlsx";

const ExcelFile = ExportExcel.ExcelFile;
const ExcelSheet = ExportExcel.ExcelSheet;
const ExcelColumn = ExportExcel.ExcelColumn;


const markerUrl =
  "https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png";

const useStyle = makeStyles({
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
    textDecoration:"none",
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
  const rutapasschange = (e) =>{    
    history('/observatorio/ChangePassword')
  }
  const [statistics, setstatistics] = useState({});
  const [fileregistrerph, setfileregistrerph] = useState([]);
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
          if(response.data.data.cantidadnph == "0" && response.data.data.cantidadph == "0" && response.data.data.cantidadrural == "0"){
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
            console.log("EY!",response.data.data);
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
            console.log("ocurrio un problema Error!..2");
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

  
  const [registreph, setregistreph] = useState([]);
  const [registrenph, setregistrenph] = useState([]);
  const [registrerural, setregistrerural] = useState([]);

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
          if (response.data.code == "OK") {
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

  const offerdata = () => {
    let token = localStorage.getItem("token"); 
    axios
      .get(`${enviroment.endpoint}/PlataformaUsuario/offerdata`,{
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      })
      .then((response) => {
        if (response.status == 200) {
          if (response.data.code == "OK") {
            setregistreph(response.data.data.fileph)
            setregistrenph(response.data.data.filenph)
            setregistrerural(response.data.data.filerural)
          } else {
            console.log("sin descargar")
          }
        } else {
          setLoading(false);
          alert("ocurrio un problema externo");
        }
      });
  };

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
  }, []);

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
  // let dataSourceFilerural = datafileregistrer.fileregistrer(fileregistrerrural); UNIR LOS 3 ARREGLOS EN UNO SOLO, POR SI ALGUNO DE ELLOS NO TIENE INFORMACION SALDRA ALGUNO DE LOS 3
  

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
      dataSourceRegistrer = datafileregistrer.fileregistrerrowrural(registrerural);
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
      .get(`${enviroment.endpoint}/PlataformaUsuario/download`,{
        headers: {
          "Content-Type": "application/json",
          data:data,
          token: token,
        },
      })
      .then((response) => {
        if (response.status == 200) {
          if (response.data.code == "OK") {
            setexcelph(response.data.data.fileph)
            setexcelnph(response.data.data.filenph)
            setexcelrural(response.data.data.filerural)
            setLoading(false);
            setOpen4(true);
          } else {
            setLoading(false);
            console.log("sin descargar")
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
      table:tabla,
      fecha:fecha,
    };
    setLoading(true);
    setOpen5(false);
    axios
      .post(`${enviroment.endpoint}/PlataformaUsuario/deletregistre`,body,{
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
  {
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
  return (
    <Grid container>
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
                    <p className={classes.Titleh3}>Estadísticas</p>
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
                        <p className={classes.contentrulesp31}>Total Ofertas</p>
                      </Grid>
                      <Grid
                        container
                        item
                        xs
                        justifyContent="center"
                        alignItems="center"
                        className={classes.root3}
                      >
                        <p className={classes.contentnum}>{suma}</p>
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
                        <p className={classes.contentrulesp2}>
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
                        <p className={classes.contentnum}>
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
                        <p className={classes.contentrulesp2}>
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
                        <p className={classes.contentnum}>
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
                        <p className={classes.contentrulesp2}>
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
                        <p className={classes.contentnum}>
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
                            <p className={classes.Titleh}>
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
                        <Grid container item xs direction={title_}>
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
                        className={classes.root5}
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
                      <p className={classes.Titleh4}>Visor</p>
                    </Grid>

                    <Grid>
                      <Typography className={classes.Textp_1}>
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
                      <p className={classes.Titleh11}>Total de Ofertas:</p>
                      <p className={classes.Titleh12}>{suma}</p>
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
                            //value={form.tipoUsuario}
                          >
                            <MenuItem value="Agricola">Agricola</MenuItem>
                            <MenuItem value="Agroindustrial">
                              Agroindustrial
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
                            <MenuItem value="Lote Urbanizable No Urbanizado">
                              Lote Urbanizable No Urbanizado
                            </MenuItem>
                            <MenuItem value="Lote Urbanizado No Construido">
                              Lote Urbanizado No Construido
                            </MenuItem>
                            <MenuItem value="Lote No Urbanizable">
                              Lote No Urbanizable
                            </MenuItem>
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
                            markerIconSrc={markerUrl}
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
                        <Typography className={classes.Textp1}>
                          En esta sección podrá descargar el formato que
                          contiene la estructura de mercado para PH, NPH y
                          predios Rurales (el formato incluye especificaciones,
                          descripcion de atributos y dominios en los casos que
                          hay lugar), ejemplo de diligenciamiento del respectivo
                          formato en base de datos y capas geográficas.
                        </Typography>
                        <Typography className={classes.Textp}>
                          Asi mismo esta habilitada la carga de información por
                          cualquiera de los dos métodos utilizados
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Grid container direction="column" item xs>
                    <Grid container direction="column" item xs className={root}>
                      <p className={classes.Titleh3}>Archivos para descarga</p>
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
                              href="https://nowsoft.app/colectora/externo/files_oin/EJEMPLO_FORMATO_MERCADO_OBSERVATORIO_INMOBILIARIO_NACIONAL.xlsx"
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
                                  <p className={classes.contentrulesp3}>
                                    <strong>Nombre: EJEMPLO MERCADO</strong>
                                  </p>
                                  <p className={classes.contentrulesp3}>
                                    36 KB | 02/12/2021
                                  </p>
                                  <p className={classes.contentrulesp3}>
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
                              href="https://nowsoft.app/colectora/externo/files_oin/FORMATO_MERCADO_OBSERVATORIO_INMOBILIARIO_NACIONAL.xlsx"
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
                                  <p className={classes.contentrulesp3}>
                                    <strong>Nombre: FORMATO MERCADO</strong>
                                  </p>
                                  <p className={classes.contentrulesp3}>
                                    50 KB | 02/12/2021
                                  </p>
                                  <p className={classes.contentrulesp3}>
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
                              href="https://nowsoft.app/geoportal/descargas/oin/INSTRUCTIVO_GEOPACKAGE.pdf"
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
                              href="https://nowsoft.app/geoportal/descargas/oin/OFERTAS_OBSERVATORIO.gpkg"
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
                      <p className={classes.Titleh3}>Links para carga</p>
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
                                <p className={classes.contentrulesp3}>
                                  <strong>CARGA MERCADO</strong>
                                </p>
                                <p className={classes.contentrulesp3}>
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
              <Grid container direction="row" item xs>
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
                        <Typography className={classes.Textp1}>
                          En esta sección podrá visualizar los archivos cargados
                          al observatorio inmobiliario nacional, por fecha y
                          tipo.
                        </Typography>
                        <Typography className={classes.Textp}>
                          Como usuario que provee la informacion por la cual se
                          alimenta el micrositio, ademas de cargar, podrá
                          descargar y eliminar archivos.
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Grid container direction="column" item xs>
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
                      <Column type="buttons" dataField="Generar"
                        caption="Generar"
                        alignment="center"
                        width={150}>
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
                            {console.log("ver",estadoofer)}
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
                      <Column type="buttons" dataField="Eliminar"
                        caption="Eliminar"
                        alignment="center"
                        width={160}>
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
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        {/* <Grid
          container
          direction="column"
          key={12}
          className={classes.cardglobal}
        >
          <Card className={classes.root}>
            <CardContent className={classes.cardglobal2}>
              <Grid container direction="row" item xs>
                <Grid item xs container direction="column">
                  <CardContent className={classes.centerText}>
                    <p className={classes.Titleh}>
                      Registros de Ofertas - Usuario
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
                        <Typography className={classes.Textp1}>
                          En esta sección podrá visualizar los archivos cargados
                          al observatorio inmobiliario nacional, por fecha y
                          tipo.
                        </Typography>
                        <Typography className={classes.Textp}>
                          Como usuario que provee la informacion por la cual se
                          alimenta el micrositio, ademas de cargar, podrá
                          descargar y eliminar archivos.
                        </Typography>
                      </Grid>                      
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
                          >
                            <MenuItem value="Ph">PH</MenuItem>
                            <MenuItem value="Nph">NPH</MenuItem>
                            <MenuItem value="Rural">RURAL</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                  </CardContent>                  
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
                      <Column type="buttons" dataField="Eliminar"
                        caption="Eliminar"
                        alignment="center"
                        width={160}>
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
              </Grid>
            </CardContent>
          </Card>
        </Grid> */}
        {/* Censo de Edificaciones (CEED) */}
        {/* <Grid
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
                      <Grid direction="row" container>
                      <p className={classes.Titleh4}>Censo de Edificaciones (CEED)</p>
                      </Grid>
                      <Grid>
                      <Typography className={classes.Textp_1}>El Censo de Edificaciones (CEED), realizado por el Departamento Nacional de Estadistica - DANE,  busca determinar el estado de la actividad edificadora, caracterizándola por los estados de obra (en proceso, paralizada y culminada).</Typography>
                      <Typography className={classes.Textp_1}>
                        Con el diligenciamiento del siguiente formulario, el DANE suministrara la informaciòn requerida al correo registrado, en cumplimiento al Artículo 2.2.2.2.26. Obligación de suministro de información la gestión catastral, en su numeral 4 que menciona: 
                      </Typography>
                      <Typography className={classes.Textp_2}>
                        "EL DANE deberá suministrar al Gestor Catastral el Cesnso de Edificaciones CEED a nivel de manzana. Lo anterior en el marco de la reserva estadística contenida en el artículo 5° de la Ley 79 de 1993"
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
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Grid
                          container
                          className={classes.rootpassword}
                          justifyContent="center"
                        >
                          <Typography className={classes.Textpass}>
                            formulario
                          </Typography>
                          <Button
                            href="/Observatorio/ChangePassword"
                            className={classes.botonpass}
                          >
                            boton
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid> */}
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
                          className={classes.rootpassword}
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
                  className={classes.Textpmodal}
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
                className={classes.botonmodalcargar}
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
                  className={classes.Textpmodal1}
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
                className={classes.Textpmodal}
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
                className={classes.Textpmodal}
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
                  className={classes.Textpmodal1}
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
                    <button
                    className={classes.botonmodal1} 
                    onClick={cerrar1}                   
                    >Si</button>} filename="Excel Oferta">                      
                        <ExcelSheet data={excelph} name="PH">
                          <ExcelColumn label="ID_OFERTA_PH" value="id_oferta_ph"/>
                          <ExcelColumn label="NUMERO_PREDIAL_ANTIGUO" value="numero_predial_antiguo"/>
                          <ExcelColumn label="NUMERO_PREDIAL_NUEVO" value="numero_predial_nuevo"/>
                          <ExcelColumn label="MATRICULA_INMOBILIARIA" value="matricula_inmobiliaria"/>
                          <ExcelColumn label="TIPO_OFERTA" value="tipo_oferta"/>
                          <ExcelColumn label="DEPARTAMENTO" value="departamento"/>
                          <ExcelColumn label="MUNICIPIO" value="municipio"/>
                          <ExcelColumn label="NOMBRE_BARRIO" value="nombre_barrio"/>
                          <ExcelColumn label="ESTRATO" value="estrato"/>
                          <ExcelColumn label="DIRECCION" value="direccion"/>
                          <ExcelColumn label="VALOR_ARRIENDO" value="valor_arriendo"/>
                          <ExcelColumn label="VALOR_ADMINISTRACION" value="valor_administracion"/>
                          <ExcelColumn label="VALOR_OFERTA_VENTA" value="valor_oferta_venta"/>
                          <ExcelColumn label="PORCENTAJE_DE_NEGOCIACION" value="porcentaje_de_negociacion"/>
                          <ExcelColumn label="VALOR_OFERTA_NEGOCIADO" value="valor_oferta_negociado"/>
                          <ExcelColumn label="ANIO_CONSTRUCCION" value="anio_construccion"/>
                          <ExcelColumn label="ALTURA_EDIFICIO" value="altura_edificio"/>
                          <ExcelColumn label="No_PISO" value="no_piso"/>
                          <ExcelColumn label="AREA_CONSTRUIDA_m2" value="area_construida"/>
                          <ExcelColumn label="AREA_PRIVADA_m2" value="area_privada"/>
                          <ExcelColumn label="No_GARAJES" value="no_garajes"/>
                          <ExcelColumn label="No_DEPOSITOS" value="no_depositos"/>
                          <ExcelColumn label="VR_TOTAL_TERRAZA_BALCON_O_PATIO" value="vr_total_terraza"/>
                          <ExcelColumn label="VALOR_GARAJES" value="vr_garajes"/>
                          <ExcelColumn label="VALOR_DEPOSITOS" value="vr_depositos"/>
                          <ExcelColumn label="OBSERVACIONES" value="observaciones"/>
                          <ExcelColumn label="LATITUD" value="latitud"/>
                          <ExcelColumn label="LONGITUD" value="longitud"/>
                          <ExcelColumn label="CONSERVACION" value="conservacion"/>
                          <ExcelColumn label="FECHA_CAPTURA_OFERTA" value="fecha_captura_oferta"/>
                          <ExcelColumn label="TIEMPO_OFERTA_MERCADO" value="tiempo_oferta_mercado"/>
                          <ExcelColumn label="NUMERO_CONTACTO_OFERENTE" value="numero_contacto_oferente"/>
                          <ExcelColumn label="NOMBRE_OFERENTE" value="nombre_oferente"/>
                          <ExcelColumn label="COEFICIENTE" value="coeficiente"/>
                          <ExcelColumn label="AVALUO_CATASTRAL" value="avaluo_catastral"/>
                          <ExcelColumn label="DESTINACION_ECONOMICA" value="destinacion_economica"/>
                          <ExcelColumn label="DERECHO_TIPO" value="derecho_tipo"/>
                          <ExcelColumn label="TIPO_TIPOLOGIA" value="tipo_tipologia"/>
                        </ExcelSheet>
                        <ExcelSheet data={excelnph} name="NPH">
                          <ExcelColumn label="ID_OFERTA_NPH" value="id_oferta_nph"/>
                          <ExcelColumn label="NUMERO_PREDIAL_ANTIGUO" value="numero_predial_antiguo"/>
                          <ExcelColumn label="NUMERO_PREDIAL_NUEVO" value="numero_predial_nuevo"/>
                          <ExcelColumn label="MATRICULA_INMOBILIARIA" value="matricula_inmobiliaria"/>
                          <ExcelColumn label="TIPO_OFERTA" value="tipo_oferta"/>
                          <ExcelColumn label="DEPARTAMENTO" value="departamento"/>
                          <ExcelColumn label="MUNICIPIO" value="municipio"/>
                          <ExcelColumn label="NOMBRE_BARRIO" value="nombre_barrio"/>
                          <ExcelColumn label="ESTRATO" value="estrato"/>
                          <ExcelColumn label="DIRECCION" value="direccion"/>
                          <ExcelColumn label="VALOR_ARRIENDO" value="valor_arriendo"/>
                          <ExcelColumn label="VALOR_DE_LA_OFERTA" value="valor_de_la_oferta"/>
                          <ExcelColumn label="PORCENTAJE_DE_NEGOCIACION" value="porcentaje_de_negociacion"/>
                          <ExcelColumn label="VALOR_OFERTA_NEGOCIADO" value="valor_oferta_negociado"/>
                          <ExcelColumn label="ANIO_CONSTRUCCION" value="anio_construccion"/>
                          <ExcelColumn label="AREA_TERRENO" value="area_terreno"/>
                          <ExcelColumn label="AREA_CONSTRUCCION" value="area_construccion"/>
                          <ExcelColumn label="VR_M2_CONST" value="vr_m2_construccion"/>
                          <ExcelColumn label="VR_M2_TERRENO" value="vr_m2_terreno"/>
                          <ExcelColumn label="OBSERVACIONES" value="observaciones"/>
                          <ExcelColumn label="LATITUD" value="latitud"/>
                          <ExcelColumn label="LONGITUD" value="longitud"/>
                          <ExcelColumn label="CONSERVACION" value="conservacion"/>
                          <ExcelColumn label="FECHA_APERTURA_OFERTA" value="fecha_captura_oferta"/>
                          <ExcelColumn label="TIEMPO_OFERTA_MERCADO" value="tiempo_oferta_mercado"/>
                          <ExcelColumn label="NUMERO_CONTACTO_OFERENTE" value="numero_contacto_oferente"/>
                          <ExcelColumn label="NOMBRE_OFERENTE" value="nombre_oferente"/>
                          <ExcelColumn label="AVALUO_CATASTRAL" value="avaluo_catastral"/>
                          <ExcelColumn label="DESTINACION_ECONOMICA" value="destinacion_economica"/>
                          <ExcelColumn label="DERECHO_TIPO" value="derecho_tipo"/>
                          <ExcelColumn label="TIPO_TIPOLOGIA" value="tipo_tipologia"/>
                        </ExcelSheet>
                        <ExcelSheet data={excelrural} name="RURAL">
                          <ExcelColumn label="ID_OFERTA_RURAL" value="id_oferta_rural"/>
                          <ExcelColumn label="NUMERO_PREDIAL_ANTIGUO" value="numero_predial_antiguo"/>
                          <ExcelColumn label="NUMERO_PREDIAL_NUEVO" value="numero_predial_nuevo"/>
                          <ExcelColumn label="MATRICULA_INMOBILIARIA" value="matricula_inmobiliaria"/>
                          <ExcelColumn label="TIPO_OFERTA" value="tipo_oferta"/>
                          <ExcelColumn label="DEPARTAMENTO" value="departamento"/>
                          <ExcelColumn label="MUNICIPIO" value="municipio"/>
                          <ExcelColumn label="NOMBRE_VERERDA" value="nombre_barrio"/>
                          <ExcelColumn label="ESTRATO" value="estrato"/>
                          <ExcelColumn label="TIPO_INMUEBLES" value="direccion"/>
                          <ExcelColumn label="DIRECCION" value="valor_arriendo"/>
                          <ExcelColumn label="VALOR_ARRIENDO" value="valor_administracion"/>
                          <ExcelColumn label="VALOR_DE_LA_OFERTA" value="valor_oferta_venta"/>
                          <ExcelColumn label="PORCENTAJE_DE_NEGOCIACION" value="porcentaje_de_negociacion"/>
                          <ExcelColumn label="VALOR_OFERTA_NEGOCIADO" value="valor_oferta_negociado"/>
                          <ExcelColumn label="ANIO_CONSTRUCCION" value="anio_construccion"/>
                          <ExcelColumn label="AREA_TERRENO" value="area_terreno"/>
                          <ExcelColumn label="AREA_CONSTRUCCION" value="area_construccion"/>
                          <ExcelColumn label="VR_M2_CONST" value="vr_m2_construccion"/>
                          <ExcelColumn label="VR_Ha_TERRENO" value="vr_ha_terreno"/>
                          <ExcelColumn label="OBSERVACIONES" value="observaciones"/>
                          <ExcelColumn label="LATITUD" value="latitud"/>
                          <ExcelColumn label="LONGITUD" value="longitud"/>
                          <ExcelColumn label="CONSERVACION" value="conservacion"/>
                          <ExcelColumn label="FECHA_CAPTURA_OFERTA" value="fecha_captura_oferta"/>
                          <ExcelColumn label="TIEMPO_OFERTA_MERCADO" value="tiempo_oferta_mercado"/>
                          <ExcelColumn label="NUMERO_CONTACTO_OFERENTE" value="numero_contacto_oferente"/>
                          <ExcelColumn label="NOMBRE_OFERENTE" value="nombre_oferente"/>
                          <ExcelColumn label="AVALUO_CATASTRAL" value="avaluo_catastral"/>
                          <ExcelColumn label="DESTINACION_ECONOMICA" value="destinacion_economica"/>
                          <ExcelColumn label="DERECHO_TIPO" value="derecho_tipo"/>
                          <ExcelColumn label="TIPO_TIPOLOGIA" value="tipo_tipologia"/>
                          <ExcelColumn label="TIPO_CULTIVOS" value="tipo_cultivos"/>
                          <ExcelColumn label="CONSTRUCCIONES_ANEXAS" value="construcciones_anexas"/>
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
                  className={classes.Textpmodal1}
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
//       href="https://nowsoft.app/geoportal/descargas/oin/FORMATO_MERCADO.xlsx"
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
