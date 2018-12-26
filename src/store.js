import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducer';

const logger = createLogger();

const store = createStore(reducers, compose(applyMiddleware(thunk, logger)));

export default store;