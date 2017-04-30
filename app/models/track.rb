class Track < ActiveRecord::Base
  searchkick word_start: ["name", "artist"]
  Track.reindex
end
