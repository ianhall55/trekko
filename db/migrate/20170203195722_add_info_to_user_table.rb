class AddInfoToUserTable < ActiveRecord::Migration
  def change
    add_column :users, :facebook_uid, :string
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :avatar_url, :string
  end
end
