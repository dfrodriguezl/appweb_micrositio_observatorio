import React, { Component } from 'react';
//style
import styles from '../../css/styles.css';
import Routes from 'routes/routes';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation
  } from "react-router-dom";

const App = () => {
    return(
        <Router>
            <div>
                <Routes/> 
            </div>
        </Router>
        
    );
}
export default App;