class Student < ApplicationRecord
   has_many :section_student_joins
   has_many :sections, through: :section_student_joins
   has_many :assignments
   has_many :sections, through: :assignments

   has_secure_password
end
