json.array!(@pairs) do |pair|
  json.extract! pair, :id, :food, :beer, :beer_type
  json.url pair_url(pair, format: :json)
end