import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';

import root from './sagas';

const saga = createSagaMiddleware();

function configureStore(initialState = {}) {
  return createStore(reducers, initialState, applyMiddleware(saga));
}

const store = configureStore();

saga.run(root);

export default store;