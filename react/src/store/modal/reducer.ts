import { ModalAction, ModalActionTypes, ModalState } from "./types";

const initialState: ModalState = {
    visible: false,
    text: null
}

export const modalReducer = (state = initialState, action: ModalAction): ModalState => {
    switch(action.type) {
        case ModalActionTypes.SET_VISIBLE_MODAL:
            return {visible: true, text: action.payload}
        case ModalActionTypes.SET_INVISIBLE_MODAL:
            return {visible: false, text: null}
        default:
            return state;
    }
}