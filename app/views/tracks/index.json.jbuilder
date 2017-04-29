json.array!(@tracks) do |track|
  json.extract! track, :id, :name, :artist
  json.url track_url(track, format: :json)
end
