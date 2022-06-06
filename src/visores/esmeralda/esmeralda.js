import React from 'react';
import Drawer from './Drawer';
import Mapa from './mapa';
import mapboxgl from 'mapbox-gl';


const esmeralda = () => {
    return ( 
        <div>
            <Drawer/>
            <Mapa/>
        </div>
     );
}
 
export default esmeralda;