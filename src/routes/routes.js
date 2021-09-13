import React, { Component } from 'react';
//Route
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
//
import ContentGrid from '../views/pages/contentgrid';
import Navbar from '../templates/Navbar';
import Maps from '../views/pages/maps';

const routes = () => {
    return (
        <Router>
           <div>
           <Navbar/>
            <Switch>
                <Route exact path="/Mapas">
                    <Maps/>
                </Route>
                <Route path="/">
                    <ContentGrid/>
                </Route>
            </Switch>
           </div>
        </Router>
    )
}

export default routes
