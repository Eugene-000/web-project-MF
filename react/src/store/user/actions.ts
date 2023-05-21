import { IUser, IUserUpdate } from "../../models/user";
import { UserAction, UserActionTypes } from "./types";

export const setUser = (user: IUser): UserAction => ({
  type: UserActionTypes.FETCH_USER_SUCCESS,
  payload: user,
});

