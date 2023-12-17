import React from "react";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import LocationMarker from "../Marker/LocationMarker";

import MarkerCollection from "../../utils/MarkerCollection";
import { MarkerNode } from "../../utils/MarkerNode";
import { TMarker } from "../types/MarkerType";
import updateMarkersDB from "../../firebase/functions/updateMarkersDB";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

interface Props {
  markers: MarkerCollection;
}

const Map = ({ markers }: Props) => {
  const [, setSize] = React.useState<number>(markers.size);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY!,
  });

  const renderMarkers = () => {
    const res: JSX.Element[] = [];

    let current: MarkerNode<TMarker> | null =
      markers.head as MarkerNode<TMarker>;

    while (current) {
      const key = `${current.location.lat}_${current.location.lng}`;

      res.push(
        <LocationMarker
          key={key}
          position={current.location}
          index={current.quest_number}
        />
      );

      current = current.next;
    }
    return res;
  };

  const mapClickHandler = (loc: google.maps.MapMouseEvent) => {
    const lat = loc.latLng?.lat();
    const lng = loc.latLng?.lng();

    if (lat && lng) {
      // addMarker returns updated size
      setSize(
        markers.addMarker({
          lng,
          lat,
        })
      );

      updateMarkersDB(markers);
    }
  };

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          onClick={mapClickHandler}
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          {renderMarkers()}
        </GoogleMap>
      ) : (
        <p>Loading map...</p>
      )}
    </>
  );
};

export default Map;
