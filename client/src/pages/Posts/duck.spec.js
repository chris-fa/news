import { isFSA, isError } from 'flux-standard-action'

import * as actions from './duck';
import reducer from './duck';

describe('Posts duck', () => {
  describe('action creator', () => {
    it('creates LOAD_POSTS_REQUEST action', () => {
      const action = actions.loadPostsRequest();
      const { type } = action;

      expect(isFSA(action)).toBe(true);
      expect(type).toBe('news-client/posts/LOAD_POSTS_REQUEST');
    });

    it('creates LOAD_POST_SUCCESS action', () => {
      const passedPosts = ['foo', 'bar'];
      const action = actions.loadPostsSuccess(passedPosts);
      const { type, payload: posts } = action;

      expect(isFSA(action)).toBe(true);
      expect(type).toBe('news-client/posts/LOAD_POSTS_SUCCESS');
      expect(posts).toBe(passedPosts);
    });

    it('creates LOAD_POST_FAILURE action', () => {
      const passedErr = new Error('foo error');
      const action = actions.loadPostsFailure(passedErr);
      const { type, error, payload: err } = action;

      expect(isFSA(action)).toBe(true);
      expect(isError(action)).toBe(true);
      expect(type).toBe('news-client/posts/LOAD_POSTS_FAILURE');
      expect(err).toBe(passedErr);
      expect(error).toBe(true);
    });
  });

  describe('reducer', () => {
    it('returns the initial state', () => {
      const state = reducer(undefined, {});

      expect(state).toEqual({
        isLoading: false,
        errorMessage: null,
        posts: [],
      });
    });

    it('handles LOAD_POST_REQUEST action', () => {
      const previousState = { dummyProp: 'dummy value' };
      const state = reducer(previousState, actions.loadPostsRequest());

      expect(state).toEqual({
        ...previousState,
        isLoading: true,
      });
    });

    it('handles LOAD_POST_SUCCESS action', () => {
      const previousState = { dummyProp: 'dummy value' };
      const posts = ['foo', 'bar'];
      const state = reducer(previousState,
        actions.loadPostsSuccess(posts));

      expect(state).toEqual({
        ...previousState,
        isLoading: false,
        errorMessage: null,
        posts,
      });
    });

    it('handles LOAD_POST_FAILURE action', () => {
      const previousState = { dummyProp: 'dummy value' };
      const err = new Error('foo');
      const state = reducer(previousState,
        actions.loadPostsFailure(err));

      expect(state).toEqual({
        ...previousState,
        isLoading: false,
        errorMessage: 'foo',
      });
    });
  });
});
