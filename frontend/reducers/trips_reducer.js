import { TripConstants } from '../actions/trips_actions';
import { merge } from 'lodash';
import {hashHistory} from 'react-router';

const _defaultState = {
  trip: {},
  pendingTrip: {},
  tripsForUser: []
};

const TripsReducer = function(state = _defaultState, action){
  switch (action.type) {
    case TripConstants.PENDING_TRIP:
      let pendingTrip = action.trip;
      return merge({}, _defaultState, {pendingTrip});
    case TripConstants.RECEIVE_TRIP:
      const trip = action.trip;
      // hashHistory.push(`/plan-trip/${trip.id}`);
      return merge({}, _defaultState, {trip});
    case TripConstants.RECEIVE_TRIPS_FOR_USER:
      const tripsForUser = action.trips;
      return merge({}, _defaultState, {tripsForUser});
    case TripConstants.CLEAR_TRIP:
      return merge({}, _defaultState);
    default:
      return state;
  }
};

export default TripsReducer;
