
export const addTrip = function(trip, success, error) {
  $.ajax({
    method: 'POST',
    url: 'api/trip',
    data: trip,
    success,
    error
  });
};
