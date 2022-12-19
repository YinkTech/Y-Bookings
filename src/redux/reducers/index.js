import { combineReducers } from "@reduxjs/toolkit";
import { bookingReducer } from './Reducer'

export const rootReducer = combineReducers ({
  bookingReducer,
});
