

import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// import { Marker } from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css"
// import ReactMapGL, { Marker, Popup } from "react-map-gl";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';


mapboxgl.accessToken = 'pk.eyJ1IjoicmVnZ2lldGVuayIsImEiOiJjbDJndDUyeGMwNzZqM2RxaHIwMXg5N3N6In0.Ke7Mr42rWoQZajaWe55WlQ';

const Map = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(5);
  const [lat, setLat] = useState(34);
  const [zoom, setZoom] = useState(1.5);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [lng, lat],
      zoom: zoom
    });
    map.addControl(
      new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
      })
      );
      

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    const marker = new mapboxgl.Marker({
      draggable: true
    })
      .setLngLat([0, 0])
      .addTo(map);
    
    function onDragEnd() {
      const lngLat = marker.getLngLat();
      mapContainerRef.style.display = "block";
      mapContainerRef.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
    }
    
    marker.on("dragend", onDragEnd);
    

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // // Create the popup and add it to the world map
    // const popup = new mapboxgl.Popup()
    //   .setLngLat(e.lngLat) // could also use the coordinates from a feature geometry if the source is in geojson format
    //   .setDOMContent(containerRef.current)
    //   .addTo(map)

    // // Keep track of the current popup
    // popupRef. current = popup

    // // // Remove the tracked popup with the popup is closed
    // // popup.on('close', () => {
    // //   popupRef.current = undefined
    // // })
  



    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <div>
      <div className='sidebar'>
        <div>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
      <div className='map-container' ref={mapContainerRef} />
    </div>
  );
};

export default Map;

// mapboxgl.accessToken = 'pk.eyJ1IjoicmVnZ2lldGVuayIsImEiOiJjbDJndDUyeGMwNzZqM2RxaHIwMXg5N3N6In0.Ke7Mr42rWoQZajaWe55WlQ';
//       const Map = new mapboxgl.Map({
//         container: 'mapContainer',
//         style: 'mapbox://styles/examples/cjgiiz9ck002j2ss5zur1vjji',
//         center: [-87.661557, 41.893748],
//         zoom: 10.7
//       });

//       Map.on('click', (event) => {
//         const features = Map.queryRenderedFeatures(event.point, {
//           layers: ['chicago-parks']
//         });
//         if (!features.length) {
//           return;
//         }
//         const feature = features[0];

//         const popup = new mapboxgl.Popup({ offset: [0, -15] })
//           .setLngLat(feature.geometry.coordinates)
//           .setHTML(
//             `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
//           )
//           .addTo(Map);
//       });

// export default Map