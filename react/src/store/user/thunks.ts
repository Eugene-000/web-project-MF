import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "./types";
import { UserApi } from "../../api/user";
import { setUser } from "./actions";
import { IUser, IUserUpdate } from "../../models/user";

export const getUser = (id: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
      try {
          dispatch({type: UserActionTypes.FETCH_USER})
          const user = await UserApi.getUser(id);
            dispatch(setUser(user))
      } catch (e: any) {
          dispatch({
            type: UserActionTypes.FETCH_USER_ERROR,
            payload: e.message
          })
      }
  }
}

export const setUserUpdate = (id: string, updateData: IUserUpdate) => {
  return async (dispatch: Dispatch<UserAction>) => {
      try {
          dispatch({type: UserActionTypes.FETCH_USER})
          await UserApi.setUserUpdate(id, updateData);
            dispatch(setUser({id, ...updateData}))
      } catch (e: any) {
          dispatch({
            type: UserActionTypes.FETCH_USER_ERROR,
            payload: e.message
          })
      }
  }
}

