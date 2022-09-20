class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :name, :pronouns, :username, :password_digest
end
