import menuDane from "common/menu.js"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import Styled from "styled-components";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import Economia from '@mui/icons-material/EqualizerTwoTone';
import Sociedad from '@mui/icons-material/SupervisedUserCircleSharp';
import Territorio from '@mui/icons-material/Terrain';
import ServicioGeografico from '@mui/icons-material/Public';
import Investigacion from '@mui/icons-material/EmojiObjects';
import DownloadIcon from '@mui/icons-material/Download';
import CodeIcon from '@mui/icons-material/Code';
import AndroidIcon from '@mui/icons-material/PhoneAndroid';
import MapIcon from '@mui/icons-material/Map';
import RoomIcon from '@mui/icons-material/Room';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';


import {
    makeStyles
  } from '@material-ui/core/styles';

const useStyle = makeStyles({
    root: {
      textDecoration: 'none',
      margin: '5px',
      padding: '5px',
      color: 'inherit'
    },
    menuActive: {
      height: 430,
      width: "100%",
      position: "absolute",
      backgroundColor: "#F2F2F2",
      zIndex: 1,
      top: 150,
      boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.3)"
    },
    colorMenuActive: {
      backgroundColor: "#821A3F",
      color: "#FFFFFF !important"
    },
    sectionTitleMenu: {
      fontSize: "20px"
    },
    liTitle: {
      listStyle: "none",
      "&:hover": {
        color: "#821A3F",
        cursor: "pointer"
      },
      fontSize: 16,
      padding:"2px"
  
    },
    liHover: {
      "&:hover": {
        color: "white",
        cursor: "pointer",
        backgroundColor: "#821A3F"
      }
    },
    liItem: {
      marginLeft: "2px",
      fontSize: 13,
      justifyContent: "center",
      "&:hover": {
        color: "#821A3F !important",
        cursor: "pointer"
      }
    },
    ulItem: {
      marginTop: 30,
      listStyle: "none"
    },
    iconLi: {
      color: "blue"
    },
    cardglobal: {
      //margin: "0% 0% 0% 0%",
      padding: "0% 5% 0% 5%",
      backgroundColor: "white",
    },
    cardglobalWhithout: {
      //margin: "0% 0% 0% 0%",
      padding: "0% 5% 0% 5%",
    },
    aMenu: {
      color: "black",
      textDecoration: "none",
      "&:hover": {
        color: "#821A3F",
        cursor: "pointer"
      },
      marginLeft:4
    },
    topIconsub: {
      marginTop: "5px"
    },
    colorTerritorio: {
      color: "green"
    },
    colorSociedad: {
      color: "blue"
    },
    rotate:{
      transform:"rotate(180deg)"
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
    }
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(0),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(0),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    padding:0
}));

const listMenu = Styled.ul`
    list-style:none;
    margin-left: 30px;
`;
const DropDownLi = Styled(listMenu)`
    /* display: inline-block;    */
    position:relative;
    display: flex;
    /* justify-content: center;
    align-items:center; 
    /* &:first-child {
        color:red;
        
        
    } */
  `;
const SubSideBar = (props) => {
    const classes = useStyle()
    const [expanded, setExpanded] = React.useState(null);
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    var cont = props.codigoinicial;
    let resultFinal = []
    menuDane.map((indice) => {
        let resultMenu = []
        let accordionContent = []
        let concatenar = []
        var name = "panel"+cont;
        var valor = "panel" + cont + "d-content"
        var header = "panel" + cont + "d-header"
        var iconTitle;
        switch (indice.title[props.position]) {
          case "GIT I + D investigacion y desarrollo":
            iconTitle = <Investigacion></Investigacion>
            break
          case "Servicios web Geograficos":
            iconTitle = <ServicioGeografico></ServicioGeografico>
            break;
          case "Catalógo de matadatos geográficos":
            iconTitle = <CodeIcon></CodeIcon>
            break;
          case "Economia":
            iconTitle = <Economia></Economia>
            break
          case "Sociedad":
            iconTitle = <Sociedad className={classes.colorSociedad}></Sociedad>
            break
          case "Territorio":
            iconTitle = <Territorio className={classes.colorTerritorio}></Territorio>
            break;
          default:
            iconTitle= <ArrowRightIcon></ArrowRightIcon>
            break;
        }
        resultMenu.push(<AccordionSummary aria-controls={valor} id={header}>
            <Typography>{iconTitle}{indice.title[props.position]}</Typography>
        </AccordionSummary>)
        indice.subindices[props.position].map((subindice) => {
            
            if (subindice.isTitle) {
                var icon;
                switch (subindice.icon) {
                  case "Economia":
                    icon = <Economia></Economia>
                    break
                  case "Sociedad":
                    icon = <Sociedad className={classes.colorSociedad}></Sociedad>
                    break
                  case "Territorio":
                    icon = <Territorio className={classes.colorTerritorio}></Territorio>
                    break;
                  case "Datos":
                    icon = <DownloadIcon></DownloadIcon>
                    break;
                  case "Atlas":
                    icon = <MapIcon></MapIcon>
                    break;
                  case "Android":
                    icon = <AndroidIcon></AndroidIcon>
                    break;
                  case "Map":
                    icon = <RoomIcon></RoomIcon>
                    break;
                  case "Educacion":
                    icon = <CastForEducationIcon></CastForEducationIcon>
                    break;
                  default:
                    icon = <ArrowRightIcon></ArrowRightIcon>
                    break;
                }
                accordionContent.push(<DropDownLi key={subindice.key} >{icon}<a href={subindice.link} className={classes.aMenu}>{subindice.name}</a></DropDownLi>)
            } else {
                accordionContent.push(<DropDownLi key={subindice.key} ><ArrowRightIcon></ArrowRightIcon><a className={classes.aMenu} href={subindice.link}>{subindice.name}</a></DropDownLi>)
            }

        })

        concatenar.push(
            <AccordionDetails>
                <listMenu>
                    {accordionContent}
                </listMenu>
            </AccordionDetails>
        )
        resultFinal.push(
            <Accordion expanded={expanded === name} onChange={handleChange(name)}>
                {resultMenu}
                {concatenar}
            </Accordion>
        )
        cont++;
    })

    return resultFinal
}

export default SubSideBar;