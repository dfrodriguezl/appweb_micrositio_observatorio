import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import city from '../../img/city.svg';
import styles from '../../css/Top.module.css';


const Top_content = () => <Grid>
    <img src={city}/>
</Grid>

const Center_content = () => <Grid>
    Center
</Grid>

const Bottom_content = () => <Grid>
    Inferior
</Grid>

const ContentGrid = () =>
<Grid direction="column">
<Top_content/>
<Center_content/>
<Bottom_content/>
</Grid>

export default ContentGrid;