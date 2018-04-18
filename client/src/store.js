import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    thunk,
    logger,
  )
);

export default store;
