class Section < ApplicationRecord
  belongs_to :teacher
  has_many :assignments
  has_many :section_student_joins
  has_many :students, through: :section_student_joins
  # has_many :students, through: :assignments
end
