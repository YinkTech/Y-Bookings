import { ActionTypes } from "./actionTypes"
import { addItems } from "../reducers/api";

export const setItem = (items) => {
  return {
    type: ActionTypes.SET_ITEMS,
    payload: items,
  };
};

export const addItem = (item) => async (dispatch) => {
  const received = await addItems(item);
  if (received) {
    dispatch({
      type: ActionTypes.ADD_ITEM,
      payload: received,
    });
  }
};

