import { setCategoryIdSelectList } from "./actions";

export interface SelectListState {
    category_id: string;
}

export enum SelectListActionTypes {
    SET_CATEGORY_SELECT_LIST = 'SET_CATEGORY_SELECT_LIST',
}

export type SelectListAction = ReturnType<typeof setCategoryIdSelectList>;
