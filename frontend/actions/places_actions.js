export const PlaceConstants = {
  RECEIVE_PLACE: "RECEIVE_PLACE"
};

export const receivePlace = place => ({
  type: PlaceConstants.RECEIVE_PLACE,
  place
});
