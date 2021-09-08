import React from 'react';
import Styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import logoDane from "../img/DANE__Geovisor__icon__logoDANE__01.svg";
import logoGeoportal from "../img/DANE__Geovisor__icon__logoGeoportal.svg";



const ContenedorLogo = Styled.div`
    display: flex;    
    height: 75px;
    margin-bottom: 20px;

`;

const Busqueda = Styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: -60px;`       

;

const Header = () => {
    return ( 

        <header>
            
            <ContenedorLogo>
            
                <img src= {logoDane} />
                <img src= {logoGeoportal} />
                
            </ContenedorLogo>
            <Busqueda>                
                <TextField  id="filled-basic" label="Buscar" variant="filled" type= "text"  />
            </Busqueda>
        </header>

     );
}
 
export default Header;
