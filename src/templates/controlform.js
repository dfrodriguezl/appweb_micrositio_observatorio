import React, { Fragment, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },

    selectclass:{
        border: "0",
        padding: "0 0.5em 0.5em 0",
        width: "50%",
        display: "inline-flex",
        position: "relative",
        minWidth: "0",
        flexDirection: "column",
        verticalAlign: "top",
      },

    palette: {
        main: "#A2024D"
    },
    formControl: {
        margin: "8px 0px",
        width: "300px",
        borderRadius: '5px',
        height: "40px",
        boder: "1px solid #ccc",
        padding: "5px"
    },
    select: {
        borderRadius: 5,
        height: 50,
        fontSize: '10px',
        borderBotton: 'none',
        backgroundColor: '#fff',
        border: '1px solid #000',
    },
    titleLabel: {
        fontSize: ".85em",
        fontWeight: "bold"
    }

}));
const Formulario = ({ opciones, setOpciones, municipios }) => {
    const classes = useStyles();



    let cod_dpto = localStorage.getItem("cod_dpto")
    if (!cod_dpto) {
        localStorage.setItem("cod_dpto", opciones[0].cod_dpto)
    }
    let cod_municipio = localStorage.getItem("cod_municipio")
   // console.log(cod_municipio)
    if (!cod_municipio) {
        municipios.map((data) => {
            if (data.cod_dpto == cod_dpto) {
                localStorage.setItem("cod_municipio", data.cod_mpio)
                setOpciones(data.cod_mpio)
            }
        })
    }

    const [municipioActual, setMunicipio] = React.useState(cod_municipio)
    const [departamentoActual, setDepartamento] = React.useState(cod_dpto)
    const handleChanger = (event) => {
        localStorage.removeItem("cod_municipio");
        localStorage.setItem("cod_municipio", event.target.value)
        setMunicipio(event.target.value)
        setOpciones(event.target.value)
    };

    const handleChangeDepart = (event) => {
        localStorage.removeItem("cod_dpto");
        localStorage.setItem("cod_dpto", event.target.value)
        setDepartamento(event.target.value)
        municipios.map((data) => {
            if (data.cod_dpto == event.target.value) {
               // console.log("encontrado")
               // console.log(data.cod_mpio)
                localStorage.removeItem("cod_municipio");
                localStorage.setItem("cod_municipio", event.target.value)
                setMunicipio(data.cod_mpio)
                setOpciones(data.cod_mpio)
            }
        })

    }

    useEffect(() => {
        /*let cod_dpto = opciones[0].cod_dpto
        setDepartamento(cod_dpto)*/
        let cod_dpto = localStorage.getItem("cod_dpto")
        if (cod_dpto) {
            setDepartamento(cod_dpto)
        }
        // Your code here
    }, []);

    return (
        <Fragment>
            <FormControl variant="outlined" className={classes.selectclass}>
                <InputLabel id="demo-simple-select-label-">
                            Departamento
                </InputLabel>
                <Select onChange={handleChangeDepart}>
                    {
                        opciones.map((opcion) => {

                            if (opcion.cod_dpto == departamentoActual) {
                                return <option key={opcion.cod_dpto} selected="true" value={opcion.cod_dpto}>{opcion.nombre}</option>
                            } else {
                                return <option key={opcion.cod_dpto} value={opcion.cod_dpto}>{opcion.nombre}</option>
                            }

                        })
                    }
                </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.selectclass}>
                <InputLabel id="demo-simple-select-label-">
                  Municipio
                </InputLabel>
                <Select onChange={handleChanger}>
                    {municipios.map(opcion => {

                        if (opcion.cod_dpto == departamentoActual) {
                            if (opcion.cod_mpio == municipioActual) {
                                return <MenuItem key={opcion.cod_mpio} selected="true" value={opcion.cod_mpio}>{opcion.nombre}</MenuItem>
                            } else {
                                return <MenuItem key={opcion.cod_mpio} value={opcion.cod_mpio}>{opcion.nombre}</MenuItem>
                            }

                        }
                    })}
                </Select>
            </FormControl>
        </Fragment>
    );
}

export default Formulario;