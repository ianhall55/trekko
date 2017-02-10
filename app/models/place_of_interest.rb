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
#

class PlaceOfInterest < ActiveRecord::Base
  validates :name, :destination_id, presence: true

  belongs_to :destination

end
