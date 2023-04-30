import { Dispatch } from "redux";
import { AuthUserAction } from "./types";
import { setUser } from "./actions";
import { IUser } from "../../../models/user";

export const setAuthUser = (user: IUser | null) => {
  return (dispatch: Dispatch<AuthUserAction>) => {
    dispatch(setUser(user))
    if(user) {
      localStorage.setItem('USER_ID', user.id);
    } else {
      localStorage.removeItem('USER_ID');
    }
  }
}


