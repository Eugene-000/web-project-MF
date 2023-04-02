import { IItem, INewPopularItem } from "../../models/items";
import { ItemAction, ItemActionTypes } from "./types";


export const setItems = (items: Array<IItem>): ItemAction => ({
  type: ItemActionTypes.FETCH_ITEMS_SUCCESS,
  payload: items,
});

export const setItem = (item: IItem): ItemAction => ({
  type: ItemActionTypes.FETCH_ITEM_SUCCESS,
  payload: item,
});

export const setNewPopularItems = (newPopularItems: INewPopularItem): ItemAction => ({
  type: ItemActionTypes.FETCH_NEW_POPULAR_ITEMS_SUCCESS,
  payload: newPopularItems,
});

