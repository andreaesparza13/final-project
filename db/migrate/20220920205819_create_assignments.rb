class CreateAssignments < ActiveRecord::Migration[7.0]
  def change
    create_table :assignments do |t|
      t.text :title
      t.date :due_date
      t.boolean :turned_in
      t.float :score
      t.boolean :priority
      t.belongs_to :section, null: false, foreign_key: true
      t.belongs_to :student, null: false, foreign_key: true

      t.timestamps
    end
  end
end
