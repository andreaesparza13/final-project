class StudentsController < ApplicationController
   skip_before_action :authenticate_user, only: [:create, :index]

   def index 
      render json: Student.all 
   end

   def show
      render json: @current_student, include: ["assignments"]
   end

   def update
      student = Student.find(params[:id])
      student.update!(student_params)
      render json: student, status: :approved
   end

   def create
      student = Student.create!(student_params)
      session[:student_id] = student.id
      render json: student, status: :created
   end

   def destroy
      student = Student.find(params[:id])
      student.destroy
   end

   def student_gradebook
      student = Student.find(params[:id])
      render json: student.assignments
   end

   private

   def student_params
      params.permit(:first_name, :last_name, :preferred_name, :pronouns, :private_pronouns, :extra_info, :grade_level, :username, :password)
   end

end
