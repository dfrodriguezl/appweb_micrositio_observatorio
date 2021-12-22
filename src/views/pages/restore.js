import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import Styled from "styled-components";
import classStyle from "Observatorio/common/style/stylegeneric";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Loader } from "./loader/loader";
import Modal from "Observatorio/pages/modal";
const sha256 = require("js-sha256");

const RestoreAccount = (props) => {
  let token =
    props.match.params.auth +
    "." +
    props.match.params.autht +
    "." +
    props.match.params.authp;
  const classes = classStyle();
  const [form, setForm] = useState({
    clave: "",
    confirmclave:""
  });
  const [openLoading, setLoading] = useState(false);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);
  const handleChangeValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    let newForm = {
      ...form,
      [name]: value,
    };
    setForm(newForm);
    // validateForm(newForm)
  };
  const sendEmail = () => {
    console.log("enviando form");
    let valor = sha256.hmac('prueba',form.clave)
    let body = {
      infokey:valor
    };
    setLoading(true);
    axios
      .post("http://localhost:3000/user/resetpassword", body, {
        headers: {
          "Content-Type": "application/json",
          "token":token
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          if (response.data.code == "OK") {
            setLoading(false);
            setOpen(true);
            setForm({
              email: "",
            });
          } else {
            setLoading(false);
            alert("Usuario no encontrado");
          }
        } else {
          setLoading(false);
          alert("ocurrio un problema externo");
        }
      });
  };
  return (
    <Grid container justifyContent="center" alignContent="center">
      <Grid
        item
        container
        spacing={3}
        xs={12}
        md={12}
        sm={12}
        lg={6}
        className={classes.containerForm}
      >
        <Grid container item>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Typography item>Nueva contraseña</Typography>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <TextField
              name="clave"
              item
              size="small"
              value={form.clave}
              onChange={handleChangeValue}
              className={classes.itemTextField}
              id="outlined-basic"
            />
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Typography item>Confirmar Contraseña</Typography>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <TextField
              name="confirmclave"
              item
              size="small"
              value={form.confirmclave}
              onChange={handleChangeValue}
              className={classes.itemTextField}
              id="outlined-basic"
            />
          </Grid>
        </Grid>
        <Grid container item>
        <button className={classes.boton} onClick={sendEmail}>
          Enviar
        </button>
        </Grid>


      </Grid>
      <Loader open={openLoading}></Loader>
      <Modal
        open={open}
        handleClose={handleClose}
        Title="La modificación de su contraseña ha sido ¡Exitoso!"
        textContainer=""
      ></Modal>
    </Grid>
  );
};

export default RestoreAccount;
