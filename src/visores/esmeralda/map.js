import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './mapa.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoiYWxlam8xNzkyIiwiYSI6ImNrc3hwdHBkMTFjYzczMHRjenpjaGNiMTYifQ.eHUIBj1P3bqS_koG8-JqhQ';

const Map = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(-74.5447);
  const [lat, setLat] = useState(40.6892);
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
    
    map.on('load', () => {
      map.addSource('wms-test-source', {
      'type': 'raster',
      // use the tiles option to specify a WMS tile source URL
      // https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/
      'tiles': [
      'https://img.nj.gov/imagerywms/Natural2015?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&layers=Natural2015'
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

      map.on('load', () => {
        map.addSource('my-data', {
          "type": "geojson",
          "data": {
          "type": "Feature",
          "geometry": {
          "type": "Point",
          "coordinates": [-77.0323, 38.9131]
          },
          "properties": {
          "title": "Mapbox DC",
          "marker-symbol": "monument"
          }
          }
          });
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