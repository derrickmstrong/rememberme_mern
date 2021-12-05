import * as ActionTypes from '../actionTypes';

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL:
      return action.payload;
    case ActionTypes.CREATE_POST:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default postsReducer;
