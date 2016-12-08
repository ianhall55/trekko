json.set! @trip.id do
  json.partial! "trip", trip: @trip
end
