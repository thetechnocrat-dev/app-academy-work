Rails.application.routes.draw do
  resources :users

  resource :session

  resources :albums

  resources :tracks

  resources :bands
end
