import React from "react";
import "./App.css";

import Map from "./components/Map/Map";
import MarkerCollection from "./utils/MarkerCollection";

export type TMarker = google.maps.LatLng | google.maps.LatLngLiteral;

function App() {
  const markers = new MarkerCollection({
    lat: -3.745,
    lng: -38.523,
  });

  markers.addMarker({
    lat: -3.73,
    lng: -38.5,
  });

  console.log(markers);
  return <Map markers={markers} />;
}

export default App;
