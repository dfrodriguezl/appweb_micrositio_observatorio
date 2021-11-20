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
import menuDane from "Observatorio/common/newmenu.js"
import SideBarComponent from "./newsidebar.js"
import * as Values from 'Observatorio/Variables/values';
import { Button  } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonRedWine from "Observatorio/common/buttonredwine";
import CallMadeSharpIcon from '@mui/icons-material/CallMadeSharp';
import AccountBalancnceIcon from "@mui/icons-material/AccountBalance"
import ArchiveIcon from "@mui/icons-material/Archive"

import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import Economia from '@mui/icons-material/EqualizerTwoTone';
import Sociedad from '@mui/icons-material/SupervisedUserCircleSharp';
import Territorio from '@mui/icons-material/Terrain';
import ServicioGeografico from '@mui/icons-material/Public';
import Investigacion from '@mui/icons-material/EmojiObjects';
import DownloadIcon from '@mui/icons-material/Download';
import CodeIcon from '@mui/icons-material/Code';
import AndroidIcon from '@mui/icons-material/PhoneAndroid';
import MapIcon from '@mui/icons-material/Map';
import RoomIcon from '@mui/icons-material/Room';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
const useStyle = makeStyles({
  root: {
    textDecoration: 'none',
    margin: '5px',
    padding: '5px',
    color: 'inherit'
  },
  menuActive: {
    position: "relative",
    backgroundColor: "#F2F2F2",
    zIndex: 1,
    boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.3)"
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
    "&:hover": {
      color: "#821A3F",
      cursor: "pointer"
    },
    fontSize: 16,
    padding: "2px"

  },
  liHover: {
    "&:hover": {
      color: "white",
      cursor: "pointer",
      backgroundColor: "#821A3F"
    }
  },
  liItem: {
    marginLeft: "2px",
    fontSize: 13,
    justifyContent: "center",
    "&:hover": {
      color: "#821A3F !important",
      cursor: "pointer"
    }
  },
  ulItem: {
    marginTop: 30,
    listStyle: "none"
  },
  iconLi: {
    color: "blue"
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
  aMenu: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      color: "#821A3F",
      cursor: "pointer"
    },
    marginLeft: 4
  },
  topIconsub: {
    marginTop: "5px"
  },
  colorTerritorio: {
    color: "green"
  },
  colorSociedad: {
    color: "blue"
  },
  rotate: {
    transform: "rotate(180deg)"
  },
  boton: {
    borderRadius: "2vh",
    backgroundColor: Values.Redwinecolor,
    color: Values.TextButton,
    fontFamily: Values.SourceWorksans,
    textTransform: "capitalize",
    transition:"all 0.8s ease-out",
    cursor: "pointer",
    marginTop:"4px",
    width: "max-content",
    fontSize: "calc(0.7em + 0.3vh)",
    borderRadius: "2vh",
    fontWeight: "bold",
    "&:hover":{
        backgroundColor: Values.HoverButton,
        border:"none",
    }
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
    height:40px;
    width: 100%;
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






const UtilidadCentrarTexto = Styled.div`
    position:relative;
    display: flex;
    justify-content: center;
    align-items:center;
`;

const ContainerMenu = Styled.div``



const DropDownContent = Styled.div`
display: none;
position: absolute;
background-color: #F2F2F2;
width: 300px;
font-size:calc(0.5em + 1vh);
box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
z-index: 1;
top:40px;
left:0px;
`;
const SubMenuA = Styled.a`
   color: #969393;
  padding: 10px 10px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const SubMenuASub = Styled.a`
   color: #969393;
  padding: 10px 10px;
  text-decoration: none;
  display: block;
  text-align: left;
  margin-left:30px;
  &:hover {
    background-color: #f1f1f1;
  }
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
const Navbar = ({sideBarOpen}) => {
  const classes = useStyle();
  const [menuActive, setMenuActive] = useState(
    {
      ActiveServicios: {
        id: 1,
        value: false
      },
      ActiveGeovisores: {
        id: 2,
        value: false
      },
      ActiveCatastro: {
        id: 3,
        value: false
      },
      ActiveInvestigacion: {
        id: 0,
        value: false
      }
    }
  )
  const [position, setMoveMenu] = useState(null)
 
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


  useEffect(() => {

  }, []);

  let result = []
  if (position != null) {
    let subResult = []
    menuDane[position].map((data) => {
      if (data.isMain) {
        subResult.push(<SubMenuA href={data.link}>{data.name}</SubMenuA>)
      } else {
        subResult.push(<SubMenuASub href={data.link} >{data.name}</SubMenuASub>)
      }

    })
    result.push(<DropDownContent>
      {subResult}
    </DropDownContent>)
    /* menuDane.map((data) => {
       let subResult = []
       data.subindices[position].map((menu) => {
 
         if (menu.isTitle) {
           var icon;
           switch (menu.icon) {
             case "Economia":
               icon = <Economia></Economia>
               break
             case "Sociedad":
               icon = <Sociedad className={classes.colorSociedad}></Sociedad>
               break
             case "Territorio":
               icon = <Territorio className={classes.colorTerritorio}></Territorio>
               break;
             case "Datos":
               icon = <DownloadIcon></DownloadIcon>
               break;
             case "Atlas":
               icon = <MapIcon></MapIcon>
               break;
             case "Android":
               icon = <AndroidIcon></AndroidIcon>
               break;
             case "Map":
               icon = <RoomIcon></RoomIcon>
               break;
             case "Educacion":
               icon = <CastForEducationIcon></CastForEducationIcon>
               break;
             default:
               icon = <ArchiveIcon></ArchiveIcon>
               break;
           }
           subResult.push(<LiItemTitle key={menu.key} className={classes.liTitle}>{icon}{menu.name}</LiItemTitle>)
         } else {
 
           subResult.push(<LiItem key={menu.key} className={classes.liItem}><Grid xs={12} md={12} lg={12} sm={12} container direction="row" alignItems="center" > <ArrowRightIcon item xs={1} md={1} sm={1} lg={1} className={classes.iconLi}></ArrowRightIcon><a item xs={11} md={11} lg={11} sm={11} href={menu.link} className={classes.aMenu}>{menu.name}</a></Grid></LiItem>)
 
         }
       })
       var icon;
       switch (data.title[position]) {
         case "GIT I + D investigacion y desarrollo":
           icon = <Investigacion></Investigacion>
           break
         case "Servicios web Geograficos":
           icon = <ServicioGeografico></ServicioGeografico>
           break;
         case "Catalógo de matadatos geográficos":
           icon = <CodeIcon></CodeIcon>
           break;
         case "Economia":
           icon = <Economia></Economia>
           break
         case "Sociedad":
           icon = <Sociedad className={classes.colorSociedad}></Sociedad>
           break
         case "Territorio":
           icon = <Territorio className={classes.colorTerritorio}></Territorio>
           break;
         default:
           icon = <AccountBalancnceIcon></AccountBalancnceIcon>
           break;
       }
       result.push(<Grid container item xs direction="column" justifyContent="center" className={classes.cardglobalWhithout} >
         <ul className={classes.ulItem}>
           <LiItemTitle className={classes.liTitle}>{icon}<b>{data.title[position]}</b></LiItemTitle>
           {subResult}
         </ul>
       </Grid>)
     })*/
  }


  return (
    <Grid container onMouseLeave={handleStatusFalseAll}>
      <Grid container item xs={12} sm={12} className={classes.cardglobal}>
        <NavBarContenedor>
          <DropDownLi onMouseEnter={handleStatusFalseAll} className={classes.liHover}  >
            <UtilidadCentrarTexto>
              <AiFillHome />
              <MenuA href="/Observatorio" >Inicio </MenuA>

            </UtilidadCentrarTexto>
          </DropDownLi>

         
            {
              menuActive.ActiveInvestigacion.value ?
              <DropDownLi onMouseEnter={() => {
                handleChangeMenuActive({
                  name: "ActiveInvestigacion"
                })
              }} className={classes.colorMenuActive}>
                <UtilidadCentrarTexto >
                  <AiOutlineDown className={classes.rotate} />
                  <MenuA href="/Observatorio">Observatorio </MenuA>
                  {result}
                </UtilidadCentrarTexto>
               
                </DropDownLi>
                :
                <DropDownLi onMouseEnter={() => {
                  handleChangeMenuActive({
                    name: "ActiveInvestigacion"
                  })
                }} >
                <UtilidadCentrarTexto>
                  <AiOutlineDown />
                  <MenuA href="/Observatorio/Metodosavaluos">Observatorio </MenuA>
                </UtilidadCentrarTexto>
                </DropDownLi>
            }
       
         

            {
              menuActive.ActiveCatastro.value ?
              <DropDownLi onMouseEnter={() => {
                handleChangeMenuActive({
                  name: "ActiveCatastro"
                })
              }} className={classes.colorMenuActive}>
                <UtilidadCentrarTexto >
                  <AiOutlineDown className={classes.rotate} />
                  <MenuA href="/Observatorio/Catastromultiproposito">Catastro Multipropósito </MenuA>
                  {result}
                </UtilidadCentrarTexto>
                </DropDownLi>
                : 
                <DropDownLi onMouseEnter={() => {
                  handleChangeMenuActive({
                    name: "ActiveCatastro"
                  })
                }}>
                <UtilidadCentrarTexto>
                  <AiOutlineDown />
                  <MenuA href="/Observatorio/Catastromultiproposito">Catastro Multipropósito </MenuA>
                </UtilidadCentrarTexto>
                 </DropDownLi>
            }
         
          
           
            {menuActive.ActiveGeovisores.value ?
               <DropDownLi onMouseEnter={() => {
                handleChangeMenuActive({
                  name: "ActiveGeovisores"
                })
              }}  className={classes.colorMenuActive}>
                <UtilidadCentrarTexto >
                  <AiOutlineDown className={classes.rotate} />
                  <NavLink to="/Observatorio/Mapas" className={classes.root} >Geovisores</NavLink>
                  {result}
                </UtilidadCentrarTexto>
                </DropDownLi>
              :
              <DropDownLi onMouseEnter={() => {
                handleChangeMenuActive({
                  name: "ActiveGeovisores"
                })
              }} >
                <UtilidadCentrarTexto>
                  <AiOutlineDown />
                  <NavLink to="/Observatorio/Mapas" className={classes.root} >Geovisores</NavLink>
                </UtilidadCentrarTexto>
                   </DropDownLi>
              
          }
       

          {
            menuActive.ActiveServicios.value ?
              <DropDownLi onMouseEnter={() => {
                handleChangeMenuActive({
                  name: "ActiveServicios"
                })
              }} className={classes.colorMenuActive}>
                <UtilidadCentrarTexto>
                  <AiOutlineDown className={classes.rotate} />
                  <NavLink to="/Observatorio/Servicios" className={classes.root} >Servicios</NavLink>
                  {result}
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

          <li onMouseEnter={handleStatusFalseAll} >
            

            <Button className={classes.boton} disableElevation href="/Observatorio/login">Ingresar</Button>
          </li>
        </NavBarContenedor>
      </Grid>
      {
        sideBarOpen ?
          <SideBarComponent></SideBarComponent>
          : null
      }

    </Grid>



  );
};

export default Navbar;
