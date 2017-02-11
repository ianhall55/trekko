import _ from 'lodash';
import {
  RECEIVE_RECOMMENDATIONS,
  CLEAR_RECOMMENDATIONS
} from '../actions/types';

const _defaultState = {
  recommendations: [],
};

const RecommendationsReducer = function(state = _defaultState, action){
  switch (action.type) {
    case RECEIVE_RECOMMENDATIONS:
      return { recommendations: action.payload };
    case CLEAR_RECOMMENDATIONS:
      return _defaultState;
    default:
      return state;
  }
};

export default RecommendationsReducer;
