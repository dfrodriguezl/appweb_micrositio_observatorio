import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core/';
import { AiFillHome, AiOutlineDown } from "react-icons/ai";
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";
import {
  makeStyles
} from '@material-ui/core/styles';
import Styled from "styled-components";
import menuDane from "common/menu.js"
import SideBarComponent from "./Sidebar.js"
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const useStyle = makeStyles({
  root: {
    textDecoration: 'none',
    margin: '5px',
    padding: '5px',
    color: 'inherit'
  },
  menuActive: {
    height: 500,
    width: "100%",
    position: "absolute",
    backgroundColor: "#F2F2F2",
    zIndex: 1,
    top: 160
  },
  colorMenuActive: {
    backgroundColor: "#BD0B4E",
    color: "#FFFFFF"
  },
  sectionTitleMenu: {
    fontSize: "20px"
  },
  liTitle: {
    listStyle: "none",
    marginTop: 5,
    "&:hover": {
      color: "#821A3F",
      cursor: "pointer"
    }

  },
  liItem: {
    marginTop: 5,
    marginLeft: 30,
    "&:hover": {
      color: "#821A3F",
      cursor: "pointer"
    },
  },
  ulItem: {

  }
});

const SideBarContener = Styled.ul`    
display:flex;
justify-content: space-between;
margin: 0px 0;
width: 100%;
padding: 5px;
list-style: none;
@media (max-width: 768px) {
  display:block;
}
@media (max-width: 4000px) and (min-width: 769px) {
  display:none;
}
`;

const NavBarContenedor = Styled.ul`    
    display:flex;
    justify-content: space-between;
    margin: 0px 0;
    width: 100%;
    padding: 5px;
    list-style: none;
    @media (max-width: 768px) {
      display:none;
    }
    @media (max-width: 1300px) and (min-width: 769px) {
       font-size:10px !important;
    }
    
`;

const MenuA = Styled.a`
    text-decoration: none;
    margin: 5px;
    padding: 5px; 
    color: inherit;            
`;

const MenuIL = Styled.li`
    float: left;  
    font-size:23px;
    color:#969393;
    @media (max-width: 1300px) and (min-width: 769px) {
       font-size:20px !important;
    }
    `;


const DropDownLi = Styled(MenuIL)`
    /* display: inline-block;    */
    position:relative;
    display: flex;
    /* justify-content: center;
    align-items:center; 
    /* &:first-child {
        color:red;
        
        
    } */
  `;


const UtilidadCentrarTexto = Styled.div`
    position:relative;
    display: flex;
    justify-content: center;
    align-items:center;
`;


const Navbar = () => {
  const classes = useStyle();
  const [menuActive, setMenuActive] = useState(
    {
      ActiveServicios: {
        id: 0,
        value: false
      },
      ActiveGeovisores: {
        id: 1,
        value: false
      },
      ActiveCatastro: {
        id: 2,
        value: false
      },
      ActiveInvestigacion: {
        id: 3,
        value: false
      }
    }
  )
  const [position, setMoveMenu] = useState(null)
  const [sideBarOpen, setSideBarOpen] = useState(false)
  function handleChangeMenuActive(event) {

    let name = event.name
    for (const key in menuActive) {
      menuActive[key].value = false
    }
    menuActive[name].value = true
    setMenuActive({
      ...menuActive
    })
    setMoveMenu(menuActive[name].id)
  }

  function handleStatusFalseAll() {
    for (const key in menuActive) {
      menuActive[key].value = false
    }

    setMenuActive({
      ...menuActive
    })
    setMoveMenu(null)

  }
  function setOpenSideBar() {
    setSideBarOpen(!sideBarOpen)
  }

  useEffect(() => {

  }, []);

  let result = []
  if (position != null) {
    menuDane.map((data) => {
      let subResult = []
      data.subindices[position].map((menu) => {
        if (menu.isTitle) {
          subResult.push(<li key={menu.key} className={classes.liTitle}>{menu.name}</li>)
        } else {

          subResult.push(<li key={menu.key} className={classes.liItem}>{menu.name}</li>)

        }
      })
      result.push(<Grid container item xs={4} sm={3} direction="column" >
        <ul className={classes.ulItem}>
          <li className={classes.liTitle}><b>{menuDane[0].title[position]}</b></li>
          {subResult}
        </ul>
      </Grid>)
    })
  }


  return (
    <Grid container item xs={12} sm={12} onMouseLeave={handleStatusFalseAll}>
      <Grid container item xs={1} sm={1}></Grid>
      <Grid container item xs={8} sm={8}>

        <SideBarContener>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={setOpenSideBar}
            sx={{ mr: 5 }}
          >
            <MenuIcon />
          </IconButton>

        </SideBarContener>
        <NavBarContenedor>
          <DropDownLi onMouseEnter={handleStatusFalseAll}  >
            <UtilidadCentrarTexto>
              <AiFillHome />
              <MenuA href="#" >Inicio </MenuA>

            </UtilidadCentrarTexto>
          </DropDownLi>

          <DropDownLi onMouseEnter={() => {
            handleChangeMenuActive({
              name: "ActiveServicios"
            })
          }} >
            {
              menuActive.ActiveServicios.value ?
                <UtilidadCentrarTexto className={classes.colorMenuActive} >
                  <AiOutlineDown />
                  <NavLink to="/Servicios" className={classes.root} >Servicios</NavLink>
                </UtilidadCentrarTexto>
                : <UtilidadCentrarTexto>
                  <AiOutlineDown />
                  <NavLink to="/Servicios" className={classes.root} >Servicios</NavLink>
                </UtilidadCentrarTexto>
            }
          </DropDownLi>
          <DropDownLi onMouseEnter={() => {
            handleChangeMenuActive({
              name: "ActiveGeovisores"
            })
          }}>
            {
              menuActive.ActiveGeovisores.value ?
                <UtilidadCentrarTexto className={classes.colorMenuActive}>
                  <AiOutlineDown />
                  <NavLink to="/Mapas" className={classes.root} >Geovisores</NavLink>
                </UtilidadCentrarTexto>
                : <UtilidadCentrarTexto>
                  <AiOutlineDown />
                  <NavLink to="/Mapas" className={classes.root} >Geovisores</NavLink>
                </UtilidadCentrarTexto>
            }
          </DropDownLi>
          <DropDownLi onMouseEnter={() => {
            handleChangeMenuActive({
              name: "ActiveCatastro"
            })
          }}>

            {
              menuActive.ActiveCatastro.value ?
                <UtilidadCentrarTexto className={classes.colorMenuActive}>
                  <AiOutlineDown />
                  <MenuA href="#">Catastro Multiproposito </MenuA>
                </UtilidadCentrarTexto>
                : <UtilidadCentrarTexto>
                  <AiOutlineDown />
                  <MenuA href="#">Catastro Multiproposito </MenuA>
                </UtilidadCentrarTexto>
            }
          </DropDownLi>
          <DropDownLi onMouseEnter={() => {
            handleChangeMenuActive({
              name: "ActiveInvestigacion"
            })
          }}>
            {
              menuActive.ActiveInvestigacion.value ?
                <UtilidadCentrarTexto className={classes.colorMenuActive}>
                  <AiOutlineDown />
                  <MenuA href="#">Investigaciones </MenuA>
                </UtilidadCentrarTexto>
                : <UtilidadCentrarTexto>
                  <AiOutlineDown />
                  <MenuA href="#">Investigaciones </MenuA>
                </UtilidadCentrarTexto>
            }
          </DropDownLi>
        </NavBarContenedor>
      </Grid>
      {
        sideBarOpen ?
          <SideBarComponent></SideBarComponent>
          : null
      }
      {
        position == 0 || position ?
          <Grid container item xs={12} sm={12}
            md={12}
            lg={12}
            direction="row"
            container
            item
            className={classes.menuActive}
            justifyContent="center"
            alignItems="flex-start"
           
          >

            {result}
          </Grid>
          : null
      }

    </Grid>



  );
};

export default Navbar;
