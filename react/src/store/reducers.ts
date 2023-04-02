import { combineReducers } from "redux";
import { itemsReducer } from "./items/reducer";
import { modalReducer } from "./modal/reducer";
import { selectListReducer } from "./selectList/reducer";

export enum StoreSection {
  items = "items",
  modal = "modal",
  selectList = "selectList",
}

export const rootReducer = combineReducers({
  [StoreSection.items]: itemsReducer,
  [StoreSection.modal]: modalReducer,
  [StoreSection.modal]: modalReducer,
  [StoreSection.selectList]: selectListReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;