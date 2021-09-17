import React, { Component } from 'react';
//Route
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
//
import ContentGrid from 'pages/contentgrid';
import Navbar from 'templates/Navbar';
import Maps from 'pages/maps';
import Notfound from 'pages/notfound';

const routes = () => {
    return (
        <Router>
           <div>
           <Navbar/>
            <Switch>
                <Route exact path="/Mapas" component={Maps}/>
                <Route exact path="/" component={ContentGrid}/>
                <Route path="*" component={Notfound}/>
            </Switch>
           </div>
        </Router>
    )
}

export default routes
