import { combineReducers } from "redux";
import { itemsReducer } from "./items/reducer";
import { modalReducer } from "./modal/reducer";
import { selectListReducer } from "./selectList/reducer";
import { authUserReducer } from "./auth/user/reducer";
import { authTokenReducer } from "./auth/token/reducer";
import { userReducer } from "./user/reducer";
import { cartReducer } from "./cart/reducer";

export enum StoreSection {
  items = "items",
  modal = "modal",
  selectList = "selectList",
  authUser = "authUser",
  authToken = "authToken",
  user = "user",
  cart = "cart"
}

export const rootReducer = combineReducers({
  [StoreSection.items]: itemsReducer,
  [StoreSection.modal]: modalReducer,
  [StoreSection.selectList]: selectListReducer,
  [StoreSection.authUser]: authUserReducer,
  [StoreSection.authToken]: authTokenReducer,
  [StoreSection.user]: userReducer,
  [StoreSection.cart]: cartReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;