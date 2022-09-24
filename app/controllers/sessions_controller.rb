class SessionsController < ApplicationController
  skip_before_action :authenticate_user, only: [:create, :login_student]

  def create
    teacher = Teacher.find_by(username: params[:username])
    if teacher&.authenticate(params[:password])
      session[:teacher_id] = teacher.id
      render json: teacher
    else
      render json: { error: "Invalid username or password" }, status: :unauthorized
    end
  end

  def login_student
    student = Student.find_by(username: params[:username])
    if student&.authenticate(params[:password])
      session[:student_id] = student.id
      render json: student
    else
      render json: { error: "Invalid username or password" }, status: :unauthorized
    end
  end

  def destroy
    session.delete :teacher_id
    session.delete :student_id
    head :no_content
  end

end
