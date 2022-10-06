class CreateTeachers < ActiveRecord::Migration[7.0]
  def change
    create_table :teachers do |t|
      t.text :name
      t.text :pronouns
      t.text :username
      t.text :password_digest

      t.timestamps
    end
  end
end
