class Assignment < ApplicationRecord
  belongs_to :section
  has_many :assignment_student_joins
  has_many :students, through: :assignment_student_joins
end
