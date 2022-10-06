class Student < ApplicationRecord
   has_many :section_student_joins
   has_many :assignment_student_joins
   has_many :assignments, through: :assignment_student_joins
   has_many :sections, through: :section_student_joins

   validates :first_name, :last_name, presence: true
   validates :username, presence: true, uniqueness: true

   has_secure_password
end
