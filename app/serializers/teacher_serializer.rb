class TeacherSerializer < ActiveModel::Serializer
  attributes :name, :pronouns, :username, :find_students
  has_many :sections
end
