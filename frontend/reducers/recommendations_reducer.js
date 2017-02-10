import _ from 'lodash';
import {
  RECEIVE_RECOMMENDATIONS
} from '../actions/types';

const _defaultState = {
  recommendations: [],
};

const RecommendationsReducer = function(state = _defaultState, action){
  switch (action.type) {
    case RECEIVE_RECOMMENDATIONS:
      return _.merge({}, state, { recommendations: action.payload })
    default:
      return state;
  }
};

export default RecommendationsReducer;
