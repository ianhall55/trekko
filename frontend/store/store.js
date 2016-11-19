import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
import masterMiddleware from '../middleware/master_middleware';
import createLogger from 'redux-logger';
const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    masterMiddleware
  )
);

export default configureStore;
