import * as ActionTypes from '../actionTypes';

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL:
      return action.payload;
    case ActionTypes.CREATE_POST:
      return [...state, action.payload];
    case ActionTypes.UPDATE_POST:
      return state.map(post => post._id === action.payload._id ? action.payload : post);
    default:
      return state;
  }
};

export default postsReducer;
