class Trip < ActiveRecord::Base
  validates :name, :user_id, :lat, :lng, presence: true

  belongs_to :user



end
