import streams from "../apis/streams";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers";
import { Stream } from "../types";
import history from "../history";

export const CREATE_STREAM = "Create Stream";
export const FETCH_STREAMS = "Fetch Streams";
export const FETCH_STREAM = "Fetch Stream";
export const DELETE_STREAM = "Delete Stream";
export const EDIT_STREAM = "Edit Stream";

type _ThunkAction = ThunkAction<void, RootState, unknown, Action<string>>;

export const createStream = (stream: Stream) => ({
  type: CREATE_STREAM,
  payload: stream,
});

export const thunkCreateStream = (formValues: any): _ThunkAction => async (
  dispatch,
  getState
) => {
  const { userId } = getState().auth;
  const res = await streams.post("/streams", { ...formValues, userId });
  dispatch(createStream(res.data));
  history.push("/");
};

export const fetchStreams = (streams: Stream[]) => ({
  type: FETCH_STREAMS,
  payload: streams,
});

export const thunkFetchStreams = (): _ThunkAction => async (dispatch) => {
  const res = await streams.get("/streams");
  dispatch(fetchStreams(res.data));
};

export const fetchStream = (stream: Stream) => ({
  type: FETCH_STREAM,
  payload: stream,
});

export const thunkFetchStream = (id: string): _ThunkAction => async (
  dispatch
) => {
  const res = await streams.get(`/streams/${id}`);
  dispatch(fetchStream(res.data));
};

export const editStream = (stream: Stream) => ({
  type: EDIT_STREAM,
  payload: stream,
});

export const thunkEditStream = (
  id: string,
  formValues: any
): _ThunkAction => async (dispatch) => {
  const res = await streams.patch(`/streams/${id}`, formValues);
  dispatch(editStream(res.data));
  history.push("/");
};

export const deleteStream = (id: string) => ({
  type: DELETE_STREAM,
  payload: id,
});

export const thunkDeleteStream = (id: string): _ThunkAction => async (
  dispatch
) => {
  await streams.delete(`/streams/${id}`);
  dispatch(deleteStream(id));
  history.push("/");
};

export type Type =
  | ReturnType<typeof createStream>
  | ReturnType<typeof fetchStreams>
  | ReturnType<typeof fetchStreams>
  | ReturnType<typeof editStream>
  | ReturnType<typeof deleteStream>;
