class AssignmentSerializer < ActiveModel::Serializer
  attributes :title, :due_date, :id
  has_one :section
  has_many :students
end
