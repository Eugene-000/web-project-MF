import { CartAction, CartActionTypes, CartState } from "./types";

const initialState: CartState = {
    isAddOrder: false,
}

export const cartReducer = (state = initialState, action: CartAction): CartState => {
    switch(action.type) {
        case CartActionTypes.SET_IS_ADD_ORDER:
            return {isAddOrder: action.payload}
        default:
            return state;
    }
}