import React, { Component } from 'react';
//style
import styles from '../../css/styles.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "Observatorio/ui/theme";
import Routes from 'Observatorio/routes/routes';
import {AuthProvider} from '../../templates/useAuth';


  

const App = () => {
    return(
        <ThemeProvider theme={theme}> 
                <AuthProvider>
                    <Routes/>
                </AuthProvider>
        </ThemeProvider>         
    );
}
export default App;