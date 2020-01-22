export const REMOVE_ITEM = "REMOVE_ITEM";
export const ADD_ITEM = "ADD_ITEM";

export const removeFeature = item => {
  // dispatch an action here to remove an item
  return ({ type: REMOVE_ITEM, payload: item });
};

export const addItem = item => {
  // dipsatch an action here to add an item
  return ({ type: ADD_ITEM, payload: item })
};