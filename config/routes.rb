Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :movies, only: [:index, :show]
    resources :genres, only: [:index, :show]
    resources :my_lists, only: [:show, :create, :destroy]
    resources :users do
      resources :movies, only: [:index]
    end
    resources :genres do
      resources :movies, only: [:index]
    end
  end
  
end
