import streams from "../apis/streams";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers";

type _ThunkAction = ThunkAction<void, RootState, unknown, Action<string>>;

export const SIGN_IN = "Sign In";
export const SIGN_OUT = "Sign Out";
export const CREATE_STREAM = "Create Stream";
export const FETCH_STREAMS = "Fetch Streams";
export const FETCH_STREAM = "Fetch Stream";
export const DELETE_STREAM = "Delete Stream";
export const EDIT_STREAM = "Edit Stream";

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

export const createStream = (formValues: any): _ThunkAction => async (
  dispatch: any
) => {
  const res = await streams.post("/streams", formValues);
  dispatch({ type: CREATE_STREAM, payload: res.data });
};

export const fetchStreams = (): _ThunkAction => async (dispatch: any) => {
  const res = await streams.get("/streams");
  dispatch({ type: FETCH_STREAMS, payload: res.data });
};

export const fetchStream = (id: number): _ThunkAction => async (
  dispatch: any
) => {
  const res = await streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: res.data });
};

export const editStream = (id: number, formValues: any): _ThunkAction => async (
  dispatch: any
) => {
  const res = await streams.put(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: res.data });
};

export const deleteStream = (id: number): _ThunkAction => async (dispatch) => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
};

export type ActionsType =
  | ReturnType<typeof signIn>
  | ReturnType<typeof signOut>;
