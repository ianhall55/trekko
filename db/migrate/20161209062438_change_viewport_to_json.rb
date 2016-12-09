class ChangeViewportToJson < ActiveRecord::Migration
  def change
    remove_column :trips, :viewport, :hstore
    add_column :trips, :viewport, :json
  end
end
