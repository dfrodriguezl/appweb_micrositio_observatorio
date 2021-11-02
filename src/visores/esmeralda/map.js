import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './mapa.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoiYWxlam8xNzkyIiwiYSI6ImNrc3hwdHBkMTFjYzczMHRjenpjaGNiMTYifQ.eHUIBj1P3bqS_koG8-JqhQ';

const Map = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(-74.083);
  const [lat, setLat] = useState(4.70);
  const [zoom, setZoom] = useState(6);

  //Constructor del mapa
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/alejo1792/ckvbhvgi86iih14of8t0ltez1',
      center: [lng, lat],
      zoom: zoom
    });         

    // Navegacion ( +/- zoom )
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    
    map.on('click', ({point}) => {
      const features = map.queryRenderedFeatures(point, {
        layers:['puntos']
      });
      if(!features.length){
        return;
      }
      const feature = features[0];

      const popup = new mapboxgl.Popup({ offset: [0, -15] })
      .setLngLat(feature.geometry.coordinates)
      .setHTML(
      `<h3>${feature.properties.Name}</h3><p>${feature.properties.Description}</p>`
      )
      .addTo(map);

    });
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