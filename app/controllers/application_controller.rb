class ApplicationController < ActionController::API
   include ActionController::Cookies

   rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
   rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

   def current_user
      @current_user ||= Teacher.find(session[:teacher_id])
      # Student.find(session[:student_id])
   end

   private

   def record_not_found(err)
      render json: { error: "#{err.model} not found" }, status: :not_found
   end

   def invalid_record(err)
      render json: { errors: err.record.errors.full_messages }, status: :unprocessable_entity
   end

end
