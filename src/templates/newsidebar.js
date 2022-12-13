import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid } from '@material-ui/core';

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Styled from "styled-components";
import { Button } from '@material-ui/core';
//import menuDane from "Observatorio/common/newmenu.js"
import * as Values from 'Observatorio/Variables/values';
import IconData from '@mui/icons-material/Brightness1';
import {useTranslation} from "react-i18next";
import {
    makeStyles
} from '@material-ui/core/styles';
import Divider from '@mui/material/Divider';
import {  useNavigate } from "react-router-dom";

const useStyle = makeStyles({
    Textp: {
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: "calc(0.4em + 1vh)",
        textAlign: "left",
        margin: "1em 0 0 0",
        textDecoration: "none",
        marginLeft: "0px",
        width: "100%"
    },
    Textp02: {
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: "calc(0.4em + 1vh)",
        textAlign: "start",
        margin: "0.3em 0 0 0",
        textDecoration: "none",
        marginLeft: "0px"
    },
    TitleMenu: {
        padding: "5px"
    },
    widthComplete:{
        width:"100%"
    },
    dividerItem: {
        borderTop: "1px solid #eee",
        height: "1px",
        width: "100%",
        marginTop: "2px",
        marginBottom: "2px"
    },
    ocultar:{
        display:"none"
    },
    containerSection: {
        padding: "10px"
    },
    boton: {
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
        borderRadius: "2vh",
        fontWeight: "bold",
        padding: "5px",
        marginLeft: "4px",
        "&:hover": {
            backgroundColor: Values.HoverButton,
            border: "none",
        }
    }
});

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));


const ContainerMenu = Styled.div`
padding:4%;
position:fixed;
z-index:1000;
background-color:#f4f4f4;
height:50%;
overflow-y: scroll;
@media (max-width: 4000px) and (min-width: 769px) {
    display:none;
 };
 overflow-y: auto;
`;

export default function CustomizedAccordions() {
    let subResult = []
    let result = []
    var estilo = null
    const [t, i18n]= useTranslation("global");
    let index = 0
    const classes = useStyle()
    const history = useNavigate();
    const menuDane =[   
             
        [
            {
              name:t("navbar.unobservatorio"),
              id:"1",
              link:"/observatorio/Acerca",
              icon:"",
              isMain:true
            },
            {
                name:t("navbar.otro"),
                id:"2",
                link:"/observatorio/Otrosobservatorios",
                icon:"",
                isMain:true
            }
      
        ],
        [
            {
                name:t("navbar.servicios"),
                id:"3",
                link:"/observatorio/Servicios",
                icon:"",
                isMain:true
            },
            {
                name:t("navbar.estadisticas"),
                id:"4",
                link:"/observatorio/Servicios/estadisticas",
                icon:"",
                isMain:true
            },
            {
                name:"Censo de edificaciones CEED",
                link:"/observatorio/Servicios/estadisticas/Ceed",
                icon:"",
                isMain:true
            },
            {
                name:t("navbar.plataforma"),
                id:"5",
                link:"/observatorio/PlataformaUsuario",
                icon:"",
                isMain:true,
                isProtected:true
            },
            {
                name:t("navbar.contacto"),
                id:"6",
                link:"/observatorio/Contacto",
                icon:"",
                isMain:true
            },
            {
                name:t("navbar.repositorio"),
                id:"7",
                link:"/observatorio/Repositorio",
                icon:"",
                isMain:true
            },
            {
                name:t("navbar.experimental"),
                id:"8",
                link:"/observatorio/Estadisticasexperimentales",
                icon:"",
                isMain:true
            },
    
    
        ],
        [
            {
                name:t("navbar.visor"),
                id:"9",
                link:"/observatorio/Mapas",
                icon:"",
                isMain:true
            },
            // {
            //     name:t("navbar.mercado"),
            //     id:"10",
            //     link:"https://geoportal.dane.gov.co/geovisores/territorio/observatorio_inmobiliario/",
            //     icon:"",
            //     isMain:false
            // },
            
        ],
        [
            {
                name:t("navbar.catastro"),
                id:"11",
                link:"/observatorio/Catastromultiproposito",
                icon:"",
                isMain:true
            },
            {
                name:t("navbar.metodos"),
                id:"12",
                link:"/observatorio/Catastromultiproposito/Metodosavaluos",
                icon:"",
                isMain:true
            },
            // {
            //     name:"Tipologías constructivas",
            //     link:"/observatorio/tipologia",
            //     icon:"",
            //     isMain:true
            // },
            {
                name:t("navbar.registro"),
                id:"13",
                link:"/observatorio/Catastromultiproposito/RegistroInmuebles",
                icon:"",
                isMain:true
            },
            {
                name:t("navbar.comite"),
                id:"14",
                link:"/observatorio/Comitetecnico",
                icon:"",
                isMain:true
            },
            {
                name:t("navbar.modelo"),
                id:"Ladm",
                link:"/observatorio/LADM",
                icon:"",
                isMain:true
            }
    
        ]
    ]

    function rutas(idd) {
        //console.log("alejo",idd.target.id)
        if(idd.target.id == "https://geoportal.dane.gov.co/geovisores/territorio/observatorio_inmobiliario/"){
            window.open('https://geoportal.dane.gov.co/geovisores/territorio/observatorio_inmobiliario/', '_blank')
        }else{
          history(idd.target.id)
          estilo=classes.ocultar
        }
      }

      const rutalogin = (e) =>{
        //console.log("diego")
        history('/observatorio/login')
        estilo=classes.ocultar
      }
      
    for (var i = 0; i < menuDane.length; i++) {
        for (var j = 0; j < menuDane[i].length; j++) {
            if (i == 2) {
                if (j == 0) {
                    subResult.push(<Grid id="primero" container item direccion='row'>
                        <Grid container item direction='column' justifyContent='center'>
                            <Grid item container xs={1} >
                                <IconData sx={{ fontSize: 5, marginBottom: "2px" }}></IconData>
                            </Grid>
                            <Grid item container xs={11}>
                                <a className={classes.Textp02} id={menuDane[i][j].link} onClick={rutas}>{menuDane[i][j].name}</a>
                            </Grid>
                        </Grid>
                    </Grid>)
                } else {
                    subResult.push(<Grid item id="tercero" container direction="row">
                        <Grid container item direction='column' justifyContent='center'>
                            <Grid item container xs={1} >                                
                                <IconData sx={{ fontSize: 5, marginBottom: "2px", marginLeft: "10px" }}></IconData>
                            </Grid>
                            <Grid item container xs={11}>
                            <a className={classes.Textp02} id={menuDane[i][j].link} onClick={rutas}>{menuDane[i][j].name}</a>
                            </Grid>
                        </Grid>                        
                    </Grid>)
                }
            } else {
                if (menuDane[i][j].isMain) {
                    subResult.push(<Grid id="segundo" container direction="row" item>                        
                        <Grid container item direction='column' justifyContent='center'>
                        <Grid item container xs={1} >
                            <IconData sx={{ fontSize: 5, marginBottom: "2px", width: "10px" }}></IconData>
                        </Grid>
                        <Grid item container xs={11}>
                            <div className={classes.widthComplete}>
                                <a className={classes.Textp} id={menuDane[i][j].link} onClick={rutas}>{menuDane[i][j].name}</a>
                            </div>

                        </Grid>
                        </Grid>
                    </Grid>)
                } else {
                    subResult.push(<Grid container item xs={6}>
                        <Grid item xs={1}>
                            <IconData sx={{ fontSize: 5, marginBottom: "2px", width: "10px" }}></IconData>
                        </Grid>
                        <Grid item xs={11}>
                            <a className={classes.Textp} id={menuDane[i][j].link} onClick={rutas}>{menuDane[i][j].name}</a>
                        </Grid>
                    </Grid>)
                }
            }


        }

        let title = t("navbar.observatorio")
        switch (i) {
            case 0:
                break;
            case 1:
                title = t("navbar.servicios")
                break;
            case 2:
                title = t("navbar.geovisores")
                break;
            case 3:
                title = t("navbar.catastro")
                break;
        }
        let divider = <div className={classes.dividerItem}></div>
        if (i == 0) {
            result[0] =
                <Grid item container>
                    <Button className={classes.boton} onClick={rutalogin}>{t("navbar.ingresar")}</Button>
                </Grid>
            result[1] = <Grid item container direction="row" className={classes.containerSection}>
                <Grid item className={classes.TitleMenu}>
                    <strong> {title}</strong>
                </Grid>
                <Grid item container >
                    {divider}
                </Grid>
                <Grid item container direction="row" xs={12}>
                    {subResult}
                </Grid>
            </Grid>
        } else {
            if (i == 1) {
                result[4] = <Grid item container direction="row" className={classes.containerSection}>
                    <Grid item className={classes.TitleMenu}>
                        <strong> {title}</strong>
                    </Grid>
                    <Grid item container >
                        {divider}
                    </Grid>
                    <Grid item container direction="row" xs={12}>
                        {subResult}
                    </Grid>
                </Grid>;

            } else if (i == 2) {
                result[3] = <Grid item container direction="row" className={classes.containerSection}>
                    <Grid item className={classes.TitleMenu}>
                        <strong> {title}</strong>
                    </Grid>
                    <Grid item container >
                        {divider}
                    </Grid>
                    <Grid item container direction="row" xs={12}>
                        {subResult}
                    </Grid>
                </Grid>;
            } else {
                result[2] = <Grid item container direction="row" className={classes.containerSection}>
                    <Grid item className={classes.TitleMenu}>
                        <strong> {title}</strong>
                    </Grid>
                    <Grid item container >
                        {divider}
                    </Grid>
                    <Grid item container direction="row" xs={12}>
                        {subResult}
                    </Grid>
                </Grid>;
            }
        }


        subResult = []
    }
    return (
        <ContainerMenu>
            <Grid container direction="row">
                {result}
            </Grid>
        </ContainerMenu>
    );
}
