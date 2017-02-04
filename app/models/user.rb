# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  facebook_uid    :string
#  first_name      :string
#  last_name       :string
#  avatar_url      :string
#

class User < ActiveRecord::Base
  validates :first_name, :last_name, :username, presence: true
  validates :email, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token
  after_initialize :validate_pw_dig_or_facebook_uid

  has_many :users

  def self.find_or_create_from_auth_hash(auth_hash)
    if auth_hash[:provider] == 'facebook'
      user = User.find_by(facebook_uid: auth_hash[:uid])
      if user.nil?
        split_name = auth_hash[:info][:name].split(" ")
        user = User.create!(
          facebook_uid: auth_hash[:uid],
          email: auth_hash[:info][:email],
          first_name: split_name[0],
          last_name: split_name[1],
          username: "#{split_name[0]}_#{split_name[1]}",
          avatar_url:  URI.parse(auth_hash[:info][:image])
        )
      end
    end
    user
  end

  def validate_pw_dig_or_facebook_uid
    unless self.facebook_uid || self.password_digest
      raise("User needs password or facebook uid")
    end
  end

  def password=(password)
    @password = password
    pw_dig = BCrypt::Password.create(password)
    self.password_digest = pw_dig
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def generate_session_token
    SecureRandom::urlsafe_base64(32)
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save
    self.session_token
  end

  def self.find_by_credentials(username, password)
    pot_user = User.find_by_username(username)
    return nil unless pot_user
    pot_user.is_password?(password) ? pot_user : nil
  end


end
