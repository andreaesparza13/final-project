class AddAdminToStudents < ActiveRecord::Migration[7.0]
  def change
    add_column :students, :admin, :boolean
  end
end