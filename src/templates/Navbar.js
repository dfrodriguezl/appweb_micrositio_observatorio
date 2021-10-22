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
    top:160
  },
  colorMenuActive: {
    backgroundColor: "#BD0B4E",
    color: "#FFFFFF"
  },
  sectionTitleMenu: {
    fontSize: "20px"
  }
});

const NavBarContenedor = Styled.ul`    
    display:flex;
    justify-content: space-between;
    margin: 0px 0;
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

const MenuIL = Styled.li`
    float: left;  
    font-size:23px;
    color:#969393;
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
  const [submenuActiveServicios, setMenuServicios] = useState()
  const [submenuActiveGeovisores, setMenuGeovisores] = useState()
  const [submenuActiveCatastro, setMenuCatastro] = useState()
  const [submenuActiveInvestigaciones, setMenuInvestigaciones] = useState()
  const reptiles = ['alligator', 'snake', 'lizard'];
  const [position, setMoveMenu] = useState(0)
  const menuDane = [
    {
      title:
        ["Servicios web Geograficos", "Sociedad", "Otro titulo de Menu","Otro titulo de Menu 03"],
      subindices:
        [
          [
            {
              key: "01",
              name: "menu01"
            }
          ],
          [
            {
              key: "11",
              name: "menu11"
            }
          ],
          [
            {
              key: "20",
              name: "menu20"
            }
          ],
          [
            {
              key: "31",
              name: "menu31"
            }
          ]
        ]
    },
    {
      title:
        ["GIT investigacion y desarrollo", "Economia", "Otro titulo de Menu","Otro titulo de Menu 03"],
      subindices:
        [
          [
            {
              key: "01",
              name: "menu01"
            }
          ],
          [
            {
              key: "11",
              name: "menu11"
            }
          ],
          [
            {
              key: "20",
              name: "menu20"
            }
          ],
          [
            {
              key: "31",
              name: "menu31"
            }
          ]
        ]
    },
    {
      title:
        ["Servicios web Geograficos 02", "Sociedad 02", "Otro titulo de Menu 02","Otro titulo de Menu 03"],
      subindices:
        [
          [
            {
              key: "01",
              name: "menu01"
            }
          ],
          [
            {
              key: "11",
              name: "menu11"
            }
          ],
          [
            {
              key: "20",
              name: "menu20"
            }
          ],
          [
            {
              key: "31",
              name: "menu31"
            }
          ]
        ]
    }
  ]
  const handleClick = action => {
    if (!action) return;

    if (this.props.onClick) this.props.onClick(action);
  };

  function handleStatusFalseAll() {
    if (submenuActiveServicios) {
      setMenuServicios(false)
    }
    if (submenuActiveGeovisores) {
      setMenuGeovisores(false)
    }
    if (submenuActiveInvestigaciones) {
      setMenuInvestigaciones(false)
    }
    if (submenuActiveCatastro) {
      setMenuCatastro(false)
    }

  }
  function handleStatusChange() {
    if (!submenuActiveServicios) {
      setMenuServicios(true)
      setMoveMenu(0)
    }
    if (submenuActiveGeovisores) {
      setMenuGeovisores(false)
    }
    if (submenuActiveInvestigaciones) {
      setMenuInvestigaciones(false)
    }
    if (submenuActiveCatastro) {
      setMenuCatastro(false)
    }

  }
  function setActiveGeovisores() {
    if (submenuActiveServicios) {
      setMenuServicios(false)
    }
    if (!submenuActiveGeovisores) {
      setMenuGeovisores(true)
      setMoveMenu(1)
    }
    if (submenuActiveInvestigaciones) {
      setMenuInvestigaciones(false)
    }
    if (submenuActiveCatastro) {
      setMenuCatastro(false)
    }
  }

  function setActiveCatastro() {
    if (submenuActiveServicios) {
      setMenuServicios(false)
    }
    if (submenuActiveGeovisores) {
      setMenuGeovisores(false)
    }
    if (submenuActiveInvestigaciones) {
      setMenuInvestigaciones(false)
    }
    if (!submenuActiveCatastro) {
      setMenuCatastro(true)
      setMoveMenu(2)
    }
  }

  function setActiveInvestigaciones() {
    if (submenuActiveServicios) {
      setMenuServicios(false)
    }
    if (submenuActiveGeovisores) {
      setMenuGeovisores(false)
    }
    if (!submenuActiveInvestigaciones) {
      setMenuInvestigaciones(true)
      setMoveMenu(3)
    }
    if (submenuActiveCatastro) {
      setMenuCatastro(false)
    }
  }

  useEffect(() => {

  }, []);

  return (
    <Grid container item xs={12} sm={12} onMouseLeave={handleStatusFalseAll}>
      <Grid container item xs={1} sm={1}></Grid>
      <Grid container item xs={8} sm={8}>
        <NavBarContenedor>
          <DropDownLi onMouseEnter={handleStatusFalseAll}  >
            <UtilidadCentrarTexto>
              <AiFillHome />
              <MenuA href="#" >Inicio </MenuA>

            </UtilidadCentrarTexto>
          </DropDownLi>

          <DropDownLi onMouseEnter={handleStatusChange} >
            {
              submenuActiveServicios ?
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
          <DropDownLi onMouseEnter={setActiveGeovisores}>
            {
              submenuActiveGeovisores ?
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
          <DropDownLi onMouseEnter={setActiveCatastro}>

            {
              submenuActiveCatastro ?
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
          <DropDownLi onMouseEnter={setActiveInvestigaciones}>
            {
              submenuActiveInvestigaciones ?
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
        submenuActiveServicios || submenuActiveGeovisores
          || submenuActiveInvestigaciones || submenuActiveCatastro ?
          <Grid container item xs={12} sm={12}
            direction="row"
            container
            item
            className={classes.menuActive}
            justifyContent="center"
            alignItems="flex-start"
            spacing={4}
          >


            <Grid container item xs={4} sm={3} direction="column" >
              <ul>
                <li>{menuDane[0].title[position]}</li>
                {
                  menuDane[0].subindices[position].map(menu => {
                    return (
                      <li key={menu.key}>{menu.name}</li>
                    )
                  })
                }
              </ul>
            </Grid>
            <Grid container item xs={4} sm={3} direction="column">
              <li>{menuDane[1].title[position]}</li>
              {
                menuDane[1].subindices[position].map(menu => {
                  return (
                    <li key={menu.key}>{menu.name}</li>
                  )
                })
              }
            </Grid>
            <Grid container item xs={4} sm={3} direction="column">
              <li>{menuDane[2].title[position]}</li>
              {
                menuDane[2].subindices[position].map(menu => {
                  return (
                    <li key={menu.key}>{menu.name}</li>
                  )
                })
              }
            </Grid>
          </Grid>
          : null
      }

    </Grid>



  );
};

export default Navbar;
