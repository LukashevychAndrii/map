import { LinkedList } from "./LinkedList";

import { TMarker } from "../App";

class MarkerCollection extends LinkedList<TMarker> {
  public addMarker(newMarker: TMarker) {
    return this.addNode(newMarker);
  }
}

export default MarkerCollection;
