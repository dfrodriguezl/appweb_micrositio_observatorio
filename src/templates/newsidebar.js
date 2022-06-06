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
import menuDane from "Observatorio/common/newmenu.js"
import * as Values from 'Observatorio/Variables/values';
import IconData from '@mui/icons-material/Brightness1';
import {
    makeStyles
} from '@material-ui/core/styles';
import Divider from '@mui/material/Divider';

const useStyle = makeStyles({
    Textp: {
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: "calc(0.4em + 1vh)",
        textAlign: "left",
        margin: "1em 0 0 0",
        textDecoration: "none",
        marginLeft: "3px",
        width: "100%"
    },
    Textp02: {
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: "calc(0.3em + 1vh)",
        textAlign: "start",
        margin: "1em 0 0 0",
        textDecoration: "none",
        marginLeft: "3px"
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
background-color:white;
height:100%;
overflow-y: scroll;
@media (max-width: 4000px) and (min-width: 769px) {
    display:none;
 };
 overflow-y: auto;
`;
export default function CustomizedAccordions() {
    let subResult = []
    let result = []
    let index = 0
    const classes = useStyle()
    for (var i = 0; i < menuDane.length; i++) {
        for (var j = 0; j < menuDane[i].length; j++) {
            if (i == 2) {
                if (j == 0) {
                    subResult.push(<Grid item xs={6} md={6}>
                        <IconData sx={{ fontSize: 5, marginBottom: "2px" }}></IconData>
                        <a className={classes.Textp} href={menuDane[i][j].link}>{menuDane[i][j].name}</a>
                    </Grid>)
                } else {
                    subResult.push(<Grid item xs={12} md={12}>
                        <IconData sx={{ fontSize: 3, marginBottom: "2px", marginLeft: "10px" }}></IconData>
                        <a className={classes.Textp02} href={menuDane[i][j].link}>{menuDane[i][j].name}</a>
                    </Grid>)
                }
            } else {
                if (menuDane[i][j].isMain) {
                    subResult.push(<Grid container direction="column" item xs={6} md={6}>
                        <Grid item xs={1} >
                            <IconData sx={{ fontSize: 5, marginBottom: "2px", width: "10px" }}></IconData>
                        </Grid>
                        <Grid item xs={11}>
                            <div className={classes.widthComplete}>
                                <a className={classes.Textp} href={menuDane[i][j].link}>{menuDane[i][j].name}</a>
                            </div>

                        </Grid>

                    </Grid>)
                } else {
                    subResult.push(<Grid container item xs={6} md={6}>
                        <Grid item xs={1}>
                            <IconData sx={{ fontSize: 5, marginBottom: "2px", width: "10px" }}></IconData>
                        </Grid>
                        <Grid item xs={11}>
                            <a className={classes.Textp} href={menuDane[i][j].link}>{menuDane[i][j].name}</a>
                        </Grid>
                    </Grid>)
                }
            }


        }

        let title = "Observatorio"
        switch (i) {
            case 0:

                break;
            case 1:
                title = "Servicios"
                break;
            case 2:
                title = "Geovisores"
                break;
            case 3:
                title = "Catastro Multipropósito"
                break;
        }
        let divider = <div className={classes.dividerItem}></div>
        if (i == 0) {
            result[0] =
                <Grid item container>
                    <Button className={classes.boton} href="/Observatorio/login">Ingresar</Button>
                </Grid>


            result[1] = <Grid item container direction="row" className={classes.containerSection}>

                <Grid item className={classes.TitleMenu}>
                    <strong> {title}</strong>
                </Grid>
                <Grid item container >
                    {divider}
                </Grid>
                <Grid item container direction="row" xs={12} md={12}>
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
                    <Grid item container direction="row" xs={12} md={12}>
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
                    <Grid item container direction="row" xs={12} md={12}>
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
                    <Grid item container direction="row" xs={12} md={12}>
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