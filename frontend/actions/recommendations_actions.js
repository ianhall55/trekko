import {
  RECEIVE_RECOMMENDATIONS
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
