class AddPlaceIdToTrips < ActiveRecord::Migration
  def change
    add_column :trips, :place_id, :string
  end
end
