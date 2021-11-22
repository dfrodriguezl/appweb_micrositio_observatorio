import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import menuDane from "Observatorio/common/menu.js"
import Styled from "styled-components";
import SubSidebar from "./SubSidebar.js"
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
        padding: "2px"

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
        marginLeft: 4
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
    rotate: {
        transform: "rotate(180deg)"
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
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    padding: 0
}));

const ContainerMenu = Styled.div`
@media (max-width: 4000px) and (min-width: 769px) {
    display:none;
 }
`;
export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState(null);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <ContainerMenu>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Servicios</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        <SubSidebar position={0} codigoinicial={10}></SubSidebar>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Geovisores</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        <SubSidebar position={1} codigoinicial={20}></SubSidebar>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Catastro Multipropósito</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        <SubSidebar position={2} codigoinicial={30}></SubSidebar>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography>Investigaciones</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        <SubSidebar position={3} codigoinicial={40}></SubSidebar>
                    </ul>
                </AccordionDetails>
            </Accordion>
        </ContainerMenu>
    );
}