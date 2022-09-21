Rails.application.routes.draw do

  resources :section_student_joins
  resources :assignments, only: [:index, :show, :create, :destroy, :update]
  resources :sections, only: [:index, :show, :create, :destroy, :update]
  resources :students, only: [:index, :show, :create, :destroy, :update]
  resources :teachers, only: [:index, :show, :create, :destroy, :update]

  post '/login', to "sessions#create"
  delete '/logout', to "sessions#destroy"
end
