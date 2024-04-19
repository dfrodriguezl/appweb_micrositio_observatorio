import React from 'react'
import {Grid, Box} from '@material-ui/core/';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlinePhone, AiOutlineClockCircle } from "react-icons/ai";
import logoGobernment from "Observatorio/img/logoGovernment.png";
import {useTranslation} from "react-i18next";

import {
    makeStyles
  } from '@material-ui/core/styles';
  import Styled from "styled-components";



const ContenedorFooter= Styled.div`
        background-color: #FAFAFA;  
        padding-left:40px;
        padding-right:10px;   
        padding-top:5%;
                
`;
const H3 = Styled.h3`
    text-align: center;
    padding: 15px 0;
    margin-bottom:10px;
`;
const Imagen = Styled.img`
    max-width:200px;
    margin-right:30px;
    
`;

const useStyle = makeStyles({
    liItem:{
        color:"black",
        display:"flex"
    },
    ulItem:{
        listStyle:"none",
        marginLeft:10
    },
    textDescription:{
        color:"#4C4C4C !important"
    },
    containerItem:{
        marginBottom:10
    }
    
});



const Footer = () =>{
    const classes = useStyle();
    const [t, i18n]= useTranslation("global");    
    const ajustable = "ajustable"
    return(
        <ContenedorFooter id="target-two">
            <H3>Departamento Administrativo Nacional de Estadistica DANE</H3>
            <Grid container  justifyContent="center">
                {/* <span>Departamento Administrativo Nacional de Estadistica DANE</span> */}
                <Grid item container  xs={12} sm={12} md={4} lg={4} direction="row" 
                    className={classes.containerItem}
                      >                    
                   
                       <Box  item color="#B91450" fontSize ={30}><AiOutlinePhone/> </Box>
                        <ul  className={classes.ulItem+" "+ajustable}>
                              <li>
                                  <b>{t("footer.call")}</b>
                              </li>
                              <li><b>{t("footer.conmutador")}:</b> <a className={classes.textDescription}>(571) 597 833 00 ó (571)5978398</a> </li>
                              <li>
                               <b>{t("footer.linea")}:</b><a className={classes.textDescription}> 01 8000 912 002</a>
                               </li> 
                        </ul>
                        
                </Grid>
                <Grid  item container xs={12} sm={12} md={4} lg={3} direction="row" 
                 className={classes.containerItem}
                >
                         <Box  item color="#B91450" fontSize = {30}><AiOutlineClockCircle/> </Box>     
                         <ul item className={classes.ulItem+" "+ajustable}>
                                <li><b>{t("footer.horario")}</b></li>
                                <li><b>{t("footer.lunes")}:</b> <a className={classes.textDescription}>8:00 - 17:00</a>
                                </li>
                         </ul>  
                </Grid>
                <Grid item container xs={12} sm={12}  md={4} lg={3} direction="row" 
                 className={classes.containerItem}
                >
                     
                     <Box  color="#B91450" fontSize = {30}><HiOutlineLocationMarker/> </Box>
                            
  
                                 <ul className={classes.ulItem+" "+ajustable}>
                                      <li>
                                          <b>{t("footer.direccion")}</b>
                                      </li>
                                      <li>
                                      <b>{t("footer.carrera")}</b>
                                      </li>
                                      <li>
                                      <b>{t("footer.codigo")}:</b> <a className={classes.textDescription}> 111321</a>
                                      </li>
                                      <li>
                                      <b>{t("footer.apartado")}:</b> <a className={classes.textDescription}> 80043</a>
                                      </li>
                                      <li>
                                       <b>{t("footer.bogota")}</b>
                                      </li>
                                 </ul>                
                </Grid>
                {/* <Grid  item container xs={12} sm={12} md={12} lg={2}  
                 className={classes.containerItem+" "+ajustable} 
                justifyContent={'center'}>
                    <Box >
                        <a href="https://idm.presidencia.gov.co/presidencia">
                        <Imagen src= {logoGobernment}/>
                        </a>
                        
                    </Box>
                </Grid> */}
            </Grid>
        </ContenedorFooter>
    );
}
export default Footer;


