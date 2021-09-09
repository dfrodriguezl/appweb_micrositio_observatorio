import React from 'react';
<<<<<<< HEAD
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
=======
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const MyButton = styled(Button)({
    
    border: 0,
    borderRadius: 3,
    color: 'black',
    height: 48,
    padding: '0 30px',
    margin:'5px 35px',
   

  });

  return (
    <div>
      <MyButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Inicio
      </MyButton>
      <MyButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Servicios
      </MyButton>
      <MyButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Mapas
      </MyButton>
      <MyButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Catastro Multiproposito
      </MyButton>
      <MyButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Boletines
      </MyButton>
      <MyButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Ingresar
      </MyButton>
      { <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu> }
    </div>
  );
}
>>>>>>> desarrollo
