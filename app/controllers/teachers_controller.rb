class TeachersController < ApplicationController

   def index 
      render json: Teacher.all 
   end

   def show
      if current_user
         render json: current_user
      else
         render json: { error: "No current user" }, status: :unauthorized
      end
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
