import { Dispatch } from "redux";
import { AuthTokenAction } from "./types";
import { setToken } from "./actions";

export const setAuthToken = (token: string | null) => {
  return (dispatch: Dispatch<AuthTokenAction>) => {
    dispatch(setToken(token))
    if(token) {
      localStorage.setItem('ACCESS_TOKEN', token);
    } else {
      localStorage.removeItem('ACCESS_TOKEN');
    }
  }
}

