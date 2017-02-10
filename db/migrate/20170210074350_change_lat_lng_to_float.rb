class ChangeLatLngToFloat < ActiveRecord::Migration
  def change
    change_column :place_of_interests, :lat, :float
    change_column :place_of_interests, :lng, :float
  end
end
