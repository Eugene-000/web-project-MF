import { AuthUserAction, AuthUserActionTypes, AuthUserState } from "./types";

const initialState: AuthUserState = {
    user: null,
}

export const authUserReducer = (state = initialState, action: AuthUserAction): AuthUserState => {
    switch(action.type) {
        case AuthUserActionTypes.SET_USER_AUTH:
            return {user: action.payload}
        default:
            return state;
    }
}