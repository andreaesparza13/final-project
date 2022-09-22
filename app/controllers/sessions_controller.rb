class SessionsController < ApplicationController

  def create
    teacher = Teacher.find_by(username: params[:username])
    if teacher && teacher.authenticate(params[:password])
      session[:teacher_id] = teacher.id
      render json: teacher
    else
      render json: { error: "Invalid username or password" }, status: :unauthorized
    end
  end

  def destroy
    session.delete :teacher_id
    head :no_content
  end

end
