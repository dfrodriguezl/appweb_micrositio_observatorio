import React, { Component } from 'react';
//style
import styles from '../../css/styles.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "ui/theme";
import Routes from 'routes/routes';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation
  } from "react-router-dom";

const App = () => {
    return(
        <ThemeProvider theme={theme}> 
            <Router>
                <div>
                    <Routes/> 
                </div>
            </Router>
        </ThemeProvider> 
        
    );
}
export default App;