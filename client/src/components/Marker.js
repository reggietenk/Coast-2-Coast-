import React from 'react';

// Create a new marker.
const Marker = new mapboxgl.Marker()
.setLngLat([30.5, 50.5])
.addTo(map);


// Store the marker's longitude and latitude coordinates in a variable
const lngLat = Marker.getLngLat();
// Print the marker's longitude and latitude values in the console
console.log(`Longitude: ${lngLat.lng}, Latitude: ${lngLat.lat}`);

export default Marker