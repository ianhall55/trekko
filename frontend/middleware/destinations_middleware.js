import { DestinationConstants } from '../actions/destinations_actions';
// import { addTrip } from '../util/destination_api_util';
import {hashHistory} from 'react-router';


const SessionMiddleware = ({getState, dispatch}) => next => action => {
  let errorCallback;

  switch (action.type) {
    case DestinationConstants.CREATE_TRIP:
      const createTripSuccess = (data) => {
        // dispatch(receiveTrip(data));
        hashHistory.push(`plan-trip/${data.id}`);
      };
      errorCallback = (xhr) => {
        const errors = xhr.responseJSON;
        // dispatch(receiveSignupErrors(errors));
      };
      // addTrip(action.trip, createTripSuccess, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};


export default SessionMiddleware;
