class StudentSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :preferred_name, :pronouns, :private_pronouns, :extra_info, :username, :grade_level

  # def name
  #   if self.preferred_name != nil
  #     self.first_name = self.preferred_name
  #   end
  # end
end
