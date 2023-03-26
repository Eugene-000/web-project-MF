import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { rootReducer, IRootState } from "./reducers";

export type GetState = () => IRootState;

export const STORE = createStore(rootReducer, applyMiddleware(reduxThunk));