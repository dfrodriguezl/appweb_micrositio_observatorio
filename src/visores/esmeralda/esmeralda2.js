import React from 'react';
import Drawer from './Drawer';
import Map from './map';
import mapboxgl from 'mapbox-gl';
import DrawerRight from './ui/DrawerRight';
import DrawerBottom from './ui/DrawerBottom';
import {makeStyles} from "@material-ui/core";

const useStyle = makeStyles({
    
    boton:{
        display: "block",
        position: "relative",
        margin: "0px auto",
        width: "50%",
        height: "40px",
        padding: "10px",
        border: "none",
        borderRadius: "3px",
        fontSe: "12px",
        textAlign: "center",
        color: "#fff",
        background: "#ee8a65",
      },
});


const esmeralda2 = () => {
    const classes = useStyle();
    const [position, setPosition] = React.useState({
        lng:-74.5447,
        lat:4.73,
        zoom:6
    });
    const [bbox,setBox] = React.useState([-74.5447,4.73])
    const handlePosition = (value) =>{
         let data={
             lng:value.bbox[0],
             lat:value.bbox[1],
             zoom:6
         }

         setPosition(data)
    }
    return ( 
        <div>
            <Drawer setPosition ={handlePosition}/>
            <Map position={position} bbox={bbox}/>
            {/*<DrawerRight/>
            <DrawerBottom/>*/}
            {/* <button className={classes.boton} id="fly">
                Bogotá
            </button>  */}
        </div>
     );
}
 
export default esmeralda2;