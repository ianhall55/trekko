import { DestinationConstants } from '../actions/destinations_actions';
import { merge } from 'lodash';
import {hashHistory} from 'react-router';

const _defaultState = {

};

const DestinationsReducer = function(state = _defaultState, action){
  switch (action.type) {
    // case DestinationConstants.PENDING_TRIP:
    //   let pendingDestination = action.trip;
    //   return merge({}, _defaultState, {pendingDestination});
    case DestinationConstants.RECEIVE_DESTINATIONS_FOR_TRIP:
      return action.destinations;
    default:
      return state;
  }
};

export default DestinationsReducer;
