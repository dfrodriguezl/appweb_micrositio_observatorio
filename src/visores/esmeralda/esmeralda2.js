import React from 'react';
import Drawer from './Drawer';
import Map from './map';
import mapboxgl from 'mapbox-gl';
import DrawerRight from './ui/DrawerRight';
import DrawerBottom from './ui/DrawerBottom';


const esmeralda2 = () => {
    return ( 
        <div>
            <Drawer/>
            <Map/>
            <DrawerRight/>
            <DrawerBottom/>
        </div>
     );
}
 
export default esmeralda2;