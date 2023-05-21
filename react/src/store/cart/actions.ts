import { CartActionTypes } from "./types";

export const setIsAddOrder = (text: boolean) => ({
    type: CartActionTypes.SET_IS_ADD_ORDER as const,
    payload: text,
});
