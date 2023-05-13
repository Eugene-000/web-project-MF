import { setCartItems, setItem, setItems, setNewPopularItems } from "./actions";
import { ItemsApi } from "../../api/items";
import { Dispatch } from "redux";
import { ItemAction, ItemActionTypes } from "./types";
import { CartApi } from "../../api/cart";

export const getItems = (category_id?: string) => {
  return async (dispatch: Dispatch<ItemAction>) => {
      try {
          dispatch({type: ItemActionTypes.FETCH_ITEMS})
          if (category_id) {
            const items = await ItemsApi.getItems(category_id);
            dispatch(setItems(items))
          } else {
            const items = await ItemsApi.getItems();
            dispatch(setItems(items))
          }
      } catch (e: any) {
          dispatch({
            type: ItemActionTypes.FETCH_ITEMS_ERROR,
            payload: e.message
          })
      }
  }
}

export const getItem = (id: string) => {
  return async (dispatch: Dispatch<ItemAction>) => {
      try {
          dispatch({type: ItemActionTypes.FETCH_ITEMS})
          const item = await ItemsApi.getItem(id);
            dispatch(setItem(item))
      } catch (e: any) {
          dispatch({
            type: ItemActionTypes.FETCH_ITEMS_ERROR,
            payload: e.message
          })
      }
  }
}

export const getNewPopularItems = () => {
  return async (dispatch: Dispatch<ItemAction>) => {
      try {
          dispatch({type: ItemActionTypes.FETCH_ITEMS})
          const newPopularItems = await ItemsApi.getNewPopularItems();
            dispatch(setNewPopularItems(newPopularItems))
      } catch (e: any) {
          dispatch({
            type: ItemActionTypes.FETCH_ITEMS_ERROR,
            payload: e.message
          })
      }
  }
}

export const getCartItems = (user_id: string) => {
  return async (dispatch: Dispatch<ItemAction>) => {
      try {
        dispatch({type: ItemActionTypes.FETCH_ITEMS})
        const cartItems = await CartApi.getCartItems(user_id);
        dispatch(setCartItems(cartItems))
      } catch (e: any) {
          dispatch({
            type: ItemActionTypes.FETCH_ITEMS_ERROR,
            payload: e.message
          })
      }
  }
}
