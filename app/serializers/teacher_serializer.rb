class TeacherSerializer < ActiveModel::Serializer
  attributes :name, :pronouns, :username
  has_many :sections
end
