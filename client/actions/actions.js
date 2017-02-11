import * as types from "./ActionTypes";

const addCounterAction = () => {
  return {
    type: types.ADD_COUNTER
  };
}

const subtractCounterAction = () => {
  return {
    type: types.SUBTRACT_COUNTER
  };
}

export function addCounter() {
  return (dispatch, state) => {
    dispatch(addCounterAction());
  }
}

export function subtractCounter() {
  return (dispatch, state) => {
    dispatch(subtractCounterAction());
  }
}
