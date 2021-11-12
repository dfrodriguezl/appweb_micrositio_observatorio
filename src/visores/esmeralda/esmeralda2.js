import React from 'react';
import Drawer from './Drawer';
import Map from './map';
import mapboxgl from 'mapbox-gl';
import DrawerRight from './ui/DrawerRight';
import DrawerBottom from './ui/DrawerBottom';



const esmeralda2 = () => {

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
            <DrawerRight/>
            <DrawerBottom/>
        </div>
     );
}
 
export default esmeralda2;