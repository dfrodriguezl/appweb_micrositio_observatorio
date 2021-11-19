import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid } from '@material-ui/core';

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Styled from "styled-components";
import SubSidebar from "./SubSidebar.js"
import menuDane from "Observatorio/common/newmenu.js"
import * as Values from 'Observatorio/Variables/values';
import IconData from '@mui/icons-material/Brightness1';
import {
    makeStyles
} from '@material-ui/core/styles';

const useStyle = makeStyles({
    Textp:{
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: "calc(0.4em + 1vh)",
        textAlign: "start",  
        margin: "1em 0 0 0",
        textDecoration:"none",
        marginLeft:"3px"
      },
      Textp02:{
        color: Values.TextParagraph,
        fontFamily: Values.SourceRoboto,
        fontSize: "calc(0.3em + 1vh)",
        textAlign: "start",  
        margin: "1em 0 0 0",
        textDecoration:"none",
        marginLeft:"3px"
      },
      TitleMenu:{
            padding:"5px"
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
position:absolute;
z-index:1000;
background-color:white;
@media (max-width: 4000px) and (min-width: 769px) {
    display:none;
 }
`;
export default function CustomizedAccordions() {
    let subResult = []
    let result=[]
    let index = 0
    const classes = useStyle()
    for(var i=0;i<menuDane.length;i++){
        for(var j=0;j<menuDane[i].length;j++){
            if (i == 2){
                if(j == 0){
                    subResult.push( <Grid item xs={6} md={6}>
                        <IconData sx={{ fontSize: 5 ,marginBottom:"2px"}}></IconData>
                        <a  className={classes.Textp} href={menuDane[i][j].link}>{menuDane[i][j].name}</a>
                                        </Grid>)
                }else{
                    subResult.push( <Grid item xs={12} md={12}>
                        <IconData sx={{ fontSize: 3 ,marginBottom:"2px" , marginLeft:"10px"}}></IconData>
                        <a  className={classes.Textp02} href={menuDane[i][j].link}>{menuDane[i][j].name}</a>
                                        </Grid>)
                }
            }else{
                if(menuDane[i][j].isMain){
                    subResult.push( <Grid item xs={6} md={6}>
                        <IconData sx={{ fontSize: 5 ,marginBottom:"2px"}}></IconData>
                        <a  className={classes.Textp} href={menuDane[i][j].link}>{menuDane[i][j].name}</a>
                                        </Grid>)
                }else{
                    subResult.push( <Grid item xs={6} md={6}>
                        <IconData sx={{ fontSize: 5, marginBottom:"2px" }}></IconData>
                        <a  className={classes.Textp02} href={menuDane[i][j].link}>{menuDane[i][j].name}</a>
                                        </Grid>)
                }
            }
           
          
        }

        let title= "Observatorio"
        switch(i){
            case 0:
                
                break;
            case 1:
                title="Servicios"
                break;
            case 2:
                title="Geovisores"
                break;
            case 3:
                title = "Catastro multiproposito"
                break;
        }
        result.push(<Grid item container direction="row">
            <Grid item className={classes.TitleMenu}>
               <strong> {title}</strong>
            </Grid>
            <Grid item container direction="row" xs={12} md={12}>
                 {subResult}
            </Grid>

          </Grid>) 
          subResult=[]
    }
   
   
    return (
        <ContainerMenu>
                <Grid container direction="row">
                    {result}
                </Grid>
                </ContainerMenu>

     
    );
}