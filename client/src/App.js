import './App.css';
import * as React from 'react';
import Map from './components/Map';
import 'mapbox-gl/dist/mapbox-gl.css';
import AppNavbar from './components/Navbar';
import { Nav } from 'react-bootstrap';
import LoginForm from './components/LoginForm'


function App() {
  return (
    <div>
      <Map />
    </div>
  );
}

export default App;