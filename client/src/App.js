import './App.css';
import * as React from 'react';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <h1>Hello</h1>
    <Map
      initialViewState={{
        longitude: 114,
        latitude: 37.8,
        zoom: 14
      }}
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  
    </div>
  );
}

export default App;