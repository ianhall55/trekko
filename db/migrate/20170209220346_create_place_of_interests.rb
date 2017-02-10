class CreatePlaceOfInterests < ActiveRecord::Migration
  def change
    create_table :place_of_interests do |t|
      t.string :name, null: false
      t.integer :destination_id, null: false
      t.string :google_id
      t.string :photo_reference
      t.string :type

      t.timestamps null: false
    end
  end
end
