class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.string :country, null: false
      t.integer :user_id, null: false
      
      t.timestamps null: false
    end
  end
end
