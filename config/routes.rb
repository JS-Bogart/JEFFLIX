Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :movies, only: [:index, :show, :create]
    resources :genres, only: [:index, :show, :create]
    resources :movie_genres, only: [:create]
  end
  
end
