class AssignmentStudentJoinSerializer < ActiveModel::Serializer
  attributes :id, :create
  has_one :assignment
  has_one :student
end
