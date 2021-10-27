import React from 'react'
import {Grid, Box} from '@material-ui/core/';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlinePhone, AiOutlineClockCircle } from "react-icons/ai";
import logoGobernment from "../img/logoGovernment.png";

import {
    makeStyles
  } from '@material-ui/core/styles';
  import Styled from "styled-components";



const ContenedorFooter= Styled.div`
        background-color: #FAFAFA;     
                
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
    return(
        <ContenedorFooter>
            <H3>Departamento Administrativo Nacional de Estadistica DANE</H3>
            <Grid container  justifyContent={'center'}>
                {/* <span>Departamento Administrativo Nacional de Estadistica DANE</span> */}
                <Grid container item xs={12} sm={12} md={6} lg={4} direction="row" 
                    className={classes.containerItem}
                     justifyContent="center" >                    
                   
                       <Box  item color="#B91450" fontSize = {30}><AiOutlinePhone/> </Box>
                        <ul  className={classes.ulItem}>
                              <li>
                                  <b>CALL CENTER</b>
                              </li>
                              <li><b>Conmutador:</b> <a className={classes.textDescription}>(571) 597 833 00 ó (571)5978398</a> </li>
                              <li>
                               <b>linea gratuita nacional</b><a className={classes.textDescription}> 01 8000 912 002</a>
                               </li> 
                        </ul>
                        
                </Grid>
                <Grid  container xs={12} sm={12} md={6} lg={3} direction="row" 
                 className={classes.containerItem}
                justifyContent="center">
                         <Box  item color="#B91450" fontSize = {30}><AiOutlineClockCircle/> </Box>     
                         <ul item className={classes.ulItem}>
                                <li><b>HORARIO DE ATENCIÓN</b></li>
                                <li><b>Lunes a viernes</b> <a className={classes.textDescription}>8:00 - 17:00</a>
                                </li>
                         </ul>  
                </Grid>
                <Grid container xs={12} sm={12}  md={6} lg={3} direction="row" 
                 className={classes.containerItem}
                justifyContent="center">
                     
                     <Box  color="#B91450" fontSize = {30}><HiOutlineLocationMarker/> </Box>
                            
  
                                 <ul className={classes.ulItem}>
                                      <li className={classes.liItem}>
                                          <b>DIRECCIÓN</b>
                                      </li>
                                      <li className={classes.liItem}>
                                      <b>Carrera 59 No. 26-70 Interior I - CAN</b>
                                      </li>
                                      <li className={classes.liItem}>
                                      <b> Código postal:</b><a className={classes.textDescription}> 111321</a>
                                      </li>
                                      <li className={classes.liItem}>
                                      <b>Apartado Aéreo:</b> <a className={classes.textDescription}> 80043</a>
                                      </li>
                                      <li className={classes.liItem}>
                                       <b>Bogotá D.C., Colombia - Suramérica</b>
                                      </li>
                                 </ul>                
                </Grid>
                <Grid container xs={12} sm={12} md={6} lg={2}  
                 className={classes.containerItem} 
                justifyContent={'center'}>
                    <Box >
                        <Imagen src= {logoGobernment}/>
                    </Box>
                </Grid>
            </Grid>
        </ContenedorFooter>
    );
}
export default Footer;


