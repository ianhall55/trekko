import {
  GET_PLACES,
  RECEIVE_PLACES_FOR_DESTINATION
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
    $.get('api/places', { lat, lng, type })
      .done((data) => dispatch(receivePlaces(data)))
      .fail((xhr) => console.log(xhr.responseText))
  };
};

export const receivePlacesForDestination = places => {
  return (
    type: RECEIVE_PLACES_FOR_DESTINATION,
    payload: places
  );
};

// $.ajax({
//   method: 'GET',
//   url: 'api/places',
//   data: { lat, lng, type }
// })
