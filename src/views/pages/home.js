import React, { Component } from 'react';
//style
import styles from '../../css/styles.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "Observatorio/ui/theme";
import Routes from 'Observatorio/routes/routes';
import {
    HashRouter,
    Switch,
    Route,
    useLocation
  } from "react-router-dom";

const App = () => {
    return(
        <ThemeProvider theme={theme}> 
            <HashRouter>
                <div>
                    <Routes/> 
                </div>
            </HashRouter>
        </ThemeProvider> 
        
    );
}
export default App;