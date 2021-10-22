import React from 'react';
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
import ContentGrid from 'pages/contentgrid';
import Navbar from 'templates/Navbar';
import Maps from 'pages/maps';
import esmeralda from 'visores/esmeralda/esmeralda';
import esmeralda2 from 'visores/esmeralda/esmeralda2';
import Notfound from 'pages/notfound';
import Header from 'templates/Header';
import Footer from 'templates/footer';
import Service from 'pages/services';
import statistics from 'pages/statistics/statistics'
import RegisterEstate from 'pages/estate/registerestate'
import About from 'pages/about';
import Catastro from 'pages/catastromultiproposito';
import Otros from 'pages/otrosobservatorios';
import Comite from 'pages/comitetecnico';
import Avaluos from 'pages/metodosavaluos';
import Tipologia from 'pages/tipologia';
import Ceed from 'pages/ceed';
import Contacto from 'pages/contacto';

const RoutesMaps = () =>{    
    return(
        
        <div>
        <Switch>
           <Route exact path="/Visores/Esmeralda" component={esmeralda}/>
           <Route exact path="/Visores/Esmeralda2" component={esmeralda2}/>
           <Route path="/404" component={Notfound}/>
           <Route path="*">
                    <Redirect to ="/404"/>
           </Route>
        </Switch>
        </div>
    )
}

const Generalroutes = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Switch>
        <Route exact path="/Mapas" component={Maps} />
        <Route exact path="/Acerca" component={About} />
        <Route exact path="/Servicios" component={Service} />
        <Route exact path="/Servicios/estadisticas" component={statistics}/>
        <Route exact path="/Servicios/RegistroInmuebles" component={RegisterEstate}/> 
        <Route exact path="/Catastromultiproposito" component={Catastro} />
        <Route exact path="/Otrosobservatorios" component={Otros} />
        <Route exact path="/Comitetecnico" component={Comite} />
        <Route exact path="/Metodosavaluos" component={Avaluos} />
        <Route exact path="/Tipologia" component={Tipologia} />
        <Route exact path="/Ceed" component={Ceed} />
        <Route exact path="/Contacto" component={Contacto} />
        <Route exact path="/" component={ContentGrid} />
        <Route path="/404" component={Notfound} />
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
};

const Routes = () => {
    let location = useLocation();
    return (       
           <div>
            <Switch>                                
                <Route path="/Visores" component={RoutesMaps}/>  
                <Route path="/" component={Generalroutes}/>
                <Route path="/404" component={Notfound}/>
                <Route path="*">
                    <Redirect to ="/404"/>
                </Route>
            </Switch>     
           </div>       
    )
}

export default withRouter (Routes)
