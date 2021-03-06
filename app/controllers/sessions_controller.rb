class SessionsController < ApplicationController

  def oauth
    @user = User.find_or_create_from_auth_hash(auth_hash)
    login(@user)
    redirect_to "/#/"
  end

  protected

   def auth_hash
     request.env['omniauth.auth']
   end
end
