import React from 'react';
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
