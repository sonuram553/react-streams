import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  auth: authReducer,
  form: formReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
