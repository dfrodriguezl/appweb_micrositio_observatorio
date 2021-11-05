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
import menuDane from "Observatorio/common/menu.js"
import SideBarComponent from "./Sidebar.js"
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonRedWine from "Observatorio/common/buttonredwine";
import CallMadeSharpIcon from '@mui/icons-material/CallMadeSharp';
import AccountBalancnceIcon from "@mui/icons-material/AccountBalance"
import ArchiveIcon from "@mui/icons-material/Archive"
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
    top: 150
  },
  colorMenuActive: {
    backgroundColor: "#821A3F",
    color: "#FFFFFF !important"
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
    },
    fontSize: 20,
    padding: 2

  },
  liHover:{
    "&:hover": {
      color: "white",
      cursor: "pointer",
      backgroundColor:"#821A3F"
    }
  },
  liItem: {
    marginTop: 5,
    marginLeft: 30,
    fontSize: 15,
    "&:hover": {
      color: "#821A3F",
      cursor: "pointer"
    },
    padding: 2
  },
  ulItem: {
    marginTop: 40,
    listStyle: "none"
  },
  iconLi: {
    color: "blue",
    marginRight: 10
  },
  cardglobal: {
    //margin: "0% 0% 0% 0%",
    padding: "0% 5% 0% 5%",
    backgroundColor: "white",
  },
  cardglobalWhithout: {
    //margin: "0% 0% 0% 0%",
    padding: "0% 5% 0% 5%",
  },
  aMenu:{
    color:"black"
  }
});


const LiItem = Styled.li`
@media (max-width: 1300px) and (min-width: 769px) {
  font-size:15px !important;
}
`
const LiItemTitle = Styled.li`
@media (max-width: 1300px) and (min-width: 769px) {
  font-size:15px !important;
}
`

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
    justify-content: center;
    margin: 0px 0;
    width: 100%;
    padding: 5px;
    list-style: none;
    @media (max-width: 768px) {
      display:none;
    },
  
    
`;

const MenuA = Styled.a`
    text-decoration: none;
    margin: 5px;
    padding: 5px; 
    color: inherit;            
`;

const MenuIL = Styled.li`
    float: left;  
    color:#969393;
    width:100%;
    @media (max-width: 1300px) and (min-width: 769px) {
       font-size:15px !important;
    }
    `;


const DropDownLi = Styled(MenuIL)`
    /* display: inline-block;    */
    position:relative;
    display: flex;
    font-size:20px;
    text-align:center;
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

const ContainerMenu = Styled.div``

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
          subResult.push(<LiItemTitle key={menu.key} className={classes.liTitle}><ArchiveIcon></ArchiveIcon>{menu.name}</LiItemTitle>)
        } else {

          subResult.push(<LiItem key={menu.key} className={classes.liItem}><CallMadeSharpIcon className={classes.iconLi}></CallMadeSharpIcon><a href={menu.link} className={classes.aMenu}>{menu.name}</a></LiItem>)

        }
      })

      result.push(<Grid container item xs direction="column" justifyContent="center" spacing={1} className={classes.cardglobalWhithout} >
        <ul className={classes.ulItem}>
          <LiItemTitle className={classes.liTitle}><AccountBalancnceIcon></AccountBalancnceIcon><b>{data.title[position]}</b></LiItemTitle>
          {subResult}
        </ul>
      </Grid>)
    })
  }


  return (
    <Grid container onMouseLeave={handleStatusFalseAll}>
      <Grid container item xs={12} sm={12} className={classes.cardglobal}>
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
          <DropDownLi onMouseEnter={handleStatusFalseAll} className={classes.liHover}  >
            <UtilidadCentrarTexto>
              <AiFillHome />
              <MenuA href="/Observatorio" >Inicio </MenuA>

            </UtilidadCentrarTexto>
          </DropDownLi>
          {
            menuActive.ActiveServicios.value ?
              <DropDownLi onMouseEnter={() => {
                handleChangeMenuActive({
                  name: "ActiveServicios"
                })
              }} className={classes.colorMenuActive}>
                <UtilidadCentrarTexto>
                  <AiOutlineDown />
                  <NavLink to="/Observatorio/Servicios" className={classes.root} >Servicios</NavLink>
                </UtilidadCentrarTexto>

              </DropDownLi> :
              <DropDownLi onMouseEnter={() => {
                handleChangeMenuActive({
                  name: "ActiveServicios"
                })
              }}>
                <UtilidadCentrarTexto>
                  <AiOutlineDown />
                  <NavLink to="/Observatorio/Servicios" className={classes.root} >Servicios</NavLink>
                </UtilidadCentrarTexto>

              </DropDownLi>

          }
           {
            menuActive.ActiveGeovisores.value ?
            <DropDownLi onMouseEnter={() => {
              handleChangeMenuActive({
                name: "ActiveGeovisores"
              })
            }} className={classes.colorMenuActive}> 
            <UtilidadCentrarTexto>
                <AiOutlineDown />
                <NavLink to="/Observatorio/Mapas" className={classes.root} >Geovisores</NavLink>
              </UtilidadCentrarTexto>
  
            </DropDownLi>: <DropDownLi onMouseEnter={() => {
              handleChangeMenuActive({
                name: "ActiveGeovisores"
              })
            }}> 
            <UtilidadCentrarTexto>
                <AiOutlineDown />
                <NavLink to="/Observatorio/Mapas" className={classes.root} >Geovisores</NavLink>
              </UtilidadCentrarTexto>
  
            </DropDownLi>
            }
        
          <DropDownLi onMouseEnter={() => {
            handleChangeMenuActive({
              name: "ActiveCatastro"
            })
          }}>

            {
              menuActive.ActiveCatastro.value ?
                <UtilidadCentrarTexto className={classes.colorMenuActive}>
                  <AiOutlineDown />
                  <MenuA href="/Observatorio/Catastromultiproposito">Catastro Multiproposito </MenuA>
                </UtilidadCentrarTexto>
                : <UtilidadCentrarTexto>
                  <AiOutlineDown />
                  <MenuA href="/Observatorio/Catastromultiproposito">Catastro Multiproposito </MenuA>
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
                  <MenuA href="/Observatorio/Metodosavaluos">Investigaciones </MenuA>
                </UtilidadCentrarTexto>
                : <UtilidadCentrarTexto>
                  <AiOutlineDown />
                  <MenuA href="/Observatorio/Metodosavaluos">Investigaciones </MenuA>
                </UtilidadCentrarTexto>
            }
          </DropDownLi>
             <li onMouseEnter={handleStatusFalseAll} >
               <ButtonRedWine Title="Ingresar" href="/ObservatorioServicios/estadisticas" />
             </li>
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
