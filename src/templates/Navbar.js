import React, { useState, useEffect } from "react";
import { Grid, Modal, Box, Typography } from "@material-ui/core/";
import { AiFillHome, AiOutlineDown } from "react-icons/ai";
import { BrowserRouter as Router, NavLink} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Styled from "styled-components";
import menuDane from "Observatorio/common/newmenu.js";
import SideBarComponent from "./newsidebar.js";
import * as Values from "Observatorio/Variables/values";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

//

const useStyle = makeStyles({

  root: {
    textDecoration: "none",
    margin: "5px",
    padding: "5px",
    color: "inherit",
    cursor: "pointer",
  },
  menuActive: {
    position: "relative",
    backgroundColor: "#F2F2F2",
    zIndex: 1,
    boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.3)",
  },
  colorMenuActive: {
    backgroundColor: "#821A3F",
    color: "#FFFFFF !important",
  },
  sectionTitleMenu: {
    fontSize: "20px",
  },
  liTitle: {
    listStyle: "none",
    "&:hover": {
      color: "#821A3F",
      cursor: "pointer",
    },
    fontSize: 16,
    padding: "2px",
  },
  liHover: {
    "&:hover": {
      color: "white",
      cursor: "default",
      backgroundColor: "#821A3F",
    },
  },
  liItem: {
    marginLeft: "2px",
    fontSize: 13,
    justifyContent: "center",
    "&:hover": {
      color: "#821A3F !important",
      cursor: "pointer",
    },
  },
  ulItem: {
    marginTop: 30,
    listStyle: "none",
  },
  iconLi: {
    color: "blue",
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
      cursor: "pointer",
    },
    marginLeft: 4,
  },
  topIconsub: {
    marginTop: "5px",
  },
  colorTerritorio: {
    color: "green",
  },
  colorSociedad: {
    color: "blue",
  },
  rotate: {
    transform: "rotate(180deg)",
  },
  boton: {
    borderRadius: "2vh",
    backgroundColor: Values.Redwinecolor,
    color: Values.TextButton,
    fontFamily: Values.SourceWorksans,
    textTransform: "capitalize",
    transition: "all 0.8s ease-out",
    cursor: "pointer",
    marginTop: "4px",
    width: "max-content",
    fontSize: "calc(0.7em + 0.3vh)",
    borderRadius: "2vh",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: Values.HoverButton,
      border: "none",
    },
  },
  boton1: {
    borderRadius: "2vh",
    backgroundColor: Values.Redwinecolor,
    color: Values.TextButton,
    fontFamily: Values.SourceWorksans,
    textTransform: "capitalize",
    transition: "all 0.8s ease-out",
    cursor: "pointer",
    marginTop: "4px",
    width: "max-content",
    fontSize: "calc(0.7em + 0.3vh)",
    borderRadius: "2vh",
    fontWeight: "bold",
    float: "right",
    "&:hover": {
      backgroundColor: Values.HoverButton,
      border: "none",
    },
  },
  Titleh3: {
    color: Values.Redwinecolor,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeTitle,
    padding: Values.PaddingTitleText,
},

Textp: {
    color: Values.TextParagraph,
    fontFamily: Values.SourceRoboto,
    fontSize: Values.SizeText,
    textAlign: "center",
    margin: "1em 0 1em 0",
    //marginTop:"30px !important"
},
Titlep: {
  color: Values.TextParagraph,
  fontFamily: Values.SourceRoboto,
  fontSize: Values.SizeText,
  textAlign: "center",
  margin: "1em 0 0 0",
  marginTop:"13px !important"
}
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 2,
  borderRadius:"10px",
  padding:"20px",
  p: 4,
};

const LiItem = Styled.li`
@media (max-width: 1300px) and (min-width: 769px) {
  font-size:15px !important;
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
    cursor: default;          
`;

const MenuIL = Styled.li`
    float: left;  
    justify-content: center;
    color:#4c4c4c;
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
   color: #4c4c4c;
  padding: 10px 10px;
  text-decoration: none;
  display: block;
  text-align: left;
  cursor:pointer;
  &:hover {
    background-color: #727070;
    color: #F3F3F3;
  }
`;

const SubMenuASub = Styled.a`
   color: #4c4c4c;
  padding: 10px 10px;
  text-decoration: none;
  display: block;
  text-align: left;
  margin-left:30px;
  cursor:pointer;
  &:hover {
    background-color: #727070;
    color: #F3F3F3;
  }
`;

const DropDownLi = Styled(MenuIL)`
    /* display: inline-block;    */
    position:relative;
    
    /* justify-content: center;
    align-items:center; */
    display: block;
    &:hover ${DropDownContent} {
      display: block;
    },
    /* &:first-child {
        color:red;
        
        
    } */
  `;

const Navbar = ({ sideBarOpen, isLogin }) => {
  const classes = useStyle();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const rutabtnlogin = (e) =>{
  history.push('/observatorio/login')
  } 

  const [menuActive, setMenuActive] = useState({
    ActiveServicios: {
      id: 1,
      value: false,
    },
    ActiveGeovisores: {
      id: 2,
      value: false,
    },
    ActiveCatastro: {
      id: 3,
      value: false,
    },
    ActiveInvestigacion: {
      id: 0,
      value: false,
    },
  });
  const [position, setMoveMenu] = useState(null);

  function handleChangeMenuActive(event) {
    let name = event.name;
    for (const key in menuActive) {
      menuActive[key].value = false;
    }
    menuActive[name].value = true;
    setMenuActive({
      ...menuActive,
    });
    setMoveMenu(menuActive[name].id);
  }

  function handleStatusFalseAll() {
    for (const key in menuActive) {
      menuActive[key].value = false;
    }

    setMenuActive({
      ...menuActive,
    });
    setMoveMenu(null);
  }

  let token = localStorage.getItem("token");
  let isOk = false;
  if (token) {
    isOk = true;
  }
  console.log("is0k", isOk)

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    setSession(false);
    isOk = false;
    props.setAuth(false);
    
  };

  function rutas(idd) {
    console.log("rutas",idd.target.id)
    if(idd.target.id == "https://geoportal.dane.gov.co/geovisores/territorio/observatorio_inmobiliario/"){
      location.href ='https://geoportal.dane.gov.co/geovisores/territorio/observatorio_inmobiliario/'
    }else{
      history.push(idd.target.id)
    }
  }

  useEffect(() => {
    
    
  }, [isSession, isLogin]);

  const [isSession, setSession] = useState(isOk);

  let result = [];

  if (position != null) {
    let subResult = [];
    menuDane[position].map((data) => {
      if (data.isProtected) {
        if (isOk) {
          if (data.isMain) {
            subResult.push(<SubMenuA id={data.link} onClick={rutas}>{data.name}</SubMenuA>);
          } else {
            subResult.push(
              <SubMenuASub id={data.link} onClick={rutas}>{data.name}</SubMenuASub>
            );
          }
        }
      } else {
        if (data.isMain) {
          subResult.push(<SubMenuA id={data.link} onClick={rutas}>{data.name}</SubMenuA>);
        } else {
          subResult.push(
            <SubMenuASub id={data.link} onClick={rutas}>{data.name}</SubMenuASub>
          );
        }
      }
    });
    result.push(
      <DropDownContent>
        {subResult}
      </DropDownContent>
    );
  }
  
  return (
    <Grid container onMouseLeave={handleStatusFalseAll}>
      <Grid container item xs={12} sm={12} className={classes.cardglobal}>
        <NavBarContenedor>
          <DropDownLi
            onMouseEnter={handleStatusFalseAll}
            className={classes.liHover}            
          >
            <UtilidadCentrarTexto>
              <AiFillHome />
              <NavLink className={classes.root} to="/observatorio/">Inicio </NavLink>
            </UtilidadCentrarTexto>
          </DropDownLi>

          {menuActive.ActiveInvestigacion.value ? (
            <DropDownLi
              onMouseEnter={() => {
                handleChangeMenuActive({
                  name: "ActiveInvestigacion",
                });
              }}
              className={classes.colorMenuActive}
            >
              <UtilidadCentrarTexto>
                <AiOutlineDown className={classes.rotate} />
                <MenuA>Observatorio</MenuA>
                {result}
              </UtilidadCentrarTexto>
            </DropDownLi>
          ) : (
            <DropDownLi
              onMouseEnter={() => {
                handleChangeMenuActive({
                  name: "ActiveInvestigacion",
                });
              }}
            >
              <UtilidadCentrarTexto>
                <AiOutlineDown />
                <MenuA>Observatorio</MenuA>
              </UtilidadCentrarTexto>
            </DropDownLi>
          )}

          {menuActive.ActiveCatastro.value ? (
            <DropDownLi
              onMouseEnter={() => {
                handleChangeMenuActive({
                  name: "ActiveCatastro",
                });
              }}
              className={classes.colorMenuActive}
            >
              <UtilidadCentrarTexto>
                <AiOutlineDown className={classes.rotate} />
                <MenuA>
                  Catastro Multipropósito{" "}
                </MenuA>
                {result}
              </UtilidadCentrarTexto>
            </DropDownLi>
          ) : (
            <DropDownLi
              onMouseEnter={() => {
                handleChangeMenuActive({
                  name: "ActiveCatastro",
                });
              }}
            >
              <UtilidadCentrarTexto>
                <AiOutlineDown />
                <MenuA href="/observatorio/Catastromultiproposito">
                  Catastro Multipropósito{" "}
                </MenuA>
              </UtilidadCentrarTexto>
            </DropDownLi>
          )}

          {menuActive.ActiveGeovisores.value ? (
            <DropDownLi
              onMouseEnter={() => {
                handleChangeMenuActive({
                  name: "ActiveGeovisores",
                });
              }}
              className={classes.colorMenuActive}
            >
              <UtilidadCentrarTexto>
                <AiOutlineDown className={classes.rotate} />
                <MenuA>
                  Geovisores{" "}
                </MenuA>
                {result}
              </UtilidadCentrarTexto>
            </DropDownLi>
          ) : (
            <DropDownLi
              onMouseEnter={() => {
                handleChangeMenuActive({
                  name: "ActiveGeovisores",
                });
              }}
            >
              <UtilidadCentrarTexto>
                <AiOutlineDown />
                <NavLink to="/observatorio/Mapas" className={classes.root}>
                  Geovisores
                </NavLink>
              </UtilidadCentrarTexto>
            </DropDownLi>
          )}

          {menuActive.ActiveServicios.value ? (
            <DropDownLi
              onMouseEnter={() => {
                handleChangeMenuActive({
                  name: "ActiveServicios",
                });
              }}
              className={classes.colorMenuActive}
            >
              <UtilidadCentrarTexto>
                <AiOutlineDown className={classes.rotate} />
                <MenuA>
                  Servicios{" "}
                </MenuA>
                {result}
              </UtilidadCentrarTexto>
            </DropDownLi>
          ) : (
            <DropDownLi
              onMouseEnter={() => {
                handleChangeMenuActive({
                  name: "ActiveServicios",
                });
              }}
            >
              <UtilidadCentrarTexto>
                <AiOutlineDown />
                <NavLink to="/observatorio/Servicios" className={classes.root}>
                  Servicios
                </NavLink>
              </UtilidadCentrarTexto>
            </DropDownLi>
          )}

          <li onMouseEnter={handleStatusFalseAll}>
            {isOk ? 
            <Button
            className={classes.boton}
            onClick={handleOpen}
          >
            Cerrar Sesión
          </Button>:
              <Button
                className={classes.boton}
                disableElevation
                onClick={rutabtnlogin}
              >
                Ingresar
              </Button>
            }
          </li>
        </NavBarContenedor>
      </Grid>
      {sideBarOpen ? <SideBarComponent></SideBarComponent> : null}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography className={classes.Titlep} id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography> */}
          <Typography className={classes.Textp} id="modal-modal-description" sx={{ mt: 2 }}>
            ¿Esta seguro que desea cerrar sesión?
          </Typography>
          <Button
                className={classes.boton}
                onClick={cerrarSesion}
                href="/observatorio/login"
              >
                Si
          </Button>
          <Button
                className={classes.boton1}
                onClick={handleClose}
              >
                No
          </Button>
        </Box>
      </Modal>
    </Grid>
  );
};



export default Navbar;
