import { TripConstants } from '../actions/trips_actions';
import { merge } from 'lodash';
import {hashHistory} from 'react-router';

const _defaultState = {
  trip: {},
  pendingTrip: {}
};

const TripsReducer = function(state = _defaultState, action){
  switch (action.type) {
    case TripConstants.PENDING_TRIP:
      const pendingTrip = action.trip;
      return merge({}, _defaultState, {pendingTrip});
    case TripConstants.CREATE_TRIP:
      const trip = action.trip;
      return merge({}, _defaultState, {trip});
    default:
      return state;
  }
};

export default TripsReducer;
