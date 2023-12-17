import React from "react";

import { MarkerF } from "@react-google-maps/api";

import { TMarker } from "../types/MarkerType";

interface Props {
  position: TMarker;
  index: number;
}

const LocationMarker = ({ position, index }: Props) => {
  return <MarkerF options={{ label: String(index) }} position={position} />;
};

export default LocationMarker;
