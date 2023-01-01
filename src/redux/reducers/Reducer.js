import { ActionTypes } from "./../actions/actionTypes"

const inistialState = {
  items: [],
};

export const itemReducer = (state = inistialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_ITEMS:
      return {...state, items:payload};
    default:
      return state
  };
};



export const addItemReducer = (state = inistialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.ADD_ITEM:
      return {
        ...state,
        items:payload
      };
    default:
      return state
  };
};

export const selectedItemReducer = (state = {}, { type, payload}) => {
  switch (type) {
    case ActionTypes.SELECTED_ITEM:
      return {...state, ...payload};
    case ActionTypes.REMOVE_SELECTED_ITEM:
      return {};
    default:
      return state;
  };
};