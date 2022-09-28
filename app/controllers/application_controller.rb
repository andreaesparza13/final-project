class ApplicationController < ActionController::API
   include ActionController::Cookies
   before_action :authenticate_user

   rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
   rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

   private

   def record_not_found(err)
      render json: { error: "#{err.model} not found" }, status: :not_found
   end

   def invalid_record(err)
      render json: { errors: err.record.errors.full_messages }, status: :unprocessable_entity
   end

   def current_user
      if session[:student_id] != nil
         @current_student ||= Student.find_by_id(session[:student_id])
      elsif session[:teacher_id] != nil
         @current_user ||= Teacher.find_by_id(session[:teacher_id])
      end
   end

   def authenticate_user
      render json: { error: "Not logged in" }, status: :unauthorized unless current_user
   end

end
