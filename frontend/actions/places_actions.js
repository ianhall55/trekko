export const PlaceConstants = {
  RECEIVE_PLACE: "RECEIVE_PLACE",
  PENDING_TRIP: "PENDING_TRIP"
};

export const receivePlace = place => ({
  type: PlaceConstants.RECEIVE_PLACE,
  place
});
