import streams from "../apis/streams";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers";

export const SIGN_IN = "Sign In";
export const SIGN_OUT = "Sign Out";
export const CREATE_STREAM = "Create Stream";

export const signIn = (userId: string) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
    payload: "",
  };
};

export const createStream = (
  formValues: any
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch: any
) => {
  const res = await streams.post("/streams", formValues);
  dispatch({ type: CREATE_STREAM, payload: res.data });
};

export type ActionsType =
  | ReturnType<typeof signIn>
  | ReturnType<typeof signOut>;
