class CreateSections < ActiveRecord::Migration[7.0]
  def change
    create_table :sections do |t|
      t.integer :period
      t.text :subject
      t.belongs_to :teacher, null: false, foreign_key: true

      t.timestamps
    end
  end
end
