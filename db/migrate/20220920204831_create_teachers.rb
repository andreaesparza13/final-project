class CreateTeachers < ActiveRecord::Migration[7.0]
  def change
    create_table :teachers do |t|
      t.string :name
      t.string :pronouns
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end
