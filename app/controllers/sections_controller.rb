class SectionsController < ApplicationController
   before_action :is_teacher?, only: [:create, :update, :destroy]
   
   def index 
      render json: @current_user.sections
   end

   def show
      section = @current_user.sections.find(params[:id])
      render json: section
   end

   def update
      section = @current_user.sections.find(params[:id])
      section.update!(section_params)
      render json: section, status: :approved
   end

   def create
      section = @current_user.sections.create!(section_params)
      render json: section, status: :created
   end

   def destroy
      if @current_user.admin?
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

   private

   def section_params
      params.permit(:period, :subject)
   end

end
