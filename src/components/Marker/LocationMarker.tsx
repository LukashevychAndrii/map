import React from "react";

import { MarkerF } from "@react-google-maps/api";

interface Props {
  position: google.maps.LatLng | google.maps.LatLngLiteral;
}

const LocationMarker = ({ position }: Props) => {
  return <MarkerF position={position} />;
};

export default LocationMarker;
