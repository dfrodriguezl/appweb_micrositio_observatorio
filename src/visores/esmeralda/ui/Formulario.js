import React, { Fragment } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },

    palette: {
        main: "#A2024D"
    },
    formControl: {
        margin: "8px 0px",
        width:"300px",
        borderRadius: '5px',
        height:"40px",
        boder: "1px solid #ccc",
        padding:"5px"
    },
    select: {
        borderRadius: 5,
        height: 50,
        fontSize: '10px',
        borderBotton: 'none',
        backgroundColor: '#fff',
        border: '1px solid #000',
    },
    titleLabel:{
        fontSize:".85em",
        fontWeight:"bold"
    }

}));
const Formulario = ({ opciones, setOpciones, municipios }) => {
    const classes = useStyles();
    const [departamentoActual, setDepartamento] = React.useState()
    const [municipioActual, setMunicipio] = React.useState()
    console.log(departamentoActual)
    const handleChanger = (event) => {
        setMunicipio(event.target.value)
        //setOpciones(event.target.value)
    };
    
    const handleChangeDepart = (event) =>{
        setDepartamento(event.target.value)
    }

    return (
        <Fragment>
            <FormControl variant="filled"  >
                <label id="demo-simple-select-filled-label" className={classes.titleLabel}>Departamento </label>
 
                <select onChange={handleChangeDepart} className={classes.formControl} >
                    {opciones.length === 0
                        ?
                        <option value={100}>Ten</option>
                        : opciones.map(opcion => (

                            <option key={opcion.cod_dpto} value={opcion.cod_dpto}>{opcion.nombre}</option>

                        ))}
                </select>
            </FormControl>
            <FormControl variant="filled"  >
                <label id="demo-simple-select-filled-label" className={classes.titleLabel}>Municipio </label>

                <select onChange={handleChanger} className={classes.formControl} >
                    {municipios.map(opcion => {

                        if (opcion.cod_dpto == departamentoActual) {
                            if(opcion.cod_mpio == municipioActual){
                                
                                return <option key={opcion.cod_mpio} selected="true" value={opcion.cod_mpio}>{opcion.nombre}</option>
                            }else{
                                return <option key={opcion.cod_mpio} value={opcion.cod_mpio}>{opcion.nombre}</option>
                            }
                           
                        }
                    })}
                </select>
            </FormControl>
        </Fragment>
    );
}

export default Formulario;