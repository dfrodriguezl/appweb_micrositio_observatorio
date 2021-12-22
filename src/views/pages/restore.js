import React ,{useState}from "react";
import { Grid, Typography } from "@material-ui/core";
import Styled from "styled-components";
import classStyle from "Observatorio/common/style/stylegeneric";
import TextField from '@mui/material/TextField';
import axios from 'axios';
import {Loader} from './loader/loader'
import Modal from "Observatorio/pages/modal"
const sha256 = require('js-sha256');

const RestoreAccount = (props) =>{
    console.log(props)
    console.log(props.match.auth)
    const classes = classStyle();
    const [form,setForm] = useState({
        email:""
    })
    return(
        <h1>Working Restore Account</h1>
    )
}

export default RestoreAccount