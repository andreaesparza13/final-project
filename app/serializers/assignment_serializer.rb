class AssignmentSerializer < ActiveModel::Serializer
  attributes :title, :due_date, :turned_in, :score, :priority, :id
  has_one :section
end
