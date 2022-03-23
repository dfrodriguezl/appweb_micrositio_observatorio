import axios from "axios";
import styles from './style/estilos.css';
import {
  Grid,
  makeStyles,
  useMediaQuery,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Modal,
  Box,
  TextField,
} from "@material-ui/core";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import SelectBox from "devextreme-react/select-box";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Map from 'devextreme-react/map';
import { useForm } from "react-hook-form";
import {
  Chart,
  CommonSeriesSettings,
  SeriesTemplate,
  Format,
  ArgumentAxis,
  Font,
} from "devextreme-react/chart";
import PieChart, {
  Series,
  Label,
  Legend,
  Connector,
  Size,
  Export,
  Tooltip,
  Title,
  Color,
} from "devextreme-react/pie-chart";
import React, { Component, useState,useEffect } from "react";
import * as Values from "Observatorio/Variables/values";
import Projections from "Observatorio/img/Projections.svg";
import Data from "Observatorio/img/Data-rafiki.svg";
import Excel from "Observatorio/img/Excel1.png";
import Excel2 from "Observatorio/img/Excel2.png";
import pdf from "Observatorio/img/PDF1.png";
import pdf2 from "Observatorio/img/PDF2.png";
import geograph from "Observatorio/img/Address-pana1.png";
import geograph2 from "Observatorio/img/Address-pana2.png";
import forgot from "Observatorio/img/Forgot.svg";
import choose from "Observatorio/img/Choose-rafiki.svg";
import Broken from "Observatorio/img/Broken.svg";
import Powerful from "Observatorio/img/Powerful.svg";
import Personal from "Observatorio/img/Personal.svg";
import anotation from "Observatorio/img/Annotation-cuate.svg";
const Dash = require ("Observatorio/common/datosdashboard.js");
const DashBar = require ("Observatorio/common/dashboardbar.js");
import {Loader} from '../pages/loader/loader'
import enviroment from '../../config/enviroment';
let respuesta="";
import MapDash from './dashMap.js';
import Buttonp from 'devextreme-react/button';
import DataGrid, {
  Column, Editing, Paging, Lookup,
} from 'devextreme-react/data-grid';
import { employees, states } from './datarepository.js';

const markerUrl = 'https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png';

const useStyle = makeStyles({

  buttondownload:{
    color: "#F3F3F3",
      width: "max-content",
      cursor: "pointer",
      padding: "0.1em 0.5em 0.1em 0.5em",
      fontSize: "calc(1em + 0.3vh)",
      transition: "all 0.8s ease-out",
      fontFamily: "Roboto",
      bordeRadius: "2vh",
      textTransform: "capitalize",
      backgroundColor: "#821a3f",
      textDecoration: "none",
  },

  itemTextField: {
    backgroundColor: "white",
    width: "20%",
    margin: "0 0.5em 0.5em 0",
},
  tamaño: {
    width:"100%"
},
datarepository:{
  margin: "13px 10px 0px 10px",
  color: "#000000",
  backgroundColor: "#ffffff",
  lineHeight: "inherit",
},
botonmodalinput: {
  
    display: "none"
},
borderspan:{
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
  padding:"0.5em 1em",
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
    width: "30%",
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
    padding: "0.1em 0.5em 0.1em 0.5em",
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
    padding:"0 0.2em 0 0.2em"
  },

  marginout: {
    margin: "0 0 0.5vw 0",
  },

  contentrulesp31: {
    fontSize: "calc(0.9em + 1.2vh)",
    fontFamily: Values.SourceRoboto,
    color: Values.TextParagraph,
    fontWeight: "bold"
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
    fontStyle: "italic"
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
    height: "16vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "90%",
    backgroundPosition: "center center",
  },

  media1: {
    height: "30vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "72%",
    backgroundPosition: "right",
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
    backgroundSize: "45%",
    backgroundPosition: "center",
  },

  media4: {
    height: "25vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "55%",
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

const Datarepository = () => {
  const classes = useStyle();
    return (
        <DataGrid
          className={classes.datarepository}
          id="gridContainer"
          dataSource={employees}
          keyExpr="ID"
          allowColumnReordering={true}
          showBorders={true}
          showColumnLines={true}
          showRowLines={true}
          rowAlternationEnabled={false}      
          > 
          <Paging defaultPageSize={10}/>         
          {/* <Editing
            mode="row"
            //allowUpdating={true}
            //useIcons={true}
            allowDeleting={true} /> */}

          <Column dataField="Prefix" caption="Nombre del archivo" alignment="center"/>
          <Column dataField="FirstName" caption="Tipo de documento" alignment="center"/>
          <Column
            dataField="BirthDate"
            caption="Fecha"
            width={125}
            dataType="date" alignment="center"/>
          {/* <Column
            dataField="StateID"
            caption="State"
            width={125} alignment="center"
          >
            <Lookup dataSource={states} displayExpr="Name" valueExpr="ID" />
          </Column> */}
          

          {/* <Column type="buttons" width={150} caption="Eliminar" dataField="Descargar">
          <Button name="delete" cssclassName="buttondownload"/>
          </Column> */}

          <Column dataField="Eliminar" caption="Eliminar" alignment="center" width={150} cellRender={deleteinfo} />

          <Column dataField="Descargar" caption="Descargar" alignment="center" width={150} cellRender={renderGridCell} />
        </DataGrid>
    );
}

const Cardsmapas = () => {
  const [statistics, setstatistics] = useState({})   
  const [ph_venta_arriendo, setph_venta_arriendo] = useState({})
  const [nph_venta_arriendo, setnph_venta_arriendo] = useState({})
  const [rural_venta_arriendo, setrural_venta_arriendo] = useState({})
  const [ph_destinacion_economica, setph_destinacion_economica] = useState({})
  const [nph_destinacion_economica, setnph_destinacion_economica] = useState({})
  const [rural_destinacion_economica, setrural_destinacion_economica] = useState({})
  const [locationph, setlocationph] = useState({})
  const [openLoading,setLoading] = useState(false) 
  let suma = 0;

  const loadStatistics = () =>{    
    let token = localStorage.getItem("token")
    axios
      .get(`${enviroment.endpoint}/PlataformaUsuario/statistics`,{
        headers: { 
            'Content-Type' : 'application/json',
            token: token, 
        }
    })
      .then((response) => {
        if (response.status == 200) {
          if (response.data.code == "OK") {
            console.log(response.data.data)
            setstatistics(response.data.data)        
          } else {
            //setOpen3(true) 
            alert("ocurrio un problema Error!..1");
          }
        } else {         
          alert("ocurrio un problema externo");
        }
      })
  }

  const loadStatisticsventaarrendoph = () =>{    
    let token = localStorage.getItem("token")
    axios
      .get(`${enviroment.endpoint}/PlataformaUsuario/graphis`,{
        headers: { 
            'Content-Type' : 'application/json',
            token: token, 
        }
    })
      .then((response) => {
        if (response.status == 200) {
          if (response.data.code == "OK") {  
            setph_venta_arriendo(response.data.data.cantidadph_arrendo_ventaph)    
            setnph_venta_arriendo(response.data.data.cantidadph_arrendo_ventanph) 
            setrural_venta_arriendo(response.data.data.cantidadph_arrendo_ventarural)  
            setph_destinacion_economica(response.data.data.cantidad_destinacion_economica_ph)
            setnph_destinacion_economica(response.data.data.cantidad_destinacion_economica_nph) 
            setrural_destinacion_economica(response.data.data.cantidad_destinacion_economica_rural)          
          } else {
            console.log("ocurrio un problema Error!..2");
          }
        } else {         
          alert("ocurrio un problema externo");
        }
      })
  }  

  const [open3, setOpen3] = useState(false);
  const handleClose3 = () => setOpen3(false);

  const locationUser = () =>{    
    let token = localStorage.getItem("token")
    axios
      .get(`${enviroment.endpoint}/PlataformaUsuario/location`,{
        headers: { 
            'Content-Type' : 'application/json',
            token: token, 
        }
    })
      .then((response) => {
        if (response.status == 200) {
          if (response.data.code == "OK") {
            //console.log(response.data.data.locationph) 
            setlocationph(response.data.data.locationph)           
          } else {
            setOpen3(true) 
          }
        } else {         
          alert("ocurrio un problema externo");
        }
      })
  }

  suma=parseInt(statistics.cantidadph)+parseInt(statistics.cantidadnph)+parseInt(statistics.cantidadrural)

  useEffect(()=>{   
    loadStatistics(); 
    loadStatisticsventaarrendoph();   
    locationUser();
  },[]) 

   let dataSourceGeneral = Dash.dashBoardCake(statistics)     
   let dataSourcePh = Dash.dashBoardCakePh(ph_venta_arriendo)
   let dataSourceNph = Dash.dashBoardCakeNph(nph_venta_arriendo)
   let dataSourceRural = Dash.dashBoardCakeRural(rural_venta_arriendo)
   let dataDestinacionPh = DashBar.dashBoardDestinacionPH(ph_destinacion_economica)
   let dataDestinacionNph = DashBar.dashBoardDestinacionNPH(nph_destinacion_economica)
   let dataDestinacionRural = DashBar.dashBoardDestinacionRural(rural_destinacion_economica)
   let dataLocationPh = MapDash.markersDataPh(locationph)
    // console.log("primero",dataSourceNph)
    // console.log("segundo",dataDestinacionPh)

  const classes = useStyle();
  const matches = useMediaQuery("(max-width:769px)");
  const matches2 = useMediaQuery("(min-width:1281px)");

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClose1 = () => setOpen1(false);
  const handleClose2 = () => setOpen2(false);

  const upload = () => {
    document.getElementById("file").files[0];
    let token = localStorage.getItem("token")
    const archivos = document.getElementById("file").files;
    const data = new FormData();
  
    data.append('archivo', archivos[0]);
    setLoading(true)
    setOpen(false)
    axios
      .post(`${enviroment.endpoint}/PlataformaUsuario/upload`, data ,{
        headers: { 
            'Content-Type' : 'application/json',
            token: token, 
        }
    })
      .then((response) => {        
        if (response.status == 200) {
          respuesta=response.data.code;          
          if (response.data.code == "OK") {            
            loadStatistics();
            loadStatisticsventaarrendoph(); 
            locationUser();
            setLoading(false)
            setOpen1(true)            
          } else {
            setLoading(false);
            setOpen2(true)
            setOpen1(false) 
            //alert("Usuario o contraseña incorrecto");
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
                        <p className={classes.contentrulesp31}>
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
                        <p className={classes.contentnum}>{statistics.cantidadph}</p>
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
                        <p className={classes.contentnum}>{statistics.cantidadnph}</p>
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
                          Cantidad de ofertas rurales
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
                        <p className={classes.contentnum}>{statistics.cantidadrural}</p>
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
                                  <Font color="#821a3f" family="Roboto" size={25} weight="bold"/> 
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
                                  <Font color="#821a3f" family="Roboto" size={25} weight="bold"/> 
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
                                  <Font color="#821a3f" family="Roboto" size={25} weight="bold"/> 
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
                                  <Font color="#821a3f" family="Roboto" size={25} weight="bold"/> 
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
                                  <Font color="#821a3f" family="Roboto" size={25} weight="bold"/> 
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
                            <SeriesTemplate argumentField="id" nameField="name" />
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
                                  <Font color="#821a3f" family="Roboto" size={25} weight="bold"/> 
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
                                  <Font color="#821a3f" family="Roboto" size={25} weight="bold"/> 
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
              <Grid container direction="row" item xs >
                <Grid item xs container direction="column" >
                  <CardContent className={classes.centerText}>
                      <Grid direction="row" container justifyContent="center">
                      <p className={classes.Titleh4}>Visor</p>
                      </Grid>
                      <Grid>
                      <Typography className={classes.Textp_1}>En la siguiente herramienta se podrá visualizar la ubicación geográfica de las ofertas, asi mismo, se podrán realizar filtros por el tipo de ofertas y/o destino economico.</Typography>
                      </Grid>
                        <Grid direction="row" container alignItems="center" justifyContent="center">
                          <p className={classes.Titleh11}>
                            Total de Puntos:                          
                          </p>
                          <p className={classes.Titleh12}>
                            {suma}                         
                          </p>
                          <Box className={classes.itemTextField}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label-departamento">Departamento</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Age"
                                    //onChange={handleChangeValue}
                                    name="tipoUsuario"
                                    //value={form.tipoUsuario}
                                >
                                    <MenuItem value="20">Cundinamarca</MenuItem>
                                    <MenuItem value="30">Antioquia</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box className={classes.itemTextField}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label-">Tipo de Oferta</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Age"
                                    //onChange={handleChangeValue}
                                    name="tipoUsuario"
                                    //value={form.tipoUsuario}
                                >
                                    <MenuItem value="20">PH</MenuItem>
                                    <MenuItem value="30">NPH</MenuItem>
                                    <MenuItem value="40">RURAL</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box className={classes.itemTextField}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Destino Económico</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Age"
                                    //onChange={handleChangeValue}
                                    name="tipoUsuario"
                                    //value={form.tipoUsuario}
                                >
                                    <MenuItem value="10">Agricola</MenuItem>
                                    <MenuItem value="20">Agroindustrial</MenuItem>
                                    <MenuItem value="30">Agroforestal</MenuItem>
                                    <MenuItem value="40">Comercial</MenuItem>
                                    <MenuItem value="50">Cultural</MenuItem>
                                    <MenuItem value="60">Educativo</MenuItem>
                                    <MenuItem value="70">Forestal</MenuItem>
                                    <MenuItem value="80">Habitacional</MenuItem>
                                    <MenuItem value="90">Industrial</MenuItem>
                                    <MenuItem value="100">Lote Urbanizable No Urbanizado</MenuItem>
                                    <MenuItem value="110">Lote Urbanizado No Construido</MenuItem>
                                    <MenuItem value="120">Lote No Urbanizable</MenuItem>
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
                                markers={dataLocationPh}
                                provider="bing">
                              </Map>
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
                              href="https://nowsoft.app/geoportal/descargas/oin/EJEMPLO_MERCADO.xlsx"
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
                              href="https://nowsoft.app/geoportal/descargas/oin/FORMATO_MERCADO.xlsx"
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
                        </Grid>
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
                        <Grid
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
                        </Grid>
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
                  Repositorio Documental - Usuario
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
                        En esta sección podrá visualizar los archivos cargados al observatorio inmobiliario nacional, por fecha y tipo.
                        </Typography>
                        <Typography className={classes.Textp}>
                        Como usuario que provee la informacion por la cual se alimenta el micrositio, ademas de cargar, podrá descargar y eliminar archivos.
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Grid container direction="column" item xs>
                    <Datarepository/>
                    {/* <Grid container direction="column" item xs className={root}>
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
                                <CardMedia className={estilo2} image={Excel} />
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
                        <Grid
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
                                  <strong>CARGA CAPAS GEOGRÁFICAS</strong>
                                </p>
                                <p className={classes.contentrulesp3}>
                                  Formato: Gpkg
                                </p>
                              </Grid>
                            </Grid>
                          </button>
                        </Grid>
                      </Grid>
                    </Grid> */}
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
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
                          <Button
                            href="/Observatorio/ChangePassword"
                            className={classes.botonpass}
                          >
                            Cambiar Contraseña
                          </Button>
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
              <Grid item xs={8} direction="column" container justifyContent="center" alignItems="center">
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
                  En el siguiente boton, seleccione el archivo que desea cargar al observatorio inmobiliario nacional
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
              <label for="file" id="nombre" className={classes.botonmodalcargar}>Seleccionar Archivo</label>
              <span className={classes.borderspan} id="nombre1" ></span>
              <Grid container direction="column" justifyContent="center" alignContent="center">
              <Typography
                  className={classes.Textpmodal1}
                  id="modal-modal-descriptio"
                  >
                  ¿Desea continuar con la carga?
                </Typography>
              <Grid container direction="row">
              <Grid justifyContent="center" alignContent="center" container item xs={6}>
              <input
                className={classes.botonmodal1}
                onClick={upload}
                type="submit"
                value="Si"
              />
              </Grid>
              <Grid justifyContent="center" alignContent="center" container item xs={6}>
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
              <Grid item xs={8} direction="column" container justifyContent="center" alignItems="center">
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
              <Grid item xs={8} direction="column" container justifyContent="center" alignItems="center">
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
                  Favor revisar el tipo de atributo diligenciado y vuelga a intentar
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
              <Grid item xs={8} direction="column" container justifyContent="center" alignItems="center">
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
      <Loader open={openLoading}></Loader>    
    </Grid>
  );
  function cerrar() {
    setOpen(false)
  }  
};



function traer(){   
      var archivo = document.querySelector('#file');
      if(archivo != null){
        archivo.addEventListener('change',()=>{
          document.querySelector('#nombre1').innerText = archivo.files[0].name;
        });
      }   
}

function customizeText(arg) {
  return `${arg.valueText} (${arg.percentText})`;
}

function renderGridCell(data){
  return <a className="buttondownload" href="https://nowsoft.app/geoportal/descargas/oin/FORMATO_MERCADO.xlsx"
  download
>Descargar</a>
}

function deleteinfo(data){
  return <a className="buttondownload"
>Eliminar</a>
}

function customizeTooltip(arg) {
  return {
    text: `${arg.seriesName} - ${arg.valueText}`,
  };
}

export default Cardsmapas;
