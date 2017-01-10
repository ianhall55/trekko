class Destination < ActiveRecord::Base
  validates :name, :lat, :lng, :trip_id, presence: true

  belongs_to :trip

end
