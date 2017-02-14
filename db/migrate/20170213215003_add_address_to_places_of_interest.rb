class AddAddressToPlacesOfInterest < ActiveRecord::Migration
  def change
    add_column :place_of_interests, :address, :string
  end
end
