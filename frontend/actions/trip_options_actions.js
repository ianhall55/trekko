export const TripOptionsConstants = {
  RECEIVE_TRIP_OPTION: "RECEIVE_TRIP_OPTION"
};

export const receiveTripOption = tripOption => ({
  type: TripOptionsConstants.RECEIVE_TRIP_OPTION,
  tripOption
});
