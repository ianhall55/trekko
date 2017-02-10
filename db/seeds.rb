# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



#  id              :integer          not null, primary key
#  name            :string           not null
#  destination_id  :integer          not null
#  google_id       :string
#  photo_reference :string
#  type            :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  lat             :integer
#  lng             :integer



PlaceOfInterest.create!(name: "Hotel Barcelona", destination_id: 20, lat: 41.38479439999999, lng: 2.1750758, type: "Restaurant")
PlaceOfInterest.create!(name: "Cuines Santa Caterina", destination_id: 20, lat: 41.3860982, lng: 2.1781027, type: "Restaurant")
PlaceOfInterest.create!(name: "El Pintor", destination_id: 20, lat: 41.3830304, lng: 2.1759709, type: "Restaurant")
PlaceOfInterest.create!(name: "El Marisco", destination_id: 21, lat: 41.3850304, lng: 2.1769709, type: "Restaurant")
PlaceOfInterest.create!(name: "L'Antic Forn", destination_id: 21, lat: 41.382611, lng: 2.1689627, type: "Lodging")
