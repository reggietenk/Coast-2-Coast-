

import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { Marker } from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css"
 
mapboxgl.accessToken = 'pk.eyJ1IjoicmVnZ2lldGVuayIsImEiOiJjbDJndDUyeGMwNzZqM2RxaHIwMXg5N3N6In0.Ke7Mr42rWoQZajaWe55WlQ';
 

function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  const Marker = ({ map, place }) => {
    const markerRef = useRef()
  
    useEffect(() => {
      const marker = new mapboxgl.Marker(markerRef)
        .setLngLat([place.longitude, place.latitude])
        .addTo(map)
  
      return () => marker.remove()
    })
  
    return <div ref={markerRef} />

  }
   
  useEffect(() => {
  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
  container: mapContainer.current,
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [lng, lat],
  zoom: zoom
  });
  });
   
  useEffect(() => {
  if (!map.current) return; // wait for map to initialize
  map.current.on('move', () => {
  setLng(map.current.getCenter().lng.toFixed(4));
  setLat(map.current.getCenter().lat.toFixed(4));
  setZoom(map.current.getZoom().toFixed(2));
  });
  
  });
   
  return (
  <div>
  <div className="sidebar">
  Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
  </div>
  <div ref={mapContainer} className="map-container" />
  </div>
  );
  
  
}

  export default Map 