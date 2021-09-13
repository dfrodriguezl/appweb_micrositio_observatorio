import React from 'react';
import { AiFillHome, AiOutlineDown } from "react-icons/ai";
import Styled from "styled-components";

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
    margin: 15px;
    padding: 10px; 
    color: #000; 
    &:hover{
      background-color: #BD0B4E;
      border-radius: 3px;
      color: #fff;
      /* font-weight: bold; */
    }        
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
margin: 10px 0 0 15px;
`;  
const DropDownLi = Styled(MenuIL)`
    display: inline-block;   
    &:hover ${DropDownContent} {
      display: block;
    }
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

const Navbar = () => {
  
  const handleClick = action => {
    if (!action) return;

    if (this.props.onClick) this.props.onClick(action);
  };
  
  return (
    
        <NavBarContenedor>
            <DropDownLi><MenuA href ="#"><AiFillHome/>Inicio </MenuA>
                  
                <DropDownContent>                        
                          {" "}
                          <SubMenuA href ="#" onClick={() => this.handleClick("Link1")}>Link 1 </SubMenuA>
                        <SubMenuA href ="#"  onClick={() => this.handleClick("Link2")} >Link 2 </SubMenuA>
                       <SubMenuA href ="#"  onClick={() => this.handleClick("Link3")} >Link 3  </SubMenuA>
                </DropDownContent>
            </DropDownLi>
            <DropDownLi><MenuA href ="#"><AiOutlineDown/>Servicios </MenuA>
                  
                <DropDownContent>                        
                          {" "}
                          <SubMenuA href ="#" onClick={() => this.handleClick("Link1")}>Link 1 </SubMenuA>
                        <SubMenuA href ="#"  onClick={() => this.handleClick("Link2")} >Link 2 </SubMenuA>
                       <SubMenuA href ="#"  onClick={() => this.handleClick("Link3")} >Link 3  </SubMenuA>
                </DropDownContent>
            </DropDownLi>
            <DropDownLi><MenuA href ="#"><AiOutlineDown/>Mapas </MenuA>
                  
                <DropDownContent>                        
                          {" "}
                          <SubMenuA href ="#" onClick={() => this.handleClick("Link1")}>Link 1 </SubMenuA>
                        <SubMenuA href ="#"  onClick={() => this.handleClick("Link2")} >Link 2 </SubMenuA>
                       <SubMenuA href ="#"  onClick={() => this.handleClick("Link3")} >Link 3  </SubMenuA>
                </DropDownContent>
            </DropDownLi>
            <DropDownLi><MenuA href ="#"><AiOutlineDown/>Catastro Multiproposito </MenuA>
                  
                <DropDownContent>                        
                          {" "}
                          <SubMenuA href ="#" onClick={() => this.handleClick("Link1")}>Link 1 </SubMenuA>
                        <SubMenuA href ="#"  onClick={() => this.handleClick("Link2")} >Link 2 </SubMenuA>
                       <SubMenuA href ="#"  onClick={() => this.handleClick("Link3")} >Link 3  </SubMenuA>
                </DropDownContent>
            </DropDownLi>
            <DropDownLi><MenuA href ="#"><AiOutlineDown/>Boletines </MenuA>
                  
                <DropDownContent>                        
                          {" "}
                          <SubMenuA href ="#" onClick={() => this.handleClick("Link1")}>Link 1 </SubMenuA>
                        <SubMenuA href ="#"  onClick={() => this.handleClick("Link2")} >Link 2 </SubMenuA>
                       <SubMenuA href ="#"  onClick={() => this.handleClick("Link3")} >Link 3  </SubMenuA>
                </DropDownContent>
            </DropDownLi>
            <DropDownLi><MenuA href ="#"><AiOutlineDown/>Ingresar </MenuA>
                  
                <DropDownContent>                        
                          {" "}
                          <SubMenuA href ="#" onClick={() => this.handleClick("Link1")}>Link 1 </SubMenuA>
                        <SubMenuA href ="#"  onClick={() => this.handleClick("Link2")} >Link 2 </SubMenuA>
                       <SubMenuA href ="#"  onClick={() => this.handleClick("Link3")} >Link 3  </SubMenuA>
                </DropDownContent>
            </DropDownLi>               
        </NavBarContenedor>
        
    
  );
};

export default Navbar;
