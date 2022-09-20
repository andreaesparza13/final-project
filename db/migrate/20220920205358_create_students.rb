class CreateStudents < ActiveRecord::Migration[7.0]
  def change
    create_table :students do |t|
      t.string :first_name
      t.string :last_name
      t.string :preferred_name
      t.string :pronouns
      t.boolean :private_pronouns
      t.text :extra_info
      t.string :username
      t.string :password_digest
      t.integer :grade_level

      t.timestamps
    end
  end
end
