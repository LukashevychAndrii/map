import React from "react";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import LocationMarker from "../Marker/LocationMarker";
import MarkerCollection from "../../utils/MarkerCollection";
import { TMarker } from "../../App";
import { Node } from "../../utils/LinkedList";

const containerStyle = {
  width: "90vw",
  height: "90vh",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

interface Props {
  markers: MarkerCollection;
}

const Map = ({ markers }: Props) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_API_KEY!,
  });

  const renderMarkers = () => {
    const res: JSX.Element[] = [];

    let current: Node<TMarker> | null = markers.head;

    while (current) {
      const id = `${current.val.lat}_${current.val.lng}`;
      res.push(<LocationMarker position={current.val} key={id} />);
      current = current.next;
    }

    return res;
  };

  return (
    <>
      {isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {renderMarkers()}
        </GoogleMap>
      ) : (
        <p>Loading map...</p>
      )}
    </>
  );
};

export default Map;
