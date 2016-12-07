import { SessionConstants } from '../actions/session_actions';
import { merge } from 'lodash';
import {hashHistory} from 'react-router';

const _defaultState = {
  trip: {}
};

const SessionReducer = function(state = _defaultState, action){
  switch (action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _defaultState, {currentUser});
    default:
      return state;
  }
};

export default SessionReducer;
