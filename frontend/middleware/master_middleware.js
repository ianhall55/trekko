import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import createLogger from 'redux-logger';
import TripsMiddleware from './trips_middleware';
import DestinationsMiddleware from './destinations_middleware';
const logger = createLogger();

const masterMiddleware = applyMiddleware(
  SessionMiddleware,
  TripsMiddleware,
  DestinationsMiddleware,
  logger
);

export default masterMiddleware;
