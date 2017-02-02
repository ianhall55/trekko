import {
  SELECT_DESTINATION,
  CLEAR_SELECTED_DESTINATION
} from '../actions/types';
import { DestinationConstants } from '../actions/destinations_actions';
import { merge } from 'lodash';
import {hashHistory} from 'react-router';

const _defaultState = {
  destinations: [],
  showDestination: {},
  selectedDestination: {}
};

const DestinationsReducer = function(state = _defaultState, action){
  let destinations;
  switch (action.type) {
    // case DestinationConstants.PENDING_TRIP:
    //   let pendingDestination = action.trip;
    //   return merge({}, _defaultState, {pendingDestination});
    case DestinationConstants.RECEIVE_DESTINATIONS_FOR_TRIP:
      destinations = action.destinations;
      return merge({}, state, {destinations});
    case DestinationConstants.RECEIVE_DESTINATION:
      destinations = [...state.destinations, action.destination];
      return merge({}, state, {destinations});
    case SELECT_DESTINATION:
      return merge({}, state, {selectedDestination: action.payload});
    case CLEAR_SELECTED_DESTINATION:
      const newState = merge({}, state);
      newState.selectedDestination = {};
      return newState;
    default:
      return state;
  }
};

export default DestinationsReducer;
