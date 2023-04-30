export interface AuthTokenState {
    token: string | null;
}

export enum AuthTokenActionTypes {
    SET_TOKEN_AUTH = 'SET_TOKEN_AUTH',
}

interface GetTokenAction {
    type: AuthTokenActionTypes.SET_TOKEN_AUTH;
    payload: string | null;
}

export type AuthTokenAction = GetTokenAction;

