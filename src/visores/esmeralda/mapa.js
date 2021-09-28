import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './mapa.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoiMWxjYXJsb3MiLCJhIjoiY2tzeTFza2ttMmY0czJubGVrcThxcWxseiJ9.6oJv9K1rrz1IgUTMpLu6Uw';

const Map = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(-74.083);
  const [lat, setLat] = useState(4.70);
  const [zoom, setZoom] = useState(15);

  //Constructor del mapa
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/1lcarlos/cku36v4280dap17mkpb8bokcx',
      center: [lng, lat],
      zoom: zoom
    });
               

    // Navegacion ( +/- zoom )
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
  

    // Clean up on unmount
    return () => map.remove();
  }, []); 

  return (
    <div>      
      <div className='map-container' ref={mapContainerRef} />
    </div>
  );
};

export default Map;