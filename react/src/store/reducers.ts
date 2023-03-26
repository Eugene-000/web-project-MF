import { combineReducers } from "redux";
import { itemsReducer } from "./items/reducer";
import { modalReducer } from "./modal/reducer";

export enum StoreSection {
  items = "items",
  modal = "modal"
}

export const rootReducer = combineReducers({
  [StoreSection.items]: itemsReducer,
  [StoreSection.modal]: modalReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;