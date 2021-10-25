import menuDane from "common/menu.js"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import Styled from "styled-components";

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
    const [expanded, setExpanded] = React.useState(null);
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    console.log(props)
    var cont = props.codigoinicial;
    let resultFinal = []
    menuDane.map((indice) => {
        let resultMenu = []
        let accordionContent = []
        let concatenar = []
        var name = "panel"+cont;
        var valor = "panel" + cont + "d-content"
        var header = "panel" + cont + "d-header"
        resultMenu.push(<AccordionSummary aria-controls={valor} id={header}>
            <Typography>{indice.title[props.position]}</Typography>
        </AccordionSummary>)
        indice.subindices[props.position].map((subindice) => {
            console.log(subindice)
            if (subindice.isTitle) {
                accordionContent.push(<DropDownLi key={subindice.key} ><a href={subindice.link}>{subindice.name}</a></DropDownLi>)
            } else {
                accordionContent.push(<DropDownLi key={subindice.key} ><a href={subindice.link}>{subindice.name}</a></DropDownLi>)
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