import { AuthTokenAction, AuthTokenActionTypes, AuthTokenState } from "./types";

const initialState: AuthTokenState = {
    token: localStorage.getItem('ACCESS_TOKEN'),
}

export const authTokenReducer = (state = initialState, action: AuthTokenAction): AuthTokenState => {
    switch(action.type) {
        case AuthTokenActionTypes.SET_TOKEN_AUTH:
            return {token: action.payload}
        default:
            return state;
    }
}