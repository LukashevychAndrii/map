import React from "react";

import { TMarker } from "../../App";

import { MarkerF } from "@react-google-maps/api";

interface Props {
  position: TMarker;
  index: number;
}

const LocationMarker = ({ position, index }: Props) => {
  return <MarkerF options={{ label: String(index) }} position={position} />;
};

export default LocationMarker;
