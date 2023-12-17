import { FirebaseError } from "firebase/app";

type FN<T, P extends any[]> = (...args: P) => Promise<T>;

export const catchAsync = async <T, P extends any[]>(
  fn: FN<T, P>,
  ...args: P
): Promise<T | undefined> => {
  try {
    return await fn(...args);
  } catch (err: any) {
    // ! Source map should be configured
    if (err instanceof FirebaseError) {
      console.log(
        `Error name: ${err.name} \nError code: ${err.code} \nError message: ${err.message}`
      );
      console.log(err.stack);
    } else {
      console.log("UNKNOWN ERROR!");
      console.error(err);
      console.error(err.stack);
    }
  }
};
