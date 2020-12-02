class ReviewSerializer
  include JSONAPI::Serializer
  attributes :title, :description, :score, :post_id
end
