class StudentsController < ApplicationController
   skip_before_action :authenticate_user, only: [:create, :index]

   def index 
      render json: Student.all 
   end

   def show
      render json: @current_student
   end

   def update
      # student = Student.find(params[:id])
      student = @current_student.update!(student_params)
      render json: student, status: :ok
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
      assignments = student.assignments.order("due_date")
      render json: assignments
   end

   def schedule
      schedule = @current_student.sections.order("period")
      render json: schedule
   end

   private

   def student_params
      params.permit(:first_name, :last_name, :preferred_name, :pronouns, :private_pronouns, :extra_info, :grade_level, :username, :password)
   end

end
