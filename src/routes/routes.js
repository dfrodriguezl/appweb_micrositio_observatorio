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
import Notfound from 'pages/notfound';
import Header from 'templates/Header';
import Footer from 'templates/footer';
import Service from 'pages/services';

const RoutesMaps = () =>{    
    return(
        
        <div>
        <Switch>
           <Route exact path="/Visores/Esmeralda" component={esmeralda}/>           
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
        <Route exact path="/Servicios" component={Service} />
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
