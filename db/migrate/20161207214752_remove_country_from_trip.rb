class RemoveCountryFromTrip < ActiveRecord::Migration
  def change
    remove_column :trips, :country, :string
  end
end
