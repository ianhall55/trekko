import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import createLogger from 'redux-logger';
import TripsMiddleware from './trips_middleware';

const logger = createLogger();

const masterMiddleware = applyMiddleware(
  SessionMiddleware,
  TripsMiddleware,
  logger
);

export default masterMiddleware;
