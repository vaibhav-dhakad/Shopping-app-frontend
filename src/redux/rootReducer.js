import { combineReducers } from "redux";
import { productReducer } from "./reducer/productReducer";
export const rootReducer = combineReducers({ productReducer })