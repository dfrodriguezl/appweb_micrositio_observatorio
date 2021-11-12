import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './mapa.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoiYWxlam8xNzkyIiwiYSI6ImNrc3hwdHBkMTFjYzczMHRjenpjaGNiMTYifQ.eHUIBj1P3bqS_koG8-JqhQ';

const Map = ({position,bbox}) => {
  const mapContainerRef = useRef(null);
  console.log(position)
  const [lng, setLng] = useState(position.lng);
  const [lat, setLat] = useState(position.lat);
  const [zoom, setZoom] = useState(position.zoom);
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
    
    map.on('load', () => {
      map.addSource('wms-test-source', {
      'type': 'raster',
      // use the tiles option to specify a WMS tile source URL
      // https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/
      'tiles': [
      'https://geoserverportal.dane.gov.co/geoserver2/postgis/wms?service=WMS&version=1.1.0&request=GetMap&layers=postgis:PARQUES_NATURALES&FORMAT=image/png&TRANSPARENT=true&SRS=EPSG:4326'
      ],
      'tileSize': 256
      });
      map.addLayer(
      {
      'id': 'wms-test-layer',
      'type': 'raster',
      'source': 'wms-test-source',
      'paint': {},      
      }, 
      // 'aeroway-line'
      );
      });

      

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