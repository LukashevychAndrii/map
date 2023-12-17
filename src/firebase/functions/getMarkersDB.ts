import { get, getDatabase, child, ref } from "firebase/database";

const getMarkers = async () => {
  const dbRef = ref(getDatabase());

  const markers = await get(child(dbRef, "/markers"));

  return markers;
};

export default getMarkers;
