class CreateDestinations < ActiveRecord::Migration
  def change
    create_table :destinations do |t|
      t.string :name, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :ord, null: false

      t.timestamps null: false
    end
  end
end
