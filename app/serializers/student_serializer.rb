class StudentSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :preferred_name, :pronouns, :private_pronouns, :extra_info, :username, :grade_level
end
