import { setIsAddOrder} from "./actions";

export interface CartState {
    isAddOrder: boolean;
}

export enum CartActionTypes {
    SET_IS_ADD_ORDER = 'SET_IS_ADD_ORDER',
}

export type CartAction = ReturnType<typeof setIsAddOrder>;
