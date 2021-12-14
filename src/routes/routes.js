import React from 'react';

import { Grid } from '@material-ui/core/';

import {
  makeStyles
} from '@material-ui/core/styles';
//Route
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  withRouter,
  Redirect
} from "react-router-dom";

//
import ContentGrid from 'Observatorio/pages/contentgrid';
import Maps from 'Observatorio/pages/maps';
import Navbar from 'Observatorio/templates/Navbar';
import esmeralda from 'Observatorio/visores/esmeralda/esmeralda';
import esmeralda2 from 'Observatorio/visores/esmeralda/esmeralda2';
import Notfound from 'Observatorio/pages/notfound';
import Header from 'Observatorio/templates/Header';
import Footer from 'Observatorio/templates/footer';
import Service from 'Observatorio/pages/services';
import statistics from 'Observatorio/pages/statistics/statistics'
import RegisterEstate from 'Observatorio/pages/estate/registerestate'
import About from 'Observatorio/pages/about';
import Catastro from 'Observatorio/pages/catastromultiproposito';
import Otros from 'Observatorio/pages/otrosobservatorios';
import Comite from 'Observatorio/pages/comitetecnico';
import Avaluos from 'Observatorio/pages/metodosavaluos';
import Tipologia from 'Observatorio/pages/tipologia';
import Ceed from 'Observatorio/pages/ceed';
import Contacto from 'Observatorio/pages/contacto';
import Ceed01 from 'Observatorio/pages/statistics/ceed/ceed'
import Access from 'Observatorio/pages/access/login'
import Register from 'Observatorio/pages/register/register'
import Plataform from 'Observatorio/pages/plataformuser'

const useStyle = makeStyles({
  marginTop: {
   marginTop:"120px"
  }
});

const RoutesMaps = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/Observatorio/Visores/Esmeralda" component={esmeralda} />
        <Route exact path="/Observatorio/Visores/Esmeralda2" component={esmeralda2} />
        <Route path="/Observatorio/404" component={Notfound} />
        <Route path="*">
          <Redirect to="/Observatorio/404" />
        </Route>
      </Switch>
    </div>
  )
}

const Generalroutes = () => {
  const classes = useStyle()
  let user = localStorage.getItem("token")
  return (
    <div >
      <Header/>
      <Navbar/> 
      <Grid container className={classes.marginTop}>
      </Grid>
        <Switch >
          <Route exact path="/Observatorio/Mapas" component={Maps} />
          <Route exact path="/Observatorio/Acerca" component={About} />
          <Route exact path="/Observatorio/Servicios" component={Service} />
          <Route exact path="/Observatorio/Servicios/estadisticas" component={statistics} />
          <Route exact path="/Observatorio/Catastromultiproposito/RegistroInmuebles" component={RegisterEstate} />
          <Route exact path="/Observatorio/Catastromultiproposito" component={Catastro} />
          <Route exact path="/Observatorio/Otrosobservatorios" component={Otros} />
          <Route exact path="/Observatorio/Comitetecnico" component={Comite} />
          <Route exact path="/Observatorio/Catastromultiproposito/Metodosavaluos" component={Avaluos} />
          <Route exact path="/Observatorio/Tipologia" component={Tipologia} />
          <Route exact path="/Observatorio/Ceed" component={Ceed} />
          <Route exact path ="/Observatorio/Servicios/estadisticas/Ceed" component={Ceed01} />
          <Route exact path="/Observatorio/Contacto" component={Contacto} />
          <Route exact path="/Observatorio/PlataformaUsuario" component={Plataform} />
          <Route exact path="/Observatorio" component={ContentGrid} />
          <Route exact path="/Observatorio/login"  render={()=>{
            return user ? <Redirect to="/"></Redirect>: <Access></Access>
          }} />
          <Route exact path="/Observatorio/register" component={Register} />
          <Route exact path="/">
            <Redirect to="/Observatorio" />
          </Route>
          <Route path="/Observatorio/404" component={Notfound} />          
          <Route path="*">
            <Redirect to="/Observatorio/404" />
          </Route>
        </Switch>
       <Footer /> 
    </div>
  );
};

const Routes = () => {
  let location = useLocation()
  const classes = useStyle()
  return (
    <div>
      <Switch>
        <Route path="/Observatorio/Visores" component={RoutesMaps} />
        <Route path="/" component={Generalroutes} />
        <Route path="/Observatorio" component={Generalroutes} />
        <Route path="/Observatorio/404" component={Notfound} />
        <Route path="*">
          <Redirect to="/Observatorio/404" />
        </Route>
      </Switch>
    </div>
  )
}

export default withRouter(Routes)
