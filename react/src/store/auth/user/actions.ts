import { IUser } from "../../../models/user";
import { AuthUserActionTypes } from "./types";

export const setUser = (user: IUser | null) => ({
    type: AuthUserActionTypes.SET_USER_AUTH as const,
    payload: user,
});

