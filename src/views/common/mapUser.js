import React from 'react';
import {
    makeStyles
  } from "@material-ui/core";

import Map from 'devextreme-react/map';

import { markersData } from './dashMap.js';

const markerUrl = 'https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png';

const useStyle = makeStyles({
    tamaño: {
        width:"100%"
    }
})
const App = () => {
    const classes = useStyle();
    return (
      <div className={classes.tamaño}>
        <Map
          defaultZoom={11}
          height={440}
          width="100%"
          controls={true}
          markerIconSrc={markerUrl}
          markers={markersData}
          provider="bing">
        </Map>
      </div>
    );
}
export default App;