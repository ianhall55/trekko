class AddPhotoRefToTrips < ActiveRecord::Migration
  def change
    add_column :trips, :photo_reference, :string
  end
end
