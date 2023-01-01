import { combineReducers } from "@reduxjs/toolkit";
import { itemReducer, addItemReducer, selectedItemReducer } from './Reducer'

export const rootReducer = combineReducers ({
  itemReducer,
  addItemReducer,
  selectedItemReducer,
});
