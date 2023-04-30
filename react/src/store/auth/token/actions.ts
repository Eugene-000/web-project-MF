import { AuthTokenAction, AuthTokenActionTypes } from "./types";

export const setToken = (token: string | null) => ({
    type: AuthTokenActionTypes.SET_TOKEN_AUTH,
    payload: token,
});
