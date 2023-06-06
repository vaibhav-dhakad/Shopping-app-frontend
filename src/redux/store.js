import { createStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk'
import { rootReducer } from "./rootReducer";
// import { thunk } from 'redux-thunk'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk)))