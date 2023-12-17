import React from "react";
import "./App.css";

import Map from "./components/Map/Map";
import MarkerCollection from "./utils/MarkerCollection";
import getMarkersDB from "./firebase/functions/getMarkersDB";

function App() {
  const [markers, setMarkers] = React.useState<MarkerCollection>(
    new MarkerCollection()
  );

  React.useEffect(() => {
    const getData = async () => {
      const data = await getMarkersDB();
      if (data.exists()) {
        setMarkers(new MarkerCollection(data.val()));
      }
    };
    getData();
  }, []);

  return <Map markers={markers} />;
}

export default App;
