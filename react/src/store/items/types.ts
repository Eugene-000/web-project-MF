import { IItem, INewPopularItem } from "../../models/items";

export interface ItemState {
  items: Array<IItem> | null;
  item: IItem | null;
  newPopularItems: INewPopularItem | null;
  isLoading: boolean;
  error: null | string;
}

export enum ItemActionTypes {
  FETCH_ITEMS = 'FETCH_ITEMS',
  FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS',
  FETCH_NEW_POPULAR_ITEMS_SUCCESS = 'FETCH_NEW_POPULAR_ITEMS_SUCCESS',
  FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR',
  FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS',
}

interface FetchItemsAction {
  type: ItemActionTypes.FETCH_ITEMS;
}

interface FetchItemsSuccessAction {
  type: ItemActionTypes.FETCH_ITEMS_SUCCESS;
  payload: Array<IItem>;
}

interface FetchItemSuccessAction {
  type: ItemActionTypes.FETCH_ITEM_SUCCESS;
  payload: IItem;
}

interface FetchNewPopularItemsSuccessAction {
  type: ItemActionTypes.FETCH_NEW_POPULAR_ITEMS_SUCCESS;
  payload: INewPopularItem;
}

interface FetchItemsErrorAction {
  type: ItemActionTypes.FETCH_ITEMS_ERROR;
  payload: string;
}

export type ItemAction = FetchItemsAction | FetchItemsErrorAction | FetchItemsSuccessAction |  FetchItemSuccessAction | FetchNewPopularItemsSuccessAction;
