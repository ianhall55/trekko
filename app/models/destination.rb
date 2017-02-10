# == Schema Information
#
# Table name: destinations
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  lat        :float            not null
#  lng        :float            not null
#  ord        :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  trip_id    :integer
#

class Destination < ActiveRecord::Base
  validates :name, :lat, :lng, :trip_id, presence: true

  belongs_to :trip

  has_many :places_of_interest

  
end
