import React from "react";

import { TMarker } from "../../App";

import { MarkerF } from "@react-google-maps/api";

interface Props {
  position: TMarker;
}

const LocationMarker = ({ position }: Props) => {
  return <MarkerF position={position} />;
};

export default LocationMarker;
