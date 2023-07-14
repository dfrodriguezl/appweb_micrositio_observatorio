import React, { useState, useEffect, useContext } from "react";
import { Grid, Modal, Box, Typography } from "@material-ui/core/";
import { AiFillHome, AiOutlineDown } from "react-icons/ai";
import { BrowserRouter as Router, NavLink} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Styled from "styled-components";
//import menuDane from "Observatorio/common/newmenu.js";
import SideBarComponent from "./newsidebar.js";
import * as Values from "Observatorio/Variables/values";
import { Button } from "@material-ui/core";
import { useNavigate } from 'react-router-dom'; 
import useAuth,{AuthContext} from "../templates/useAuth";
import {useTranslation} from "react-i18next";

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
},

UtilidadCentrarTexto:{
    position:"relative",
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    cursor:"pointer",
    "&.--active": {
      background:'#BD0B4E',
      color:"white",
      height:"40px"
    },
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
    cursor:pointer;  
    &:hover {
      background-color: #821a3f;
      color: #F3F3F3;
    }
`;

const MenuIL = Styled.li`
    float: left;  
    justify-content: center;
    color:#4c4c4c;
    background:#FAFAFA;
    border-right:1px solid #E6E6E6;
    width:100%;
    &:hover {
      background-color: #821a3f;
      color: #F3F3F3;
    }
    @media (max-width: 1300px) and (min-width: 769px) {
       font-size:15px !important;
    }
    `;

const UtilidadCentrarTexto = Styled.div`
    position:relative;
    display: flex;
    justify-content: center;
    align-items:center;
    cursor:pointer;}
`;
//menu desplegable
const DropDownContent = Styled.div`
display: none;
position: absolute;
background-color: #F2F2F2;
width: 17vw;
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
    cursor:pointer;
    &:hover ${DropDownContent} {
      display: block;
    },
    /* &:first-child {
        color:red;
        
        
    } */
  `;

const Navbar = ({ sideBarOpen, isLogin }) => {
  const classes = useStyle();
  const logout = useContext(AuthContext);
  const history = useNavigate();
  let id = localStorage.getItem("id")
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [t, i18n]= useTranslation("global");
  const [ajustableinicio, setajustableinicio] = useState("--active")
  const rutabtnlogin = () =>{
  
  history('/observatorio/login');
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
  

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    localStorage.removeItem("rol");
    setSession(false);
    isOk = false;
    props.setAuth(false);
    history('/observatorio/login')    
    logout.logout()
  };

  function cambioainicio(){
    setajustableinicio("--active")
  }
  function rutas(idd) {
    console.log("rutas",idd.target.id)
    if(idd.target.id == "https://geoportal.dane.gov.co/geovisores/territorio/observatorio_inmobiliario/"){
      window.open('https://geoportal.dane.gov.co/geovisores/territorio/observatorio_inmobiliario/', '_blank')
    }else{
      setajustableinicio("")
      history(idd.target.id)
    }
  }
  
  const menuDane =[   
             
    [
        {
          name:t("navbar.unobservatorio"),
          id:"1",
          link:"/observatorio/Acerca",
          icon:"",
          isMain:true
        },
        {
            name:t("navbar.otro"),
            id:"2",
            link:"/observatorio/Otrosobservatorios",
            icon:"",
            isMain:true
        }
  
    ],
    [
        {
            name:t("navbar.servicios"),
            id:"3",
            link:"/observatorio/Servicios",
            icon:"",
            isMain:true
        },
        {
            name:t("navbar.estadisticas"),
            id:"4",
            link:"/observatorio/Servicios/estadisticas",
            icon:"",
            isMain:true
        },
        // {
        //     name:"Censo de edificaciones CEED",
        //     link:"/observatorio/Servicios/estadisticas/Ceed",
        //     icon:"",
        //     isMain:true
        // },
        {
            name:t("navbar.plataforma"),
            id:"5",
            link:"/observatorio/PlataformaUsuario",
            icon:"",
            isMain:true,
            isProtected:true
        },
        {
            name:t("navbar.contacto"),
            id:"6",
            link:"/observatorio/Contacto",
            icon:"",
            isMain:true
        },
        {
            name:t("navbar.repositorio"),
            id:"7",
            link:"/observatorio/Repositorio",
            icon:"",
            isMain:true
        },
        {
            name:t("navbar.experimental"),
            id:"8",
            link:"/observatorio/Estadisticasexperimentales",
            icon:"",
            isMain:true
        },


    ],
    [
        {
            name:t("navbar.visor"),
            id:"9",
            link:"/observatorio/Mapas",
            icon:"",
            isMain:true
        },
        // {
        //     name:t("navbar.mercado"),
        //     id:"10",
        //     link:`http://localhost:3001?id=${id}&token=${token}`,
        //     icon:"",
        //     isMain:false
        // },
        
    ],
    [
        {
            name:t("navbar.catastro"),
            id:"11",
            link:"/observatorio/Catastromultiproposito",
            icon:"",
            isMain:true
        },
        {
            name:t("navbar.metodos"),
            id:"12",
            link:"/observatorio/Catastromultiproposito/Metodosavaluos",
            icon:"",
            isMain:true
        },
        // {
        //     name:"Tipologías constructivas",
        //     link:"/observatorio/tipologia",
        //     icon:"",
        //     isMain:true
        // },
        {
            name:t("navbar.registro"),
            id:"13",
            link:"/observatorio/Catastromultiproposito/RegistroInmuebles",
            icon:"",
            isMain:true
        },
        {
            name:t("navbar.comite"),
            id:"14",
            link:"/observatorio/Comitetecnico",
            icon:"",
            isMain:true
        },
        {
            name:t("navbar.modelo"),
            id:"Ladm",
            link:"/observatorio/LADM",
            icon:"",
            isMain:true
        }

    ]
]

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
  const ajustable = "ajustable"
  return (
    <Grid container id="target-two" onMouseLeave={handleStatusFalseAll}>
      <Grid container item xs={12} sm={12} className={classes.cardglobal}>
        <NavBarContenedor>
          <DropDownLi
            onMouseEnter={handleStatusFalseAll}
            className={classes.liHover}            
          >
            <div className={classes.UtilidadCentrarTexto+" "+ajustableinicio}>
              <AiFillHome />
              <NavLink onClick={cambioainicio} className={classes.root+" "+ajustable} to="/observatorio/">{t("navbar.inicio")}</NavLink>
            </div>
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
                <MenuA className={ajustable}>{t("navbar.observatorio")}</MenuA>
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
                <MenuA>{t("navbar.observatorio")}</MenuA>
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
                <AiOutlineDown className={classes.rotate+" "+ajustable} />
                <MenuA>
                  {t("navbar.catastro")}{" "}
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
                {t("navbar.catastro")}{" "}
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
                {t("navbar.geovisores")}{" "}
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
                {t("navbar.geovisores")}
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
                {t("navbar.servicios")}{" "}
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
                {t("navbar.servicios")}
                </NavLink>
              </UtilidadCentrarTexto>
            </DropDownLi>
          )}

          <li onMouseEnter={handleStatusFalseAll}>
            {isOk ? 
            <Button
            className={classes.boton+" "+ajustable}
            onClick={handleOpen}
          >
            Cerrar Sesión
          </Button>:
              <Button
                className={classes.boton+" "+ajustable}
                disableElevation
                onClick={rutabtnlogin}
              >
                {t("navbar.ingresar")}
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
                className={classes.boton+" "+ajustable}
                onClick={cerrarSesion}
                href="/observatorio/"
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
