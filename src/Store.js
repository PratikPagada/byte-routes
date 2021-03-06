/**
 * Create App Store with reducers and redux-thunk
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers';

export default createStore(
  reducers,
  {},
  compose(applyMiddleware(thunk, logger))
);
