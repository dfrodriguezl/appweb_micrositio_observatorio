import React ,{useState}from "react";
import { Grid, Typography } from "@material-ui/core";
import Styled from "styled-components";
import classStyle from "Observatorio/common/style/stylegeneric";
import TextField from '@mui/material/TextField';
import axios from 'axios';
import {Loader} from './loader/loader'
import Modal from "Observatorio/pages/modal"
import enviroment from "../../config/enviroment"
const ContainerForm = Styled.div`    

    display: flex;
    align-items:center;
    height:400px;
    width: 600px;
    padding:50px;
    margin-top:50px;
    margin-bottom:50px;
    background-color:#f3f3f3;
    border-radius:10px 10px 10px 10px;
    @media (max-width: 768px) {
      width: 400px;
    },
  
    
`;

const ForgetPassword = () => {
  const classes = classStyle();
  const [form,setForm] = useState({
      email:""
  })
  const [openLoading,setLoading] = useState(false)
  const handleClose = () => setOpen(false)
  const [open, setOpen] = useState(false)
  const handleChangeValue = (event) => {
    let name = event.target.name
    let value = event.target.value
  
    let newForm = {
        ...form,
        [name]: value
    }
    setForm(newForm)
   // validateForm(newForm)
}
const sendEmail = () =>{
    console.log("enviando form")
    let body = {
        email:form.email
    }
    setLoading(true)
    axios.post(
        `${enviroment.endpoint}/user/forgetpassword`, 
         body, 
         {
             headers: { 
                 'Content-Type' : 'application/json' 
             }
         }
 ).then(response => { 
     console.log(response)  
     if(response.status == 200 ){
         if(response.data.code == "OK"){
                setLoading(false)
                setOpen(true)
                setForm({
                    email:""
                })
         }else{
             setLoading(false)
             alert('Usuario no encontrado')
         }

     }else{
        setLoading(false)
        alert('ocurrio un problema externo')
     }  
     
 });
}
  return (
    <Grid container justifyContent="center" alignContent="center">
        <Grid item container  spacing={2} xs={12} md={6} sm={6} lg={6} className={classes.containerForm}>
          <Grid item container justifyContent="center" alignContent="center">
               <Typography className={classes.Textp}>   Diligencie y envie su usuario, revise su correo y siga las instrucciones</Typography>
           </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <TextField
              name="email"
              item
              size="small"
              value={form.email}
              onChange={handleChangeValue}
              className={classes.itemTextField}
              id="outlined-basic"
            />
          </Grid>
          <button className={classes.boton} onClick={sendEmail} >Enviar</button>
        </Grid>
        <Loader open={openLoading}></Loader>
        <Modal open={open} handleClose={handleClose} Title="Envio de correo Exitoso" textContainer="Se ha enviado a su correo lo necesario para reestablecer contraseña" >
        </Modal>
    </Grid>
  );
};
export default ForgetPassword;
