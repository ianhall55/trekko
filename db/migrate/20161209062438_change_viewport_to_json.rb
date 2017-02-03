class ChangeViewportToJson < ActiveRecord::Migration
  def change
    add_column :trips, :viewport, :json
  end
end

# remove_column :trips, :viewport, :hstore
