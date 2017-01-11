import { DestinationConstants, receiveDestination } from '../actions/destinations_actions';
import { addDestination } from '../util/destination_api_util';
import {hashHistory} from 'react-router';


const SessionMiddleware = ({getState, dispatch}) => next => action => {
  let errorCallback;

  switch (action.type) {
    case DestinationConstants.CREATE_DESTINATION:
      const createDestinationSuccess = (data) => {
        dispatch(receiveDestination(data));
      };
      errorCallback = (xhr) => {
        const errors = xhr.responseJSON;
        // dispatch(receiveSignupErrors(errors));
      };
      addDestination(action.destination, createDestinationSuccess, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};


export default SessionMiddleware;
