import { Grid } from '@material-ui/core';
import Paper from "@material-ui/core/Paper";
import React, { Component } from 'react';
import city from '../../img/city.svg';
import styles from '../../css/Top.module.css';
import ButtonRedWine from '../common/buttonredwine';

const Title = "¿Qué es el Observatorio Inmobiliario Nacional?"
const Text = "Es una infraestructura de datos capaz de consolidar aplicando ténicas registrales, la información que proviene de los observatorios inmobiliarios locales y otros actores clave, conforme a estándares establecidos, disponerlos de manera oficiao, agregando valor mediante la consolidación, gestión de sus propios datos y aplicación de nuevos métodos analíticos"

const Top_content = () => <Grid>
    <Paper className={styles.paper}>
        <div className={styles.imagen_top}>
            <h3>{Title}</h3>
            <p>{Text}</p>
            <ButtonRedWine/>
        </div>
    </Paper>
</Grid>

const Center_content = () => <Grid>
<Paper className={styles.paper}>Center</Paper>
</Grid>

const Bottom_content = () => <Grid>
<Paper className={styles.paper}>Inferior</Paper>
</Grid>

const ContentGrid = () =>
<div className={styles.contentgrid}>
<Top_content/>
<Center_content/>
<Bottom_content/>
</div>

export default ContentGrid;