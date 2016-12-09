import { TripConstants, receiveTrip} from '../actions/trips_actions';
import { addTrip } from '../util/trip_api_util';

import {hashHistory} from 'react-router';
import { fetchTrip } from '../util/trip_api_util';


const SessionMiddleware = ({getState, dispatch}) => next => action => {
  let errorCallback;

  switch (action.type) {
    case TripConstants.CREATE_TRIP:
      const createTripSuccess = (data) => {
        dispatch(receiveTrip(data));
        hashHistory.push(`plan-trip/${data.id}`);
      };
      errorCallback = (xhr) => {
        const errors = xhr.responseJSON;
        // dispatch(receiveSignupErrors(errors));
      };
      addTrip(action.trip, createTripSuccess, errorCallback);
      return next(action);
    case TripConstants.FETCH_TRIP:
      const fetchTripSuccess = (data) => (dispatch(receiveTrip(data)));
      errorCallback = (xhr) => {
        const errors = xhr.responseJSON;
        // dispatch(receiveSignupErrors(errors));
      };
      fetchTrip(action.tripId, fetchTripSuccess, errorCallback);
      return next(action);

    default:
      return next(action);
  }
};


export default SessionMiddleware;
