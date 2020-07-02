import { combineReducers } from "redux";
import authReducer from "./authReducer";
import streamsReducer from "./streamsReducer";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamsReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
