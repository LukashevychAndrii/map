import { LinkedList } from "./LinkedList";

import { TMarker } from "../components/types/MarkerType";
import { MarkerNode } from "./MarkerNode";

class MarkerCollection extends LinkedList<TMarker> {
  constructor(markers?: MarkerCollection) {
    super();

    // Some fields could be "falsy" so firebase will not include them
    if (markers && markers.size && markers.head && markers.tail) {
      this.head = markers.head;
      this.tail = markers.tail;
      this.size = markers.size;
    } else {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  }

  public addMarker(newMarker: TMarker) {
    const newMarkerNode = new MarkerNode(newMarker, this.size + 1);
    return this.addNode(newMarkerNode);
  }

  public generatePathToUpdate() {
    let path = "/markers/head";

    for (let i = 0; i < this.size - 1; i++) {
      path += "/next";
    }

    return path;
  }
}

export default MarkerCollection;
