class AddLatLngToPlacesOfInterest < ActiveRecord::Migration
  def change
    add_column :place_of_interests, :lat, :integer
    add_column :place_of_interests, :lng, :integer
  end
end
