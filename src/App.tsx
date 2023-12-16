import React from "react";
import "./App.css";

import Map from "./components/Map/Map";
import MarkerCollection from "./utils/MarkerCollection";

export type TMarker = google.maps.LatLng | google.maps.LatLngLiteral;

function App() {
  const markers = new MarkerCollection();

  return <Map markers={markers} />;
}

export default App;
