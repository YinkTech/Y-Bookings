import { combineReducers } from "@reduxjs/toolkit";
import { itemReducer, addItemReducer } from './Reducer'

export const rootReducer = combineReducers ({
  itemReducer,
  addItemReducer,
});
