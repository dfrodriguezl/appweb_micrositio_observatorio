import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import Styled from "styled-components";
import classStyle from "Observatorio/common/style/stylegeneric";
import axios from "axios";
import { Loader } from "./loader/loader";
import Modal from "Observatorio/pages/modal";
const sha256 = require("js-sha256");
import enviroment from "../../config/enviroment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const ChangePassword = (props) => {
  const classes = classStyle();
  const [form, setForm] = useState({
    clave: "",
    newclave:"",
    confirmclave: "",
    showPassword: false,
    showNewPassword:false,
    showconfirmPassword: false,
  });
  const [openLoading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const [openFailed, setOpenFail] = useState(false);
  const handleClose = () => setOpen(false);
  const handleCloseFailed = () =>  setOpenFail(false)
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
  const handleClickNewPassword = (event) => {
    setForm({
      ...form,
      showNewPassword: !form.showNewPassword,
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
    if(!form.newclave || form.newclave == ""){
      alert('completa el formulario')
      return
    }
    if(!form.confirmclave || form.confirmclave == ""){
      alert('completa el formulario')
      return
    }
    if(!form.clave || form.clave == ""){
      alert('completa el formulario')
      return
    }
    if(form.newclave.length != 8){
      alert('la clave debe tener 8 digitos')
      return
    }
    if(form.newclave != form.confirmclave){
      alert('contraseñas no coinciden')
      return 
    }
    let valor = sha256.hmac("prueba", form.clave);
    let newPassowrd =  sha256.hmac("prueba", form.newclave);
    let body = {
      infokey: valor,
      newinfokey:newPassowrd
    };
    setLoading(true);
    let token = localStorage.getItem("token")
    axios
      .post(`${enviroment.endpoint}/user/changepassword`, body, {
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
          } else {
            setLoading(false);
            setOpenFail(true)
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
              Contraseña antigua
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
              Nueva Contraseña
            </Typography>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <FormControl className={classes.itemTextField} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password"></InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={form.showNewPassword ? "text" : "password"}
                value={form.newclave}
                name="newclave"
                size="small"
                onChange={handleChangeValue}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickNewPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {form.showNewPassword ? (
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
        open={openFailed}
        handleClose={handleCloseFailed}
        Title="El cambio de su contraseña no ha sido exitoso"
        textContainer="Por favor valide los datos e intente nuevamente"
      ></Modal>
    </Grid>
  );
};

export default ChangePassword;
