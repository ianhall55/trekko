json.restaurants @restaurants do |res|
  json.partial! "place_of_interest", placeOfInterest: res
end

json.lodgings @lodgings do |lodge|
  json.partial! "place_of_interest", placeOfInterest: lodge
end

json.attractions @attractions do |att|
  json.partial! "place_of_interest", placeOfInterest: att
end
