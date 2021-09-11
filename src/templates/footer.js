import React from 'react'
import Styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import { AiOutlinePhone, AiOutlineClockCircle } from "react-icons/ai";
import logoGobernment from "../img/logoGovernment.png";


const ContenedorFooter= Styled.div`
        background-color: #fff;
`;
const Imagen = Styled.img`
    max-width:200px;
`;

const Footer = () =>{
    return(
        <ContenedorFooter>
            <h3>Departamento Administrativo Nacional de Estadistica DANE</h3>
            <Grid container spacing={3}>
                {/* <span>Departamento Administrativo Nacional de Estadistica DANE</span> */}
                <Grid item xs={6} sm={3}>
                    
                    <p><AiOutlinePhone/>
                        <span> call center</span>
                        Conmutador: (571) 597 833 00 ó (571)5978398
                        linea gratuita nacional 01 8000 912 002
                    </p>
                </Grid>
                <Grid item xs={6} sm={3}>
                    
                    <p><AiOutlineClockCircle/>
                        <span> HORARIO DE ATENCIÓN</span>
                        Lunes a viernes 8:00 - 17:00
                    </p>
                </Grid>
                <Grid item xs={6} sm={3}>
                    
                    <p>
                        <span> DIRECCIÓN</span>
                        Carrera 59 No. 26-70 Interior I - CAN
                        Código postal: 111321
                        Apartado Aéreo: 80043
                        Bogotá D.C., Colombia - Suramérica
                    </p>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Imagen src= {logoGobernment} />
                  
                </Grid>
            </Grid>
        </ContenedorFooter>
    );
}
export default Footer;


