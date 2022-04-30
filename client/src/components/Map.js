import React, { useRef, useEffect, useState } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"


const places = [
    {
      name: "Empire State Building",
      longitude: -73.9856,
      latitude: 40.7497,
    },
    {
      name: "Birch Coffee",
      longitude: -73.9864,
      latitude: 40.7438,
    },
    {
      name: "B&H",
      longitude: -73.9961,
      latitude: 40.753,
    },
  ]

const MAPBOX_TOKEN = "pk.eyJ1IjoicmVnZ2lldGVuayIsImEiOiJjbDJndDUyeGMwNzZqM2RxaHIwMXg5N3N6In0.Ke7Mr42rWoQZajaWe55WlQ"

const mapContainerStyle = {
  width: "100%",
  height: "1200px",
}

const Map = () => {
  const mapContainerRef = useRef(null)

  const [map, setMap] = useState(null)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      accessToken: MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11",
      // Empire State Building [lng, lat]
      center: [-73.9856, 40.7497],
      zoom: 10,
    })
    map.addControl(new mapboxgl.NavigationControl(), "top-right")

    setMap(map)

    return () => map.remove()
  }, [])

  return <div ref={mapContainerRef} style={mapContainerStyle} />
}

export default Map