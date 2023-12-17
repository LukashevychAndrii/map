import { LinkedList } from "./LinkedList";

import { TMarker } from "../components/types/MarkerType";
import { MarkerNode } from "./MarkerNode";

class MarkerCollection extends LinkedList<TMarker> {
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

  public craete(data: MarkerCollection) {
    let head: MarkerNode<TMarker> | null = data.head as MarkerNode<TMarker>;
    const newHead = new MarkerNode(head.location, head.quest_number);

    let current = newHead;

    while (head) {
      current.next = new MarkerNode(head.location, head.quest_number);
      current = current.next;
      head = head.next;
    }

    this.head = newHead.next;
    this.tail = current;

    this.size = data.size;
    return this;
  }
}

export default MarkerCollection;
