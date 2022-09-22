class SectionStudentJoinSerializer < ActiveModel::Serializer
  attributes
  has_one :student
  has_one :section
end
