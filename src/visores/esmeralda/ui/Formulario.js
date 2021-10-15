import React, {Fragment} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
root: {
    display: 'flex',
    },
    
palette:{
        main: "#A2024D"
    },
formControl: {
    margin: theme.spacing(1),
    minWidth: '18em',
    borderRadius:'50%',
    },
select: {    
    borderRadius:5,
    height: 50,
    fontSize: '10px',
    borderBotton:'none',
    backgroundColor: '#fff',
    border: '1px solid #000',
  },
 
   
  }));

const Formulario = ({opciones, setOpciones}) => {
    const classes = useStyles();
    const handleChanger = (event) => {
        console.log(setOpciones(event.target.value));
      };
    return ( 
        <Fragment>
                <FormControl variant="filled" className={classes.formControl} >
                        <label id="demo-simple-select-filled-label">Departamento </label>
                        {/* <Select
                        
                        color= 'primary'
                        className={classes.select}
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={opciones}
                        onChange={handleChanger}
                        > */}
                            <select >
                                 {opciones.length === 0
                                        ?
                                        <option value={100}>Ten</option>
                                        : opciones.map(opcion =>(
                                            
                                            <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>
                                            
                                    ))}
                            </select>

{/* 
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem> */}
                        {/* </Select> */}
                    </FormControl>
                    <FormControl variant="filled" className={classes.formControl} >
                            <label id="demo-simple-select-filled-label">Municipio </label>
                            
                            <select >
                                    {opciones.length === 0
                                        ?
                                        <option value={100}>Ten</option>
                                        : opciones.map(opcion =>(
                                            
                                            <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>
                                            
                                    ))}
                            </select>
                    </FormControl>
        </Fragment>
     );
}
 
export default Formulario;