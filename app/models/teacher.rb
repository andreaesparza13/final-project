class Teacher < ApplicationRecord
   has_many :sections

   has_secure_password
end
