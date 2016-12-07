class AddNameLatLngDateToTrip < ActiveRecord::Migration
  def change
    add_column :trips, :name, :string
    add_column :trips, :lat, :float
    add_column :trips, :lng, :float
    add_column :trips, :date, :datetime
  end
end
