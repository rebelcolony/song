class Track < ActiveRecord::Base
  searchkick #text_start: ['artist'], text_start: ['name']
  Track.reindex
end
