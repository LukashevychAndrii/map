import { getDatabase, set, ref, update } from "firebase/database";

import MarkerCollection from "../../utils/MarkerCollection";
import { MarkerNode } from "../../utils/MarkerNode";
import { TMarker } from "../../components/types/MarkerType";
import { catchAsync } from "../../utils/catchAsync";

const updateMarkers = (markers: MarkerCollection) => {
  catchAsync<void, [MarkerCollection]>(async () => {
    const db = getDatabase();

    // Generates path to a tail to not overwrite whole linked list
    const headPath = markers.generatePathToUpdate();

    // Base case - just write data
    // Not base case - add new next pointer to head by generated path & update tail
    if (headPath === "/markers/head") {
      set(ref(db, "/markers"), {
        head: markers.head,
        tail: markers.tail,
        size: markers.size,
      });
    } else {
      const setPromise = set(ref(db, headPath), {
        location: (markers.tail! as MarkerNode<TMarker>).location,
        quest_number: (markers.tail! as MarkerNode<TMarker>).quest_number,
      });

      const updatePromise = update(ref(db, "/markers"), {
        size: markers.size,
        tail: {
          location: (markers.tail! as MarkerNode<TMarker>).location,
          quest_number: (markers.tail! as MarkerNode<TMarker>).quest_number,
        },
      });

      await Promise.all([setPromise, updatePromise]);
    }
  }, markers);
};

export default updateMarkers;
