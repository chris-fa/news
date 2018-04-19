import { createAction, handleActions } from 'redux-actions';

const LOAD_POST_REQUEST = 'news-client/posts/LOAD_POSTS_REQUEST';
const LOAD_POST_SUCCESS = 'news-client/posts/LOAD_POSTS_SUCCESS';
const LOAD_POST_FAILURE = 'news-client/posts/LOAD_POSTS_FAILURE';

export const loadPostsRequest = createAction(LOAD_POST_REQUEST);
export const loadPostsSuccess = createAction(LOAD_POST_SUCCESS);
export const loadPostsFailure = createAction(LOAD_POST_FAILURE);

export const loadPosts = () => async dispatch => {

};

const initialState = {
  isLoading: false,
  errorMessage: null,
  posts: [],
};

export default handleActions({
  [LOAD_POST_REQUEST](state) {
    return {
      ...state,
      isLoading: true,
    };
  },

  [LOAD_POST_SUCCESS](state, { payload: posts }) {
    return {
      ...state,
      isLoading: false,
      errorMessage: null,
      posts,
    };
  },

  [LOAD_POST_FAILURE](state, { payload: { message: errorMessage } }) {
    return {
      ...state,
      isLoading: false,
      errorMessage,
    };
  }
}, initialState);
