import React, { Component } from 'react';
import ContentGrid from './contentgrid';
import Header from '../../templates/Header';
import Navbar from '../../templates/Navbar';
import Footer from '../../templates/footer';
import styles from '../../css/styles.css';



const App = () => 
<div>
    <Header/>
    <Navbar/>
    {/* <ContentGrid/> */}
    <Footer/>
</div>

export default App;