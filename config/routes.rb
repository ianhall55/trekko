Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :trips
    resources :destinations
    resources :places, only: [:index, :show]
    resources :places_of_interest
  end

  get '/auth/:provider/callback', to: 'sessions#oauth'

end
