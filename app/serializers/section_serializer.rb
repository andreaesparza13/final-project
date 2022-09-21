class SectionSerializer < ActiveModel::Serializer
  attributes :period, :subject
  has_one :teacher
end
