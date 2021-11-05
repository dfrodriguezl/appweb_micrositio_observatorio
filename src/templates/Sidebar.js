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
    padding:0
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
                    <Typography>Catastro Multiproposito</Typography>
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

/*



function elegirMenu() {

}
const Sidebar = () => {
    return (
        <Grid container>
            <Grid container item direction="column">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Servicios</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul>
                            {
                                menuDane.map((indice) => {
                                    return (
                                        <li>{indice.title[0]}</li>
                                    )
                                    {
                                        indice.subindices.map((subindice) => {
                                            return (
                                                <h1>asd</h1>
                                            )
                                        })
                                    }

                                })
                            }
                        </ul>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel2a-header"
                    >
                        <Typography>Geovisores</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul>
                            {
                                menuDane.map((indice) => {
                                    return (
                                        <li>{indice.title[1]}</li>
                                    )
                                    {
                                        indice.subindices.map((subindice) => {
                                            return (
                                                <h1>asd</h1>
                                            )
                                        })
                                    }

                                })
                            }
                        </ul>
                    </AccordionDetails>
                </Accordion>

            </Grid>
        </Grid>
    )
}

export default Sidebar;*/