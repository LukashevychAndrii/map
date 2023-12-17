import { get, getDatabase, child, ref, DataSnapshot } from "firebase/database";

import { catchAsync } from "../../utils/catchAsync";

const getMarkers = catchAsync<DataSnapshot, []>(async () => {
  const dbRef = ref(getDatabase());

  const markers = await get(child(dbRef, "/markers"));

  return markers;
});

export default getMarkers;
