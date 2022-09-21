class AssignmentsController < ApplicationController

   def index 
      render json: Assignment.all 
   end

   def show
      assignment = Assignment.find(params[:id])
      render json: assignment
   end

   def update
      assignment = Assignment.find(params[:id])
      assignment.update!(assignment_params)
      render json: assignment, status: :approved
   end

   def create
      assignment = Assignment.create!(assignment_params)
      render json: assignment, status: :created
   end

   def destroy
      assignment = Assignment.find(params[:id])
      assignment.destroy
   end

   private

   def assignment_params
      params.permit(:title, :due_date, :turned_in, :score, :priority)
   end

end
