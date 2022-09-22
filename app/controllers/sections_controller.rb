class SectionsController < ApplicationController
   before_action :is_teacher?, only: [:create, :update, :destroy]
   
   def index 
      render json: Section.all 
   end

   def show
      section = Section.find(params[:id])
      render json: section
   end

   def update
      section = Section.find(params[:id])
      section.update!(section_params)
      render json: section, status: :approved
   end

   def create
      section = Section.create!(section_params)
      render json: section, status: :created
   end

   def destroy
      section = Section.find(params[:id])
      section.destroy
   end

   private

   def section_params
      params.permit(:period, :subject)
   end

end
