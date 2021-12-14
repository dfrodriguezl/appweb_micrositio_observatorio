import React, {
  useRef,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import mapboxgl from "mapbox-gl";
import "./mapa.css";
import stylejson from "./maplayer.json"

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxlam8xNzkyIiwiYSI6ImNrc3hwdHBkMTFjYzczMHRjenpjaGNiMTYifQ.eHUIBj1P3bqS_koG8-JqhQ";

let eventMap;
const Map = forwardRef((props, ref) => {
  const mapContainerRef = useRef(null);
  const position = props.position;
  const [lng, setLng] = useState(position.lng);
  const [lat, setLat] = useState(position.lat);
  const [zoom, setZoom] = useState(position.zoom);

  useImperativeHandle(ref, () => ({
    toFly(position) {
      toFly(position);
      
    },
    enableLayer(layer, isEnable){
      addlayer(layer, isEnable);
    }
  }));
  const toFly = (position) => {
    eventMap.flyTo({
      //These options control the ending camera position: centered at
      // the target, at zoom level 9, and north up.
      center: [position.lng, position.lat],
      zoom: position.zoom ? position.zoom : 9,
      bearing: 0,

      // These options control the flight curve, making it move
      // slowly and zoom out almost completely before starting
      // to pan.
      speed: 0.8, // make the flying slow
      curve: 1, // change the speed at which it zooms out

      // This can be any easing function: it takes a number between
      // 0 and 1 and returns another number between 0 and 1.
      //    easing: (t) => t,

      // this animation is considered essential with respect to prefers-reduced-motion
      essential: true,
    });
  };

  const addlayer = (layer, isEnable) => {
    if(eventMap.getLayer(layer.id)){
      eventMap.setLayoutProperty(
        layer.id,
        'visibility',
         isEnable ? 'visible':'none'
        );
     }
     toFly({
       lng:layer.longitud,
       lat:layer.latitud,
       zoom: layer.zoom
     })
  };

  //Constructor del mapa

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: stylejson.sources.composite.url,
      center: [lng, lat],
      zoom: zoom,      
      
    });
    // let isAtStart = true;
    // Navegacion ( +/- zoom )
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    // map.on("load", () => {
    //   map.addLayer({
    //     id: "wms-test-layer",
    //     type: "raster",
    //     source: {
    //       type: "raster",
    //       tiles: [
    //         "https://geoserverportal.dane.gov.co/geoserver2/postgis/wms?service=WMS&version=1.1.0&request=GetMap&layers=postgis:PARQUES_NATURALES&FORMAT=image/png&TRANSPARENT=true&SRS=EPSG:4326&BBOX=-73.1237,0.00058,-67.4987,5.6165658191553405&WIDTH=256&HEIGHT=256",
    //       ],
    //       tileSize: 256,
    //     },
    //     paint: {},
    //   });
    // });

    //   document.getElementById('fly').addEventListener('click', () => {
    //   const target = isAtStart ? end : start;

    //   isAtStart = !isAtStart;

    //   map.flyTo({
    //   center: target,
    //   zoom: 9,
    //   bearing: 0,
    //    speed: 0.8,
    //    curve: 1,
    //      easing: (t) => t,
    //      essential: true
    //    });
    // });
   
    map.on("load", () => {
     // map.removeLayer('dpt-dfq012');
     // map.removeLayer('mpi-bu9n0v');
     // map.removeLayer('puntos');
     stylejson.layers.forEach(function(element) {
      console.log({element});
      if(map.getLayer(element.id)){
        map.setLayoutProperty(
          element.id,
          'visibility',
           'none'
          );
       } 
    })
     
  
    })
    
    map.on("click", ({ point }) => {
      const features = map.queryRenderedFeatures(point, {
        layers: ["puntos"],
      });
      if (!features.length) {
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
    eventMap = map;
    // Clean up on unmount
    return () => map.remove();
  }, []);

  return (
    <div>
      <div className="map-container" ref={mapContainerRef} />
    </div>
  );
});

export default Map;
