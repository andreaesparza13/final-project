class TeachersController < ApplicationController
   skip_before_action :authenticate_user, only: [:create, :index]

   def index 
      render json: Teacher.all 
   end

   def show
      render json: @current_user
   end

   def update
      teacher = Teacher.find(params[:id])
      teacher.update!(teacher_params)
      render json: teacher, status: :approved
   end

   def create
      teacher = Teacher.create!(teacher_params)
      session[:teacher_id] = teacher.id
      render json: teacher, status: :created
   end

   def destroy
      teacher = Teacher.find(params[:id])
      teacher.destroy
   end

   private

   def teacher_params
      params.permit(:name, :pronouns, :username, :password)
   end

end
