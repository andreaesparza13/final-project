Rails.application.routes.draw do
  resources :section_student_joins
  resources :assignments
  resources :sections
  resources :students
  resources :teachers
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
