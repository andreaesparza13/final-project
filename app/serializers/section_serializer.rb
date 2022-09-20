class SectionSerializer < ActiveModel::Serializer
  attributes :id, :period, :subject
  has_one :teacher
end
