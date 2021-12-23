import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import Styled from "styled-components";
import classStyle from "Observatorio/common/style/stylegeneric";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Loader } from "./loader/loader";
import Modal from "Observatorio/pages/modal";
const sha256 = require("js-sha256");

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

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
    confirmclave: "",
    showPassword: false,
    showconfirmPassword: false,
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

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowPassword = (event) => {
    setForm({
      ...form,
      showPassword: !form.showPassword,
    });
  };
  const handleClickShowConfirmPassword = (event) => {
    setForm({
      ...form,
      showconfirmPassword: !form.showconfirmPassword,
    });
  };

  const sendEmail = () => {
    console.log("enviando form");
    let valor = sha256.hmac("prueba", form.clave);
    let body = {
      infokey: valor,
    };
    setLoading(true);
    axios
      .post("http://localhost:3000/user/resetpassword", body, {
        headers: {
          "Content-Type": "application/json",
          token: token,
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
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Typography item className={classes.Textp}>
              Nueva contraseña
            </Typography>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <FormControl className={classes.itemTextField} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password"></InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={form.showPassword ? "text" : "password"}
                value={form.clave}
                name="clave"
                size="small"
                onChange={handleChangeValue}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {form.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Typography item className={classes.Textp}>
              Confirmar Contraseña
            </Typography>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <FormControl className={classes.itemTextField} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password"></InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={form.showconfirmPassword ? "text" : "password"}
                value={form.confirmclave}
                name="confirmclave"
                size="small"
                onChange={handleChangeValue}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {form.showconfirmPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid  container item justifyContent="center"  alignItems="center">
             <p className={classes.Textp}>La clave debe ser por lo menos de 8 caracteres</p>
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
      <Modal
        open={open}
        handleClose={handleClose}
        Title="El cambio de su contraseña no ha sido exitoso"
        textContainer="Por favor valide los datos e intente nuevamente"
      ></Modal>
    </Grid>
  );
};

export default RestoreAccount;
