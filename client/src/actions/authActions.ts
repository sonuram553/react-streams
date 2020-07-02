import streams from "../apis/streams";

export const SIGN_IN = "Sign In";
export const SIGN_OUT = "Sign Out";

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

export type ActionsType =
  | ReturnType<typeof signIn>
  | ReturnType<typeof signOut>;
