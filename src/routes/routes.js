import React, { useState, useEffect, useContext } from "react";

import { Grid } from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";
//Route
import { Routes, Route, Navigate, Router } from "react-router-dom";

//
import ContentGrid from "Observatorio/pages/contentgrid";
import Maps from "Observatorio/pages/maps";
import Navbar from "Observatorio/templates/Navbar";
import Esmeralda from "Observatorio/visores/esmeralda/esmeralda";
import Esmeralda2 from "Observatorio/visores/esmeralda/esmeralda2";
import Notfound from "Observatorio/pages/notfound";
import Header from "Observatorio/templates/Header";
import Footer from "Observatorio/templates/footer";
import Service from "Observatorio/pages/services";
import Statistics from "Observatorio/pages/statistics/statistics";
import RegisterEstate from "Observatorio/pages/estate/registerestate";
import About from "Observatorio/pages/about";
import Catastro from "Observatorio/pages/catastromultiproposito";
import Otros from "Observatorio/pages/otrosobservatorios";
import Comite from "Observatorio/pages/comitetecnico";
import Avaluos from "Observatorio/pages/metodosavaluos";
import Tipologia from "Observatorio/pages/tipologia";
import Ceed from "Observatorio/pages/ceed";
import Contacto from "Observatorio/pages/contacto";
import Ceed01 from "Observatorio/pages/statistics/ceed/ceed";
import Access from "Observatorio/pages/access/login";
import Register from "Observatorio/pages/register/register";
import Plataform from "Observatorio/pages/plataformuser";
import Repository from "Observatorio/pages/repository";
import Experimentalstatistics from "Observatorio/pages/experimental_statistics";
import ForgetPassword from "../views/pages/forgetpassword";
import RestoreAccount from "../views/pages/restore";
import ChangePassword from "../views/pages/changepassword";
import ChatIA from "../views/common/botchat";
import Accesibilidad from "../views/common/accesibilidad";
import Ladm from "Observatorio/pages/ladm";
import Search from "Observatorio/common/search";
import useAuth,{AuthContext} from "../templates/useAuth";


// const withLocation = element => props => {
//     const location = useLocation();
  
//     return <element {...props} location={location} />;
//   };

const useStyle = makeStyles({
  marginTop: {
    marginTop: "120px",
  },
});


const RoutesMaps = () => {
  return (
      <Routes>
        <Route
          path="/observatorio/Visores/Esmeralda"
          element={<Esmeralda/>}
        />
        <Route
          
          path="/observatorio/Visores/Esmeralda2"
          element={<Esmeralda2/>}
        />
        <Route path="/observatorio/404" element={<Notfound/>} />
        <Route path="*" element={<Notfound/>}/>
      </Routes>
  );
};

const ProtectedRoute = ({children}) => {
  const  login  = useContext(AuthContext)
  
  console.log("protected platafroma", login.isAuthenticated)
    if(!login.isAuthenticated){
      return <Navigate to='/observatorio/login'/>
  }
  return children
}

const ProtectedRoutecha = ({children}) => {
  const  login  = useContext(AuthContext)
  
  console.log("protected platafroma", login.isAuthenticated)
    if(!login.isAuthenticated){
      return <Navigate to='/observatorio/login'/>
  }
  return children
}

const Generalroutes = () => {
  const classes = useStyle();



  /*
  let user = localStorage.getItem("token");
  let isAuth = false;
  if (user) {
  isAuth = true;
  }

  var [isLogin, setAuth] = useState(isAuth);*/
  const  isLogin  = useContext(AuthContext);
  console.log(isLogin)

  const redirectTo = (value) => {
   
  };
  function refreshPage(){ 
    window.location.reload(); 
}
  const cerrarSesionActiva = (value) => {
    localStorage.removeItem("token");
    
  };




  return (
    <div>
      <Header/>
      {/* <Accesibilidad/> */}
      <ChatIA/>      
      <Grid container className={classes.marginTop}></Grid>
      <Routes>
        <Route path="/observatorio/restore/:auth/:autht/:authp" element={<RestoreAccount/>}/>
        <Route path="/observatorio/ForgetPassword" element={<ForgetPassword/>}/>
        <Route path="/observatorio/Mapas" element={<Maps/>}/>
        <Route path="/observatorio/Repositorio" element={<Repository/>}/>
        <Route path="/observatorio/Estadisticasexperimentales" element={<Experimentalstatistics/>}/>
        <Route path="/observatorio/Acerca" element={<About/>}/>   
        <Route path="/observatorio/Servicios" element={<Service/>}/>
        <Route path="/observatorio/Servicios/estadisticas" element={<Statistics/>}/>
        <Route path="/observatorio/Catastromultiproposito/RegistroInmuebles" element={<RegisterEstate/>}/>
        <Route path="/observatorio/Catastromultiproposito" element={<Catastro/>}/>
        <Route path="/observatorio/Otrosobservatorios" element={<Otros/>}/>
        <Route path="/observatorio/Comitetecnico" element={<Comite/>} />
        <Route path="/observatorio/Catastromultiproposito/Metodosavaluos" element={<Avaluos/>}/>
        <Route path="/observatorio/Tipologia" element={<Tipologia/>} />
        <Route path="/observatorio/LADM" element={<Ladm/>} />
        <Route path="/observatorio/Busqueda" element={<Search/>} />
        <Route path="/observatorio/Ceed" element={<Ceed/>} />
        <Route path="/observatorio/Servicios/estadisticas/Ceed" element={<Ceed01/>}/>
        <Route path="/observatorio/Contacto" element={<Contacto/>} />
        <Route path="/" element={<ContentGrid/>} />  
        <Route path="/observatorio" element={<ContentGrid/>} />  
      <Route path="/observatorio/PlataformaUsuario"  element={<ProtectedRoute><Plataform/></ProtectedRoute>}/>
      <Route path="/observatorio/login" element={<Access />}/>
        <Route path="/observatorio/ChangePassword"  element={<ProtectedRoute><ChangePassword/></ProtectedRoute>}/>
      </Routes>      
      <Footer />
    </div>
  );
};

const Rutas = () => {  
  const classes = useStyle();
  return (
    <div>
      <Routes>
        <Route path="/observatorio/Visores" element={<RoutesMaps/>} />
        <Route path="/" element={<Generalroutes/>} /> 
        <Route path="/observatorio/" element={<Generalroutes/>} />
        <Route path="/observatorio/404" element={<Notfound/>} />  
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </div>
  );
};



export default Generalroutes;
