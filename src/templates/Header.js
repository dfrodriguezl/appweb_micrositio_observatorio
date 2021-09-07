import React from 'react';
import Styled from "styled-components";


const ContenedorLogo = Styled.div`
    display: flex;
    background-color: bisque;

`;

const Busqueda = Styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: -40px;`       

;

const Header = ({titulo}) => {
    return ( 

        <header>
            
            <ContenedorLogo>
            <h1>{titulo}</h1>
                <img src= "../img/DANE__Geovisor__icon__logoDANE__01.svg" />
                <img src="../img/DANE__Geovisor__icon__logoGeoportal.svg" />
                
            </ContenedorLogo>
            <Busqueda>                
                <input type= "text" placeholder = "Buscar" />
            </Busqueda>
        </header>

     );
}
 
export default Header;
