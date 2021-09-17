import React, { Component } from 'react';
//style
import styles from '../../css/styles.css';
import Routes from 'routes/routes';
import Header from 'templates/Header';
import Footer from 'templates/footer';

const App = () => {
    return(
        <div>
            <Header/>
            <Routes/> 
            <Footer/>
        </div>
    );
}
export default App;