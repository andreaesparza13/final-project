class SectionSerializer < ActiveModel::Serializer
  attributes :period, :subject
  has_one :teacher
  has_many :students, through: :section_student_joins
end
