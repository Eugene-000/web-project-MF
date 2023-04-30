import { UserAction, UserActionTypes, UserState } from "./types"

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
      case UserActionTypes.FETCH_USER:
        return {isLoading: true, error: null, user: null}
      case UserActionTypes.FETCH_USER_SUCCESS:
        return {isLoading: false, error: null, user: action.payload}
      case UserActionTypes.FETCH_USER_ERROR:
        return {isLoading: false, error: action.payload, user: null}
      default:
        return state
  }
}
