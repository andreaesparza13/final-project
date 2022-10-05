class SectionsController < ApplicationController
   
   def index 
      sections = @current_user.sections.order("period")
      render json: sections
   end

   def show
      section = @current_user.sections.find(params[:id])
      render json: section
   end

   def update
      section = @current_user.sections.find(params[:id])
      section.update!(section_params)
      render json: section, status: :ok
   end

   def create
      section = @current_user.sections.create!(section_params)
      render json: section, status: :created
   end

   def destroy
      if @current_user
         section = Section.find(params[:id])
         section.destroy
      else
         render json: {error: "Not authorized"}, status: :unauthorized
      end
   end

   def roster
      section = @current_user.sections.find(params[:id])
      students = section.students
      render json: students
   end

   def teacher_gradebook
      section = @current_user.sections.find(params[:id])
      assignments = section.assignments.order("due_date")
      render json: assignments
   end

   private

   def section_params
      params.permit(:period, :subject, :teacher_id)
   end

end
