import React from 'react'
import Styled from "styled-components";
import {Grid, Box} from '@material-ui/core/';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlinePhone, AiOutlineClockCircle } from "react-icons/ai";
import logoGobernment from "../img/logoGovernment.png";


const ContenedorFooter= Styled.div`
<<<<<<< HEAD
        background-color: #FAFAFA;
        margin-top:15px;
        
                
`;
const H3 = Styled.h3`
    text-align: center;
    padding: 15px 0;
=======
        background-color: #fff;
>>>>>>> desarrollo
`;
const Imagen = Styled.img`
    max-width:200px;
    
`;

const Footer = () =>{
    return(
        <ContenedorFooter>
            <H3>Departamento Administrativo Nacional de Estadistica DANE</H3>
            <Grid container>
                {/* <span>Departamento Administrativo Nacional de Estadistica DANE</span> */}
                <Grid item xs={6} sm={3}  >                    
                    <Grid  container >
                        <Grid item sm={4} ><Box pt={1} pl={8} color="#B91450" fontSize = {35}><AiOutlinePhone/> </Box>
                        </Grid>
                        <Grid item sm={8}   >
                           <Box p={1} color="black" fontSize = {17} fontWeight={700}> CALL CENTER</Box>
                               <Box color="black" fontSize = {17} fontWeight={700}> Conmutador:</Box> (571) 597 833 00 ó (571)5978398
                               <Box color="black" fontSize = {17} fontWeight={700}> linea gratuita nacional </Box>01 8000 912 002
                            
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Grid  container >
                            <Grid item sm={4} ><Box pt={1} pl={8} color="#B91450" fontSize = {35}><AiOutlineClockCircle/> </Box>
                            </Grid>
                            <Grid item sm={8}   >
                            <Box p={1} color="black" fontSize = {17} fontWeight={700}> HORARIO DE ATENCIÓN</Box>
                                <Box color="black" fontSize = {17} fontWeight={700}> Lunes a viernes</Box>
                                8:00 - 17:00
                                
                            </Grid>
                    </Grid>      
                </Grid>
                <Grid item xs={6} sm={3}>
                     <Grid  container >
                            <Grid item sm={4} ><Box pt={1} pl={8} color="#B91450" fontSize = {35}><HiOutlineLocationMarker/> </Box>
                            </Grid>
                            <Grid item sm={8}   >
                            <Box p={1} color="black" fontSize = {17} fontWeight={700}> DIRECCIÓN</Box>
                                <Box color="black" fontSize = {17} fontWeight={700}>Carrera 59 No. 26-70 Interior I - CAN</Box>
                                <Box color="black" fontSize = {17} fontWeight={700}>Código postal:</Box>
                                111321
                                <Box color="black" fontSize = {17} fontWeight={700}>Apartado Aéreo:</Box>
                                80043
                                <Box color="black" fontSize = {17} fontWeight={700}>Bogotá D.C., Colombia - Suramérica</Box>
                            </Grid>
                     </Grid>                    
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box >
                        <Imagen src= {logoGobernment} />
                    </Box>
                </Grid>
            </Grid>
        </ContenedorFooter>
    );
}
export default Footer;


