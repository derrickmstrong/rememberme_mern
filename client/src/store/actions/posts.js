// import api
import * as api from '../../api';
// import actionTypes
import * as ActionTypes from '../../store/actionTypes';

// Action Creators - functions that return an action
// We need async (dispatch) since we are making an asynchronous call that will take time to execute
export const getPosts = () => async dispatch => {
  try {
    // Destructure response ie. data (which represent the post)
    const { data } = await api.fetchPosts();
    // Action - Object with type and payload
    const action = {
      type: ActionTypes.FETCH_ALL,
      payload: data,
    };
    // Dispatch/Return action
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async dispatch => {
    try {
        const { data } = await api.createPost(post)
        const action = {
            type: ActionTypes.CREATE_POST,
            payload: data
        }
        dispatch(action)
    } catch (error) {
        console.log(error.message)
    }
}