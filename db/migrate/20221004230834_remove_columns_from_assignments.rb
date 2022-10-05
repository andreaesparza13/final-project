class RemoveColumnsFromAssignments < ActiveRecord::Migration[7.0]
  def change
    remove_column :assignments, :turned_in
    remove_column :assignments, :priority
    remove_column :assignments, :score
  end
end
