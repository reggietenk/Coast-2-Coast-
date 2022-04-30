import React, { useRef, useEffect, useState } from "react"
import mapboxgl from "mapbox-gl"
import bbox from "@turf/bbox"
import { multiPoint } from "@turf/helpers"
import Markers from "./Marker"
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
      zoom: 40,
    })
    map.addControl(new mapboxgl.NavigationControl(), "top-right")

    setMap(map)

    return () => map.remove()
  }, [])

  useEffect(() => {
    if (!map) return

    if (places.length !== 0) {
      const coords = []
      places.forEach(place => {
        coords.push([place.longitude, place.latitude])
      })
      const feature = multiPoint(coords)
      const box = bbox(feature)

      map.fitBounds(
        [
          [box[0], box[1]],
          [box[2], box[3]],
        ],
        {
          padding: 20,
          maxZoom: 8,
          duration: 2000,
        }
      )
    } else {
      map.easeTo({
        center: [-73.9856, 40.7497],
        zoom: 10,
        duration: 2000,
      })
    }
  }, [map])

  return (
    <div ref={mapContainerRef} style={mapContainerStyle}>
      {places && map && <Markers map={map} places={places} />}
    </div>
  )
}

export default Map