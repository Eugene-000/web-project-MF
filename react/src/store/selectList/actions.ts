import { SelectListActionTypes } from "./types";

export const setCategoryIdSelectList = (category_id: string) => ({
    type: SelectListActionTypes.SET_CATEGORY_SELECT_LIST as const,
    payload: category_id,
});
  