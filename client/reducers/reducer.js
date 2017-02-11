import * as types from "../actions/ActionTypes";


function reducer(state, action) {
  switch (action.type) {

    case types.ADD_COUNTER:
      return Object.assign({}, state, {
        counter: state.counter + 1
      });

    case types.SUBTRACT_COUNTER:
      return Object.assign({}, state, {
        counter: state.counter - 1
      });

    default:
      return state;
  }
};

module.exports = reducer;
