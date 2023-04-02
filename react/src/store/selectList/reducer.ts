import { SelectListAction, SelectListActionTypes, SelectListState } from "./types";

const initialState: SelectListState = {
    category_id: "",
}

export const selectListReducer = (state = initialState, action: SelectListAction): SelectListState => {
    switch(action.type) {
        case SelectListActionTypes.SET_CATEGORY_SELECT_LIST:
            return {category_id: action.payload}
        default:
            return state;
    }
}