import { ActionTypes } from "./actionTypes"

export const setItem = (items) => {
  return {
    type: ActionTypes.SET_ITEMS,
    payload: items,
  };
};

export const addItem = (items) => {
  return {
    type: ActionTypes.ADD_ITEMS,
    payload: items,
  };
};
