import { SIGN_IN, SIGN_OUT, ActionsType } from "../actions/authActions";

interface State {
  isSignedIn: boolean | null;
  userId: string;
}

const initialState: State = {
  isSignedIn: null,
  userId: "",
};

export default (state: State = initialState, action: ActionsType): State => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload,
      };

    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        userId: "",
      };

    default:
      return state;
  }
};
