import {
  RECEIVE_RECOMMENDATIONS,
  CLEAR_RECOMMENDATIONS,
  START_GET_RECOMMENDATIONS,
  REC_TYPE_CHANGE
} from './types';

export const getRecommendations = ({ lat, lng, type }) => {
  return (dispatch) => {
    $.get('api/places', { lat, lng, type })
      .done((data) => dispatch(receiveRecommendations(data)))
      .fail((xhr) => console.log(xhr.responseText))
  };
};

export const receiveRecommendations = recommendations => {
  return {
    type: RECEIVE_RECOMMENDATIONS,
    payload: recommendations
  };
};

export const clearRecommendations = () => ({
  type: CLEAR_RECOMMENDATIONS
});

export const startGetRecommendations = () => ({
  type: START_GET_RECOMMENDATIONS
});

export const recTypeChange = ( recommendationType ) => ({
  type: REC_TYPE_CHANGE,
  payload: recommendationType
});
