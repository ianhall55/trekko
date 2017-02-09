import {
  GET_PLACES
} from './types';

export const PlaceConstants = {
  RECEIVE_PLACE: "RECEIVE_PLACE"
};

export const receivePlace = place => ({
  type: PlaceConstants.RECEIVE_PLACE,
  place
});

export const getPlaces = ({ lat, lng, type }) => {
  return (dispatch) => {
    $.ajax({
      method: 'GET',
      url: 'api/places',
      data: { lat, lng, type }
    });


  }

  type: GET_PLACES,
  place
};
