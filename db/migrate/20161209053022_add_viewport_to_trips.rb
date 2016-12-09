class AddViewportToTrips < ActiveRecord::Migration
  def change
    add_column :trips, :viewport, :hstore
  end
end
