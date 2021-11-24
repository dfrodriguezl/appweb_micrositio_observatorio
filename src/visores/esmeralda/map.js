import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./mapa.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxlam8xNzkyIiwiYSI6ImNrc3hwdHBkMTFjYzczMHRjenpjaGNiMTYifQ.eHUIBj1P3bqS_koG8-JqhQ";

const Map = ({position,bbox}) => {
  const mapContainerRef = useRef(null);
   console.log(position)
  /*const [lng, setLng] = useState(position.lng);
  const [lat, setLat] = useState(position.lat);
  const [zoom, setZoom] = useState(position.zoom);*/
  //Constructor del mapa
  useEffect(() => {
    
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/alejo1792/ckvvdgjyh2ptd14s3dpi89ydb",
      center: [position.lng, position.lat],
      zoom: position.zoom,
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

    // Clean up on unmount
    return () => map.remove();
  }, [position]);

  return (
    <div>
      <div className="map-container" ref={mapContainerRef} />
    </div>
  );
};

export default Map;
