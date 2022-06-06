import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './mapa.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoiYWxlam8xNzkyIiwiYSI6ImNreGpjdHVqczJ0MjQyb3N0Ym90cGVoNjcifQ.Q3g2EArsJHuWV7_o8VrLaw';  

const Map = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(-74.083);
  const [lat, setLat] = useState(4.70);
  const [zoom, setZoom] = useState(15);

  //Constructor del mapa
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/alejo1792/ckuh2bqhc030617ki7gkqg2rf',
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