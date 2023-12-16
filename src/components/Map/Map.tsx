import React from "react";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import LocationMarker from "../Marker/LocationMarker";

const containerStyle = {
  width: "90vw",
  height: "90vh",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_API_KEY!,
  });

  return (
    <>
      {isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <LocationMarker position={center} />
        </GoogleMap>
      ) : (
        <p>Loading map...</p>
      )}
    </>
  );
};

export default Map;
