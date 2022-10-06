class CreateStudents < ActiveRecord::Migration[7.0]
  def change
    create_table :students do |t|
      t.text :first_name
      t.text :last_name
      t.text :preferred_name
      t.text :pronouns
      t.boolean :private_pronouns
      t.text :extra_info
      t.text :username
      t.text :password_digest
      t.integer :grade_level

      t.timestamps
    end
  end
end
