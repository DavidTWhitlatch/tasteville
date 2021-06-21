Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  put '/flavors/:flavor_id/foods/:id', to: 'foods#add_flavor'
  resources :flavors, only: :index
  resources :foods
  resources :users, only: :create
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
