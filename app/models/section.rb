class Section < ApplicationRecord
  belongs_to :teacher
  has_many :assignments
  has_many :students, through: :assignments
  has_many :students, through: :section_student_joins
end
