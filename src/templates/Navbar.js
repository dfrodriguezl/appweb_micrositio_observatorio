import React from 'react';
import {Grid, Box} from '@material-ui/core/';
import { AiFillHome, AiOutlineDown } from "react-icons/ai";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink 
} from "react-router-dom";
import { makeStyles, 
  ThemeProvider,
   createTheme } from '@material-ui/core/styles';
import Styled from "styled-components";

const useStyle = makeStyles({
  root:{
    textDecoration: 'none',
    margin: '5px',
    padding: '5px', 
    color: 'inherit'
  }

});

const NavBarContenedor = Styled.ul`    
    max-width:1300px;
    display:flex;
    justify-content: space-between;
    margin: 10px 0;
    width: 100%;
    padding: 5px;
    list-style: none;
    
`;

const MenuA = Styled.a`
    text-decoration: none;
    margin: 5px;
    padding: 5px; 
    color: inherit;            
`;

const MenuIL =  Styled.li`
    float: left;   
    `;

const DropDownContent = Styled.div`
display: none;
position: absolute;
background-color: #f9f9f9;
min-width: 160px;
box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
z-index: 1;
top: 40px;
left:2px;
`;  
const DropDownLi = Styled(MenuIL)`
    /* display: inline-block;    */
    position:relative;
    display: flex;
    /* justify-content: center;
    align-items:center; */
    &:hover ${DropDownContent} {
      display: block;
    },
    /* &:first-child {
        color:red;
        
        
    } */
  `;
const SubMenuA = Styled.a`
   color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: #f1f1f1;
  }
`;
const UtilidadCentrarTexto = Styled.div`
    position:relative;
    display: flex;
    justify-content: center;
    align-items:center;
    &:hover{
      background-color: #BD0B4E;
      border-radius: 3px;
      color: #fff;
      /* font-weight: bold; */
    } 
`;

  

const Navbar = () => {
  const classes = useStyle();
  
  const handleClick = action => {
    if (!action) return;

    if (this.props.onClick) this.props.onClick(action);
  };
  
  return (
    
        <NavBarContenedor>
            <DropDownLi>
              <UtilidadCentrarTexto>
                  <AiFillHome/>
                  <MenuA href ="#">Inicio </MenuA>
                      
                    <DropDownContent>                        
                              {" "}
                              <SubMenuA href ="#" onClick={() => this.handleClick("Link1")}>Link 1 </SubMenuA>
                            <SubMenuA href ="#"  onClick={() => this.handleClick("Link2")} >Link 2 </SubMenuA>
                          <SubMenuA href ="#"  onClick={() => this.handleClick("Link3")} >Link 3  </SubMenuA>
                    </DropDownContent>
               </UtilidadCentrarTexto>
            </DropDownLi>

            <DropDownLi>
            <UtilidadCentrarTexto>
                  <AiOutlineDown/>
                  <MenuA href ="#">Servicios </MenuA>
                  
                <DropDownContent>                        
                              {" "}
                              <SubMenuA href ="#" onClick={() => this.handleClick("Link1")}>Link 1 </SubMenuA>
                            <SubMenuA href ="#"  onClick={() => this.handleClick("Link2")} >Link 2 </SubMenuA>
                          <SubMenuA href ="#"  onClick={() => this.handleClick("Link3")} >Link 3  </SubMenuA>
                    </DropDownContent>
                </UtilidadCentrarTexto>
            </DropDownLi>
            <DropDownLi>
                <UtilidadCentrarTexto>
                    <AiOutlineDown/>
                    <NavLink to="/Mapas" className = {classes.root} >Mapas</NavLink>
                        
                      <DropDownContent>                        
                                {" "}
                                <SubMenuA href ="#" onClick={() => this.handleClick("Link1")}>Link 1 </SubMenuA>
                              <SubMenuA href ="#"  onClick={() => this.handleClick("Link2")} >Link 2 </SubMenuA>
                            <SubMenuA href ="#"  onClick={() => this.handleClick("Link3")} >Link 3  </SubMenuA>
                      </DropDownContent>
                 </UtilidadCentrarTexto>
            </DropDownLi>
            <DropDownLi>
                <UtilidadCentrarTexto>
                  <AiOutlineDown/>
                  <MenuA href ="#">Catastro Multiproposito </MenuA>
                      
                    <DropDownContent>                        
                              {" "}
                              <SubMenuA href ="#" onClick={() => this.handleClick("Link1")}>Link 1 </SubMenuA>
                            <SubMenuA href ="#"  onClick={() => this.handleClick("Link2")} >Link 2 </SubMenuA>
                          <SubMenuA href ="#"  onClick={() => this.handleClick("Link3")} >Link 3  </SubMenuA>
                    </DropDownContent>
                </UtilidadCentrarTexto>
            </DropDownLi>
            <DropDownLi>
              <UtilidadCentrarTexto>
                  <AiOutlineDown/>
                  <MenuA href ="#">Boletines </MenuA>
                      
                    <DropDownContent>                        
                              {" "}
                              <SubMenuA href ="#" onClick={() => this.handleClick("Link1")}>Link 1 </SubMenuA>
                            <SubMenuA href ="#"  onClick={() => this.handleClick("Link2")} >Link 2 </SubMenuA>
                          <SubMenuA href ="#"  onClick={() => this.handleClick("Link3")} >Link 3  </SubMenuA>
                    </DropDownContent>
               </UtilidadCentrarTexto>
            </DropDownLi>
            <DropDownLi>
              <UtilidadCentrarTexto>
                  <AiOutlineDown/>
                  <MenuA href ="#">Ingresar </MenuA>
                      
                    <DropDownContent>                        
                              {" "}
                              <SubMenuA href ="#" onClick={() => this.handleClick("Link1")}>Link 1 </SubMenuA>
                            <SubMenuA href ="#"  onClick={() => this.handleClick("Link2")} >Link 2 </SubMenuA>
                          <SubMenuA href ="#"  onClick={() => this.handleClick("Link3")} >Link 3  </SubMenuA>
                    </DropDownContent>
                </UtilidadCentrarTexto>
            </DropDownLi>               
        </NavBarContenedor>
        
    
  );
};

export default Navbar;
