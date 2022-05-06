

import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
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
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 0,
      scrollZoom: true,
      boxZoom: true,
      doubleClickZoom: true,
      dragPan: true,
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
