Rails.application.routes.draw do
  resources :drug_carts
  resources :carts
  resources :drugs
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
