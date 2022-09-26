Rails.application.routes.draw do

  resources :section_student_joins
  resources :assignments, only: [:index, :show, :create, :destroy, :update]
  resources :sections, only: [:index, :show, :create, :destroy, :update]
  resources :students, only: [:index, :destroy, :update]
  resources :teachers, only: [:index, :destroy, :update]

  post '/new_teacher', to: "teachers#create"
  post '/login_teacher', to: "sessions#create"
  get "/teacher", to: "teachers#show"
    
  post '/new_student', to: "students#create"
  post '/login_student', to: "sessions#login_student"
  get "/student", to: "students#show"

  delete '/logout', to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
