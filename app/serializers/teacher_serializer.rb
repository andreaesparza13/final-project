class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :name, :pronouns, :username, :find_students
  has_many :sections
end
