class SectionSerializer < ActiveModel::Serializer
  attributes :period, :subject, :id, :teacher_id
  has_one :teacher
  has_many :students
end
