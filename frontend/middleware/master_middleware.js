import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import createLogger from 'redux-logger';

const logger = createLogger();

const masterMiddleware = applyMiddleware(
  SessionMiddleware,
  logger
);

export default masterMiddleware;
