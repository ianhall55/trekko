Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, ENV['APP_ID'], ENV['APP_SECRET'],
    scope: 'email,name,first_name,last_name,location',
    display: 'popup',
    secure_image_url: true
end
