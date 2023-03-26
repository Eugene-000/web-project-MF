import { setItem, setItems, setNewItems } from "./actions";
import { ItemsApi } from "../../api/items";
import { Dispatch } from "redux";
import { ItemAction, ItemActionTypes } from "./types";

export const getItems = () => {
  return async (dispatch: Dispatch<ItemAction>) => {
      try {
          dispatch({type: ItemActionTypes.FETCH_ITEMS})
          const items = await ItemsApi.getItems();
            dispatch(setItems(items))
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

export const getNewItems = () => {
  return async (dispatch: Dispatch<ItemAction>) => {
      try {
          dispatch({type: ItemActionTypes.FETCH_ITEMS})
          const newItems = await ItemsApi.getNewItem();
            dispatch(setNewItems(newItems))
      } catch (e: any) {
          dispatch({
            type: ItemActionTypes.FETCH_ITEMS_ERROR,
            payload: e.message
          })
      }
  }
}
