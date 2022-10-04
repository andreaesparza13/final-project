class SectionStudentJoinsController < ApplicationController
   
   def create
      join = SectionStudentJoin.create!(join_params)
      render json: join, status: :ok
   end

   private

   def join_params
      params.permit(:section_id, :student_id)
   end

end
