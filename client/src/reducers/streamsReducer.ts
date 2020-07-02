import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  Type as ActionTypes,
} from "../actions/streamActions";
import { Stream } from "../types";
import _ from "lodash";

interface State {
  [key: string]: Stream;
}

const initialState = {};

export default (state: State = initialState, action: ActionTypes): State => {
  switch (action.type) {
    case DELETE_STREAM:
      return { ...state, [action.payload as number]: undefined };

    case FETCH_STREAM:
      const streams: State = _.mapKeys(action.payload as Stream[], "id");
      return { ...state, ...streams };

    case CREATE_STREAM:
    case FETCH_STREAM:
    case EDIT_STREAM:
      return { ...state, [(action.payload as Stream).id]: action.payload };

    default:
      return state;
  }
};
