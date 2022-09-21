class AssignmentSerializer < ActiveModel::Serializer
  attributes :title, :due_date, :turned_in, :score, :priority
  # has_one :class
end
