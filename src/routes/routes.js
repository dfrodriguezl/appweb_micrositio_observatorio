import React, { Component } from 'react';
//Route
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
//
import ContentGrid from '../views/pages/contentgrid';
import Navbar from '../templates/Navbar';
import Mapas from '../views/pages/mapas';

const routes = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/Mapas">
                    <Mapas/>
                </Route>
                <Route path="/">
                    <ContentGrid/>
                </Route>
            </Switch>
        </Router>
    )
}
//hola

export default routes
