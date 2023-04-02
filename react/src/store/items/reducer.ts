import { ItemAction, ItemActionTypes, ItemState } from "./types"

const initialState: ItemState = {
  items: null,
  item: null,
  newPopularItems: null,
  isLoading: false,
  error: null
}

export const itemsReducer = (state = initialState, action: ItemAction): ItemState => {
  switch (action.type) {
      case ItemActionTypes.FETCH_ITEMS:
        return {isLoading: true, error: null, items: null, item: null, newPopularItems: null}
      case ItemActionTypes.FETCH_ITEMS_SUCCESS:
        return {isLoading: false, error: null, items: action.payload, item: null, newPopularItems: null}
      case ItemActionTypes.FETCH_ITEM_SUCCESS:
        return {isLoading: false, error: null, items: null, item: action.payload, newPopularItems: null}
      case ItemActionTypes.FETCH_NEW_POPULAR_ITEMS_SUCCESS:
        return {isLoading: false, error: null, items: null, item: null, newPopularItems: action.payload}
      case ItemActionTypes.FETCH_ITEMS_ERROR:
        return {isLoading: false, error: action.payload, items: null, item: null, newPopularItems: null}
      default:
        return state
  }
}
