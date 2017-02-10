# == Schema Information
#
# Table name: place_of_interests
#
#  id              :integer          not null, primary key
#  name            :string           not null
#  destination_id  :integer          not null
#  google_id       :string
#  photo_reference :string
#  type            :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  lat             :integer
#  lng             :integer
#


class PlaceOfInterest < ActiveRecord::Base
  TYPES = %w( Restaurant Lodging Attraction )
  
  before_save :set_type
  validates :type, presence: true, :inclusion => { :in => TYPES }
  validates :name, :destination_id, :lat, :lng, :type, presence: true

  belongs_to :destination

  def set_type
    raise "You must override this method in each model inheriting from Product"
  end
end

class Restaurant < PlaceOfInterest
  def set_type
    self.type = "Restaurant"
  end
end

class Lodging < PlaceOfInterest
  def set_type
    self.type = "Lodging"
  end
end

class Attraction < PlaceOfInterest
  def set_type
    self.type = "Attraction"
  end
end
