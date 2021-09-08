import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import city from '../../img/city.svg';
import styles from '../../css/Top.module.css';
import ButtonRedWine from '../common/buttonredwine';

const Title = "¿Qué es el Observatorio Inmobiliario Nacional?"
const Text = "Es una infraestructura de datos capaz de consolidar aplicando ténicas registrales, la información que proviene de los observatorios inmobiliarios locales y otros actores clave, conforme a estándares establecidos, disponerlos de manera oficiao, agregando valor mediante la consolidación, gestión de sus propios datos y aplicación de nuevos métodos analíticos"

const Top_content = () => <Grid>
        <div className={styles.imagen_top}>
            <h3>{Title}</h3>
            <p>{Text}</p>
            <ButtonRedWine/>
        </div>
</Grid>

const Center_content = () => <Grid container direction="row" spacing={2}>    
    <Grid item container direction="column" xs spacing={2}>
        <Grid item xs> 
            <div className={styles.containerTall}><h1>Seguimiento</h1></div>
        </Grid>
        <Grid item xs> 
            <div className={styles.containerTall}><h1>Comunicación</h1></div>            
        </Grid>        
    </Grid>
    <Grid item container direction="column" xs spacing={2}>
        <Grid item xs > 
            <div className={styles.containerTitle}><h1>Ventajas</h1></div>
        </Grid>
        <Grid item xs> 
            <div className={styles.containerImg}></div>            
        </Grid>        
    </Grid>
    <Grid item container direction="column" xs spacing={2}>
        <Grid item xs> 
            <div className={styles.containerTall}><h1>Integración</h1></div>
        </Grid>
        <Grid item xs> 
            <div className={styles.containerTall}><h1>LADM</h1></div>            
        </Grid>        
    </Grid>
</Grid>

const Bottom_content = () => <Grid>
Inferior
</Grid>

const ContentGrid = () =>
<div className={styles.contentgrid}>
<Top_content/>
<Center_content/>
<Bottom_content/>
</div>
//Hola mundo
export default ContentGrid;