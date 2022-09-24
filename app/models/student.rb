class Student < ApplicationRecord
   has_many :section_student_joins
   has_many :assignments
   has_many :sections, through: :section_student_joins
   # has_many :sections, through: :assignments

   validates :first_name, :last_name, :grade_level, presence: true
   validates :username, presence: true, uniqueness: true

   has_secure_password
end
