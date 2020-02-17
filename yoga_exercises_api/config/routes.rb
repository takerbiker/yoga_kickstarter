Rails.application.routes.draw do
  # root 'home#show'

  # get 'dashboard/show'

  # get 'home/show'

  resources :users
  resources :poses

  get '/classes', to: 'mindbody#class_schedule'

  # get 'auth/auth0/callback' => 'auth0#callback'
  # get 'auth/failure' => 'auth0#failure'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get 'dashboard' => 'dashboard#show'

end
