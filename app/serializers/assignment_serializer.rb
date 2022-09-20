class AssignmentSerializer < ActiveModel::Serializer
  attributes :id, :title, :due_date, :turned_in, :score, :priority
  has_one :class
end
