import { IUser } from "../../../models/user";
import { setUser } from "./actions";

export interface AuthUserState {
    user: IUser | null;
}

export enum AuthUserActionTypes {
    SET_USER_AUTH = 'SET_USER_AUTH',
}

export type AuthUserAction = ReturnType<typeof setUser>;
