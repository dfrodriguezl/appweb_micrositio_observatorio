import React, { useState, useEffect } from "react";

import { Grid } from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";
//Route
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

//
import ContentGrid from "Observatorio/pages/contentgrid";
import Maps from "Observatorio/pages/maps";
import Navbar from "Observatorio/templates/Navbar";
import esmeralda from "Observatorio/visores/esmeralda/esmeralda";
import esmeralda2 from "Observatorio/visores/esmeralda/esmeralda2";
import Notfound from "Observatorio/pages/notfound";
import Header from "Observatorio/templates/Header";
import Footer from "Observatorio/templates/footer";
import Service from "Observatorio/pages/services";
import statistics from "Observatorio/pages/statistics/statistics";
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

const withLocation = Component => props => {
    const location = useLocation();
  
    return <Component {...props} location={location} />;
  };

const useStyle = makeStyles({
  marginTop: {
    marginTop: "120px",
  },
});



const RoutesMaps = () => {
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/observatorio/Visores/Esmeralda"
          component={esmeralda}
        />
        <Route
          exact
          path="/observatorio/Visores/Esmeralda2"
          component={esmeralda2}
        />
        <Route path="/observatorio/404" component={Notfound} />
        <Route path="*">
          <Navigate to="/observatorio/404" />
        </Route>
      </Routes>
    </div>
  );
};

const Generalroutes = () => {
  const classes = useStyle();

  let user = localStorage.getItem("token");
  let isAuth = false;
  if (user) {
    isAuth = true;
  }
  const [isLogin, setAuth] = useState(isAuth);
  
  const redirectTo = (value) => {
   setAuth(true);
  };
  function refreshPage(){ 
    window.location.reload(); 
}
  const cerrarSesionActiva = (value) => {
    localStorage.removeItem("token");
    setAuth(true);
  };

  useEffect(() => {
      setAuth(isAuth)
  }, [isLogin]);

  return (
    <div>
      <Header />
      {/* <Navbar isLogin={isLogin} setAuth={cerrarSesionActiva} /> */}
      <Accesibilidad/>
      <ChatIA/>      
      <Grid container className={classes.marginTop}></Grid>
      <Routes>
        <Route
          exact
          path="/observatorio/restore/:auth/:autht/:authp"
          component={RestoreAccount}
        />
        <Route
          exact
          path="/observatorio/ForgetPassword"
          component={ForgetPassword}
        />
        <Route exact path="/observatorio/Mapas" component={Maps} />
        <Route exact path="/observatorio/Repositorio" component={Repository} />
        <Route
          exact
          path="/observatorio/Estadisticasexperimentales"
          component={Experimentalstatistics}
        />
        <Route exact path="/observatorio/Acerca" component={About} />
        <Route exact path="/observatorio/Servicios" component={Service} />
        <Route
          exact
          path="/observatorio/Servicios/estadisticas"
          component={statistics}
        />
        <Route
          exact
          path="/observatorio/Catastromultiproposito/RegistroInmuebles"
          component={RegisterEstate}
        />
        <Route
          exact
          path="/observatorio/Catastromultiproposito"
          component={Catastro}
        />
        <Route
          exact
          path="/observatorio/Otrosobservatorios"
          component={Otros}
        />
        <Route exact path="/observatorio/Comitetecnico" component={Comite} />
        <Route
          exact
          path="/observatorio/Catastromultiproposito/Metodosavaluos"
          component={Avaluos}
        />
        <Route exact path="/observatorio/Tipologia" component={Tipologia} />
        <Route exact path="/observatorio/LADM" component={Ladm} />
        <Route exact path="/observatorio/Busqueda" component={Search} />
        <Route exact path="/observatorio/Ceed" component={Ceed} />
        <Route
          exact
          path="/observatorio/Servicios/estadisticas/Ceed"
          component={Ceed01}
        />
        <Route exact path="/observatorio/Contacto" component={Contacto} />
        <Route
          isAuth={isLogin}          
          exact
          path="/observatorio/PlataformaUsuario"
          render={() => {            
            return !isAuth ? (
              <Access  setAuth={redirectTo}></Access>
            ) : (
              <Plataform></Plataform>
            );
          }}
          
        />isLogin
        <Route exact path="/observatorio" component={ContentGrid} />
        <Route
          exact
          path="/observatorio/login"
         
          render={() => {
            return user && isLogin ? (
              <Navigate to="/observatorio/PlataformaUsuario"></Navigate>
            ) : (
              <Access  setAuth={redirectTo}></Access>
            );
          }}
        />
        {console.log("Recuperar",user,"-",isLogin)}
        <Route
          exact
          path="/observatorio/ChangePassword"          
          render={() => {
            return user && isLogin ? (
              <ChangePassword></ChangePassword>
            ) : (
              <Navigate to="/observatorio/"></Navigate>
            );
          }}
        />
        <Route exact path="/observatorio/register" component={Register} />
        <Route exact path="/">
          <Navigate to="/observatorio" />
        </Route>
        <Route path="/observatorio/404" component={Notfound} />
        <Route path="*">
          <Navigate to="/observatorio/404" />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

const Rutas = () => {
  let location = useLocation();
  const classes = useStyle();
  return (
    <div>
      <Routes>
        <Route path="/observatorio/Visores" component={RoutesMaps} />
        <Route path="/" component={Generalroutes} />
        <Route path="/observatorio" component={Generalroutes} />
        <Route path="/observatorio/404" component={Notfound} />
        <Route path="*">
          <Navigate to="/observatorio/404" />
        </Route>
      </Routes>
    </div>
  );
};

export default withRouter(Rutas);
