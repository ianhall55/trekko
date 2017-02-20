import _ from 'lodash';
import {
  RECEIVE_RECOMMENDATIONS,
  CLEAR_RECOMMENDATIONS,
  START_GET_RECOMMENDATIONS,
  REC_TYPE_CHANGE
} from '../actions/types';

const _defaultState = {
  recommendations: [],
  recommendationType: "Restaurant",
  loading: true
};

const RecommendationsReducer = function(state = _defaultState, action){
  switch (action.type) {
    case START_GET_RECOMMENDATIONS:
      return { loading: true, recommendationType: state.recommendationType };
    case RECEIVE_RECOMMENDATIONS:
      return { recommendations: action.payload, loading: false, recommendationType: state.recommendationType };
    case REC_TYPE_CHANGE:
      return { loading: true, recommendationType: action.payload }
    case CLEAR_RECOMMENDATIONS:
      return _defaultState;
    default:
      return state;
  }
};

export default RecommendationsReducer;
