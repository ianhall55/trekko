
export const addTrip = function(trip, success, error) {
  $.ajax({
    method: 'POST',
    url: 'api/trips',
    data: trip,
    success,
    error
  });
};
