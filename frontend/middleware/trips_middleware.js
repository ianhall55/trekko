import { TripConstants, receiveTrip, receiveTripsForUser } from '../actions/trips_actions';
import { receiveDestinationsForTrip } from '../actions/destinations_actions';
import { addTrip, fetchTrip, fetchTripsForUser } from '../util/trip_api_util';
import {hashHistory} from 'react-router';


const SessionMiddleware = ({getState, dispatch}) => next => action => {
  let errorCallback;

  switch (action.type) {
    case TripConstants.CREATE_TRIP:
      const createTripSuccess = (data) => {
        dispatch(receiveTrip(data));
        dispatch(receiveDestinationsForTrip(data.destinations));
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

      };
      fetchTrip(action.tripId, fetchTripSuccess, errorCallback);
      return next(action);
    case TripConstants.FETCH_TRIPS_FOR_USER:
      const fetchTripsForUserSuccess = (data) => (dispatch(receiveTripsForUser(data)));
      errorCallback = (xhr) => {
        const errors = xhr.responseJSON;
      };
      fetchTripsForUser(action.userId, fetchTripsForUserSuccess, errorCallback);
    default:
      return next(action);
  }
};


export default SessionMiddleware;
