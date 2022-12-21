import { combineReducers } from "@reduxjs/toolkit";
import { itemReducer } from './Reducer'

export const rootReducer = combineReducers ({
  itemReducer,
});
