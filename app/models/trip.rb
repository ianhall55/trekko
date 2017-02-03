# == Schema Information
#
# Table name: trips
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  name       :string
#  lat        :float
#  lng        :float
#  date       :datetime
#  viewport   :json
#

class Trip < ActiveRecord::Base
  validates :name, :user_id, :lat, :lng, presence: true

  belongs_to :user

  has_many :destinations

end
