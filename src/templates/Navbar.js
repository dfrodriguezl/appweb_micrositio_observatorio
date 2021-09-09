import React from 'react';
import { AiFillHome, AiOutlineDown } from "react-icons/ai";
import Styled from "styled-components";

const NavBarContenedor = Styled.div`
    text-align: center; 
`;

const Icnono = Styled.div`
     display: flex;
     list-style: none; 
      
`;

const MenuUL =  Styled.ul`
       /* display: flex; */
      display:inline-flex;
          
`;

const MenuIL =  Styled.li`
    max-width:1300px;
    margin: 15px;
    padding: 10px;
    &:hover{
      ${SubmenuUL}{
        display:block;
      }
    
    }
               
`;
const MenuA = Styled.a`
    text-decoration: none;
    padding: 5px;

    &:hover{
      background-color: #f06292;
      border-radius: 3px;
      color: #fff;
      font-weight: bold;
    }
`;

const SubmenuUL = Styled.ul`
     /* display: none;      */
`;
const SubMenuIL =  Styled.li`
    list-style: none;
    /* display:none; */
   
    &:hover{
      /* display:block;
      position: absolute; */
      /* background-color: #f06292; */
      /* border-radius: 3px;
      color: #fff;
      font-weight: bold; */
    }   
`;
const SubMenuA = Styled.a`
    text-decoration: none;
    padding: 2px;
    margin: 3px;

&:hover {
      /* display:block;
      position: absolute; */
      background-color: #f06292;
      /* border-radius: 3px;
      color: #fff;
      font-weight: bold; */
    } 
`;

const Navbar = () => {
  return (
    <NavBarContenedor>
      
        <MenuUL>
            <Icnono>
            
            <MenuIL><AiFillHome/><MenuA href ="#">Inicio </MenuA>
                
                  <SubmenuUL className= "clasePrueba">
                      <SubMenuIL>
                        <SubMenuA href ="#">Servicios </SubMenuA>
                      </SubMenuIL>
              
                      <SubMenuIL>
                        <SubMenuA href ="#">Servicios2 </SubMenuA> 
                      </SubMenuIL>
                      
                      <SubMenuIL>
                        <SubMenuA href ="#">Mapas </SubMenuA> 
                      </SubMenuIL>
                      
                      <SubMenuIL>
                        <SubMenuA href ="#">Catastro Multiproposito </SubMenuA> 
                      </SubMenuIL>
                    
                      <SubMenuIL>
                        <SubMenuA href ="#">Boletines </SubMenuA> 
                      </SubMenuIL>
                  </SubmenuUL>                

            
            </MenuIL>
            
            <MenuIL><AiOutlineDown/><MenuA href ="#">Servicios3 </MenuA> </MenuIL> 

            <MenuIL><AiOutlineDown/><MenuA href ="#">Mapas </MenuA> </MenuIL>
            
            <MenuIL><AiOutlineDown/><MenuA href ="#">Catastro Multiproposito </MenuA> </MenuIL>
           
            <MenuIL><AiOutlineDown/><MenuA href ="#">Boletines </MenuA> </MenuIL>
            
            <MenuIL><AiOutlineDown/><MenuA href ="#">Ingresar </MenuA> </MenuIL>
            </Icnono>
        </MenuUL>
        
    </NavBarContenedor>
  );
};

export default Navbar;